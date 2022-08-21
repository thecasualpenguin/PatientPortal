// const getBasePath = function (req, res, next) {
//   if (req.requestContext && req.requestContext.path) {
//     req.basePath = "/" + req.requestContext.path.split("/")[1];
//   } else {
//     req.basePath = "/";
//   }

//   next();
// };
const { lookup } = require('geoip-lite');
const NodeGeocoder = require('node-geocoder');
const { writeLogEntry } = require('../model/interactDB');
const axios = require('axios').default;

async function getReverseGeocodedLocation(lat, long) {
  
  // google maps API implementation (1000 req/day for free)
  // const options = {
  //   provider: 'google',
  
  //   // Optional depending on the providers
  //   // fetch: customFetchImplementation,
  //   apiKey: process.env.GOOGLE_MAPS_API_KEY, // for Mapquest, OpenCage, Google Premier
  //   // formatter: null // 'gpx', 'string', ...
  // };

  // const geocoder = NodeGeocoder(options);
  // try {
  //   return await geocoder.geocode({ lat: 45.767, lon: 4.833 });
  // } catch (error) {
  //   console.error(error);
  // }

  var geocoding = new require('reverse-geocoding-google');
  var config = {
    'latitude': lat,
    'longitude': long,
    'key': process.env.GOOGLE_MAPS_API_KEY
  };
  geocoding.location(config, function (err, data){
      if(err){
          console.log(err);
      }else{
          console.log(data);
      }
  });

  // IP stack implementation
  // res = await fetch(`http://api.ipstack.com/${ip}?access_key=3f8eab5a63d5e3900bf9ec4ae8d68aae`);
  // console.log(await res.json())
  
  // geoip-lite implementation
  // location = lookup(ip)
  // console.log(getReverseGeocodedLocation(location.ll[0], location.ll[1]))
}

async function logAndSaveReqInfo(req) {
  // get request IP
  let ip = req.ip;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)   // convert to standard IPv4
  }

  // get IP approximate location
  let locationRes = await axios({
    url: `http://ip-api.com/json/${ip}`,
    method: 'get',
    data: {
      name: 'kyle',
    }
  });

  // build log entry
  let logEntry = {
    'ISODate': new Date(),
    'dateString': new Date().toLocaleString(),
    'ipAddress': ip,
    'location': ip !== '127.0.0.1' ? locationRes.data : {'status': 'intercepted by developer'},
    'method': `${req.method}`,
    'resource': `${req.originalUrl}`,
  }
  writeLogEntry(logEntry);
  
  return logEntry;
}

async function logger(req, res, next) {
  console.log('====================================');
  let logEntry = await logAndSaveReqInfo(req);
  console.log(logEntry);
  console.log('====================================');

  next();
}



module.exports = logger;


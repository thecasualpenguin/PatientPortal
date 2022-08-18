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

async function getReverseGeocodedLocation(lat, long) {

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

}

async function logAndSaveReqInfo(req) {
  let ip = req.ip;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  console.log(new Date().toLocaleString());
  console.log(`IP: ${ip}`)
  process.stdout.write('Location: ');

  res = await fetch(`http://api.ipstack.com/${ip}?access_key=3f8eab5a63d5e3900bf9ec4ae8d68aae`);
  console.log(await res.json())
  
  console.log(`Hitting: ${req.originalUrl}`);

  return 0
  // location = lookup(ip)
  // console.log(getReverseGeocodedLocation(location.ll[0], location.ll[1]))

}

async function logger(req, res, next) {
  console.log('====================================');
  await logAndSaveReqInfo(req)
  console.log('====================================');

  next();
}



module.exports = logger;


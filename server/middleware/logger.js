// const getBasePath = function (req, res, next) {
//   if (req.requestContext && req.requestContext.path) {
//     req.basePath = "/" + req.requestContext.path.split("/")[1];
//   } else {
//     req.basePath = "/";
//   }

//   next();
// };

function logger(req, res, next) {
  console.log(`Hitting: ${req.originalUrl}`);
  next();
}

module.exports = logger;


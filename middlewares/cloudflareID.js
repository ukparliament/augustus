let cloudflareID;

let setCloudflareID = (request, response, next) => {
  cloudflareID = request.headers['cf-ray'];

  if (typeof cloudflareID !== 'undefined') { response.setHeader('cf-ray', cloudflareID); }

  next();
};

let getCloudflareID = () => { return cloudflareID; };

module.exports.setCloudflareID = setCloudflareID;
module.exports.getCloudflareID = getCloudflareID;

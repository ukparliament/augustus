let cloudflareID;

let setCloudflareID = (request, response, next) => {
  cloudflareID = request.headers['cf-ray'];

  if (typeof cloudflareID !== 'undefined') { response.setHeader('cf-ray', cloudflareID); }

  next();
};

function getLabel() {
  return `[Cloudflare ID: ${cloudflareID}]`;
}

module.exports = setCloudflareID;
module.exports.getLabel = getLabel;

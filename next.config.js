const withImages = require("next-images");
module.exports = withImages({
  env: {
    SHOPIFY_API: process.env.SHOPIFY_API,
    SHOPIFY_DOMAIN: process.env.SHOPIFY_DOMAIN,
    GCP_API: process.env.GCP_API,
  },
});

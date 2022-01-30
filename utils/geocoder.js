const NodeGeocoder = require('node-geocoder');

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    // httpAdapter is deprecated consider using:
    // fetch: customFetchImplementation,
    // more details at https://github.com/nchaulet/node-geocoder#http-adapter
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
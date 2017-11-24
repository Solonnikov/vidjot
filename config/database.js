if (process.env.NODE_ENV == 'production') {
  module.exports = {
    mongURI: 'mongodb://solonnikov:punk666@ds125365.mlab.com:25365/vidjot-prod'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://127.0.0.1/vidjot-dev'
  }
}
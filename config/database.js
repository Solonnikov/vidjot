if (process.env.NODE_ENV == 'production') {
  module.exports = {
    mongoURI: 'mongodb://solonnikov:solonnikov@ds125365.mlab.com:25365/vidjot-prod'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://127.0.0.1/vidjot-dev'
  }
}
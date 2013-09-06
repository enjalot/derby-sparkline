var config = {
  filename: __filename
, scripts: {
    sparkline: require('./sparkline')
  }
};

module.exports = function(app, options) {
  app.createLibrary(config, options);
};

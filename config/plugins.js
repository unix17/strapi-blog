module.exports = ({ env }) => {
  let pluginsConfig = require('./plugins'); // Default configuration

  if (env('NODE_ENV') === 'production') {
    pluginsConfig = require('./env/production/plugins'); // Override for production
  }

  return {
    // Other server configurations...
    plugins: pluginsConfig,
  };
};

module.exports = ({ env }) => {
  let pluginsConfig = require('./plugins');

  if (env('NODE_ENV') === 'production') {
    pluginsConfig = require('./env/production/plugins');
  }

  return {
    plugins: {
      ...pluginsConfig,
      'import-export-entries': {
        enabled: true,
      },
    },
  };
};

const isProduction = process.env.NODE_ENV === 'production';

const isDevelopment = process.env.NODE_ENV === 'development';

const port = isProduction ? '1338':
          '1337';

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', port),

  app: {
    keys: env.array('APP_KEYS'),
  },
});

 const isProduction = process.env.NODE_ENV === 'production';

 const isDevelopment = process.env.NODE_ENV === 'development';

 const port = isProduction ? '1338':
           '1337';


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port:port,

  // port:env('NODE_ENV')? 'production' = env.int('PROD_PORT','1338') : env.int('PORT','1337') ,

  app: {
    keys: ['myKeyA', 'myKeyB'],
  },
});

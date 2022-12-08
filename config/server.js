module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT'),

  app: {
    keys: ['myKeyA', 'myKeyB'],
  },
});

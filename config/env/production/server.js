module.exports = ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // replaces `host` and `port` properties in the development environment
    app: { 
      keys: env.array('APP_KEYS')
    },
});
// module.exports = ({ env }) => ({
//     url: env("RENDER_EXTERNAL_URL"),
//     app: {
//         keys: env.array('APP_KEYS'),
//       },
//   });
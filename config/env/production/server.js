    // path: ./config/env/production/server.js

    module.exports = ({ env }) => ({
        proxy: true,
        url: env('HOST',1337), // replaces `host` and `port` properties in the development environment
        app: { 
          keys: env.array('APP_KEYS')
        },
    });

 

 
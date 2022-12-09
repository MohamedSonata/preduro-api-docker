

module.exports = ({ env }) => ({
  // const { host, port, database, user, password } = env('DATABASE_URL');


    connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', ),
          database: env('DATABASE_NAME', ''),
          user: env('DATABASE_USERNAME', ''),
          password: env('DATABASE_PASSWORD', ''),
          // schema: env('DATABASE_SCHEMA', ''), // Not required
          ssl: env.bool('DATABASE_SSL', false)
        },
        debug: false,
        pool: {
          min: 0,
          max: 10,
          acquireTimeoutMillis: 600000,
          createTimeoutMillis: 30000,
          idleTimeoutMillis: 20000,
          reapIntervalMillis: 20000,
          createRetryIntervalMillis: 200
        
        },
    
      },
  
});

// refrance


// module.exports = ({ env }) => ({
//   // const { host, port, database, user, password } = env('DATABASE_URL');


//     connection: {
//         client: 'postgres',
//         connection: {
//           host: env('DATABASE_HOST', '127.0.0.1'),
//           port: env.int('DATABASE_PORT', ),
//           database: env('DATABASE_NAME', ''),
//           user: env('DATABASE_USERNAME', ''),
//           password: env('DATABASE_PASSWORD', ''),
//           // schema: env('DATABASE_SCHEMA', ''), // Not required
//           ssl: env.bool('DATABASE_SSL', false)
//         },
//         debug: false,
//         pool: {
//           min: 0,
//           max: 10,
//           acquireTimeoutMillis: 600000,
//           createTimeoutMillis: 30000,
//           idleTimeoutMillis: 20000,
//           reapIntervalMillis: 20000,
//           createRetryIntervalMillis: 200
        
//         },
    
//       },
  
// });
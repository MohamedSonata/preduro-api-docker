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
          schema: env('DATABASE_SCHEMA', ''), // Not required
          ssl: env.bool('DATABASE_SSL', false)
        },
        debug: false,
        // this pool Param is needed while using Docker Compose and docker Swarm for scalling the app
         //to overrride database default Values
        pool: {
          min: 0,// minimum clients to keep database container alive
          max: 10,// Maximum number of database connections to keepalive
          acquireTimeoutMillis: 600000, // 	Time in milliseconds before timing out a database connection attempt
          createTimeoutMillis: 30000, // 	Time in milliseconds before timing out a create query attempt
          idleTimeoutMillis: 20000, //Time in milliseconds before free database connections are destroyed
          reapIntervalMillis: 20000, // 	Time in milliseconds to check for idle database connections to destroy
          createRetryIntervalMillis: 200 //Time in milliseconds to idle before retrying failed create actions
        
        },
    
      },
  
});



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
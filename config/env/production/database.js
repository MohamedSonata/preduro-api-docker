

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
    
      },
  
});
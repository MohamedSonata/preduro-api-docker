module.exports = ({ env }) => ({
  auth: {
    secret: ('z0GurZ7dKAxmfY7OUEiXPA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});

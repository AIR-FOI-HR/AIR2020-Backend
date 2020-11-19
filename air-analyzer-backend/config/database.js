module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
       client: 'mysql',
        host: env('DATABASE_HOST', 'www.mashdog.co'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'mashdog-web'),
        username: env('DATABASE_USERNAME', 'mashdog'),
        password: env('DATABASE_PASSWORD', 'cJ8-tKJfiv'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

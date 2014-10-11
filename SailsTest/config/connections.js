module.exports.connections = {
  // Local disk storage for DEVELOPMENT ONLY
  //
  // Installed by default.
  //
  localDiskDb: {
    adapter: 'sails-disk'
  },

  herokuPostgresqlServer: {
    adapter: 'sails-postgresql',
    host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_POSTGRES_USER',
    password: 'YOUR_POSTGRES_PASSWORD',
    database: 'YOUR_POSTGRES_DB',
  },
}

module.exports ={
  port: process.env.POST || 8081,
  db: {
    database: process.env.DB_NAME || 'postgres',
    user: process.env.DB_USER || 'peterkurjanowicz',
    password: process.env.DB_PASSWORD || 'Popcorn97',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      // storage: './tabtracker.sqlite'
      // operatorsAliases: process.env.DIALECT || false,
    }
  }
}
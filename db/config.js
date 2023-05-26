require('dotenv').config()

console.log(process.env.HOST)

const account = {
  host: process.env.HOST,
  username: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true
}

module.exports = account

const { Sequelize } = require('sequelize')
const account = require('./config')

const sequelize = new Sequelize(
  account.database,
  account.username,
  account.password,
  {
    host: account.host,
    dialect: 'mysql'
  }
)

try {
  sequelize.authenticate()
  console.log('Conectamos ao MySQL!')
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize

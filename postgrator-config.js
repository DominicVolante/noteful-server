require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  
}
console.log(process.env.DATABASE_URL)

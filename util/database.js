const Sequelize = require("sequelize")
const sequelize = new Sequelize('slingshot_db','root','',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize
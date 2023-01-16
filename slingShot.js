const express = require("express")
const slingshot = express();

const cors = require("cors")
const bodyParser = require("body-parser")
slingshot.use(cors());
slingshot.use(bodyParser.json())

const dishroutes = require("./routes/processOrder")
const sequelize = require("./util/database")
slingshot.use(dishroutes)

sequelize
.sync()
//.sync({force:true})
.then(result=>{
    slingshot.listen(3000)
})
.catch(err=>{
    console.log(err)
})
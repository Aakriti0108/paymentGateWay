const dishoutControllers = require('../controllers/processOrder')
    var router = require("express").Router();
    router.post("/createProcessOrder",dishoutControllers.createProcessOrder)
    router.put("/updateProcessOrder",dishoutControllers.updateProcessOrder)
    router.delete("/deleteProcessOrder",dishoutControllers.deleteProcessOrder)
    router.get("/findAllProcessOrder",dishoutControllers.getAllProcessOrder)
    router.get("/findOneProcessOrder",dishoutControllers.getOneProcessOrder)



module.exports =router
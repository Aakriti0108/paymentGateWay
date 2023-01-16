const dishOut_Data = require('../models/processOrder')

exports.createProcessOrder = (req,res)=>{
    console.log("started",req.body)
    let {Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,Items,ItemArray,MerchantId,Module,OrderDateTime,OriginatorID,PNREF,ProcessorToken,Register,RequestBatch,SKU,SSID,State,Status,StreetAddress,TransactionType,Zip} = req.body
    ItemArray = JSON.stringify(ItemArray)
    dishOut_Data.create({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,Items,ItemArray,MerchantId,Module,OrderDateTime,OriginatorID,PNREF,ProcessorToken,Register,RequestBatch,SKU,SSID,State,Status,StreetAddress,TransactionType,Zip})
   // dishOut_Data.create({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,ItemArray,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip})
    .then(result=>{
        console.log(result);
        console.log("created")
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
        console.log(err)
    })
}

exports.getAllProcessOrder = (req,res)=>{
    console.log("findALL")
    dishOut_Data.findAll()
   // dishOut_Data.create({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,ItemArray,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip})
    .then(result=>{
        console.log(result);
        for(let i=0;i<result.length;i++)
        {
            result[i].ItemArray=JSON.parse(result[i].ItemArray)
        }
        console.log("findAll")
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
        console.log(err)
    })
}

exports.getOneProcessOrder = (req,res)=>{
    console.log("findOne")
    const id = req.query.id
    dishOut_Data.findAll({where:{id:id}})
   // dishOut_Data.create({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,ItemArray,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip})
    .then(result=>{
        console.log(result);
        console.log("findAll")
        for(let i=0;i<result.length;i++)
        {
            result[i].ItemArray=JSON.parse(result[i].ItemArray)
        }
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
        console.log(err)
    })
}

exports.updateProcessOrder = (req,res)=>{
    console.log("started",req.body)
    let {Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,Items,ItemArray,MerchantId,Module,OrderDateTime,OriginatorID,PNREF,ProcessorToken,Register,RequestBatch,SKU,SSID,State,Status,StreetAddress,TransactionType,Zip} = req.body
    let id = req.query.id
    ItemArray = JSON.stringify(ItemArray)
    dishOut_Data.update({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,Items,ItemArray,MerchantId,Module,OrderDateTime,OriginatorID,PNREF,ProcessorToken,Register,RequestBatch,SKU,SSID,State,Status,StreetAddress,TransactionType,Zip},{ where: {id:id} }
        )
   // dishOut_Data.create({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,ItemArray,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip})
    .then(result=>{
        console.log(result);
        console.log("updated")
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
        console.log(err)
    })
}

exports.deleteProcessOrder = (req,res)=>{
    console.log("deleted")
    let id = req.query.id
    dishOut_Data.destroy({where:{id:id}})
   // dishOut_Data.create({Amount,AuthNumber,AutoPower,City,CustomerID,CustomerName,CallBackUrl,DeviceID,EmailAddress,ForceBatch,latitude,longtiude,InvoiceNumber,ItemArray,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip})
    .then(result=>{
        console.log(result);
        console.log("deleted")
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
        console.log(err)
    })
}





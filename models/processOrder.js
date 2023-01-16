const Sequelize = require("sequelize")
const sequelize = require("../util/database")

    const dishout = sequelize.define('dishout',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Amount:
        {
            type:Sequelize.STRING
        },
        AuthNumber:{
            type:Sequelize.STRING
        },
        AutoPower:{
            type:Sequelize.STRING
        },
        City:{
            type:Sequelize.STRING
        },
        CustomerID:{
            type:Sequelize.STRING
        },
        CustomerName:{
            type:Sequelize.STRING
            
        },
        CallBackUrl:{
            type:Sequelize.STRING
            
        },
        DeviceID:{
            type:Sequelize.STRING
            
        },
        EmailAddress:{
            type:Sequelize.STRING
            
        },
        ForceBatch:{
            type:Sequelize.STRING
            
        },
        latitude:{
            type:Sequelize.INTEGER
            
        },
        longtiude:{
            type:Sequelize.INTEGER
            
        },
        InvoiceNumber:{
            type:Sequelize.STRING
            
        },
        Items:{
         type:Sequelize.STRING
         
        },
        ItemArray:{
            type:Sequelize.STRING
            
        },
        MerchantId:{
            type:Sequelize.STRING
            
        },
        Module:{
            type:Sequelize.STRING
            
        },
        OrderDateTime:{
            type:Sequelize.STRING
            
        },
        OriginatorID:{
            type:Sequelize.STRING
            
        },
        PNREF:{
            type:Sequelize.STRING
            
        },
        ProcessorToken:{
            type:Sequelize.STRING
            
        },
        Register:{
            type:Sequelize.STRING
            
        },
        RequestBatch:{
            type:Sequelize.STRING
            
        },
        SKU:{
            type:Sequelize.STRING
            
        },
        SSID:{
            type:Sequelize.INTEGER
            
        },
        State:{
            type:Sequelize.STRING
            
        },
        Status:{
           type:Sequelize.STRING
           
        },
        StreetAddress:{
            type:Sequelize.STRING
            
        },
        TransactionType:{
            type:Sequelize.STRING
            
        },
        Zip:{
            type:Sequelize.STRING
            
        }  
    })
    
    module.exports = dishout

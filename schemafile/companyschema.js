const mongoose=require("mongoose");
const Schema1=new mongoose.Schema({
    jobrole:{
        type:String,
        required:true

    },
    min_exp:{
        type:Number,
        required:true

    },
    location:{
        type:String,
        required:true
    },
    max_exp:{
        type:Number,
        required:true

    },
    catageory:{
        type:String,
        required:true
    },
    jobhighlights:{
        type:Array,
        required:true
    },
    companyinfo:{
        type:String,
        required:true
    },
    responsibilites:{
        type:Array,
        required:true

    },
    id:{
        type:Number,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    lpa:{
        type:String,
        required:true
    }
   
})
const CompanySchema=mongoose.model('companynames',Schema1)
module.exports={CompanySchema}
const categoryModel = require('../models/categoryModel');

module.exports={
    getDataCategory: (req,res)=>{
        categoryModel.getDataCategory()
        .then ((data)=>{
            res.status(200).send({
                message: 'Success',
                status:true,
                data:data
            })
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    getDataId:(req,res)=>{
        const id_category = req.params;
        categoryModel.getDataCategoryById(id_category)
        .then((data)=>{
            res.status(200).send({
                messag:'success',
                status:true,
                data:data
            })
        })
        .catch((error)=>{
            res.send(error)
        })
    }
}
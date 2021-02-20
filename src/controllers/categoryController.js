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
    },
    deleteDataId:(req,res)=>{
        const id_category = req.params;
        // console.log(id_category)
        categoryModel.DeleteDataCategory(id_category)
        .then((data)=>{
            res.status(200).send({
                data:data
            })
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    postData:(req,res)=>{
        const {body} = req
        categoryModel.postDataCategory(body)
        .then((data)=>{
            res.send(data)
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    updateCategory : (req, res) => {
        const id = req.params;
        const newCategory = req.body;
        categoryModel.updatedata(id, newCategory)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    },
}
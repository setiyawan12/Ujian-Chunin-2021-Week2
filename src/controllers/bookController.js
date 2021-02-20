const bookModel = require('../models/bookModel');
module.exports={
    getData: (req,res)=>{
        bookModel.getDataBook()
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
    getDatas: (req,res)=>{
        bookModel.getDataBook()
        .then ((data)=>{
            res.render('index_view',{
                message: 'success',
                status: true,
                books:data
            })
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    getDataId:(req,res)=>{
        const id = req.params;
        bookModel.getDataBookById(id)
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
        const id = req.params.id;
        console.log(id);
        bookModel.DeleteDataBookById({id})
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
    postData:(req,res)=>{
        const {body} = req
        bookModel.postDataBook(body)
        .then((data)=>{
            res.send(data)
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    updateBook : (req, res) => {
        const id = req.params;
        const newBook = req.body;
        bookModel.updatedata(id, newBook)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    },
}
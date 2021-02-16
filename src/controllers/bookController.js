const bookModel = require('../models/bookModel')
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
    postData:(req,res)=>{
        const body = req
        bookModel.postDataBook(body)
        .then((data)=>{
            res.send(data)
        })
        .catch((error)=>{
            res.send(error)
        })
    }
}
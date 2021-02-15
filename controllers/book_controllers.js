const bookModel = require('../models/book_models')


module.exports={
    viewAllData : (_req, res) => {
        bookModel.showData()
            .then((data) => {
                res.render('index_view',{
                    message: 'success',
                    status: true,
                    books : data
                })        
                console.log(data)
            })
            .catch((error) => {
                res.send(error)
            })
    },
    getAllData : (_req, res) => {
        bookModel.showData()
            .then((data) => {
                res.status(200).send({
                    message: 'success',
                    status: true,
                    data: data
                })
            })
            .catch((error) => {
                res.send(error)
            })
    },   
}
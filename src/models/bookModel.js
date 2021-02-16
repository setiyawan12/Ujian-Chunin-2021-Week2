const db = require('../connection/connections')

module.exports ={
    getDataBook : ()=>{
        return new Promise((resolve,reject)=>{
            const sql = "SELECT * FROM books";
            db.query(sql, (err,res)=>{
                if(!err){
                    if(res[0]){
                        resolve(res)
                    }else{
                        reject({
                            message: 'success',
                            status: true,
                            error: 'Data not Found'                            
                        })
                    }
                }else{
                    reject(err)
                }
            })
        })
    },
    postDataBook : ((newBook)=>{
        return new Promise((resolve,reject)=>{
            sql = "SELECT INTO books SET ?";
            db.query(sql, newBook,(err,res)=>{
                if(!err){
                    resolve({
                        message: 'sucess',
                        status: true,
                        data: newBook
                    })
                }else{
                    reject(err)
                }
            })
        })
    })
}
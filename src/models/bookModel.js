const db = require('../connection/connections')

module.exports ={
    getDataBook : ()=>{
        return new Promise((resolve,reject)=>{
            const sql = 'SELECT id, judul, penerbit, penulis, kategori, tahun, cover FROM books JOIN category ON books.category_id = id_category';
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
    getDataBookById:(getid)=>{
        return new Promise((resolve,reject)=>{
            const sql = 'SELECT id, judul, penerbit, penulis, kategori, tahun, cover FROM books JOIN category ON books.category_id = id_category WHERE id = ? ';
            db.query(sql,getid.id,(err,res)=>{
                if(!err){
                    if(res[0]){
                        resolve(res)
                    }else{
                        reject({
                            message: 'success',
                            status: true,
                            error:'Data Not Found'
                        })
                    }
                }else{
                    reject(err)
                }
            })
        })
    },
    DeleteDataBookById:(id)=>{
        return new Promise((resolve,reject)=>{
            const sql = 'DELETE FROM books WHERE id = ?';
            db.query(sql,id.id,(err,res)=>{
                if(!err){
                    if(res[0]){
                        resolve(res)
                    }else{
                        reject({
                            message: 'success',
                            status: true,
                            error:'Data Not Found'
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
            sql = 'INSERT INTO books SET ?';
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
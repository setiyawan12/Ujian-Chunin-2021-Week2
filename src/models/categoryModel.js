const db = require('../connection/connections');

module.exports={
    getDataCategory : ()=>{
        return new Promise((resolve,reject)=>{
            const sql = 'SELECT * FROM category';
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
    getDataCategoryById:(getid)=>{
        return new Promise((resolve,reject)=>{
            const sql = 'SELECT * FROM category WHERE id_category = ?';
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
    DeleteDataCategory:(id)=>{
        return new Promise((resolve,reject)=>{
            const sql = 'DELETE FROM category WHERE id_category = ?';
            db.query(sql,id.id,(err,res)=>{
                if(!err){
                    if(res[0]){
                        resolve(res)
                    }else{
                        reject({
                            message: 'success',
                            status: true,
                            result:'Catergory Di Hapus'
                        })
                    }
                }else{
                    reject(err)
                }
            })
        })
    },
    postDataCategory : ((newCategory)=>{
        return new Promise((resolve,reject)=>{
            sql = 'INSERT INTO category SET ?';
            db.query(sql, newCategory,(err,res)=>{
                if(!err){
                    resolve({
                        message: 'sucess',
                        status: true,
                        data:newCategory
                    })
                }else{
                    reject(err)
                }
            })
        })
    }),
    updatedata :(id, newCategory) => {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE category SET ? WHERE id_category = ?'
            db.query(sql,[newCategory, id.id], (err, res) => {
                if (!err) {
                    if (res.affectedRows === 0) {
                        resolve({
                            message: "data not found"
                        })
                    } else {
                        resolve({
                            message : "success",
                            status : true,
                            result: 'update data berhasil',
                            data : {...id, ...newCategory}
                        })
                    }
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        Error : "Error while updating data ", err
                    })
                }
            })
        })
    }, 
}
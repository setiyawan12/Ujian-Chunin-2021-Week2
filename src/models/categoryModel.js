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
}
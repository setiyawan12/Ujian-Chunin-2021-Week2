const conn = require ('../connection/connections')
module.exports={
    showData: () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM books";
            conn.query(sql, (err, res) => {
                if (!err) {
                    if (res[0]) {
                        resolve(res)
                    } else {
                        reject({
                            message: 'success',
                            status: true,
                            error: 'Data not Found'
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    }
}
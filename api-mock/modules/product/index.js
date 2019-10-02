var middleware = require("../../jwt/middleware");
//const { encryptPassword } = require('../../crypto');

/**
 * 
 * @param {Express} app 
 * @param {Database} db 
 */
const productModule = (app, db) => {
    app.get("/api/product", (req, res, next) => {
        var sql = "select * from product"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            setTimeout(() => {
                res.json({
                    "message": "success",
                    "data": rows
                })
            }, 2000);
        });
    });


    app.get("/api/product/:id", (req, res, next) => {
        var sql = "select * from product where id = ?"
        var params = [req.params.id]
        db.get(sql, params, (err, row) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            setTimeout(() => {
                res.json({
                    "message": "success",
                    "data": row
                })
            }, 1000);
        });
    });

    app.post("/api/product", async (req, res, next) => {

        var errors = []
        if (!req.body.name) {
            errors.push("No name specified");
        }
        if (!req.body.price) {
            errors.push("No price specified");
        }
        if (!req.body.detail) {
            errors.push("No detail specified");
        }
        
        var data = {
            name: req.body.name,
            price: req.body.price,
            detail: req.body.detail,
        }
        var sql = 'INSERT INTO product (name, price, detail) VALUES (?,?,?)'
        var params = [data.name, data.price, data.detail]
        db.run(sql, params, function(err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.json({
                "message": "success",
                "data": data,
                "id": this.lastID
            })
        });
    })



    app.patch("/api/product/:id", middleware.ensureToken, async (req, res, next) => {
        
        var data = {
            name: req.body.name,
            price: req.body.price,
            detail: req.body.detail
        }
        db.run(
            `UPDATE product set 
               name = coalesce(?,name), 
               price = COALESCE(?,price), 
               detail = COALESCE(?,detail)
               
               WHERE id = ?`, [data.name, data.price, data.detail, req.params.id],
            (err, result) => {
                if (err) {
                    res.status(400).json({ "error": res.message })
                    return;
                }
                res.json({
                    message: "success",
                    data: data
                })
            });
    })


    app.delete("/api/product/:id", (req, res, next) => {
        db.run(
            'DELETE FROM product WHERE id = ?',
            req.params.id,
            function(err, result) {
                if (err) {
                    res.status(400).json({ "error": res.message })
                    return;
                }
                res.json({ "message": "deleted", rows: this.changes })
            });
    })


    // Root path
    app.get("/", (req, res, next) => {
        res.json({ "message": "Ok" })
    });
}


module.exports = productModule;
const pool = require("../config/db.config");
const getInfo = (req, res, next) => {     
        pool.query("select * from dashboard.utilisateur ", [], function (err, result) {
           if (err) {
            res.status(400).send(err);
        }
        if (Object.keys(result).length > 0) {
            res.status(200).send(result.rows);
        } else {
            res.status(200).send();
        }
    });
};

const getMenu = (req, res, next) => {     
    pool.query("select * from dashboard.menu ", [], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};
module.exports = {getInfo, getMenu};
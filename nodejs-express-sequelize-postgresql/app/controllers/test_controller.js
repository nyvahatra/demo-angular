const pool = require("../config/db.config");

// Add Menu
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

// Login
const getLogin = (req, res, next) => {  
    const matricule = req.body.matricule
    const password = req.body.password   
    pool.query("select count(*) from dashboard.utilisateur where matricule = $1 and password_utilisateur = $2", [matricule, password], function (err, result) {
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
module.exports = {getMenu, getLogin};
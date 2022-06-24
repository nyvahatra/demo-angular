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

const addMenu = (req, res, next) => {  
    const nom_menu = req.body.nom_menu
    const root_menu = req.body.root_menu   
    const icon_menu = req.body.icon_menu   
    pool.query("insert into dashboard.menu (nom_menu, root_menu, icon_menu) values ($1,$2,$3)", [nom_menu, root_menu, icon_menu], function (err, result) {
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
module.exports = {getInfo, getMenu, getLogin, addMenu};
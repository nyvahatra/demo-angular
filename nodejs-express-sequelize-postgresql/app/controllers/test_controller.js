const { range } = require("rxjs");
const pool = require("../config/db.config");

// Add Menu
const getMenu = (req, res, next) => {     
    pool.query("select * from dashboard.menu order by rang_menu asc", [], function (err, result) {
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

// Get Max Rank Menu
const getMaxRangMenu = (req, res, next) => {     
    pool.query("select max(rang_menu) from dashboard.menu", [], function (err, result) {
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

// Update Menu
const updateMenu = (req, res, next) => { 
    const id_menu = req.body.id_menu
    const nom_menu = req.body.nom_menu
    const route_menu = req.body.route_menu
    const rang_menu = req.body.rang_menu    
    const icon_menu = req.body.icon_menu    
    pool.query("update dashboard.menu set nom_menu = $1, route_menu = $2, rang_menu = $3, icon_menu = $4 where id_menu = $5", [nom_menu, route_menu, rang_menu, icon_menu, id_menu], function (err, result) {
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

// Update Menu
const supprimerMenu = (req, res, next) => { 
    const id_menu = req.body.id_menu   
    pool.query("delete from dashboard.menu where id_menu = $1", [id_menu], function (err, result) {
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

// Update Rang Menu
const updateRangMenu = (req, res, next) => {  
    const range = req.body.range
    const id_menu = req.body.id_menu
    pool.query("update dashboard.menu set rang_menu = $1 where id_menu = $2", [range,id_menu], function (err, result) {
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
module.exports = {getMenu, getLogin, getMaxRangMenu, updateMenu, updateRangMenu, supprimerMenu};
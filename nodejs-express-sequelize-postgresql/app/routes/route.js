const express = require('express'); //import express
const router  = express.Router(); 

const testController = require('../controllers/test_controller'); 
router.get('/get-menu', testController.getMenu); 
router.post('/get-login', testController.getLogin); 

module.exports = router; // export to use in server.js

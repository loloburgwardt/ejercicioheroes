const express= require('express');
const router= express.Router();
const homeController= require('../controllers/homeContoller');

router.get('/', homeController.index);

module.exports=router;
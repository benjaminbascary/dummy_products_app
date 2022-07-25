const express = require('express');
const router = express.Router();
const { getAddProductPageController, postNewProductController } = require('../controllers/products');


router.get('/addproduct', getAddProductPageController);

router.post('/addproduct', postNewProductController);


module.exports = { router };

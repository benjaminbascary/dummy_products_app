const express = require('express');
const router = express.Router();
const { getAllProductsController } = require('../controllers/products');

router.get('/', getAllProductsController);

module.exports = router;
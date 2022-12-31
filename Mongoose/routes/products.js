const express = require('express');

const router = express.Router();
const {getAllProducts,getVegetables} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/vegetables').get(getVegetables);

module.exports= router;
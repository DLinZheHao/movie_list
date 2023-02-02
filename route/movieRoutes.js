const express = require('express');
const router = express.Router();

const movieController = require('./../controllers/movieController');
router.get('/', movieController.front_page);
router.get('/search/:id', movieController.detail_page);
router.get('/search', movieController.search_page);
module.exports = router;

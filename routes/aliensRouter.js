const express = require('express');
const bodyParser = require('body-parser');
const aliensController = require('../controllers/aliensController');

const router = express.Router();
router.use(bodyParser.json());

router.get('/aliens', aliensController.getAllAliens);
router.post('/aliens', aliensController.createAlien);
router.put('/aliens/:id', aliensController.updateAlien);
router.delete('/aliens/:id', aliensController.deleteAlien);

module.exports = router;

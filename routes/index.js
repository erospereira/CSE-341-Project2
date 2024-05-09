const router = require('express').Router();

//router.get('/' , (req, res) => { res.send('Hello World');});

router.use('/employees', require('./employees'));
router.use('/department', require('./departments'));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;

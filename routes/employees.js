const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const employeeController = require('../controllers/employee');

router.get('/', employeeController.getAllEmployees);

router.get('/:id', employeeController.getSingleEmployee);
router.post('/',validation.employee, employeeController.createEmployee);
router.put('/:id',validation.employee, employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;

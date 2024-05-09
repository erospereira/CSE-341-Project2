const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const departmentController = require('../controllers/department.js');

router.get('/', departmentController.getAllDepartments);

router.get('/:id', departmentController.getSingleDepartment);
router.post('/', departmentController.createDepartment);
router.put('/:id',validation.department, departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;

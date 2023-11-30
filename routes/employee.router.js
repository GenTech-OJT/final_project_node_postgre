const express = require("express")
const router = express.Router()

const employeeController = require('../controllers/employee.controller')

router.get("/", employeeController.getEmployees)
// router.get("/:id", bookController.getById)
// router.post("/", bookController.create)
// router.put("/:id", bookController.updateById)
// router.delete("/:id", bookController.deleteById)

module.exports = router
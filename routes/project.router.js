const express = require("express")
const router = express.Router()

const projectController = require('../controllers/project.controller')

router.get("/", projectController.getProjects)
// router.get("/:id", bookController.getById)
// router.post("/", bookController.create)
// router.put("/:id", bookController.updateById)
// router.delete("/:id", bookController.deleteById)

module.exports = router
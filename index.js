const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const employeeRouter = require('./routes/employee.router')

app.use("/employees", employeeRouter)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))
const UserRouter = require('./UserRouter')
// const EmployeeRouter = require('./EmployeeRouter')
// const ProjectRouter = require('./ProjectRouter')

const routes = (app) => {
    app.use('/api/users', UserRouter)
    // app.use('/api/employees', EmployeeRouter)
    // app.use('/api/projects', ProjectRouter)
}

module.exports = routes
const postgre = require("../database");

const projectController = {
    getProjects: async (req, res) => {
      try {
        let {
          page = 1,
          limit = 10,
          search = "",
          sort = "id",
          order = "asc",
        } = req.query;
        const offset = (page - 1) * limit;
  
        // Construct the WHERE clause for the search parameter
        let whereClause = "";
        if (search) {
          whereClause = `WHERE (name ILIKE '%${search}%' OR code ILIKE '%${search}%')`;
        }
  
        // Construct the ORDER BY clause for the sort and order parameters
        let orderByClause = `ORDER BY ${sort} ${order}`;
  
        const projectsQuery = {
          text: `SELECT * FROM projects ${whereClause} ${orderByClause} LIMIT $1 OFFSET $2`,
          values: [limit, offset],
        };
  
        const countQuery = {
          text: `SELECT COUNT(*) FROM projects ${whereClause}`,
        };
  
        const projectsResponse = await postgre.query(projectsQuery);
        const countResponse = await postgre.query(countQuery);
  
        const projects = projectsResponse.rows;
        const total = parseInt(countResponse.rows[0].count);
  
        res.json({
          pagination: {
            total,
            page: parseInt(page),
            limit: parseInt(limit),
          },
          sort: {
            field: sort,
            order: order,
          },
          data: projects,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    },
  };
  
  module.exports = projectController;
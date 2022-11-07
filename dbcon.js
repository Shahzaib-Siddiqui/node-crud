const Pool = require('pg').Pool

const pool = new Pool({
user:'equmnnxktroehw',
host:'ec2-44-205-177-160.compute-1.amazonaws.com',
database:'d4mer0e1us7qkk',
password:'f9a1afd3f0ab50c91cbc60251ea7d99365d8e5780503bdec4097cc3422202f87',
port:5432,
ssl:{
    rejectUnauthorized:false
}

})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM public.test', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  module.exports = {
    getUsers
  }
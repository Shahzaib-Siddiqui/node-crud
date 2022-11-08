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


const query_func = (query)=>{
    pool.query(query, (error, results) => {
        if (error) {
          throw error
        }
        //  res.status(200).json(results.rows)
         return results
      })
}

const createUser = (request, response) => {
   const {id, fname, email } = request.body

  pool.query('INSERT INTO public.Users (id,fname, email) VALUES ($1, $2, $3) RETURNING *', [id, fname, email], (error, results) =>  {
    if (error) {
      throw error
    }
    response.status(201).send('User added with ID: ${results.rows[0].fname}')
  })
}


const UpdateUser = (request, response) => {
  const {id, fname } = request.body

 pool.query('UPDATE  public.Users set fname=$2  where id=$1 ', [id, fname], (error, results) =>  {
   if (error) {
     throw error
   }
   response.status(200).send('User updated id')
 })
}

const DeleteeUser = (request, response) => {
  const {id } = request.body

 pool.query('Delete From  public.Users   where id=$1 ', [id], (error, results) =>  {
   if (error) {
     throw error
   }
   response.status(200).send('User DEleted ')
 })
}




module.exports= {
  query_func,
  createUser,
  UpdateUser

};

const { request, response, json } = require('express')

const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
user:process.env.user,
host:process.env.host,
database:process.env.database,
password:process.env.password,
port:process.env.port,
ssl:{
    rejectUnauthorized:false
}

})


const fetch=(request,response)=>{
  const{fname}=request.body
  pool.query("Select * from public.Users where fname=$1",[fname],(error,results)=>{
  if(error) {
    throw error
  }

  response.status(200).send(results)
  
})
}


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
   const {task,status} = request.body

  pool.query('INSERT INTO public.todolist (task  , status ) VALUES ($1, $2)', [task,status ], (error, results) =>  {
    if (error) {
      throw error
    }
    response.status(201).send('User added with ID: ${results.rows[0].task}')
  })
}

const counttask=(request,response)=>{
  pool.query('Select  count (public.todolist.id) as Total , count(status) filter (where false) as pending, count(status) filter (where true) as done  from public.todolist ',(error,results)=>{
    if(error){
      throw error
    }
    //let a=JSON.stringify(results.rows[0])
      response.status(200).json(results.rows[0])
   // response.status(200).send(results)
  })
}

const UpdateUser = (request, response) => {
  const {id, fname } = request.body

 pool.query('UPDATE  public.Users set fname=$2  where id=$1 ', [id, fname], (error, results) =>  {
   if (error) {
     throw error
   }
   response.status(200).
   
   send('User updated id')
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
  UpdateUser,
  DeleteeUser,
  fetch,
  counttask
  

};



const query_func = require('./dbcon')

const getUsers = (response,req ) => {
    
  try{
    let query='SELECT * FROM public.test';
     const res = query_func(query)
     response.status(200).send(res.rows)

  }catch(err){
    response.status(500).send(err)

  }
  }

  module.exports = {
    getUsers
  }

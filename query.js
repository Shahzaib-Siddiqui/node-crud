

const {query_func} = require('./dbcon')

const getUsers = (req, res) => {
    
  try{
    let query='SELECT * FROM public.test';
     const reqq = query_func(query)
     res.status(200).send(reqq.rows)

  }catch(err){
    res.status(500).send(err)

  }
  }



  module.exports = {
    getUsers
  }

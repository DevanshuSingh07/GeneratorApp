const axios = require('axios')

const express = require('express')

const app= express();

const cors = require('cors')

app.use(cors())
 
app.use(express.json())

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  
});

const id = "admin"
const pass="12345"

const dataarray=[]

app.post('/send', async (req, res) => {
    dataarray.push(req.body) // logs the received data to the console
    res.sendStatus(200); // responds with a 200 status to acknowledge receipt
    dataarray.forEach(element => {
       console.log(element)
    });
  });

app.get('/data',(req,res)=>{

   fetch("https://script.google.com/macros/s/AKfycbwMGdT2cAvEmVnBogNGRvBOm9dfd5gQhcowlgGDahyqmntPQ_CIEQ4hjKrnmZW0OOar/exec").then(
    (response)=>{
      console.log("got request")
      return response.json()
           
    }
).then(
  (data)=>{
    res.json(data.data)
  }
).catch(
    (e)=>{
        res.send(e)
    }
)
})

app.post("/login",(req, res)=>{
   console.log("got in"+"  "+ req)
  const data= req.body;

  console.log(data)
  if(data.id == id && data.password == pass){
    console.log("if block");
    res.send("ok")
    
     
  }
  else{
    res.send("not ok")
  }
})
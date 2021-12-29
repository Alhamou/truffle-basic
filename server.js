const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', express.static('public_static'));



const web3Controller = require("./controller/web3Controller")

app.get("/api/getAccounts", async function(req, res){


  console.log("**** GET: /api/getAccounts ****")

  try{

    const accounts = await web3Controller.eth.getAccounts()

    res.json(accounts)

  } catch(error){

    res.status(400).json({error})

  }

})

app.get("/api/getBalance/:adress", async function(req, res){

  console.log("**** GET: /api/getBalance ****")
  
  try{

    const balance = await web3Controller.eth.getBalance(req.params.adress)

    res.json(balance)

  } catch(error){

    res.status(400).json({error})

  }

})



app.listen(port, () => {


  console.log("Express Listening at http://localhost:" + port);

});

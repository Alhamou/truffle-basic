const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const web3Controller = require("./controller/web3Controller")
const productsController = require("./controller/productsController")

app.get("/api/getAccounts", async function(req, res){

  try{

    const accounts = await web3Controller.eth.getAccounts()

    res.json(accounts)

  } catch(error){

    res.status(400).json({error})

  }

})

app.get("/api/getBalance/:adress", async function(req, res){

  try{

    const balance = await web3Controller.eth.getBalance(req.params.adress)

    res.json(balance)

  } catch(error){

    res.status(400).json({error})

  }

})

app.get("/api/setProductName/:str/:from", async function(req, res){

    try{
    
        const {from, str} = req.params

        console.log(from)
        const productName = await productsController.setProductName(str, from)
        res.end(productName)

    } catch(error){
        console.log(error)
        res.status(400).json({error})
  
    }
  
})

app.get("/api/getProductName", async function(req, res){

    try{
  
      const productName = await productsController.getProductName()
      res.end(productName)
  
    } catch(error){
        console.log(error)
        res.status(400).json({error})
  
    }
  
})

app.listen(port, () => {


  console.log("Express Listening at http://localhost:" + port);

});

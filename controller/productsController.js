
const Web3 = require('web3');
const contract = require('truffle-contract');
const productsArtifact = require('../build/contracts/Products.json');

var Products = contract(productsArtifact);

const productsController = (function(){

    const obj = {}
  
    const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
  
  
    obj.setProductName = async function(str){
      
        Products.setProvider(web3.currentProvider)

        const instance = await Products.deployed()
        await instance.setProductName(str, {from: "0xB2bb6bFda7dfD123bAe07Fb9Ba5aadC164a297fb"});
        return await instance.getProductName();
        
    }

    obj.getProductName = async function(){
      
        Products.setProvider(web3.currentProvider)

        const instance = await Products.deployed()
        return await instance.getProductName();
        
    }
  
    return obj;
  
  })()

  module.exports = productsController;
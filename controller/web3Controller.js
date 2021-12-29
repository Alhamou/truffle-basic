
const Web3 = require('web3');

const web3Controller = (function(){

    const obj = {eth: {}}
  
    const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
  
  
    obj.eth.getAccounts = function(){
      
      return new Promise((resolve, reject)=>{
  
        web3.eth.getAccounts(function(err, accounts){
          if(err){
            reject(err)
          }
          resolve(accounts)
        })
  
      })
  
    }
  
    obj.eth.getBalance = function(address){
  
  
      return new Promise((resolve, reject)=>{
  
        web3.eth.getBalance( address, function(err, balance){
          if(err){
            reject(err)
          }
          resolve(web3.utils.fromWei(balance, "ether"))
        })
  
      })
  
    }
  
    return obj;
  
  })()

  module.exports = web3Controller;
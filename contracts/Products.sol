// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract Products{

    string productName;

    constructor(){
        productName = "PagesShop";
    }


    function getProductName() public view returns(string memory){
        return productName;
    }


    function setProductName(string memory _productName) public{
        productName = _productName;
    }



}
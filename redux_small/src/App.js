import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    console.clear();

// Simulating people droping off a form

const createPolicy = (name,amount)=>{
    
  return{
    type: 'CREATE_POLICY',
    payload:{
      name,
      amount
    } 
  };
};

const DeletePolicy = (name)=>{
    
  return{
    type: 'DELTE_POLICY',
    payload:{
      name: name
    } 
  };
};

const createClaim = (name,amountToCollect)=>{
    
  return{
    type: 'CREATE_CLAIM',
    payload:{
      name: amountToCollect,
      amountToCollect: amountToCollect
    } 
  };
};



//  reducers


const claimsReducer = (oldListOfClaims=[],action) => {
  
 if(action.type ==='CREATE_CLAIM{'){
 
   return[...oldListOfClaims, action.payload]
   
 }
  return oldListOfClaims;
};

const acctReducer =(allCash = 100, action)=>{
  
 if (action.type==="CREATE_CLAIM"){
   return allCash - action.payload.amountToCollect;
 }
  else if (action.type==="CREATE_POLICY"){
    return allCash + action.payload.amount;
  } else{
    return allCash;
  } 
};

const policyReducer =(allPolicys=[],action) =>{
  
  if(action.type==="DELTE_POLICY"){
    
    return allPolicys.filter(name => name !== action.payload.name);
    
  }else if (action.type=== "CREATE_POLICY"){
    
    return [...allPolicys, action.payload.name];
  }
  
  return allPolicys;

}
    </div>
  );
}

export default App;

//closure are the fuction in js that can retain its outer scope varible value even after function finished executig.

const customer = (customerName)=>{
  let balance = 0;
   
   const deposite=(amount)=>{
    balance += amount;
    console.log(`customer deposite ${amount} total balance is ${balance}`); 
   }

   const withdraw =(amount)=>{
     if(amount>balance){
      console.log(`Insufficient amount`);
     }else{
      balance -= amount;
      console.log(`customer withdraw ${amount},clearBalance is ${balance}`);
    }
   }
    
    const clearBalance = ()=>{
        return balance;
    }
   
   return {
    deposite,
    withdraw,
    clearBalance
   }
}
const account = customer('Ram');
account.deposite(1000);
account.withdraw(400);

// balance is private Encapsulation 
console.log(`Balance is ${account.balance}`)  // undefiend   


}

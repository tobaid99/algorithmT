 
 //1. Addition 
 //Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5

//  for( let i = 200; i<= 2700 ; i++){
//     if(i%3===0 || i%3===0){
//         i+=0;
//     }else{

//     }
//     console.log(i);
//  }



 //-----------------------------------------------------------------------------------------

 //2. Shift the Values

// let y;
//  let X= [2,1,6,4,-7];
//  for( let i=0 ; i<X.length ; i++){
//     y =X.reverse();
   
//  }

//  console.log(y);


  //-----------------------------------------------------------------------------------------


  // 3. FizzBuzz

//   for(let i=1 ;i<=135 ;i++){
//         if( i%3===0 && i%5===0){
//             console.log( "FizzBuzz");
//         }else if ( i%3===0 ){
//             console.log( "Fizz");
//         }else if ( i%5===0 ){
//             console.log( "Buzz");
//         }else{
//             console.log(i);
//         }
//   }


  //-----------------------------------------------------------------------------------------

//5. Remove the Negative


//   let X= [1,-2,4,1];

//   for (let i=0 ; i<X.length ;i++){
//         if (X[i]>= 0){
//             console.log(X[i]);
//         }
//   }

  //-----------------------------------------------------------------------------------------


  
  



   const r=['Man', 'I','Love','The','Matrix','Program'];
   let text =[];
for(s=0; s<=r.length-1; s++){
    if(r[s]=='Program'){
        t='*'.repeat(r[s].length);
        text.push(t);
    }else{
        text.push(r[s]);
    }
   
}
console.log(text)


//---------------------------------------------------------------------------------
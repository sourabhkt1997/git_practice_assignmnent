//find the prime number from 1 to 20 including 20

for(let i=1;i<=20;i++){
let count=0
 for(let j=1;j<=20;j++){
   if(i%j==0){
     count++
  }
 }

if(count==2){
 console.log(i,"prime number")
}else{
console.log(i,"non prime number")
}
}

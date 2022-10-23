//Check whether a string is palindrome or not.


let str="malayalam"
let bag=""
for(let i=str.length-1;i>=0;i--){
  bag+=str[i];
}
if(bag  ==str){
  console.log("it is a paliandrome");
}else {
  console.log("it is not a palindrome")
}
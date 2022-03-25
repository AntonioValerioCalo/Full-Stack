
const sum = (a, b) =>`${a}+${b}`;
const subtract = (a, b) =>`${a}-${b}`;

const multiply =(a,b)=>`${a}*${b}`;


const divide =(a,b)=>`${a}/${b}`;

const log =value =>{

 return  ` ${value}${multiply(`${sum(2,4)}`,5)}+${subtract(2,2)} ${divide(")",5)}`;
};
console.log(log("("));
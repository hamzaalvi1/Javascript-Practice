//Reverse String
let str = "The quick brown fox jumps over lazy dog"
const reverseStr = (string)=>{
 const reverseStr  = string.split("").reverse().join("")
 return reverseStr 
}

console.log(reverseStr(str))
console.log(reverseStr("Hamza Alvi"))
//Alternate
function reverseStr2(string){
let revStr = ""
for(let i = string.length - 1 ; i >= 0 ; i--){
    revStr+= string[i]
}
return revStr

}
console.log(reverseStr2("Zebra"))

// clone indexOf
let cloneIndexof = (str,indexWord)=>{
 let splitStr = str.split("")
 const filterStr = splitStr.map((string,index)=>{
     const _index = string === indexWord ? [index] : []  
   return   _index
   
 })
 const mergeIndex = filterStr.flat()
 const indexArr =  mergeIndex.length !== 0 ? mergeIndex.toString().slice(0,1) : "-1" 
  
  return indexArr 
} 
console.log(cloneIndexof("Hamza","z"))
console.log(cloneIndexof("shafaq","q"))

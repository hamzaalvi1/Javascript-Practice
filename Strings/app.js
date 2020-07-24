//LocalCompare
// Only work on strings not on number or boolean
let str1 = "Hamza, A,lvi"
let str2 = "Hello"
let str3 = "The quick brown fox jumps over the lazy brown dog"
console.log(str1.localeCompare(str2))

const names = ["Hamza","Haya","Fawwad","Farihaa","Salman","Dua","Arham","Maavia","Reeja"]
const someNumbers = [44,9,30,17,67,56,99,109,78,84]
names.sort((a,b)=>{
   return a.localeCompare(b) 
})
console.log(names)

someNumbers.sort((a,b)=> b-a)
console.log(someNumbers)

//charAt returns a Character at given index
console.log(str1.charAt(3))
//charCodeAt return given character ascii number
console.log(str1.charCodeAt(2))
// split: splits a string into an array according to given parameter. paramter matches if is available
// in string it will split up if we will not provide parameter it will take whole string at array[0]
console.log(str1.split(""))

// if character is not found return -1
console.log(str2.indexOf("h"))
// return first word index of the brown "b"
console.log(str3.indexOf("brown"))
console.log(str1.lastIndexOf("i"))
//trim to remove extra white space from string
let toManySpaces = "                  Hey there Fellows Nice to meet u          "
console.log(toManySpaces)
console.log(toManySpaces.trim())
//Slice is use to cut the big string into small string
console.log(str3.slice(0,4))
console.log(str3.slice(4))
console.log(str3.slice(-7,-1)) // starts from right side
console.log(str3.slice(-4,-0)) // empty string

// replace : replace character into strings

str3 =  str3.replace("fox","cat")
console.log(str3)
str3 =  str3.replace(/brown/g,"white") // replace all brown to white
console.log(str3)

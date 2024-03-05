const codeing = ["js", "ruby", "python", "java"]

// codeing.forEach( function (item) {
//     console.log(item);
// } )


// codeing.forEach( (item) => {
//     console.log(item);
// } ) //callback func


function printMe(item){
    console.log(item);
}


// codeing.forEach(printMe)// give reference only


// codeing.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "js",
        languageFileName: "javascript"
    },
    {
        languageName: "py",
        languageFileName: "python"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    }
]

myCoding.forEach( (item) => {
   console.log(item.languageName); 
})
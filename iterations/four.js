const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObj) {//for key in object
    // console.log(`${key} shortcut is for ${myObj[key]} `);    
}


const myArr = ["js", "ruby", "python"]

for (const key in myArr) {//for in loop in arr give only keys not the objects so using myArr[key]
    // console.log(myArr[key]);
   
    }

    // const map = new Map()
    // map.set('In', "India")
    // map.set('Jp', "Japan")
    // map.set('Cn', "China")
    // map.set('Cn', "China")

    // for (const key in map) {// maps are not iteratable
    // //    console.log(key);
    // }

    
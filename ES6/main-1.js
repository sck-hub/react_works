// basicModule 가져오기
// 가져오는 것 : require
// let square = require("./lib/basicModule.js")
let { square, add } = require("./lib/basicModule.js")

// 보낼때도 중괄호, 받을때도 중괄호

// 함수 호출
console.log(square(3));     // 3*3=9
console.log(add(7,8));  // 15



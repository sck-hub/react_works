// persons 객체 배열
// 객체(배열)를 여러개 넣을 때 , 를 넣음
let persons = [
    {
        name: "이정후",
        age: 27,
        sports: "야구"
    },
    {
        name: "최민정",
        age: 27,
        sports: "스피드 스케이팅"
    }
]

let p1 = persons[1];    // 두 번째 객체
// console.log("이름: " + p1.name);
let demo = document.getElementById("demo");
demo.innerHTML = `
<h3>이름: ${p1.name}</h3>
<p>나이: ${p1.age}</p>
<p>스포츠: ${p1.sports}</p>

`


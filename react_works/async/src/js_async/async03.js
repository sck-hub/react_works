function displayA() {
    console.log('A');
    
}

// Promise 객체를 반환하여 비동기 작업 처리
function displayB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('B');
            resolve(); // 호출
            
        }, 2000);        

    })

}

async function disPlayC() {
    console.log('C');
    
    
}

// async 함수로 변경
async function runSequence() {
    displayA();
    await displayB();   // displayB가 완료될 때까지 기다림
    await displayC();   // displayB가 완료될 때까지 기다림
}

runSequence();  // A -> B -> C


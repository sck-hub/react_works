const Test02 = () => {

    const handleClick = () => {
        console.log("버튼 1이 클릭 됨");
    
    }
    
    return (
        <>
            <p>버튼 이벤트 테스트 (2가지 방법)</p>
            <button onClick={handleClick}>버튼 1</button>
            <button onClick={()=>console.log("버튼 2가 클릭 됨")}>버튼 2</button>
        </>

    );

}

export default Test02;
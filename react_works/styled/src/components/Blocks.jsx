// 스타일 정의
import { useState } from "react";
import styled from "styled-components";

// wrapper Style 정의 - <Wrapper>
const Wrapper = styled.div`
    // flex로 가로 배치
    display: flex;
    padding: 40px;
    gap: 20px;
    cursor: pointer;
    justify-content: center;
`

const Block = styled.div`
    // 크기
    width: 100px;
    height: 100px;
    background-color: ${props => props.color};
    border-radius: 8px;
`




const Blocks = () => {
    // 클릭한 block의 색상을 저장하는 상태(null로 초기화)
    const [clicked, setClicked] = useState(null);   // 현재 클릭 상태가 아님

    // 클릭된 글자 색상 상태
    const [textColor, setTextColor] = useState('black');

    const handleClick = (color) => {
        setClicked(color);
        setTextColor(color);
    }
    return (
        <Wrapper>
            <Block
                color="red"
                onClick={() => handleClick('red')}  // 콜백 함수를 해야 에러가 안남
            />

            <Block
                color="green"
                onClick={() => handleClick('green')}
            />
            {/* style 중괄호가 2번 있어야함 */}
            {clicked && <p>클릭한 색상: <b style={{color: textColor, fontSize: 50}}>{clicked}</b></p>}

        </Wrapper>
        
    )
}

export default Blocks;
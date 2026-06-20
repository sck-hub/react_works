import styled from "styled-components"

// 스타일 정의
const Button = styled.button`
    padding: 8px 16px;
    margin: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;

    // props를 이용하여 스타일을 동적으로 변경
    // 기본 글자색은 '검정' 이고 props에 따라 색상 변경
    color: ${props => props.color || 'black'};
    background-color: ${props => props.backgroundColor || 'white'};

    // primary props가 true일 때 추가 스타일 적용
    ${props => props.primary && `
        color:white;
        background-color: purple;
    `}
`

const ButtonSample = () => {
    return (
        <div>
            <Button>기본 버튼</Button>
            <Button color="green" backgroundColor="yellow">녹색 버튼</Button>
            <Button primary>보라 버튼</Button>
        </div>
    )
}

export default ButtonSample
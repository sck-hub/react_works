// props에 children으로 선언해야함 일종의 문법임
const Box = ({children}) => {
    const boxStyle = {
        width: '200px',
        border: '1px solid #000',
        margin: '0 auto',   // 가운데 정렬
        padding: '10px'
    }
    return (
        <div>
            <h2>Props Children</h2>
            <p style={boxStyle}>{children}</p>
        </div>
    )
}

export default Box;
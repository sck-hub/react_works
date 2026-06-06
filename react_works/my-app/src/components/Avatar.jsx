// import profilePhoto from "../assets/person.jpg"
// 프로필 사진을 보여주는 컴포넌트
// props로 person 객체를 받아서 imageUrl name을 사용하여 프로필 사진을 보여줌
const Avatar = ({person}) => {
    return (
        <div className="avatar">
            {/* <h3>여기에 프로필 사진</h3> */}
            <img src={person.imageUrl} alt={person.name} width={400} />
        </div>
    )
}
export default Avatar;
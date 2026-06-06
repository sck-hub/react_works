import Avatar from "../components/Avatar";
import profilePhoto from "../assets/person.jpg"
import Card from "./Card";
// 프로필 페이지를 보여주는 컴포넌트
const Profile = () => {
    return (
        <Card>
            {/* <h2>Profile_CARD UI 구현</h2> */}
            <Avatar
                person={{
                    name: '아무개',
                    imageUrl: profilePhoto
                }}
            />
        </Card>
    );
}
export default Profile;
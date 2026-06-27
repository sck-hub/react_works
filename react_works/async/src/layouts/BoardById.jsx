import { useParams } from "react-router-dom";

const BoardById = () => {

    const { id } = useParams();

    return (
        <div>           
            {`Board ${id} Page`}
        </div>

    )
}

export default BoardById;
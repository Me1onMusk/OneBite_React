
import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();

    return (
        <>
            <h1>Diary {params.id}</h1>
        </>
    );
};

export default Diary;
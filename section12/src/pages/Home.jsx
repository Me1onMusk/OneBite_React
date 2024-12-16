
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();
    
    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default Home;
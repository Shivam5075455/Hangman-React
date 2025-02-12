// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer"
function StartGame(){

    const navigate = useNavigate(); // useNavigate() is a hook

    function handleSubmit(){
        navigate("/play");
    }

    return(
        <div>
            <h1>Start Game</h1>
            {/* <Link to={'/play'}>Play Game</Link>  */} {/* "Link" is like an "anchor" tag in html and provided by 
            react router dom. It jump from one page to another without refresh the page */}
            <TextInputFormContainer onSubmit={handleSubmit}/>
        </div>
    )
}

export default StartGame;
import getButtonStyling from "./getButtonStyleType";

function Button({text, buttonTtype='button', styleType, onClickHandler}){
    return (
     
            <button 
            type={buttonTtype}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-white transition-all rounded-md m-1`}> 
            {text}
            </button>
       
    );
}

export default Button;
function getButtonStyling(styleType){
    const primaryButtonStyling = "bg-blue-500 border border-blue-700 hover:bg-border-blue-900 hover:bg-blue-700";
    const SecondaryButtonStyling = "bg-gray-500 border border-gray-700 hover:bg-border-gray-900 hover:bg-gray-700";
    const warningButtonStyling = "bg-yellow-500 border border-yellow-700 hover:bg-border-yellow-900 hover:bg-yellow-700";

    if(styleType === "primary"){
        return primaryButtonStyling;
    }else if(styleType === "secondary"){
        return SecondaryButtonStyling;
    }else if(styleType === "warning"){
        return warningButtonStyling;
    }
}

export default getButtonStyling;
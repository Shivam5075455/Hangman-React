// import Button from "./Components/Button/Button";

// import TextInput from "./Components/TextInput/TextInput";
// import TextInputForm from "./Components/TextInputForm/TextInputForm";
// import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";
import StartGame from "./Pages/StartGame/StartGame";
import PlayGame from "./Pages/PlayGame/PlayGame";
import { Route, Routes } from "react-router-dom";
// import {Route, Routes} from "react-router-dom";

function App(){
  return(
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
      //  <TextInputForm onSubmit={(value) => console.log("value coming from hidden form is: ",value)}/>
      //  <TextInputFormContainer onSubmit={(value) => console.log("value coming from hidden form is: ",value)}/>
    //  </div> 

    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="start" element={<StartGame />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>

  );
}

export default App;
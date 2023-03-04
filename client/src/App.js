import { BrowserRouter } from "react-router-dom";
import GeneraleRoute from "./GeneraleRoute";
import {GlobalContext} from './Context'

function App() {
  return (
     <GlobalContext>
        <BrowserRouter>
          <GeneraleRoute/>
        </BrowserRouter>
     </GlobalContext>    
  );
}

export default App;

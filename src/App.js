import logo from './logo.svg';
import './App.css';

import Gotop from './componet/Gotop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './componet/Landing';

function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
 
        </Route>
      </Routes>
    </BrowserRouter>



     
      <Gotop/>
    </>
  );
}

export default App;

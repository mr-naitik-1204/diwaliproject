import logo from './logo.svg';
import './App.css';

import Gotop from './componet/Gotop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './componet/Landing';
import Women from './componet/Women';
import Men from './componet/Men';
import Children from './componet/Children';
import Contect from './componet/Contect';


function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
        </Route>
        <Route path="women" element={<Women/>}>
        </Route>
        <Route path="men" element={<Men />}>
        </Route>
        <Route path="children" element={<Children />}>
        </Route>
        <Route path="contect" element={<Contect />}>
        </Route>
      </Routes>
    </BrowserRouter>



     
      <Gotop/>
    </>
  );
}

export default App;

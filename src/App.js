import { Route, Routes, Link, Form } from "react-router-dom";
import { Home } from "./components/home";
import FormValidation from "./components/form/form";
import LayOut from "./layout/LayOut";

import "./style/main.scss"
function App() {

  return (
    <>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormValidation />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;

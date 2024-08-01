
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Insert from "./components/Insert";
import Search from "./components/Search";
import Display from "./components/Display";
import Update from "./components/Update";
import EditData from "./EditData";
const App=()=>{
  return(
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="Insert" element={<Insert/>}/>
       <Route path="search" element={<Search/>}/>
       <Route path="display" element={<Display/>}/>
       <Route path="update" element={<Update/>}/>
       <Route path="myedit/:myid" element={<EditData/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;
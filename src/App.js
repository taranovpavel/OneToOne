import classes from "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./page/mainPage/MainPage";
import ClothesInfoPage from "./page/mainPage/ClothesInfoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/:id" element={<ClothesInfoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

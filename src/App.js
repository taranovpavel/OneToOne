import { BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from "./App.css"
import MainPage from "./page/mainPage/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

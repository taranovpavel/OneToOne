import classes from "./App.sass";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./page/mainPage/MainPage";
import ClothesInfoPage from "./page/ClothesInfoPage/ClothesInfoPage";
import PrivacyPolicyPage from "./page/PrivacyPolicyPage/PrivacyPolicyPage";
import OfferContractPage from "./page/OfferContractPage/OfferContractPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/:id" element={<ClothesInfoPage/>}/>
        <Route path="/Privacy" element={<PrivacyPolicyPage/>}/>
        <Route path="/Contract" element={<OfferContractPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

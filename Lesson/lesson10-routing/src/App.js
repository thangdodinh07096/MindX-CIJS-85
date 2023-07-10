import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Products from './pages/Products/Products';
import Header from "./components/Header/Header";
import MoviesDetail from "./pages/MovieDetail/MovieDetail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (

    <BrowserRouter>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/movies/:id" element={<MoviesDetail />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

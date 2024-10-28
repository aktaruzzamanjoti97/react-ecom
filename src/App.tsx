import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import PopularBlogs from "./components/PopularBlogs";
import ProductPage from "./components/ProductPage";
import Sidebar from "./components/Sidebar";
import TopSeller from "./components/TopSeller";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <div>
            <TopSeller />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
}

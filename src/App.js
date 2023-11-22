import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import BasketPage from "./pages/BasketPage";
import DetailPage from "./pages/DetailPage";
import GoodsPage from "./pages/GoodsPage";
import LoginPage from "./pages/LoginPage";
import MyPagePage from "./pages/MyPagePage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* 회원가입 */}
          <Route path="/signup" element={<SignupPage />} />
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 메인페이지 */}
          <Route path="/" element={<GoodsPage />} />
          {/* 글작성 페이지 */}
          <Route path="/content" element={<ProductPage />} />
          {/* 상세페이지 + 코멘트 */}
          <Route path="/:goodsId" element={<DetailPage />} />
          {/* 장바구니 */}
          <Route path="/orders" element={<BasketPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

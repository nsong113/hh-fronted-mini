import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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
          <Route path="/goods" element={<GoodsPage />} />
          {/* 글작성 페이지 */}
          <Route path="/goods/content" element={<ProductPage />} />
          {/* 상세페이지 + 코멘트 */}
<<<<<<< HEAD
          <Route path="/api/goods/:goodsId" element={<DetailPage />} />
=======
          <Route path="/goods/:goodsId" element={<DetailPage />} />
>>>>>>> 28e1752cc2b097efd54b667ab6a5ce07c0cab24e
          {/* 장바구니 */}
          <Route path="/orders" element={<BasketPage />} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPagePage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

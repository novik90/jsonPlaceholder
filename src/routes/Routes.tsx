import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import HomePage from "src/pages/HomePage";
import TestPage from "src/pages/TestPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Layout.Content style={{ margin: "64px 64px 0 64px", minHeight: "100%" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<TestPage />} />
          </Routes>
        </Layout.Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes;
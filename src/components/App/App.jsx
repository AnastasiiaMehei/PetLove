import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import './App.module.css'
import Layout from "../Loyout/Loyout";
import Loader from "../Loader/Loader";
import NotFound from "../../pages/NotFound/NotFound";
import NoticesPage from "../../pages/NoticesPage/NoticesPage";
// import NewsPage from "../../pages/NewsPage/NewsPage";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const NewsPage = lazy(() => import("../../pages/NewsPage/NewsPage"));
const FriendsPage = lazy(() => import("../../pages/FriendsPage/FriendsPage"));

export default function App() {

  return (
    <Router>
            <Layout>
              {/* <Header/> */}
            <Suspense fallback={<Loader />}>
            <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
<Route path="/notices" element={<NoticesPage/>}/>

          <Route path="*" element={<NotFound />} />

        </Routes>
            </Suspense>

            </Layout>

    </Router>

  )
}


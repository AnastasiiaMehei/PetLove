import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import './App.module.css'
import Layout from "../Loyout/Loyout";
import Loader from "../Loader/Loader";
import NotFound from "../../pages/NotFound/NotFound";
import NoticesPage from "../../pages/NoticesPage/NoticesPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import NewsPage from "../../pages/NewsPage/NewsPage";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const NewsPage = lazy(() => import("../../pages/NewsPage/NewsPage"));
const FriendsPage = lazy(() => import("../../pages/FriendsPage/FriendsPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage"));


export default function App() {
const isAuthenticated = Boolean(localStorage.getItem("token"));
  return (

    <Router>
            <Layout>
              {/* <Header/> */}
            <Suspense fallback={<Loader />}>
            <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/signup" element={<RegistrationPage />} />
          <Route path="/users/signin" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
<Route path="/notices" element={<NoticesPage/>}/>
<Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
            </Suspense>

            </Layout>

    </Router>


  )
}


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import './App.module.css'
import Layout from "../Loyout/Loyout";
import Loader from "../Loader/Loader";
import HomePage from "../../pages/HomePage/HomePage";
// import Header from "../Header/Header";

export default function App() {

  return (
    <Router>
            <Layout>
              {/* <Header/> */}
            <Suspense fallback={<Loader />}>
            <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
            </Suspense>

            </Layout>

    </Router>

  )
}


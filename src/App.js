import React from "react";
import Layout from "./components/Layout";
import Categories from "./components/Layout/Categories";
import Campaigns from "./components/Layout/Campaigns";
import HeroSection from "./components/Layout/HeroSection";
import Favourites from "./components/Layout/Favourites";
import MobileApp from "./components/Layout/MobileApp";
import Cards from "./components/Layout/Cards";

function App() {
  return (
    <div>
      <Layout>
        <main className="min-h-[calc(100vh_-_68px)] overflow-hidden">
          <HeroSection />
          <Categories />
          <Campaigns />
          <Favourites />
          <MobileApp />
          <Cards />
        </main>
      </Layout>
    </div>
  );
}

export default App;

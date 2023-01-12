import React from 'react';
import './styles/global.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Types from "./pages/Types";
import {NavbarMinimalColored} from "./components/NavbarLink";
import Search from "./pages/Search";
import FavoritePokemon from "./pages/FavoritePokemon";
import {NavbarBottom} from "./components/NavbarBottom";
import {IconFlame, IconHeart, IconHome2, IconSearch} from "@tabler/icons";

function App() {
  const links = [
    { id: 0, icon: IconHome2, label: 'Accueil', path: '/' },
    { id: 1, icon: IconSearch, label: 'Recherche', path: '/search/' },
    { id: 2, icon: IconHeart, label: 'Favoris', path: '/favorites/' },
    { id: 3, icon: IconFlame, label: 'Types', path: '/types/' },
  ];

  return(
    <>
      <NavbarMinimalColored links={links}/>
      <NavbarBottom links={links}/>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/favorites" element={<FavoritePokemon/>} />
            <Route path="/types" element={<Types/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

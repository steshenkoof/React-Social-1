import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Chat } from "./components/Chat/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/:id" element={<Chat/>} />
        </Routes>
        <div className="containerMenu"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;

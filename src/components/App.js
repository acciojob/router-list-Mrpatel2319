import React from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <h1>Item List</h1>
      <ul>
        <li><Link to="/item/1">Item 1</Link></li>
        <li><Link to="/item/2">Item 2</Link></li>
        <li><Link to="/item/3">Item 3</Link></li>
      </ul>
    </header>
  );
};

const Item = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </div>
  );
};

const RouterList = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;

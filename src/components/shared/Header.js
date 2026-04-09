import React, { useState } from 'react';
import "./../../css/header.css";
import { News } from '../News';
import { Photos } from '../Photos';
import { CabinCalendar } from '../CabinCalendar';
import { Documents } from '../Documents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export function Header({ middle: initialMiddle = true }) {
  const [middle, setMiddle] = useState(initialMiddle);
  const [contentVisible, setContentVisible] = useState(false);

  const repositionTop = () => {
    setMiddle(false);
    setContentVisible(true);
  };

  const repositionMiddle = () => {
    setMiddle(true);
    setContentVisible(false);
  };

  const position = middle ? "middle" : "top";

  return (
    <div className={"Header noselect " + position}>
      <Router>
        <Link to="/">
          <h1 className='logo' onClick={repositionMiddle}> The Evernden Cabin </h1>
        </Link>
        <ul className='navigation-list'>
          <li onClick={repositionTop}>
            <Link to="/news">news</Link>
          </li>
          <li onClick={repositionTop}>
            <Link to="/photos">photos</Link>
          </li>
          <li onClick={repositionTop}>
            <Link to="/calendar">calendar</Link>
          </li>
          <li onClick={repositionTop}>
            <Link to="/documents">documents</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/news" element={<News visibility={contentVisible} />} />
          <Route path="/photos" element={<Photos visibility={contentVisible} />} />
          <Route path="/calendar" element={<CabinCalendar visibility={contentVisible} />} />
          <Route path="/documents" element={<Documents visibility={contentVisible} />} />
        </Routes>
      </Router>
    </div>
  );
}

import React, { useState } from 'react';
import "./../../css/header.css";
import { News } from '../News';
import { Photos } from '../Photos';
import { CabinCalendar } from '../CabinCalendar';
import { Documents } from '../Documents';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function HeaderContent() {
  const [activePage, setActivePage] = useState(null);
  const navigate = useNavigate();

  const openPage = (page) => {
    setActivePage(page);
    navigate('/' + page);
  };

  const goHome = () => {
    setActivePage(null);
    navigate('/');
  };

  const position = activePage ? "top" : "middle";

  return (
    <div className={"Header noselect " + position}>
      <h1 className='logo' onClick={goHome}> The Evernden Cabin test</h1>
      <ul className='navigation-list'>
        <li onClick={() => openPage('news')}>news</li>
        <li onClick={() => openPage('photos')}>photos</li>
        <li onClick={() => openPage('calendar')}>calendar</li>
        <li onClick={() => openPage('documents')}>documents</li>
      </ul>

      <News       visibility={activePage === 'news'} />
      <Photos     visibility={activePage === 'photos'} />
      <CabinCalendar visibility={activePage === 'calendar'} />
      <Documents  visibility={activePage === 'documents'} />
    </div>
  );
}

export function Header() {
  return (
    <Router>
      <HeaderContent />
    </Router>
  );
}

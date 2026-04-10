import React, { useState, useRef, useEffect } from 'react';
import "./../../css/header.css";
import { News } from '../News';
import { Photos } from '../Photos';
import { CabinCalendar } from '../CabinCalendar';
import { Documents } from '../Documents';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function HeaderContent() {
  const [activePage, setActivePage] = useState(null);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  useEffect(() => {
    const updateContentTop = () => {
      if (!headerRef.current) return;
      const headerHeight = headerRef.current.offsetHeight;
      const topOffset = window.innerHeight * 0.02; // matches .top { top: 2% }
      document.documentElement.style.setProperty(
        '--content-top',
        `${Math.round(topOffset + headerHeight + 8)}px`
      );
    };

    const observer = new ResizeObserver(updateContentTop);
    if (headerRef.current) observer.observe(headerRef.current);

    window.addEventListener('resize', updateContentTop);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateContentTop);
    };
  }, []);

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
    <div ref={headerRef} className={"Header noselect " + position}>
      <h1 className='logo' onClick={goHome}> The Evernden Cabin </h1>
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

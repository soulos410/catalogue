import React from 'react';

export default function Header() {
  const linkUrl = '#';
  return (
    <nav className="catalogue-menu">
      <a href={linkUrl} className="menu-item__link"><li className="menu-item">Menu Item1</li></a>
      <a href={linkUrl} className="menu-item__link"><li className="menu-item">Menu Item2</li></a>
      <a href={linkUrl} className="menu-item__link"><li className="menu-item">Menu Item3</li></a>
      <a href={linkUrl} className="menu-item__link"><li className="menu-item">Menu Item4</li></a>
      <a href={linkUrl} className="menu-item__link"><li className="menu-item">Menu Item5</li></a>
    </nav>
  );
}

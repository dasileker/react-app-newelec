import React, { useState } from 'react';
// import { BiGlobe, BiFlag } from 'react-icons/bi';

const Header = () => {

  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  let languageIcon;

  switch (selectedLanguage) {
    case 'English':
      languageIcon = <i className="fi-rr-england flag-icon"></i>;
      break;
    case 'French':
      languageIcon = <i className="fi-rr-france flag-icon"></i>;
      break;
    case 'Spanish':
      languageIcon = <i className="fi-rr-spain flag-icon"></i>;
      break;
    default:
      languageIcon = null;
  }


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <form className="d-flex w-50 position-relative">
              <input className="form-control me-2 ps-5" type="search" placeholder="Search" aria-label="Search" />
              <i className="bi bi-search position-absolute top-0 start-0 mt-2 ms-2"></i>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Training</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">More</a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item dropdown ${languageDropdownOpen ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle dropdown-toggle-no-caret" href="#" role="button" onClick={toggleLanguageDropdown}>
                  {languageIcon && <span className="me-2">{languageIcon}</span>}
                  {selectedLanguage}
                </a>
                <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} onClick={toggleLanguageDropdown}>
                  <li onClick={() => selectLanguage('English')}><a className="dropdown-item" href="#"><i className="fi-rr-england flag-icon me-2"></i>English</a></li>
                  <li onClick={() => selectLanguage('French')}><a className="dropdown-item" href="#"><i className="fi-rr-france flag-icon me-2"></i>French</a></li>
                  <li onClick={() => selectLanguage('Spanish')}><a className="dropdown-item" href="#"><i className="fi-rr-spain flag-icon me-2"></i>Spanish</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle dropdown-toggle-no-caret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://example.com/admin.jpg" alt="Admin avatar" className="me-2" />
                  Zerradi
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Our Policy</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

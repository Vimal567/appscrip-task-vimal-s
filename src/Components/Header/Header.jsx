import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Header.css';

const Header = () => {

  const languages = [
    { value: 'en', label: 'Eng' },
    { value: 'es', label: 'Esp' },
    { value: 'fr', label: 'Fr' },
    { value: 'de', label: 'Ger' },
    { value: 'zh', label: 'Chn' },
  ];
  const tabsList = ["Shop", "Skills", "Stories", "About", "Contact us"];

  const [selectedLanguage, setSlectedLanguage] = useState({ value: 'en', label: 'Eng' });
  const [selectedTab, setSelectedTab] = useState("Shop");

  return (
    <div className='header-section'>
      {/* Header main actions */}
      <div className="header-container">
        <img src="assets/toggle-icon.png" alt="toggle" className='toggle' />
        <img src="assets/brand-icon.png" alt="brand" className='brand' />
        <span className='logo'>LOGO</span>
        <div className="actions-container">
          <img src="assets/search-icon.png" alt="search" />
          <img src="assets/favourite-icon.png" alt="favourite" />
          <img src="assets/cart-icon.png" alt="cart" />
          <img src="assets/profile-icon.png" className='profile' alt="profile" />
          <span className='language-dropdown'>
            <Dropdown
              options={languages}
              selected={selectedLanguage}
              onSelect={setSlectedLanguage}
            />
          </span>
        </div>
      </div>

      {/* Tabs section */}
      <div className="tabs-container">
        {tabsList.map((tab, index) => {
          return <span onClick={() => setSelectedTab(tab)} key={index}>{tab}</span>
        })}
      </div>

      {/* Breadcrumb section */}
      <div className="breadcrumb-container">
        <span>HOME | </span>
        <span className='selected'>{selectedTab}</span>
      </div>
    </div>
  )
}

export default Header;
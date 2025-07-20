import './css/AppHeader.css';
import { MdDevices } from "react-icons/md";
import { InfoOutlined } from '@mui/icons-material';
const AppHeader = () => {
  return (
    <div className="app-header">
      {/* 1. App Info */}
      <div className="app-info-section">
        <div className='logoimg-div' style={{ width: '72px', height: '72px' }}>
          <img src="./images/logo.webp" alt="App Logo" className="app-logo me-2" />
        </div>
        <div className="app-info-text">
          <h1 className="app-name">Aviator Game</h1>
          <p className="developer-name">Casino co.</p>
          <p className="app-meta">Without ads · In-app purchases</p>
        </div>
      </div>

      {/* 2. Stats */}
      <div className="app-stats-section">
        <div className="stat ms-3">
          {/* <FaStar className="star-icon" /> */}
          <span className="rating ps-3" >4.9 ★</span>
          <p className="subtext">19K reviews</p>
        </div>
        <div className="divider" />
        <div className="stat">
          <span className="rating ps-3">500K+</span>
          <p className="subtext">Downloads</p>
        </div>
        <div className="divider" />
        <div className="stat">
          <span style={{ paddingLeft: '25px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <rect fill="none" width="20" height="20"></rect>
              <path d="M10.54,11.09L8.66,9.22l-1.02,1.02l2.9,2.9l5.8-5.8l-1.02-1.01L10.54,11.09z M15.8,16.24H8.2L4.41,9.66L8.2,3h7.6l3.79,6.66 L15.8,16.24z M17,1H7L2,9.66l5,8.64V23l5-2l5,2v-4.69l5-8.64L17,1z"></path>
            </svg>
          </span>
          <p className="subtext">Editor's Choice</p>
        </div>

        <div className="divider" />
        <div className="stat " style={{ marginTop: '3.5px' }}>
          <span style={{ alignContent: 'center', justifyContent: 'center', paddingLeft: '25px' }}><img src="./images/18+.png" className='png' style={{ width: '16px', background: 'contain' }} /></span>
          <p className="subtext">Rated for 18+ <InfoOutlined style={{ marginRight: '4px', fontSize: '12px', marginTop: '-2px' }} /></p>
        </div>
      </div>
      {/* 3. Install Button & Wishlist */}
      <div className="install-section">
        <button className="install-button " style={{height:''}}>Install</button>
        <div className="wishlist text-center">
          <svg className="my-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z" />
          </svg> Add to wishlist
        </div>
      </div>

      {/* 4. Device Info */}
      <div className="device-info">
        <p>  <MdDevices className="device-icon" />
          This app is available for all of your devices.
        </p>
      </div>

      {/* 5. Screenshots */}
      <div className="screenshots" style={{
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        gap: '12px',
        flexWrap: 'nowrap'
      }}>
        <div className="screenshot mobile" style={{ flexShrink: 0 }}>
          <img src="./images/bannerimg1.webp" alt="Screenshot 1" />
        </div>
        <div className="screenshot mobile" style={{ flexShrink: 0 }}>
          <img src="./images/bannerimg2.webp" alt="Screenshot 2" />
        </div>
        <div className="screenshot mobile" style={{ flexShrink: 0 }}>
          <img src="./images/bannerimg3.webp" alt="Screenshot 3" />
        </div>
        <div className="screenshotaa wide" style={{ flexShrink: 0 }}>
          <img src="./images/bannerimg4.webp" alt="Screenshot 4" />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

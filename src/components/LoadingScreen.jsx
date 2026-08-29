import logo from '../images/IMG_5717.png'
import './LoadingScreen.css'

export default function LoadingScreen({ isExiting }) {
  return (
    <div className={`loading-screen ${isExiting ? 'loading-screen--hidden' : ''}`}>
      <div className="loading-screen__inner">
        <img src={logo} alt="ReelHub Logo" className="loading-screen__logo" />
        <div className="loading-screen__spinner">
          <div className="loading-screen__spinner-bar"></div>
        </div>
      </div>
    </div>
  )
}

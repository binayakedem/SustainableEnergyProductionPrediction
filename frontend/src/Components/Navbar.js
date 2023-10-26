import React,{ useState, useEffect } from 'react'
import logo from "../image/logo.png"
import "./navbar.css"

const Navbar = () => {
  const [text, setText] = useState('');
  const message = "Sustainable Energy Production Prediction";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (currentIndex < message.length) {
        setText((prevText) => prevText + message[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        setText('');
      }
    }, 150); 

    return () => clearInterval(animationInterval);
  }, [currentIndex, message]);
  return (
    <>
    
    <nav className='main-nav'>
   
        <div className="nav-logo">
            {/* this is logo side nav */}
            <span className='logo-title'><span><img className='nav-in-logo' src={logo} alt="logo" /></span><span className='nav-title'><div className="character-by-character-animation">
      {text}
    </div></span></span>

        </div>
       
        <div className="right-nav">
            {/* this is list may require in future */}

        </div>
    </nav>
    
    </>
  )
}

export default Navbar
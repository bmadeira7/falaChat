import React from 'react'
import Clock from 'react-live-clock';

const NavBar = () =>(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="https://github.com/bmadeira7">Fala</a>
  <Clock className="clock" format={'dddd, h:mm:ss A'} ticking={true} timezone={'US/Eastern'} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
  </div>
</nav>
)

export default NavBar;
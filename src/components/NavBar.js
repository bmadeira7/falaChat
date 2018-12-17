import React from 'react'
import Clock from 'react-live-clock';

function refreshPage(){ 
  window.location.reload(); 
}

const NavBar = () =>(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="https://github.com/bmadeira7/falaChat">FALA</a>
  <Clock className="clock" format={'dddd MMMM D YYYY h:mm A'} ticking={true} timezone={'US/Eastern'} />
  
  <button type="button" onClick={ refreshPage } className="btn btn-outline-secondary logoutBtn">Logout</button>
</nav>
)

export default NavBar;
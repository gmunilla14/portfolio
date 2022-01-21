const NavBar = ({status}) => {
  return (
    <div className="navbar-holder">
      <div className="nav-content-holder">
        <div className={status ==='introduction'? "nav-section highlighted": 'nav-section'}>Home</div>
        <div className={status ==='creds'? "nav-section highlighted": 'nav-section'}>About</div>
        <div className={status ==='projects'? "nav-section highlighted": 'nav-section'}>Projects</div>
        <div className={status ==='contact'? "nav-section highlighted": 'nav-section'}>Contact</div>
      </div>
    </div>
  );
};

export default NavBar;

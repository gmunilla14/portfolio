const NavBar = ({status}) => {
  return (
    <div className="navbar-holder">
      <div className="nav-content-holder">
        <a href='#intro-section' className={status ==='introduction'? "nav-section highlighted": 'nav-section'}>Home</a>
        <a href='#creds-section' className={status ==='creds'? "nav-section highlighted": 'nav-section'}>About</a>
        <a href='#creds-skills-holder' className={status ==='projects'? "nav-section highlighted": 'nav-section'}>Projects</a>
        <a href='#contact-page-holder'className={status ==='contact'? "nav-section highlighted": 'nav-section'}>Contact</a>
      </div>
    </div>
  );
};

export default NavBar;

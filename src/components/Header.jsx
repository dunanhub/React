function Header({ onNavigate }) {
  return (
    <header>
      <div className="logo__block">
        <span>Beka</span>
      </div>
      <div className="nav__block">
        <nav>
          <ul>
            <li><button onClick={() => onNavigate("home")}>Home</button></li>
            <li><button onClick={() => onNavigate("about")}>About</button></li>
            <li><button onClick={() => onNavigate("contact")}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
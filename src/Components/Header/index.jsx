const Header = () => {
  return (
    <div>
      <header
        style={{
          background: "#222",
          color: "white",
          padding: "10px",
          textAlign: "center",
          height: "150px",
        }}
      >
        <h1>Welcome to Eshop</h1>
        <nav>
          <div>
            <a href="#home" style={{ color: "white", textDecoration: "none" }}>
              <h3>Start Shopping</h3>
            </a>
          </div>
          <div>
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>
              We hope all find a good experience
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

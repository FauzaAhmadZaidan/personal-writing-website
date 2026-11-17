function Navbar() {
    return (
        <header className="navbar">
            <a href="/" className="brand">
                little notes ♡
            </a>

            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="#stories">Stories</a>
                <a href="#about">About</a>
            </nav>
        </header>
    );
}

export default Navbar;
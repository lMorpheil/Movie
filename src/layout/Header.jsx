export default function Header() {
    return (
        <header>
            <nav className="purple darken-4">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">React Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/lMorpheil/Movie">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
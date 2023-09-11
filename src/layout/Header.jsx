function Header() {
    return(
        <nav className="green darken-3">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/kyrylsherstobaiev/simple_react_movie_project">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header};
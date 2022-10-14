const Navigation = () => {
    return <div className="nav">
        <div className="nav-title">Moravski Chamber Choir</div>
        <div className="nav-buttons">
            <a className="nav-buttons__about">About</a>
            <a className="nav-buttons__achievements">Achievements</a>
            <a className="nav-buttons__concerts">Concerts</a>
            <a className="nav-buttons__news">News</a>
            <a className="nav-buttons__contact">Contact</a>
            <div className="nav-buttons__language">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16L16.125 13.5375L32 16V32H0V16Z" fill="#FFDA44"/>
                    <path d="M0 0H32V16H0V0Z" fill="#338AF3"/>
                </svg>
            </div>
            <button className="nav-buttons__cooperation">Offer cooperation</button>
        </div>
        
    </div>
};

export default Navigation;
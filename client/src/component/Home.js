import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className="Homepage">
            <span className="Home-Intro">Welcome! Lets start customizing your items and publish them!</span>
            <Link to="/Account"><button className="Home-About">About Me</button></Link>
        </div>
    )
}
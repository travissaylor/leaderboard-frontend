import Navbar from './Navbar';
import '../css/app.css';

function Layout(props) {
    return (
        <div>
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{props.title} | Parade Leaderboard</title>

            </head>
            <header className="parade-header"><h1>Parade Leaderboard</h1></header>
            <div className="contentContainer">
                <Navbar active={props.title}/>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                <table>
                    {props.children}
                </table>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Layout;
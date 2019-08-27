import Navbar from './Navbar';
import '../css/app.css';
import Head from './Head';

function Layout(props) {
    return (
        <div>
            <Head title={props.title} />
            <header className="parade-header"><h1>Parade Leaderboard</h1></header>
            <div className="contentContainer">
                <Navbar active={props.title}/>
                {props.tableTitle != null &&
                    <h4>{props.tableTitle}</h4>
                }
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
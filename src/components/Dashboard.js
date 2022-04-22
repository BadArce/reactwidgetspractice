import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="widgets">
                <h2>Counter</h2>
                <h4>A simple counter app</h4>
                <Link to="/Counter"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Greeting</h2>
                <h4>Hello, Goodbye</h4>
                <Link to="/greeting"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Hidden</h2>
                <h4>Ninja Text in here</h4>
                <Link to="/hidden"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Resize</h2>
                <h4>Like the Matt Damon movie that nobody saw</h4>
                <Link to="/resize"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Alignment</h2>
                <h4>Everybody clap yo' hands!</h4>
                <Link to="/align"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Color Sliders</h2>
                <h4>Find yo' shade, baby</h4>
                <Link to="/color"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Exponents</h2>
                <h4>I have the power!</h4>
                <Link to="/exponents"><button>Open App</button></Link>
            </div>
            <div className="widgets">
                <h2>Swapi Character Finder</h2>
                <h4>May the Force be with you, Always.</h4>
                <Link to="/swapi"><button>Open App</button></Link>
            </div>
        </div>
    )
}
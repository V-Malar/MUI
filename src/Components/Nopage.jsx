import { Link } from "react-router-dom";
import review from '../Assets/nopg.avif';
import Hero from "./Hero";
import './Hero.css';

export default function Nopage()
{
    const mystyle = {

    fontSize: "x-large",
    color: "rgba(247, 19, 19, 0.712)",
    padding: "15px"
    };
    return (
        <div><br/><br/>
        <Hero src={review}/>
        <div className="rev">
        <center><h1>404 not found</h1></center><br/><br/>
        <center><Link style = {mystyle} to = "/">Go home..</Link></center>
        </div>
        </div>
    )
    }

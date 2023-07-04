import Layout from "./Layout";
import review from '../Assets/layout.jpg';
import Hero from "./Hero";
import './Hero.css';
import Reviews from './Reviews';


export default function Review() {
  return (
    <>
      <Layout />
      <Hero src={review} />
      <div className="rev">
      <h1>Client Feedback</h1>
      <p>We at <i>FARHAN FARAN</i> aims at offering cut-edge services to our customers. Satisfied Customers are Happy Customers is our motto and we work towards it. We also like to hear from them, regarding our services which keeps us motivated to enhance our services. Here are a few words of praises from our esteemed customers.</p>
      </div>
      <Reviews/>
    </>
  )
}
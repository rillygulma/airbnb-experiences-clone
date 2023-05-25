
import'./App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Cards';
import Data from "./components/Data";


 export default function App() {
  const cardElements = Data.map(card =>{
     return <Card 
     key={card.id}
     card={card}
     />
  });

    return (
    <div>
      <Navbar />
      <Hero />
      <section className="cardlist">
      {cardElements}
      </section>
     
    </div>
    
  );
}



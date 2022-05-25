
import './App.css';
import { Card } from './components/Card';

function App() {
  const card = [
    {
      id: "1",
      logo: "https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png",
      date: "17 Sep 2020",
      heading: "Apple Gift",
      subheading: "Payment",
      device: "MacOs - Mobile",
      color: "orange",
    },
    {
      id: "2",
      logo: "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-vector-logo-icons-png-4.png",
      date: "30 Oct 2022",
      heading: "Amazon Gift",
      subheading: "Pay",
      device: "Desktop - Mobile",
      color: "whitesmoke",
    },
  ];
 
  return (
    <div className="App">
      <Card cardData={card[0]} />
      <Card cardData={card[1]} />
    </div>
  );
}

export default App;

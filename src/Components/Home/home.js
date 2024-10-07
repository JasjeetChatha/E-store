import React, { Fragment } from "react";
import HomeCard from "./Home-Card";
import './Home-CSS/Home.scss';
function Home() {
  const pcs = [
    {
      id: 1,
      name: 'Alienware Aurora R12',
      price: 1599.99,
      brand: 'Dell',
      rating: '4.8/5',
      desc: 'Powerful gaming PC with Intel Core i7 and Nvidia RTX 3080.',
      imageUrl: 'path/to/alienware-aurora-r12.jpg',
    },
    {
      id: 2,
      name: 'HP Omen 30L',
      price: 1299.99,
      brand: 'HP',
      rating: '4.7/5',
      desc: 'Gaming desktop with AMD Ryzen 7 and Nvidia RTX 3070.',
      imageUrl: 'path/to/hp-omen-30l.jpg',
    },
    {
      id: 3,
      name: 'Corsair One i300',
      price: 2999.99,
      brand: 'Corsair',
      rating: '4.9/5',
      desc: 'Compact and powerful PC with Intel Core i9 and Nvidia RTX 3090.',
      imageUrl: 'path/to/corsair-one-i300.jpg',
    }
  ];
  
  const laptops = [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      price: 2499.99,
      brand: 'Apple',
      rating: '4.8/5',
      desc: 'Apple’s powerful MacBook with M1 Pro chip and a stunning display.',
      imageUrl: 'path/to/macbook-pro.jpg',
    },
    {
      id: 2,
      name: 'Dell XPS 15',
      price: 1999.99,
      brand: 'Dell',
      rating: '4.6/5',
      desc: 'Sleek and powerful ultrabook with 11th Gen Intel Core i7 and Nvidia GTX 1650.',
      imageUrl: 'path/to/dell-xps-15.jpg',
    },
    {
      id: 3,
      name: 'ASUS ROG Zephyrus G14',
      price: 1799.99,
      brand: 'ASUS',
      rating: '4.7/5',
      desc: 'Compact gaming laptop with AMD Ryzen 9 and Nvidia RTX 3060.',
      imageUrl: 'path/to/rog-zephyrus-g14.jpg',
    }
  ];
  
  const mobiles = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      price: 1099.99,
      brand: 'Apple',
      rating: '4.9/5',
      desc: 'Apple’s flagship smartphone with an advanced camera system and A16 Bionic chip.',
      imageUrl: 'path/to/iphone-14-pro.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22 Ultra',
      price: 1199.99,
      brand: 'Samsung',
      rating: '4.8/5',
      desc: 'Samsung’s top-tier phone with a large display and powerful camera features.',
      imageUrl: 'path/to/galaxy-s22-ultra.jpg',
    },
    {
      id: 3,
      name: 'Google Pixel 7 Pro',
      price: 899.99,
      brand: 'Google',
      rating: '4.7/5',
      desc: 'Google’s flagship phone with excellent AI features and a stunning camera.',
      imageUrl: 'path/to/pixel-7-pro.jpg',
    }
  ];
  
  const consoles = [
    {
      id: 1,
      name: 'PlayStation 5',
      price: 499.99,
      brand: 'Sony',
      rating: '4.9/5',
      desc: 'Sony’s latest gaming console with lightning-fast load times and immersive 4K gaming.',
      imageUrl: 'path/to/ps5.jpg',
    },
    {
      id: 2,
      name: 'Xbox Series X',
      price: 499.99,
      brand: 'Microsoft',
      rating: '4.8/5',
      desc: 'Microsoft’s fastest and most powerful gaming console for 4K gaming.',
      imageUrl: 'path/to/xbox-series-x.jpg',
    },
    {
      id: 3,
      name: 'Nintendo Switch OLED',
      price: 349.99,
      brand: 'Nintendo',
      rating: '4.7/5',
      desc: 'Nintendo’s popular hybrid console with a vibrant OLED display for portable gaming.',
      imageUrl: 'path/to/switch-oled.jpg',
    }
  ];
  
  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptate, quas, tempora quia quae quod dolorum doloremque
        voluptatem quibusdam laboriosam. Quod, voluptatem. Quisquam voluptates,
        voluptate, quas, tempora quia quae quod dolorum doloremque voluptatem
        quibusdam laboriosam. Quod, voluptatem.
      </p>

      <div className="container">
      <div className="pc">
        <h2>Pc's</h2>
        {pcs.map((pc) => (
      <HomeCard 
      key={pc.id}
      name={pc.name}
      price={pc.price}
      brand={pc.brand}
      rating={pc.rating}
      desc={pc.desc}
      imageUrl={pc.imageUrl}
      />
        ))}
      </div>
      </div>
      <div className="container">
      <div className="laptop">
        <h2>Laptops</h2>
        {laptops.map((lap) => (
      <HomeCard 
      key={lap.id}
      name={lap.name}
      price={lap.price}
      brand={lap.brand}
      rating={lap.rating}
      desc={lap.desc}
      imageUrl={lap.imageUrl}
      />
        ))}
      </div>
      </div>
      <div className="container">
      <div className="Mobile">
        <h2>Mobiles</h2>
        {mobiles.map((mob) => (
      <HomeCard
      key={mob.id}
      name={mob.name}
      price={mob.price}
      brand={mob.brand}
      rating={mob.rating}
      desc={mob.desc}
      imageUrl={mob.imageUrl}
      />
        ))}
      </div>
      </div>
      <div className="container">
      <div className="Console">
        <h2>Consoles</h2>
        {consoles.map((con) => (
      <HomeCard
      key={con.id}
      name={con.name}
      price={con.price}
      brand={con.brand}
      rating={con.rating}
      desc={con.desc}
      imageUrl={con.imageUrl}
      />
        ))}
    </div>
    </div>
    </Fragment>
  );
}
export default Home;
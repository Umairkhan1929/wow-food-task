import { useState } from 'react'
import './App.css'
import logo from './assets/foodLogo.jpeg'

import pizza from './assets/pizza-1.jpg'
import fries from './assets/fries-1.jpg'
import ratatouille from './assets/ratatouille-1.jpg'

import chowmein from './assets/chowmein-1.jpg'
import noddles from './assets/noddles.jpg'
import burger from './assets/burger-1.jpg'

import facebook from './assets/icons8-facebook-48.png'
import instagram from './assets/icons8-instagram-48.png'
import twitter from './assets/icons8-twitter-64.png'

function App() {
    const foods = [
        {name: 'Pizza', image:pizza},
        {name: 'Fries', image:fries},
        {name: 'Ratatouille', image:ratatouille}
    ]

    const foodNames = [
        {name: 'Chowmein', image:chowmein, price:'$5', ingredients:'Made with italian Sauce. Chicken and vegetables.'},
        {name: 'Noddles', image:noddles, price:'$8', ingredients:'Made with italian Sauce. Chicken and vegetables.'},
        {name: 'Burger', image:burger, price:'$12', ingredients:'Made with italian Sauce. Chicken and vegetables.'},
        {name: 'Ratatouille', image:ratatouille, price:'$22', ingredients:'Made with italian Sauce. Chicken and vegetables.'},
        {name: 'Fries', image:fries, price:'$10', ingredients:'Made with italian Sauce. Chicken and vegetables.'},
        {name: 'Pizza', image:pizza, price:'$20', ingredients:'Made with italian Sauce. Chicken and vegetables.'}
    ]

  return (
    <>
       <header>
        <nav className='nav'>
            <div className='logo' style={{display:'flex'}}>
                <img src={logo} alt='logo' style={{height:50}}/>
                <h1 class="logo">WowFood</h1>
            </div>

            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#foods">Foods</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
     </header>

    <section id="home"> 
            <input type="text" className='input-text' placeholder='Search for food'/> 
            <button class="search">Search</button>
    </section>

    <section id="foods">
        <h1>Explore Foods</h1>

    <div className='card-container'>
        {foods.map((food, index)=>(
            <div key={index} className='food-card'>
                <img src={food.image} alt={food.name} />
                <p>{food.name}</p>
            </div>
            ))}
    </div>
    </section>

<section className='food-menu'>
        <h1 class="heading">Food Menu</h1>

        <div className='food-menu-list'>
            {foodNames.map((food, index)=>(
                
                <div className='food-card-container'>
                    <img src={food.image} alt={food.name} />
                    <div className='food-card-details'>
                    <h1>{food.name}</h1>
                    <h2>{food.price}</h2>
                    <p>{food.ingredients}</p>
                    <button>Order Now</button>
                    </div>
                </div>
                ))}
        </div>
    <p className='see-all-foods'>See All Foods</p>
</section>

<footer id='about'>  
    <div className='about-img'>
        <a href="https://www.facebook.com"><img src={facebook} alt={facebook} /></a>
        <a href="https://www.instagram.com"><img src={instagram} alt={instagram} /></a>
        <a href="https://www.twitter.com"><img src={twitter} alt={twitter} /></a>
    </div>
    <p>copyrights &copy; 2024. All rights reserved</p>
</footer>
    </>
  )
}

export default App

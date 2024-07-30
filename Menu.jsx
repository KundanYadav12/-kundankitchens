import React from 'react'
import './Menu.css';
import food1 from "./image/kadi.jpg";
import dish2 from "./image/dish2.jpg";
import dish3 from "./image/dish3.jpg";
import dish4 from "./image/dish4.jpg";
import dish5 from "./image/dish5.jpg";
import dish6 from "./image/dish6.jpg";
import dish7 from "./image/dish7.jpg";
import dish8 from "./image/dish8.jpg";
import dish9 from "./image/dish9.jpg";
import dish10 from "./image/dish10.jpg";
// import dish21 from "./image/dish21.jpg"

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src={food1} alt="Dish 1" />
          <div className="menu-item-content">
            <h3>Dish 1</h3>
            <p>Description of asdfasdfsad adfasdfasd adsfasd
                adfasdfsdfgasd a dfadsfas
                fadfasd afasdfasdf Dish 1</p>
          </div>
        </div>
        <div className="menu-item">
          <img src={dish2} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>
        
        <div className="menu-item">
          <img src={dish3} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={dish4} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={dish5} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={dish6} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={dish7} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={dish8} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={dish9} alt="Dish 2" />
          <div className="menu-item-content">
            <h3>Dish 2</h3>
            <p>Description of Dish 2</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Menu

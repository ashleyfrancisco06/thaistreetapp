import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <div className="para">
            <div className="Rectangle">
                <h2>Menu</h2>
                <div className="content">
                <h2>Appetizers</h2>
                <ul className="apps">
                    <li>(VG) Vegetarian Spring Roll 7.00</li>
                    <li>(OG) Coconut Lemon Grass Chicken Spring Roll 8.00</li>
                    <li>(VG)(GF) Mushroom Dumplings 8.00</li>
                    <li>(VG)(GF) Fresh Summer Roll 8.00</li>
                    <li>(OG) Organic Chicken Curry Puff 6.00</li>
                    <li>(VG) Chick Pea Curry Potato Curry Puff 6.00</li>
                    <li>(VG)(GF) Organic Chiken Satay 8.50</li>
                    <li>Peking Duck Spring Roll 10.50</li>
                    <li>Chicken Mixed Shrimp Dumpling 8.00</li>
                    <li>(OG) Organic Chicken Nugget 8.00</li>
                    <li>Fried Chicken Mix Shrimp Dumpling 8.50</li>
                    <li>Coconut Lemongrass Curry Puff 6.00</li>
                    <li>Taco (Crispy Corn Tortilla) 7.00</li>
                </ul>
                <h2>Soup</h2>
                <ul className="soup">
                    <li>Spicy lemongrass (GF) 7.00</li>
                    <li>Coconut Galangal (GF) 7.00</li>
                    <li>Wonton Soup 7.00</li>
                </ul>

                <h2>Salad</h2>
                <ul className="salad">
                    <li>Thai Salad 6.00</li>
                </ul>

                <h2>Side Order</h2>
                <ul className="sides">
                    <li>Jasmine white rice 4.00</li>
                    <li>Organic brown rice 5.00</li>
                    <li>Sticky rice 4.00</li>
                    <li>Coconut sticky rice 5.00</li>
                    <li>Steamed broccoli 8.00</li>
                </ul>

                <h2>Roti wraps</h2>
                <ul className="roti">
                    <li>Roti with choice of Curry 7.00</li>
                    <li>Roti wrapped (multiple wrapped can be mixed and match) 7.00</li>
                </ul>

                <h2>Thai classic dishes</h2>
                <ul className="classic">
                    <li>Pad Thai Noodle 13.00</li>
                    <li>Pad Seelew Noodle 13.00</li>
                    <li>Drunk Man Noodle 13.00</li>
                    <li>Thai Fried Rice 13.00</li>
                </ul>

                <h2>Curry (GF)</h2>
                <ul className="curry">
                    <li>Organic Chicken 15.00</li>
                    <li>Grass Fed Steak 16.00</li>
                    <li>Berkshire Pork 19.00</li>
                    <li>Wild Caught Shrimp 17.00</li>
                </ul>

                <h2>Dessert</h2>
                <ul className="dessert">
                    <li>Mango Sticky Rice 9.00</li>
                    <li>Banana Roti Pancake 11.00</li>
                    <li>Strawberry Nutella Roti 13.00</li>
                    <li>Mango Cup 6.00</li>
                    <li>Watermelon Cup 7.00</li>
                    <li>Banana Sticky Rice 9.00</li>
                </ul>

                <h2>Drinks</h2>
                <ul className="drinks">
                    <li>Soda: Coke|D Coke|Sprite 2.50</li>
                    <li>Thai Iced Tea 5.00</li>
                    <li>Thai Iced Coffee 5.00</li>
                    <li>Poland Spring 2.00</li>
                </ul>

                </div>
            </div>
        </div>
    )
}

export default Menu
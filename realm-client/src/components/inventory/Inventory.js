import "./Inventory.css"

import React  from "react";
import Card from "../cards/Card";

function Inventory() {
    return (
        <div className="card-grid">
            <Card
                id={1}
                name="Racoon healing"
                type="spell"
                description="Card description"
                quote="Card quote"
                attack={5}
                defense={3}
                cost={2}
                imageUrl="https://th.bing.com/th/id/OIG.gz5HH809pr3g.D6VEsAN?pid=ImgGn"
                foil={false}
            />


            <Card
                id={1}
                name="Racoon desolation"
                type="spell"
                description=" Every turn, Racoon desolation gives you an extra mana point, regardless of your mana level."
                quote="The tears of the raccoon people are full of mystery"
                attack={5}
                defense={3}
                cost={2}
                imageUrl="https://th.bing.com/th/id/OIG.gz5HH809pr3g.D6VEsAN?pid=ImgGn"
                foil={false}
            />


        </div>
    );

}

export default Inventory;
import "./Inventory.css"
import "../../assets/css/style.css"

import React  from "react";
import Card from "../cards/Card";

function Inventory() {
    return (
    <div className="container">
        <h1 className="title">Realm</h1>
        <h2 className="subtitle">End of the era</h2>

        <div className="card-grid">
                <Card
                    id={1}
                    name="Racoon healing"
                    type="spell"
                    description="Remove all card from the cemetery. At the end of the turn, return those card and take two of them in your hand. Then draw a card."
                    quote="The raccoons in the Ashram forest are so connected to nature that they are said to be capable of miracles"
                    quoteAuthor="Edwin II, monarch prodigy"
                    attack={5}
                    defense={3}
                    cost={2}
                    imageUrl="https://th.bing.com/th/id/OIG.gz5HH809pr3g.D6VEsAN?pid=ImgGn"
                    foil={false}
                />

                <Card
                    id={2}
                    name="Racoon desolation"
                    type="dream"
                    description="Every turn, Racoon desolation gives you an extra mana point, regardless of your mana level."
                    quote="The tears of the raccoon people are full of mystery"
                    quoteAuthor="Encyclopedia Vol III"
                    attack={5}
                    defense={3}
                    cost={2}
                    imageUrl="https://th.bing.com/th/id/OIG.RwKZPcKEQ4CGLSCFbrDe?pid=ImgGn"
                    foil={false}
                />

                <Card
                    id={3}
                    name="Forest racoon rage"
                    type="invocation"
                    description=""
                    quote="It is very rare to see these peaceful tribe take up arms. No one has ever described them, and perhaps not for nothing."
                    quoteAuthor="Aganim, sorcerer master"
                    attack={5}
                    defense={3}
                    cost={2}
                    imageUrl="https://th.bing.com/th/id/OIG.DMWpOjW1.sZxsOJSXshH?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                    foil={false}
                />


                <Card
                    id={1}
                    name="Giant mutant racoon"
                    type="ritual"
                    description= "Can only be summoned by sacrificing the Raccoon desolation card. When summoned, Giant mutant raccoon inflicts 5 points of damage on a target of its choice."
                    quote="Their close bond to nature allows them to harness Gaia's powers"
                    quoteAuthor="Aganim, sorcerer master"
                    attack={9}
                    defense={5}
                    cost={2}
                    imageUrl="https://th.bing.com/th/id/OIG.AMnW8Y1wq5mcKFgoh26W?pid=ImgGn"
                    foil={false}
                />


            </div>
        </div>
    );

}

export default Inventory;
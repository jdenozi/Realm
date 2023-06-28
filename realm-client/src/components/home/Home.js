import React, {useEffect, useState} from 'react';
import './Home.css';
import Connection from './connection/Connection';
import Menu from './menu/Menu';
import '../../assets/css/style.css';

const Home = () => {
    const [currentComponent, setCurrentComponent] = useState('Connection');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setCurrentComponent('Menu');
        }
    };

    useEffect(() => {
        if (currentComponent === 'Menu') {
            const canvas = document.getElementById("ashes");
            const ctx = canvas.getContext("2d");
            const W = window.innerWidth;
            const H = window.innerHeight;

            var layers = [];

            layers.push({
                size: 1,
                speed: (1/4),
                count: 30,
                particules: []
            });

            function draw()
            {
                ctx.clearRect(0, 0, W, H);

                ctx.fillStyle = "rgba(255, 255, 255, 1)";
                ctx.beginPath();
                for(var l of layers)
                {
                    for(var p of l.particules)
                    {
                        ctx.moveTo(p.x, p.y);
                        var hs = l.size / 2;
                        ctx.fillRect(p.x - hs, p.y - hs, hs*2, hs*2);
                    }
                }
                ctx.fill();
                update();
            }

            function update()
            {
                for(var l of layers) {
                    for(var p of l.particules) {
                        if(p.y < 0) {
                            p.y = H + 10;
                        }
                        p.y -= l.speed;
                    }
                    if(l.particules.length < l.count) {
                        for(var i = 0; i < l.count; i++) {
                            var particule = {
                                x: Math.random() * W,
                                y: Math.random() * H
                            };
                            l.particules.push(particule);
                        }
                    }
                }
            }
            setInterval(draw, 25);

        }
    }, [currentComponent]);


    return (
            <section id="home" className="home" onKeyDown={handleKeyPress} tabIndex={0}>
                <h1 className="title">Realm</h1>
                <h2 className="subtitle">End of the era</h2>

                {currentComponent === 'Connection' && <Connection />}
                {currentComponent === 'Menu' && <Menu />}

                <canvas id="ashes"></canvas>

            </section>

    );

};


export default Home;




import React, {useEffect, useRef, useState} from 'react';
import './Home.css';
import Connection from './connection/Connection';
import Menu from './menu/Menu';
import Inventory from "../inventory/Inventory";
import '../../assets/css/style.css';

const Home = () => {
    const [currentComponent, setCurrentComponent] = useState('Connection');
    const canvasRef = useRef(null);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setCurrentComponent('Menu');
        }
    };

    const handleMenuButtonClick = () => {
        setCurrentComponent('Inventory');
    };

    useEffect(() => {
        if(currentComponent === "Menu"){
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const W = canvas.width;
            const H = canvas.height;
            const rectangles = [];

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            const getRandomColor = () => {
                const red = Math.floor(Math.random() * 220);
                const green = Math.floor(Math.random() * 50);
                const blue = 0; // Set blue to 0 for the gradient effect
                return `rgb(${red}, ${green}, ${blue})`;
            };

            function createRectangle() {
                const x = W;
                const y = Math.random() * H;
                const width = getRandomInt(10, 40);
                const height = getRandomInt(10, 30);
                const speed = Math.random() * 2 + 1;
                const color = getRandomColor();
                const dx = -1;
                const dy = Math.random() * 2 - 1; // Random vertical movement
                const radius = getRandomInt(1, Math.min(width, height) / 7); // Random radius within limits
                rectangles.push({ x, y, width, height, speed, color, dx, dy, radius});
            }

            function draw() {
                context.clearRect(0, 0, W, H);

                for (let i = rectangles.length - 1; i >= 0; i--) {
                    const rect = rectangles[i];

                    context.fillStyle = rect.color;
                    context.beginPath();
                    context.arc(rect.x, rect.y, rect.radius, 0, Math.PI * 2);
                    context.closePath();
                    context.fill();

                    rect.x += rect.dx * rect.speed;
                    rect.y += rect.dy * rect.speed;

                    if (rect.x + rect.radius < 0 || rect.y - rect.radius > H) {
                        rectangles.splice(i, 1);
                    }
                }

                if (Math.random() < 0.7) {
                    createRectangle();
                }

                requestAnimationFrame(draw);
            }

            requestAnimationFrame(draw);
        }

    }, [currentComponent]);

    return (

        <div style={{ position: 'relative' }}>
            <canvas id="ashesCanvas" ref={canvasRef}></canvas>
            <section id="home" className="home" onKeyDown={handleKeyPress} tabIndex={0} style={{ position: 'absolute', top: 0, left: 0 }}>
                <h1 className="title">Realm</h1>
                <h2 className="subtitle">End of the era</h2>
                {currentComponent === 'Connection' && <Connection />}
                {currentComponent === 'Menu' && <Menu handleButtonClick={handleMenuButtonClick} />}
                {currentComponent === 'Inventory' && <Inventory />}
            </section>
        </div>

    );
};

export default Home;




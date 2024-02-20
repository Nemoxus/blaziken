// Select the circle element
const circleElement = document.querySelector('.circle');

// Initialize mouse and circle coordinates
const mouse = { x: 0, y: 0 },
    circle = { x: 0, y: 0 };

// Update mouse coordinates on mousemove event
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX; // Use clientX and clientY for mouse coordinates
    mouse.y = e.clientY;
});

// Set the speed of the movement
const speed = 0.15;

// Define the animation function
const tick = () => {
    // Calculate the distance to move for each frame
    const dx = mouse.x - circle.x;
    const dy = mouse.y - circle.y;

    // Move the circle towards the mouse cursor with smoothness
    circle.x += dx * speed;
    circle.y += dy * speed;

    // Update the position of the circle
    circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

    // Request the next animation frame
    window.requestAnimationFrame(tick);
}

// Start the animation
tick();
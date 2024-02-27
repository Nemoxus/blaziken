// Select the circle element
const circleElement = document.querySelector('.circle');

// Initialize mouse and circle coordinates
const mouse = { x: 0, y: 0 },
    prev_mouse = {x : 0, y : 0},
    circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

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
    const translatetransform = `translate(${circle.x}px, ${circle.y}px)`;

    // Elastic Squeeze Calculation
    const delMousex = mouse.x - prev_mouse.x;
    const delMousey = mouse.y - prev_mouse.y;
    prev_mouse.x = mouse.x;
    prev_mouse.y = mouse.y;

    const mouse_vel = Math.min(Math.sqrt(delMousex**2 + delMousey**2) * 4, 150);

    const scale_val = (mouse_vel/150) * 0.5;

    currentScale += (scale_val - currentScale) * speed;

    const scaletransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

    // Rotation of cursor
    const angle = Math.atan2(delMousex, delMousey) * 180/Math.PI;

    if (mouse_vel > 20){
        currentAngle = angle;
    }

    const rotatetransform = `rotate(${currentAngle}deg)`;

    // Application of transformations
    circleElement.style.transform = `${translatetransform} ${scaletransform} ${rotatetransform}`;

    // Request the next animation frame
    window.requestAnimationFrame(tick);
}

// Start the animation
tick();

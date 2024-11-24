// Selecting the animated object
const object = document.getElementById('animatedObject');
let scale = 1; // Initial scale
let positionZ = 0; // Initial depth

// Function to animate the object
function animateObject() {
  scale += 0.05; // Increase scale
  positionZ += 5; // Increase position to create 3D effect
  
  // Apply new scale and position
  object.style.transform = `scale(${scale}) translateZ(${positionZ}px)`;
  
  // Stop the animation after a certain size
  if (scale < 3) {
    requestAnimationFrame(animateObject);
  }
}

// Start the animation
animateObject();

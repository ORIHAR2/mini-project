// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9a9a9a); // Set background to light gray

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// renderer.setSize(window.innerWidth, window.innerHeight);
let ele = document.getElementById('model');
const width = ele.clientWidth;
const height = ele.clientHeight;
renderer.setSize(width, height);
ele.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 3.5); // Increase intensity
light.position.set(1, 1, 1).normalize();
scene.add(light);

let model;
let initialRotationY = Math.PI / 4; // 45 degrees to the right
let targetRotationY = initialRotationY; // Target rotation initialized

// Load the Lady Justice model using GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load('model.glb', function (gltf) {
    model = gltf.scene;
    model.scale.set(5, 5, 5);  // Adjust scale
    model.position.set(0, 1, 1); // Center the model in the scene

    // Set the initial rotation of the model to 45 degrees to the right
    model.rotation.y = initialRotationY;

    scene.add(model);
    
    // Position the camera
    camera.position.set(0, 1.5, 7); // Move camera closer by reducing the z value
    camera.lookAt(new THREE.Vector3(0, 1.5, 0)); // Make the camera look at the model
    
    // Start animation
    animate();
}, undefined, function (error) {
    console.error(error);
});

// Track mouse movement
const mouse = new THREE.Vector2();

let isMouseOverDiv = false;

// Get the target div
const modelDiv = document.getElementById('model');

// Add event listeners to the div
modelDiv.addEventListener('mouseenter', () => {
    isMouseOverDiv = true;
});

modelDiv.addEventListener('mouseleave', () => {
    isMouseOverDiv = false;
    // Smoothly reset the model's rotation to the initial position
    if (model) {
        targetRotationY = initialRotationY;
    }
});

modelDiv.addEventListener('mousemove', (event) => {
    if (isMouseOverDiv && model) {
        // Calculate mouse position relative to the div
        const rect = modelDiv.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left) / rect.width;

        // Map mouseX to a range between -90 degrees and +90 degrees (i.e., -π/2 to π/2 radians)
        const rotationY = (mouseX - 0.5) * (Math.PI); // -π/2 to +π/2 (90°)

        // Apply the calculated rotation to the model (add it to the initial 45 degrees)
        targetRotationY = initialRotationY + rotationY;
    }
});

// Smoothly interpolate the rotation
const rotationSpeed = 0.01; // Slower speed for smoother animation

function rotateModelSmoothly() {
    if (model) {
        // Gradually adjust the current rotation towards the target rotation
        const deltaRotation = targetRotationY - model.rotation.y;
        model.rotation.y += deltaRotation * rotationSpeed;
        
        // Optionally clamp the rotation to avoid excessive movement
        const maxRotation = Math.PI / 2; // Maximum allowed rotation
        model.rotation.y = Math.max(-maxRotation, Math.min(maxRotation, model.rotation.y));
    }
}

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Smoothly rotate the model based on mouse movement
    rotateModelSmoothly();

    // Render the scene
    renderer.render(scene, camera);
}
animate();

// Adjust scene on window resize
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
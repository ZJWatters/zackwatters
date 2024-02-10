import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
//import { OrbitControls } from 'https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

//const lightHelper = new THREE.PointLightHelper(pointLight)
//const gridHelper = new THREE.GridHelper(500, 50); // xy plane
//scene.add(lightHelper, gridHelper)

//const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(500).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('textures/space.jpg');
scene.background = spaceTexture;

/* Avatar

const zackTexture = new THREE.TextureLoader().load('textures/zack.jpg');

const zack = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: zackTexture }));

scene.add(zack);

zack.position.z = 25;
zack.position.x = 5;
zack.rotateY(40)
*/

// Sun

const sunTexture = new THREE.TextureLoader().load('textures/sun.png');
const normalTexture = new THREE.TextureLoader().load('textures/normal.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(16, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: normalTexture,
  })
);

scene.add(sun);
sun.position.z = 0;

// Mercury

const mercuryTexture = new THREE.TextureLoader().load('textures/mercury.jpg');

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(1.15, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    normalMap: normalTexture,
  })
);

scene.add(mercury);

mercury.position.z = 46;
mercury.position.setX(5);

// Venus

const venusTexture = new THREE.TextureLoader().load('textures/venus.jpg');

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(2.9, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
    normalMap: normalTexture,
  })
);

scene.add(venus);

venus.position.z = 70;
venus.position.setX(5);

// Earth

const earthTexture = new THREE.TextureLoader().load('textures/earth.jpg');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalTexture,
  })
);

scene.add(earth);

earth.position.z = 100;
earth.position.setX(5);
earth.rotation.x = Math.PI / -4;

// Moon

const moonTexture = new THREE.TextureLoader().load('textures/moon.jpg');
const moonOrbitRadius = 6; // Set the radius of the moon's orbit around the Earth
const moonOrbitSpeed = 0.0005; // Set the speed of the moon's orbit

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.82, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = earth.position.z;
moon.position.setX(1);
moon.position.setY(1);

// Mars

const marsTexture = new THREE.TextureLoader().load('textures/mars.jpg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(1.6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture,
  })
);

scene.add(mars);

mars.position.z = 140;
mars.position.setX(5);
mars.rotation.x = Math.PI / -4;

// Jupiter

const jupiterTexture = new THREE.TextureLoader().load('textures/jupiter.jpg');

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(14, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalTexture,
  })
);

scene.add(jupiter);

jupiter.position.z = 200;
jupiter.position.setX(10);

// Saturn

const saturnTexture = new THREE.TextureLoader().load('textures/saturn.jpg');

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
  })
);

scene.add(saturn);

saturn.position.z = 300;
saturn.position.setX(10);
saturn.rotation.x = Math.PI / -4;

// Satrun Rings

const ringsTexture = new THREE.TextureLoader().load('textures/rings.jpg');

const ring = new THREE.Mesh(
  new THREE.RingGeometry( 12.8, 17, 32 ),
    new THREE.MeshStandardMaterial({
      map: ringsTexture,
      side: THREE.DoubleSide
      })
);

scene.add(ring);

ring.position.z = saturn.position.z;
ring.position.setX(10);
ring.rotation.x = Math.PI / 4;  // Rotate 90 degrees around the X-axis

// Uranus

const uranusTexture = new THREE.TextureLoader().load('textures/uranus.jpg');

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
  })
);

scene.add(uranus);

uranus.position.z = 400;
uranus.position.setX(10);
uranus.rotation.x = Math.PI / 2; 

// Neptune

const neptuneTexture = new THREE.TextureLoader().load('textures/neptune.jpg');

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
  })
);

scene.add(neptune);

neptune.position.z = 500;
neptune.position.setX(10);
neptune.rotation.x = Math.PI / -4;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.07;
  camera.position.x = t * 0.005;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  // Planet 
  sun.rotation.y += 0.017;
  mercury.rotation.y += 0.293;
  venus.rotation.y -= 1.21;
  earth.rotation.y += 0.005;
  moon.rotation.y += 0.005;
  mars.rotation.y += 0.0051;
  jupiter.rotation.y += 0.002;
  saturn.rotation.y += 0.0021;
  ring.rotation.z += 0.005;
  uranus.rotation.y += 0.0035;
  neptune.rotation.y += 0.0033;

  // Moon orbit around Earth
  moon.position.x = earth.position.x + Math.cos(Date.now() * moonOrbitSpeed) * moonOrbitRadius;
  moon.position.z = earth.position.z + Math.sin(Date.now() * moonOrbitSpeed) * moonOrbitRadius;

  //controls.update();

  renderer.render(scene, camera);
}

animate();

//Scene
var scene = new THREE.Scene();
var width = window.innerWidth;
var height = window.innerHeight/2;

//Camera
var camera = new THREE.PerspectiveCamera(50, width/height, 1, 1000);

//Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var cubeGeometry = new THREE.BoxGeometry
					(1,1,1);
var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xff0000});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

var tetra = new THREE.Mesh(new THREE.TetrahedronGeometry(30), new THREE.MeshLambertMaterial({ color: 0x00ffff }));
	
var light = new THREE.PointLight(0xffffff, 1.5);

cube.position.y = 15;
tetra.position.set(0,-25,-45);
light.position.set(10,15,70);

scene.add(cube);
scene.add(tetra);
scene.add(light);

tetra.rotation.set(0,0,Math.PI/4);
cube.rotation.z = Math.PI/4;
cube.rotation.x = Math.PI/4;
camera.position.z = 100;

function render () {
	requestAnimationFrame(render);
    
	cube.rotation.y += synth1.get("carrier.freq")/100;
	cube.scale.x = cube.scale.y = cube.scale.z = 
		(cubeSize);
		
	renderer.render(scene, camera);
};

render();



// // import './style.css';
// // import * as THREE from 'three';

// // // Scene
// // const scene = new THREE.Scene()

// // // Object
// // const geometry = new THREE.BoxGeometry(1, 1, 1)
// // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// // const mesh = new THREE.Mesh(geometry, material)
// // scene.add(mesh)

// // // Sizes
// // const sizes = {
// //     width: 800,
// //     height: 600
// // }

// // // Camera
// // const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// // camera.position.z = 3
// // scene.add(camera)

// // // Renderer
// // const renderer = new THREE.WebGLRenderer({
// //     canvas: document.querySelector('canvas.webgl')
// // })
// // renderer.setSize(sizes.width, sizes.height)
// // renderer.render(scene, camera)

// import './style.css';
// import * as THREE from 'three';
import bubbleartroom from './assets/images/bubbleartroom.jpg';

// // Sizes
// const sizes = {
//     width: 800,
//     height: 600
// }

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
// camera.position.z = 1

// // Scene
// const scene = new THREE.Scene()

// // texture loader
// // const loader = new THREE.TextureLoader(); // loads images

// // art room loader

// // const artRoom = loader.load('https://i.imgur.com/EW7s2zy.jpeg');


// // Object
// const geometry = new THREE.SphereGeometry(0.2, 32, 16) //radius, 
// // const material = new THREE.MeshBasicMaterial({ map: artRoom })
// const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://i.imgur.com/EW7s2zy.jpeg') })
// // material.side = THREE.BackSide
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)


// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('canvas.webgl')
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

// // to do 

// // load desktop image

// // assign that as the materials map

import * as THREE from 'three';

let camera, scene, renderer;
let geometry, material, mesh;



init();

/**
 * camera
 * - x 0-359 (maybe not accurate, but it has some min and max)
 * - y 0-359
 * - z 0-359 (dont need to control this)
 * 
 * mouse down
 * - starting position x and y
 * - mouse moves new x and y
 * - difference between starting x and new x and starting y and new y (delta x and delta y)
 * work out where they click, then from there calculate how far the x and y is from their original positions x and y, and from there calculate screen panning
 * 
 * click and then draggy
 * 
 * user clicks
 *  - mouse is at 10, 10
 *  - camera rotation is 0,0
 * 
 * user drags
 *   - mouse was at 10, 10
 *   - mouse is now at 20, 25
 *   - camera ration was at 0,0
 * - update camera rotation to be 10x, 15y
 * 
 * 
 * add or subtract number from camera, not just set it
 * 
 * 
 */

let isDragging = false;

function mouseDown(e) {
    isDragging = true;
  console.log('mouse down, wow');
}

function mouseDrag(e) {
    if (isDragging){
    console.log(camera.rotation.y)
    camera.rotateX(e.movementX / 1000);
    camera.rotateY(e.movementY / 1000);
    // make a minimim and max value...
    // handle what to do when those are exceded, like does it move more up to that point and then stay static???
    }
}

function mouseUp(e) {
    isDragging = false;
  console.log('mouse down, oh');
}

document.body.addEventListener('mousedown', mouseDown);
document.body.addEventListener('mouseup', mouseUp);
document.body.addEventListener('mousemove', mouseDrag);


function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.y = -2;

    // document.body.addEventListener('click', (e) => {
    //     camera.rotateX(300)
    //     camera.rotateY(300)
    // });

    scene = new THREE.Scene();

    geometry = new THREE.SphereGeometry( 5, 32, 16 );
    material = new THREE.MeshBasicMaterial( {
    		map: new THREE.TextureLoader().load(
        		bubbleartroom
        )
    } );

    mesh = new THREE.Mesh( geometry, material );
    mesh.material.side = THREE.DoubleSide;
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

}

function animation( time ) {

    // mesh.rotation.x = time / 2000;
    // mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );

}
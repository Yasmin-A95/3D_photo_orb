import bubbleartroom from './assets/images/bubbleartroom.jpg';
import * as THREE from 'three';
import { FirstPersonControls } from './controls';

let camera, scene, renderer, firstPersonController;
let geometry, material, mesh;

const clock = new THREE.Clock();

init();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.y = -2;

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
    renderer.setAnimationLoop( animation ); // this is needed!!!!!! and anim function!!!
    // frames per second!!! that's what makes stuff fuckin real. it means how quickly can the cmputer read what buttons are being pressed, how quick can it read it, process it, decide what needs to change in response to those buttons being pressed, and then draw that on screen. that's what frames per second is. 

    // that's how we animate, we take the inputs, we calculate, and we draw it to the screen!

    // i dont have to do allllll of that, there's helpers, butttt when doing something like controls for a camera (or loading texture), we do need to make sure we are constantly re rendering the screen!!!!

    // basically a lot of the app is going to be called by the animation function. the animation is a big controller for a lot of things 
    document.body.appendChild( renderer.domElement );
    firstPersonController = new FirstPersonControls(camera, renderer.domElement);
    firstPersonController.movementSpeed = 5;
    firstPersonController.lookSpeed = 0.1;

}

function animation( time ) { // big boi

    // mesh.rotation.x = time / 2000;
    // mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );
    firstPersonController.update(clock.getDelta()); // looky, firstpersonController.update (what the fuck you should do) // it takes the delta of time (math time shit), how long has it been since the last page render, then update it,

}
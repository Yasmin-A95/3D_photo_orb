import * as THREE from 'three';

let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.SphereGeometry( 0.2, 32, 16 );
    material = new THREE.MeshBasicMaterial( {
    		map: new THREE.TextureLoader().load(
        		'https://i.imgur.com/EW7s2zy.jpeg'
        )
    } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

}

function animation( time ) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );

}
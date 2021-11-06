import { PerspectiveCamera } from "@react-three/drei";
import { Clock, WebGLRenderer } from "three";
import { Scene } from "../SkyBox/SkyBox";

// either relative or absolute path
VolumetricFire.texturePath = './textures/';

var width = window.innerWidth;
var height = window.innerHeight;
var clock = new Clock();
var scene = new Scene();
var camera = new PerspectiveCamera( 60, width / height, .1, 1000 );
camera.position.set( 0, 0, 3 );
var renderer = new WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );


var axisHelper = new axisHelper( 5 );
scene.add( axisHelper );


var fireWidth  = 2;
var fireHeight = 4;
var fireDepth  = 2;
var sliceSpacing = 0.5;

var fire = new VolumetricFire(
  fireWidth,
  fireHeight,
  fireDepth,
  sliceSpacing,
  camera
);
scene.add( fire.mesh );
// you can set position, rotation and scale
// fire.mesh accepts mesh features
fire.mesh.position.set( 0, fireHeight / 2, 0 );


( function animate () {

  requestAnimationFrame( animate );

  var elapsed = clock.getElapsedTime();

  camera.position.set(
    Math.sin( elapsed * 0.1 ) * 8,
    Math.sin( elapsed * 0.5 ) * 10,
    Math.cos( elapsed * 0.1 ) * 8
  );
  camera.lookAt( scene.position );

  fire.update( elapsed );

  renderer.render( scene, camera );

} )();
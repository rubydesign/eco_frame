/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import { Scene , Group, BoxGeometry , Mesh, MeshBasicMaterial, WebGLRenderer , PerspectiveCamera} from 'three';

console.realLog = console.log;
window.changed = true;
console.log = function () {
  if (arguments[0] != 'THREE.WebGLRenderer')
          console.realLog.apply (console, arguments);
};

import "sliders"

function post( height , width , size){
  geometry = new BoxGeometry( height, width,  size );
  geometry.translate( height / 2 , width / 2 , size / 2)
  material = new MeshBasicMaterial( { color: "rgb(230, 145, 60)" } );
  return new Mesh( geometry, material );
}
var camera, scene, renderer;
var geometry, material, mesh;


camera = new PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10000 );
camera.position.z = 1000;

scene = new Scene();
var group = new Group();
group.add( post(15 , 200 , 15) );
var post2 = post(15 , 200 , 15).translateX( 300 );
group.add( post2 );
var beam = post(315 , 15 , 15)
beam.translateY( 200 );
group.add( beam );

scene.add( group );

renderer = new WebGLRenderer({ antialias: true })

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function changed() {
  group.rotateY(.1)
  group.rotateX(.1)
  renderer.render( scene, camera );
}
window.changed = changed;
changed();

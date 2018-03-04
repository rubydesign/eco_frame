// This is a manifest file that'll be compiled into application, which will include all the files
// listed below.

//=require xeo
//=require vue
//=require fque
//=require range_slider
//=require vue_controller
//=require range_slider

//=require_directory ./frame

//= require_self

xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" });
xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
xeogl.scene.camera.view.eye = [-900, 200, -700];
xeogl.scene.camera.view.look = [0, 00, 0];
var camera_control = new xeogl.CameraControl();
var eco_que = new fQueue();
var eco_frame = new Frame();
// xeogl.scene.clips.clips = [
//     new xeogl.Clip({
//         pos: [0, 0, -300.0],
//         dir: [1, -1, 1.0],
//         active: true
//     })
// ];

// This is a manifest file that'll be compiled into application, which will include all the files
// listed below.

//=require xeo
//=require vue
//=require range_slider
//=require vue_controller
//=require range_slider
//=require entity_transforms

//=require frame
//=require post_beam
//=require plate
//=require floor
//=require harja

//= require_self

xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" });
xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
xeogl.scene.camera.view.eye = [-400, 200, -1000];
new xeogl.CameraControl();

var eco_frame = new Frame();

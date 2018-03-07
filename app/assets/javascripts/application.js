// This is a manifest file that'll be compiled into application, which will include all the files
// listed below.

//=require xeo
//=require vue
//=require fque
//=require range_slider
//=require vue_controller
//=require range_slider

//=require_directory ./frame
//=require house

//= require_self

xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" });
xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
xeogl.scene.camera.view.eye = [-830, 50, -780];
xeogl.scene.camera.view.look = [80, -170, -100];
var camera_control = new xeogl.CameraControl();
var eco_que = new fQueue();
function once(){
  first = eco_que.shift();
  if (typeof first == "function"){
    first.call()
  }
}
xeogl.scene.on("tick" , function(){
  if(VueController._data.animated){
    i = VueController._data.animated;
    while(i > 0 ) {once(); i -= 1}
  }else{
    while(eco_que.length > 0 ) once();
  }
});

var eco_frame = new House();

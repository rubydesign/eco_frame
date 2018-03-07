// This is a manifest file that'll be compiled into application, which will include all the files
// listed below.

//=require xeogl.min
//=require vue
//=require fque
//=require range_slider
//=require vue_controller
//=require range_slider

//=require_directory ./frame
//=require house

//= require_self

xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" , transparent: true});
xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
xeogl.scene.camera.view.eye = [-830, 50, -780];
xeogl.scene.camera.view.look = [80, -170, -100];
var camera_control = new xeogl.CameraControl();
var materials = {
  wood:  new xeogl.LambertMaterial({ color: [230/300, 145/300, 60/300]}),
  floor: new xeogl.LambertMaterial({ color: [0/255, 6/255, 0/255]}),
  red:   new xeogl.SpecularMaterial({ emissive: [6/255, 0/255, 0/255], glossiness: 0.33,
               specular: [6/255, 0/255, 0/255], diffuse: [6/255, 0/255, 0/255],}),
  black: new xeogl.MetallicMaterial({ baseColor: [2/255, 2/255, 2/255],
            roughness: 0.5 }),
  inner: new xeogl.LambertMaterial({ color: [100/255, 100/255, 100/255]}),
  grey:  new xeogl.LambertMaterial({ color: [30/255, 30/255, 30/255]})
};

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
    while(i < 11 ) {once(); i += 1}
  }else{
    while(eco_que.length > 0 ) once();
  }
});

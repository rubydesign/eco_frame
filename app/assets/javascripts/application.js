// This is a manifest file that'll be compiled into application, which will include all the files
// listed below.

//=require xeogl.min
//=require vue
//=require fque
//=require range_slider
//=require vue_controller
//=require range_slider
//=require entity_transforms

//=require frame/eco_model
//=require frame/floor
//=require frame/floor_beams
//=require frame/post

//=require frame/no_truss
//=require frame/collar
//=require frame/hammer
//=require frame/stopped
//=require frame/king
//=require frame/pulpetti
//=require frame/shell
//=require frame/slope
//=require frame/space
//=require frame/tuuli
//=require frame/walls

//=require house

//= require_self

xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" , transparent: true});
xeogl.scene.camera.view.eye = [-830, 50, -780];
xeogl.scene.camera.view.look = [80, -170, -100];
var camera_control = new xeogl.CameraControl();
var materials = {
  wood:  new xeogl.MetallicMaterial({ baseColor: [230/250, 145/250, 60/250],
    metallic: 0, roughness: 0.55,
    baseColorMap: { src: "/wood.jpg" },emissiveMap: { src: "/wood.jpg" },}),
  floor: new xeogl.LambertMaterial({ color: [0/255, 6/255, 0/255]}),
  red:   new xeogl.MetallicMaterial({ baseColor: [66/255, 0/255, 0/255],
          metallic: 0, roughness: 0.55,
          baseColorMap: { src: "/puna.jpg"},emissiveMap: {src: "/puna.jpg"},}),
  black: new xeogl.MetallicMaterial({ baseColor: [2/255, 2/255, 2/255],
            roughness: 0.67 }),
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

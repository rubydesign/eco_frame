//= require xeogl

xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" });
xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
xeogl.scene.camera.view.eye = [-400, 200, -1000];
new xeogl.CameraControl();

eco = {}
eco.PostBeam = xeogl.Model.extend({
  type: "eco.PostBeam",
  size: 6,
  height: 200,
  width: 300,
  braces: true,
  _init: function( ){
    xeogl.Model.prototype._init.apply(this , [{}]); // super()
    var post = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: this.height / 2, zSize: this.size/2 ,
            center:[-this.width/2 , 0 , 0]});
    this.add(new xeogl.Entity( {  geometry: post }));

    post = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: this.height / 2, zSize: this.size/2 ,
            center:[this.width/2 , 0 , 0]});
            this.add(post)
    this.add(new xeogl.Entity( {  geometry: post }));

    var beam = new xeogl.BoxGeometry( { xSize: this.width / 2 + this.size / 2,
          ySize: this.size / 2, zSize: this.size/2 ,
          center:[0 ,this.height/2 ,0]});
    this.add(new xeogl.Entity( {  geometry: beam }))
  },
  set_size:function(size){

  },
});
eco.Frame = xeogl.Model.extend({
    frame: { truss: {angle: 30, type: 'harja' , on: true} , size: 6 , height: 250,
              spacing: 300, width: 400 , posts: 4 , braces: true },

    _init: function(){
      xeogl.Model.prototype._init.apply(this , [{}]); // super()
      for(var i=0; i < this.frame.posts; i++){
        console.log(i)
        post = new eco.PostBeam()
        var offset = this.frame.spacing *(this.frame.posts / 2 - i)
        post.transform = new xeogl.Translate({ xyz: [0 , 0, offset] });
        this.add(  post );
      }
    },
    set_posts: function(){

    }
});

new eco.Frame()

eco = {}

eco.PostBeam = xeogl.Model.extend({
  type: "eco.PostBeam",
  size: 6,
  height: 200,
  width: 300,
  braces: true,
  _init: function( ){
    xeogl.Model.prototype._init.apply(this , [{}]); // super()
    this.add_post_at(this.width/2)
    this.add_post_at(- this.width/2)
    this.add_beam()
  },
  add_post_at: function(at){
    var post = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: this.height / 2, zSize: this.size/2 ,
            center:[ at , 0 , 0]});
    this.add(new xeogl.Entity( {  geometry: post }));
  },
  add_beam: function(){
    var beam = new xeogl.BoxGeometry( { xSize: this.width / 2 + this.size / 2,
          ySize: this.size / 2, zSize: this.size/2 ,
          center:[0 ,this.height/2 ,0]});
    this.add(new xeogl.Entity( {  geometry: beam }))
  },

  set_size:function(size){

  },
});

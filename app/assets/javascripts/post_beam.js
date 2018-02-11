PostBeam = xeogl.Model.extend({
  type: "eco.PostBeam",
  size: 6,
  height: 200,
  width: 300,
  braces: true,
  _init: function( ){
    this._super({});
    this.add_post_at(this.width/2)
    this.add_post_at(- this.width/2)
    this.add_beam()
    this.add_brace()
  },
  add_post_at: function(at){
    var post = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: this.height / 2, zSize: this.size/2 ,
            center:[ at , -this.height / 2 , 0]});
    this.add(new xeogl.Entity( {  geometry: post }));
  },
  add_beam: function(){
    var beam = new xeogl.BoxGeometry( { xSize: this.width / 2 + this.size / 2,
          ySize: this.size / 2, zSize: this.size/2 ,
          center:[0 , -this.size/2 ,0]});
    this.add(new xeogl.Entity( {  geometry: beam }))
  },
  add_brace: function(){
    var brace = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: 50, zSize: this.size / 2 ,
            center:[ this.size / 2 , 50 , 0]});
    var be = new xeogl.Entity( {  geometry: brace })
    var translate = new xeogl.Translate({
                xyz: [(this.width - this.size) / 2, -(50 + this.size/2)*1.41, 0]
                });
    be.transform = new xeogl.Rotate({
          parent: translate,
           xyz: [0, 0, 1], // Rotate 45 degrees about y axis
          angle: 45 });
    this.add( be );
    brace = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: 50, zSize: this.size / 2 ,
            center:[ -this.size / 2 , 50 , 0]});
    be = new xeogl.Entity( {  geometry: brace })
    translate = new xeogl.Translate({
                xyz: [-(this.width - this.size) / 2, -(50 + this.size/2)*1.41, 0]
                });
    be.transform = new xeogl.Rotate({
          parent: translate,
           xyz: [0, 0, 1], // Rotate -45 degrees about y axis
           angle: -45 });
    this.add( be );
  },
  set_size:function(size){

  },
});

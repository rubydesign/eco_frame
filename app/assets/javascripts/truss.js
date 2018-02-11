
Truss = xeogl.Model.extend({
  type: "eco.Truss",
  size: 15,
  angle: 30,
  width: 300,
  _init: function( ){
    this._super({});
    this.add_king()
    this.add_rafter( 1 )
    this.add_rafter( -1 )
  },
  rad: function(){
    return this.angle * (Math.PI / 180)
  },
  add_king: function(){
    var truss_height = Math.tan(this.rad()) * this.width / 2;
    var post = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: truss_height / 2, zSize: this.size/2 ,
            center:[ 0 , truss_height/2, 0]});
    this.add(new xeogl.Entity( {  geometry: post }));
  },
  add_rafter: function( turn ){
    // rafter_length so the rafters meet at the bottom (?)
    var rafter_length = this.width / ( 2 * Math.cos(this.rad()));
    var rafter = new xeogl.BoxGeometry( { xSize: this.size / 2,
            ySize: rafter_length / 2,  zSize: this.size / 2 ,
            center:[ -turn * this.size / 2 , rafter_length /2 , 0]});
    var raf = new xeogl.Entity( {  geometry: rafter })
    var translate = new xeogl.Translate({
              xyz: [turn * (this.width / 2 + this.size/2), 0, 0]
                });
    raf.transform = new xeogl.Rotate({
          parent: translate,
           xyz: [0, 0, 1], // Rotate angle degrees about y axis
          angle: turn*(90 - this.angle) });
    this.add( raf );
      },
  set_size:function(size){

  },
});

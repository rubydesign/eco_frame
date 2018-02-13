Plate = xeogl.Model.extend({
    spacing: 300,
    width: 300,
    size: 15,
    posts: 5,

    _init: function(){
      this._super({});
      this.add_plate(this.width / 2);
      this.add_plate(- this.width / 2);
    },

    add_plate: function(at){
      var plate = new xeogl.BoxGeometry( { xSize: this.size / 2,
              ySize: this.size / 2, zSize: this.spacing*(this.posts-1)/2 ,
              center:[ at , -3*this.size/2 , this.spacing*(this.posts-1)/8]});
      this.add(new xeogl.Entity( {  geometry: plate }));
    },
  });

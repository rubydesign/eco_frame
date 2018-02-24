xeogl.Entity.prototype.rotZ = function(deg){
  //console.log("rot" + this.transform.parent.id);
  this.transform.parent.angle = deg;
};
xeogl.Entity.prototype.scale = function(x,y,z){
  //console.log("scale " + x+ " " +  this.transform.id);
  this.transform.xyz = [x , y,z];
};

xeogl.Entity.prototype.position = function(x,y,z){
  //console.log("pos " + x+ " " + this.transform.parent.parent.id);
  this.transform.parent.parent.xyz = [x , y,z];
};

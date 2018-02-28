xeogl.Entity.prototype.rotateZ = function(deg){
  //console.log("rot" + this.transform.parent.id);
  this.transform.parent.xyz = [0,0,1];
  this.transform.parent.angle = deg;
};
xeogl.Entity.prototype.rotateX = function(deg){
  //console.log("rot" + this.transform.parent.id);
  this.transform.parent.xyz = [1,0,0];
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

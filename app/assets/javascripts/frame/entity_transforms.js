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


// Bottom side (first param) (point is zero) with given size
xeogl.Entity.prototype.b_scale = function(side , x,y,z){// bottom left
  var scale = this.scene.components["b_scale_" + this.id];
  if(scale){
      scale.xyz = [x,y,z];
      scale.parent.xyz = [-side*x, y, z];
  }else{
    this.transform = new xeogl.Scale( {xyz: [x,y,z] , id: "b_scale_" + this.id,
                    parent: new xeogl.Translate({xyz:[-side*x, y, z]}) } );
  }
  return this;
};

function get_parent(trans){
  while(trans.parent){
    trans = trans.parent
  }
  return trans;
}

xeogl.Entity.prototype.rotZ = function(deg){
  var rot = this.scene.components["rotz_" + this.id];
  if(rot){
    rot.angle = deg;
  }else{
    var p = get_parent(this.transform)
    p.parent = new xeogl.Rotate({xyz: [0,0,1] , angle: deg , id: "rotz_" + this.id});
  }
  return this;
};

xeogl.Entity.prototype.trans = function(x,y,z){
  var trans = this.scene.components["trans_" + this.id];
  if(trans){
    trans.xyz = [x,y,z];
  }else{
    var p = get_parent(this.transform)
    p.parent = new xeogl.Translate({xyz: [x,y,z] , id: "trans_" + this.id });
  }
  return this;
};

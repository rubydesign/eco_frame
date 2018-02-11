//= require xeo
//= require post_beam
//= require truss

Frame = xeogl.Model.extend({
    frame: { truss: {angle: 30, type: 'harja' , on: true} , size: 15 , height: 250,
              spacing: 300, width: 400 , posts: 5 , braces: true },

    _init: function(){
      this._super({});
      for(var i=0; i < this.frame.posts; i++){
        console.log(i)
        post = new PostBeam()
        var offset = this.frame.spacing *(this.frame.posts / 2 - i)
        post.transform = new xeogl.Translate({ xyz: [0 , 0, offset] });
        this.add( post );
        truss = new Truss()
        truss.transform = new xeogl.Translate({ xyz: [0 , 0, offset] });
        this.add( truss );
      }
    },
    set_posts: function(){

    }
});

eco_init = function(){
  xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" });
  xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
  xeogl.scene.camera.view.eye = [-400, 200, -500];
  new xeogl.CameraControl();
  new Frame()
}
window.reload = eco_init
eco_init()

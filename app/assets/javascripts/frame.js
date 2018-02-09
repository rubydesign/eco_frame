//= require xeo
//= require post_beam


xeogl.scene = new xeogl.Scene({ canvas: "xeocanvas" });
xeogl.scene.material.diffuse = [ 0.6, 0.6, 0.7 ] ;
xeogl.scene.camera.view.eye = [-400, 200, -1000];
new xeogl.CameraControl();

eco.Frame = xeogl.Model.extend({
    frame: { truss: {angle: 30, type: 'harja' , on: true} , size: 6 , height: 250,
              spacing: 300, width: 400 , posts: 5 , braces: true },

    _init: function(){
      this._super({});
      //xeogl.Model.prototype._init.apply(this , [{}]); // super()
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

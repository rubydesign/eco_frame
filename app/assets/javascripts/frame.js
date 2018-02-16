//= require claygl.min
// require post_beam
// require truss
//= require plate

var frame = { truss: {angle: 30, type: 'harja' , on: true} , size: 15 , height: 250,
          spacing: 300, width: 400 , posts: 5 , braces: true }

Frame = function(){

  for(var i=0; i < this.frame.posts; i++){
    this.add( new Plate() );
    post = new PostBeam()
    var offset = this.frame.spacing *(this.frame.posts / 2 - i)
    post.transform = new xeogl.Translate({ xyz: [0 , 0, offset] });
    this.add( post );
    truss = new Truss()
    truss.transform = new xeogl.Translate({ xyz: [0 , 0, offset] });
    this.add( truss );
  }
};

var app = clay.application.create('#claycanvas', {
      init: function (app) {
          this._camera = app.createCamera([-400, 200, -1000], [0, 0, 0]);
          this._mainLight = app.createDirectionalLight([400, -600, 2000]);
          app.createAmbientLight('white', 0.1);
          new Plate(app);
          app.scene.update();
          app._doRender(app.renderer, app.scene);
          app.timeline.stop();
      },
  });

window.update = function(){
  app.scene.update();
  app._doRender(app.renderer, app.scene);
}

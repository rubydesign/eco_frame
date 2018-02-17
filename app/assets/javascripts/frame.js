//= require claygl.min
//= require post_beam
//= require truss
//= require plate

var frame = { truss: {angle: 30, type: 'harja' , on: true} , size: 15 , height: 250,
          spacing: 300, width: 400 , posts: 5 , braces: true }

Frame = function(app){

  for(var i=0; i < this.frame.posts; i++){
    app._plate = new Plate(app ) ;
    var offset = this.frame.spacing *(this.frame.posts / 2 - i)
    app._post = new PostBeam(app , i , offset )
    app._truss = new Truss(app , i , offset)
  }
};
var app = clay.application.create('#claycanvas', {
      init: function (app) {
        app._camera = app.createCamera([-400, 200, -1000], [0, 0, 0]);
        app._mainLight = app.createDirectionalLight([400, 600, 2000]);
        app.createAmbientLight('white', 0.1);
        app._frame = Frame(app);
        app._doRender(app.renderer, app.scene);
        app._control = new clay.plugin.OrbitControl({target: app._camera,domElement: app.renderer.canvas });
        app.timeline.pause();

      },
      loop: function (app) {
          app._control.update(app.frameTime);
      }
  });

window.reload = function(){
  app._frame = Frame(app);
  app._doRender(app.renderer, app.scene);
}

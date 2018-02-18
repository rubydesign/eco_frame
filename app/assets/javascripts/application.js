// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.

//= require vue
//= require claygl.min
//= require post_beam
//= require truss
//= require plate
//= require frame
//= require range_slider
//= require vue_app
//= require_self

var app = clay.application.create('#claycanvas', {
      init: function (app) {
        app._camera = app.createCamera([-400, 200, -1000], [0, 0, 0]);
        app._mainLight = app.createDirectionalLight([400, 600, 2000]);
        app.createAmbientLight('white', 0.1);
        app._frame = new Frame(app);
        app._doRender(app.renderer, app.scene);
        app._control = new clay.plugin.OrbitControl({target: app._camera,domElement: app.renderer.canvas });
        app.timeline.pause();

      },
      loop: function (app) {
          app._control.update(app.frameTime);
      }
  });

window.reload = function(){
  app._frame = new Frame(app);
  app._doRender(app.renderer, app.scene);
}

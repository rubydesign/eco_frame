// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.

//= require vue
//= require claygl.min
//= require post_beam
//= require harja
//= require plate
//= require floor
//= require frame
//= require range_slider
//= require vue_controller
//= require_self

var clay_app = clay.application.create('#claycanvas', {
      init: function (app) {
        app._camera = app.createCamera([-700,100, -1000], [0, 0, 0]);
        app._mainLight = app.createDirectionalLight([400, 600, 2000]);
        app._ambientLight = app.createAmbientLight('white', 0.2);
        app._frame = new Frame(app , VueFrame._data.frame , VueFrame._data.posts);
        app._doRender(app.renderer, app.scene);
        app._control = new clay.plugin.OrbitControl({
                target: app._camera,
                domElement: app.renderer.canvas ,
                maxDistance: 2000});
        app.timeline.pause();

      },
      loop: function (app) {
          app._control.update(app.frameTime);
      }
  });

console.realLog = console.log;
window.changed = true;
console.log = function () {
  if (arguments[0] != 'THREE.WebGLRenderer')
          console.realLog.apply (console, arguments);
};

function handleValue(event){
  console.log(event.target.value)
  window.changed();
}
window.slider = handleValue

console.log('Hello World from You')

function handleValue(event){
  console.log(event.target.value)
  window.changed();
}
window.slider = handleValue

console.log('Hello World from You')

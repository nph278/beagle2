var ctx = c.getContext("2d", {alpha: false});       // context without alpha channel.
var idata = ctx.createImageData(c.width, c.height); // create image data
var buffer32 = new Uint32Array(idata.data.buffer);  // get 32-bit view

(function loop() {
  noise(ctx);
  requestAnimationFrame(loop)
})()

function noise(ctx) {
  var len = buffer32.length - 1;
  while(len--) buffer32[len] = Math.random() < 0.5 ? 0 : -1>>0;
  ctx.putImageData(idata, 0, 0);
}

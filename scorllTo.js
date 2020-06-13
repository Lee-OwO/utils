export function scorllTo(dom, end, duration = 300) {
  const start = dom.scrollTop;
  let startTime = Date.now();
  return new Promise((resolve, reject) => {
    (function animate() {
      let delta = Math.min(duration, Date.now() - startTime);
      let value = (delta / duration) * (end - start) + start;
      dom.scrollTop = value;
      if (delta < duration) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    })();
  });
}

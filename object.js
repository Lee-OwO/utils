function watch(obj, key, fn) {
  obj[`_${key}`] = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      return this[`_${key}`];
    },
    set(val) {
      this[`_${key}`] = val;
      fn(val);
    },
  });
}

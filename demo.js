function watch(obj, key, fn) {
  obj[`_${key}`] = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      return this[`_${key}`];
    },
    set(val) {
      fn();
      this[`_${key}`] = val;
      console.log(this);
    },
  });
}

const a = { a: 1 };
// watch(a, "a", function () {
//   console.log(this, 123);
// });
watch(a, "a", () => {
  console.log(123, this);
});

a.a = 4;
console.log(a.a);

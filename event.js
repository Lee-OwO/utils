class Event {
  constructor() {
    this.clientList = {};
  }
  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  }
  remove(key, fn) {
    const fns = this.clientList[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        const currentFn = fns[i];
        if (currentFn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  }
  trigger(key, ...args) {
    const fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    fns.forEach((fn) => {
      fn.apply(this, args);
    });
  }
}

const a = new Event();
a.listen("demo", () => {
  setTimeout(() => {
    console.log(456);
  }, 0);
});
a.listen("demo", () => {
  console.log(123213);
});
a.listen("demo", () => {
  console.log(546);
});
a.trigger("demo");
console.log(a);

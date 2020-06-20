Function.prototype.after = (fn) => {
  const self = this;
  return function (...arg) {
    const ret = self.apply(this, arg);
    if (ret === "next") {
      return fn.apply(this, arg);
    }
    return ret;
  };
};

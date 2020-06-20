class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null;
  }
  setNextSuccessor(successor) {
    this.successor = successor;
  }
  passRequset(...arg) {
    const ret = this.fn.apply(this, arg);
    if (ret === "next") {
      return (
        this.successor && this.successor.passRequset.apply(this.successor, arg)
      );
    }
    return ret;
  }
  next(...arg) {
    return (
      this.successor && this.successor.passRequset.apply(this.successor, arg)
    );
  }
}

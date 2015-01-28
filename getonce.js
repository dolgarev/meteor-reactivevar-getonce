if (!(ReactiveVar.prototype.getOnce && ReactiveVar.prototype.getOnce.constructor === Function)) {
  ReactiveVar.prototype.getOnce = function() {
    var v = this.get();
    return this.set(void 0), v;
  };
}

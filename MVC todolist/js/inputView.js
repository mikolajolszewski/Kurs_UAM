inputView = function (container) {
  this.input = container.querySelector('#newtodo');
  this.button = container.querySelector('#add');

  UAM.EventEmitter.call(this);
  this.attachActions();
}

utils.inherits(UAM.EventEmitter, inputView);

// Function informing controller to add new value to the model
inputView.prototype.addElement = function () {
  var todo = this.input.value;
  if (todo) {
    this.emit('addItem', todo);
    this.input.value = '';
  }
};

// Bind button click with function adding element
inputView.prototype.attachActions = function () {
  var that = this;
  this.button.addEventListener('click', function () {
    that.addElement();
  });
};
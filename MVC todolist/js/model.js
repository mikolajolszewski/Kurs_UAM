Model = function () {
  UAM.EventEmitter.call(this);

  // Define data structures to store todos and statistics for the footer
  this.todosArray = new Array();
  this.statistics = {
    total: 0,
    done: 0,
    left: 0
  }
};

// Inherit on and emit methods
utils.inherits(UAM.EventEmitter, Model);

// Notify contriller to refresh footer and todo list
Model.prototype.notifyController = function () {
  this.emit("updateView");
  this.emit("updateFooter");
};

// Function pushing todos to the list
Model.prototype.addTodo = function ( todo ) {
  this.todosArray.push({todo:todo, done: 0});
  this.recountStats();
  this.notifyController();
};

// Function marking item as done
Model.prototype.markDone = function ( todo ) {
  index = utils.getObjectIndex(this.todosArray,todo,'todo');
  this.todosArray[index].done = 1;
  this.recountStats();
  this.emit("updateFooter");
};

// Get todo list
Model.prototype.getData = function(){
  return this.todosArray;
};

// Get list statistics
Model.prototype.getStats = function(){
  return this.statistics;
};

// Recount statistics basing on todo list
Model.prototype.recountStats = function(){
  this.statistics.total = this.todosArray.length;
  this.statistics.done = utils.getObjectFrequency(this.todosArray,1,'done');
  this.statistics.left = this.statistics.total - this.statistics.done;
};






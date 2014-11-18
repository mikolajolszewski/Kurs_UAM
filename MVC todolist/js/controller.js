var Controller = function (view, model) {

  // Functions passed later to event emitters which inform model what to do
  addItem = function () {
    model.addTodo(todo);
  };
  updateView = function () {
    view.updateView(model.getData());
  };
  updateFooter = function () {
    view.updateFooter(model.getStats());
  };
  markDone = function (todo) {
    model.markDone(todo);
  }

  // Create event emmiter ON functions
  model.on("updateView", updateView);
  model.on("updateFooter", updateFooter);
  view.on("markDone", markDone);
  view.on("addItem", addItem);
};






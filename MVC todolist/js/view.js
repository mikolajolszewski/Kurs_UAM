View = function () {
  UAM.EventEmitter.call(this);
  this.attachActions();
}

// Inherit on and emit methods
utils.inherits(UAM.EventEmitter, View);

// Function updating view with current informations stored in the model
View.prototype.updateView = function (todos) {

  var list = document.getElementById('list'), text = '';

  // Clear the list
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Add element one by one
  for( var i = 0; i < todos.length; i++ ){
    text = document.createElement('li');
    text.innerHTML = todos[i].todo + '';
    if (todos[i].done === 1) {
      text.className = 'done';
    }
    document.querySelector("#list").appendChild(text);
    text = '';
  }
};

// Function to update statistics
View.prototype.updateFooter = function (stats) {
  document.getElementById('totalTasks').innerHTML = stats.total;
  document.getElementById('doneTasks').innerHTML = stats.done;
  document.getElementById('leftTasks').innerHTML = stats.left;
}

// Function informing controller to add new value to the model
View.prototype.addElement = function () {
  todo = document.querySelector("#newtodo").value;
  if (todo) {
    this.emit('addItem');
    document.querySelector("#newtodo").value = '';
  }
};

// Function informing controller to delete value from the model
View.prototype.markSolvedElement = function (elem) {
  elem.className = 'done';
  this.emit('markDone',elem.innerHTML);
};

// Function attaching events on click
View.prototype.attachActions = function () {
  that = this;
  document.querySelector(".add").addEventListener('click', function () {
    that.addElement();
  });
  document.querySelector("#list").addEventListener('click', function () {
    that.markSolvedElement(event.target);
  });
};





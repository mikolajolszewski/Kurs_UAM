window.onload = function() {
  var list = document.querySelector("#list"), tab = [];

  // Bind event of adding todo to the add button
  document.querySelector(".add").addEventListener('click', function () {
    var text = document.createElement('li'), input_value = document.querySelector("#newtodo").value;
    if (!input_value.replace(/\s/g, '') == "" && tab.indexOf(input_value) === -1) {
      text.innerHTML = input_value + ' <span class="delete">Usuń</span>';
      document.querySelector("#list").appendChild(text);
      tab.push(input_value);
      input_value = "";
    } else {
      alert("Task should not be empty and should not be the same as existing element!")
    }
  });

  // Bind event of deleting todo
  document.querySelector("#list").addEventListener('click', function (elem) {
    var elem = event.target, parent = event.target.parentNode;
    if (elem.tagName === 'SPAN') {
       var deletedElementText = parent.textContent.replace(" Usuń", "");
       parent.parentNode.removeChild(parent);
       tab.splice(tab.indexOf(deletedElementText), 1)
    }
  });
};


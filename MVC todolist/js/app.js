// Main application file - initialize model, view and controller
var model = new Model();
var inputView = new inputView(document.querySelector("#input"));
var listView = new listView(document.querySelector("#list"));
var footerView = new footerView(document.querySelector("#statistics"));
var inputController = new inputController(inputView, model);
var listController = new listController(listView, model);
var footerController = new footerController(footerView, model);



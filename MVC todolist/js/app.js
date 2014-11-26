// Main application file - initialize model, view and controller
var model = new UAM.Model();
var inputView = new UAM.inputView(document.querySelector("#input"));
var listView = new UAM.listView(document.querySelector("#list"));
var footerView = new UAM.footerView(document.querySelector("#statistics"));
var inputController = new UAM.inputController(inputView, model);
var listController = new UAM.listController(listView, model);
var footerController = new UAM.footerController(footerView, model);



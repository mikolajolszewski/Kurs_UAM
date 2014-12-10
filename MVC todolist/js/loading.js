UAM.loading = {
  show: function () {
    var loadingWindow = document.querySelector(".loading");
    loadingWindow.className = 'loading';
  },
  hide: function () {
    var loadingWindow = document.querySelector(".loading");
    loadingWindow.className = 'loading none';
  }
}
window.onload = function() {
  var sidebar = document.getElementById("sidebar");
  var sidebarButton = document.getElementById("sidebar-button");

  function openSidebar(e) {
    if (sidebar.className.indexOf("slideIn") != -1) {
      sidebar.className = sidebar.className.replace(" slideIn", "");
    } else {
     sidebar.className = sidebar.className + " slideIn"; 
    }
  }

  sidebarButton.addEventListener("click", openSidebar, false);
};

function sharingan(){
  document.getElementById("sharingan").style="width: 100%;height: 100%;display: flex;visibility: visible;position: fixed;z-index: 2;";
  document.getElementById("spin").style="animation:swirlSpin 5s linear infinite;";
  document.getElementById("main").style="display:flex;width:100%;height:100%;overflow:hidden";
  document.getElementById("body").style="animation:bodySpin 3s linear infinite;margin:auto;overflow:hidden";
  setTimeout(() => {
    document.getElementsByTagName('body')[0].innerHTML=""
  }, 5000,1000);

}

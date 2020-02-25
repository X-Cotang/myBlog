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
  document.getElementById("main").style="display:flex;width:100%;height:100%;overflow:hidden;background-image: url('./images/wallpaperflare.com_wallpaper.jpg');  background-size: cover;background-repeat: no-repeat;";
  document.getElementById("sharingan").style="width: 100%;height: 100%;display: flex;visibility: visible;position: fixed;z-index: 2;";
  document.getElementById("spin").style="animation:swirlSpin 5s linear infinite;";
  
  document.getElementById("body").style="animation:bodySpin 30s linear infinite;margin:auto;overflow:hidden";
  setTimeout(() => {
    document.getElementsByTagName('body')[0].innerHTML=atob("PGlmcmFtZSBzcmM9Jy9ibGFja2hvbGUuaHRtbCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJSc+PC9pZnJhbWU+");
  }, 5000,1000);
  
}

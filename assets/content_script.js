
var time_default = 40000;

function open_ad(url){

  var add_delay = Math.floor(Math.random() * 6) + 1 ;

  var win = window.open(url,String(Math.random() * 100000000000000000),'width=500,height=200,left=375,top=330');

  setTimeout(function ()
  {
     win.close();
  }, time_default + add_delay);
}

function search_active_ads() {

  var  l = document.links;

  for(var i=0; i<l.length; i++) {
    if (l[i].href.indexOf("adview.php") !=-1) {
        div = l[i].getElementsByTagName('div')[0];
        if(div.className.replace(/ /g,'') == 'hap'){
            open_ad(l[i].href);
            break;
        }
    }
  }
}

search_active_ads();

window.setInterval(function(){
  search_active_ads();
}, time_default);

let myleads;
let nm;
let leadsfromlocalstorage = localStorage.getItem("myleads");
nm = leadsfromlocalstorage;
//localStorage.clear()
let lst = document.getElementById("h")
if(nm)
{
      nm = nm.split(",");
      myleads = nm;
}
else
{
     myleads = [];
}

let btn = document.getElementById("saveinp")


console.log(leadsfromlocalstorage)
//let nam = leadsfromlocalstorage.split(",");
//myleads.push(nam)
let count= 0
let listItems = ""
for(i=count;i<myleads.length;i++){
            listItems += `<li> <a target='_blank' href= ${myleads[i]} >${myleads[i]}</a></li>`
     }
      lst.innerHTML = listItems
      listItems = ""

btn.addEventListener("click",function(){
      const inp = document.getElementById("input").value
      //myleads = JSON.parse(myleads)
      myleads.push(inp)
      
      document.getElementById('input').value = ''
      JSON.stringify(myleads);
      localStorage.setItem("myleads", myleads);
      for(i=count;i<myleads.length;i++){
            listItems += `<li> <a target='_blank' href= ${myleads[i]} >${myleads[i]}</a></li>`
      }
      lst.innerHTML = listItems
      listItems = ""
      leadsfromlocalstorage = localStorage.getItem("myleads");
      nm = leadsfromlocalstorage.split(",");
})
function clear(){
      localStorage.clear();
      
      listItems = ""
      lst.innerHTML = listItems
      myleads = []
}
cl = document.getElementById("clear");
cl.addEventListener("click", clear);
// event listener for the button inside popup window
document.addEventListener('DOMContentLoaded', function() {
      var link = document.getElementById('savtb');
      link.addEventListener('click', function() {
          addURL();
      });
  });
  
  // add the URL inside the popup-window's <div> 
  function addURL() {
  // store info in the the queryInfo object as per: https://developer.chrome.com/extensions/tabs#method-query
      var queryInfo = {
      currentWindow: true,
      active: true
      };
      
      chrome.tabs.query(queryInfo, function(tabs) {
      // tabs is an array so fetch the first (and only) object-elemnt in tab
      // put URL propery of tab in another variable as per: https://developer.chrome.com/extensions/tabs#type-Tab
      var url = tabs[0].url;
      
      // put the content into the popup-window's <div>
      myleads.push(url)
      
      document.getElementById('input').value = ''
      JSON.stringify(myleads);
      localStorage.setItem("myleads", myleads);
      for(i=count;i<myleads.length;i++){
            listItems += `<li> <a target='_blank' href= ${myleads[i]} >${myleads[i]}</a></li>`
      }
      lst.innerHTML = listItems
      listItems = ""
      leadsfromlocalstorage = localStorage.getItem("myleads");
      nm = leadsfromlocalstorage.split(",");
      });
  }


  
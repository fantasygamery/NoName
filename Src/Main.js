
 nnFunc=function(){
  
  this.each=function(_object,_function){
  for (var x=0;x<_object.length;x++){
  _function(_object[x],'Sup?');
  }
  }
  this.wait=function (secs,func,ID){
var _towait=secs;var waited=0;
var INsT = null
function _int(){
    waited=++waited
if (ID){
document.getElementById(ID).innerHTML=_towait-waited
}
    if(waited >= _towait){
try {
func();
} catch( __ERROR ){console.log(__ERROR.message)}
window.clearInterval(INsT)
}
}
INsT=window.setInterval(_int,1000);
}  
  return this
  }
 window.nn=nnFunc();
  window.nnReady='yes';

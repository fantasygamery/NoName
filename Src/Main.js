 nnFunc=function(){
  //FOREACH
  this.each=function(_object,_function){
  for (var x=0;x<_object.length;x++){
  _function(_object[x],'Sup?');
  }
  };
// WAIT
  this.wait=function (secs,func,ID){
var _towait=secs;var waited=0;
var INsT = null;
function _int(){
    waited=++waited;
if (ID){
document.getElementById(ID).innerHTML=_towait-waited;
}
    if(waited >= _towait){
     if (func !== null && func  !== undefined ){
try {
func();
} catch( __ERROR ){console.log(__ERROR.message)}}
window.clearInterval(INsT);

}
}
INsT=window.setInterval(_int,1000);
}; 
  //do - function,times,delay
  this.do = function(_function,_times=1,_delay=1000){var Did=0;_interval=window.setInterval(function(){ _function() ++Did if (Did > _times){return 'Done'}},_delay)}
  // Get Element By Id
  this.gid = function(ID){return document.getElementById(ID);}
  // RETURN THIS FUNCTION
  return this;
  };
 window.nn=nnFunc();
// SET STATUS , TO FIRE LOADER
  window.nnReady='yes';

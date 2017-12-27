
 nnFunc=function(){
  
  this.each=function(_object,_function){
  for (var x=0;x<_object.length;x++){
  _function(_object[x],'Sup?');
  }
  }
  return this
  }
 window.nn=nnFunc();
  window.nnReady='yes';

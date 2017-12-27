  console.log('Noni!!');
  window.nn = function(){
  
  this.each=function(_object,_function){
  for (var x=0;x<_object.length;x++){
  _function(_object[x],'Sup?');
  }
  }
  return this
  }

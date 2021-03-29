function Person(){
　 var i = 1;
  function functionName(){
　　　 alert(++i);
　 }
　 return functionName;
}
var result = Person();
result();//得到2
result(); //得到3
var result2 = Person();
result2();
result2();

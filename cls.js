// const print = (function() {
//     let c = 5;
//     return {
//         func1:function(){c=5*5},
//         fun2: function() {
//         console.log(c)
//       }
//     }
//   })()
//   console.log(print.fun2())

  function print()
  {
      const a=[]
      for(var i=0;i<5;i++)
      {
      a.push(
          (function(x){
          return function(){console.log(x);}
      })(i));
      }
      return a;
}
const fa=print()
fa[3]()
function print()
  {
      const a=[]
      for(var i=0;i<5;i++)
      {
      a.push(
          (function(x){
          return function(){console.log(i);}
      })(i));
      }
      return a;
}
const fa=print()
fa[3]()
// function print()
//   {
//       const a=[]
//       for(var i=0;i<5;i++)
//       {
//       a.push(
//           (function(x){
//           return function(){return(x);}
//       })(i));
//       }
//       return a;
// }
// const fa=print()
// console.log(fa[3]())
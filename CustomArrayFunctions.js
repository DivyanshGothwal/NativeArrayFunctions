Array.prototype.myForEach= function(callback,context){
    var self = context===undefined ? this : context
    
    for(var i=0;i<self.length;i++){
		callback(self[i],i,this);
	}
}
a= new Array(1,2,3,4,5,6);
a.myForEach(element => console.log(element));
// var l = a.myForEach.bind(a);
// l(element => console.log(element));
// var l = a.myForEach
// l(element => console.log(element),a);


Array.prototype.myMap= function(callback, context){
    var self = context === undefined ? this instanceof Array ?  this : new Array() : context;
    var newArray = new Array();
    self.myForEach((element, i) => newArray.push(callback(element,i,self))
    );
    return newArray;
}
var a1 = a.myMap.bind(a);
var l = a1(element => {
    return element*2;
})
console.log(l);



Array.prototype.myFilter=function(callback, context){
    newArray = new Array();
    var self = context === undefined ? this instanceof Array ? this : new Array() : context
    self.myForEach((element,i)=> {
        if(callback(element,i,self)){
            newArray.push(element);
        }
    });
    return newArray;
}
var l = a.myFilter;
// var l1 = a.myFilter.bind(a);
console.log(l((element)=> {
    return element>=3
    }, a)

);
// console.log(l1((element)=> {
//     return element>=3
//     })

// );

Array.prototype.myReduce = function(callback,initialValue){
    var previous=initialValue;
    this.forEach((element,i)=>{
        previous=callback(previous, element, i, this);
    });
    return previous;
};

var o = a.myReduce((previous,element)=>{
    return (previous+element);
},10)
console.log(o);




Array.prototype.myEvery=function(callback, context){
    var self = context === undefined ? this instanceof Array ? this : new Array() : context
    var res = true
    self.myForEach((element,i)=>{
        if(!callback(element,i,self)){
            res = false;
        }
    });
    return res;
};

var l = a.myEvery;
console.log(l(element=>
    {
        return element>2
    },a)
  );
//  var l =
  console.log( a.myEvery.call([4,5,6],element=>
    {
        return element>2
    })

  );

function receivesAFunction(cb) {
   cb();
}

function returnsANamedFunction()  {
    return function hey() {
        console.log("hi");
    }
}

function returnsAnAnonymousFunction () {
     return function() {
         console.log("hello");     }
}
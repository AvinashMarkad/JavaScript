 /**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
   return {
       increment:function(){
           return counter+=1;
       },
        decrement: function(){
            return counter-=1;
        },
            reset: function(){
                counter = init;
                return counter;
            }
   }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// immediately invoked function expressions(iife)

(function chai(){//named iife
    console.log(`DB Connected`);

})();
// chai()

( (name) => {//simple iife
    console.log(`DB COnnected 2 ${name}`);
} )('narayan')

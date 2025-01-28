/// Immediately invoked function expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB connected`);    
}) ();

( (name) => {
    // simple IIF E
    console.log(`DB connected two ${name}`);
    
} ) ("chintu");
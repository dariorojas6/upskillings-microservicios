// Es una funcion que recibe una funcion(fn) retorna otra funcion,
//  y esta ultima ejecuta la funcion recibida con REQ Y RES y ante un error hace 
// un catch del error y hace next del error

// Es una funcion de orden superior: recibe una funcion y la retorna mejorada.

module.exports = (fn) => (req, res, next) =>
    fn(req, res).catch((err) => next(err))

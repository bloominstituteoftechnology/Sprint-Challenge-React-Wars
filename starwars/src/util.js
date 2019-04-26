/**
 * ======================================================
 * Title: ---- General Purpose Helpers/Utilities ----
 * Author: ---- Moses Samuel ----
  ========================================================*/ 


/* =====  ==== ===== == = === = 
       Note :: All functions are essentialy variables. 
                Some are machines, some are machine producing machines...
                in other words, it doesn't matter how these are used 
                    -- so callbacks(cbs), higher order functions(HOFs), trancendentOrderFunctions(TOFs) 


                // Kidding Error on Line 63: cannot read function of type 'MadeUp'^^^^^^^^^^^^^
                

    === ====== === ===  */


/**
 * ----------------------------
 *  ---- Universals ----
 * ----------------------------
 */


export const curry = (fn, seen = []) => (...args) =>
  fn.length === args.length + seen.length
    ? fn(...seen, ...args)
    : curry(fn, [...seen, ...args])

    // ---- Old Curry (not 100% consistent)----

        // export function curry (fn, arity = fn.length) {
        // 	return (function nextCurried(prevArgs) {
        //     	return function curried(nextArg) {
        // 			var args = prevArgs.concat([nextArg])
        // 			if (args.length >= arity) {
        // 				return fn(...args)
        // 			}
        // 			else {
        // 				return nextCurried(args)
        // 			}
        // 		}
        //     })([])
        // }



export const pluck = field => o => o[field]        
        
export const map = curry((fn, value) => value.map(fn))

export const filter = curry((fn, value) => value.filter(fn))

// lazy, version... I'll just implement it myself
// export const reduce = curry((fn, value) => value.reduce(fn))

// imperative version
export const reduce = curry((reducerFn, initialValue, arr) => {
    var accumulator = (initialValue === undefined) ? undefined : initialValue
    for (let i = 0;i < arr.length; i++) {
        if (accumulator !== undefined) 
            accumulator = reducerFn(accumulator, arr[i], i, arr)
        else 
            accumulator = arr[i]
    }
    return accumulator
})




/**
 * ----------------------------
 *  ---- Composition ----
 * ----------------------------
 */


export const pipe = (...fns) => i => fns.reduce((acc, fn) => fn(acc), i)

export const compose = (...fns) => i => fns.reduceRight((acc, fn) => fn(acc), i)

export const head = xs => xs[0]



/**
 * ----------------------------
 *  ---- More Folds ----
 * ----------------------------
 */


export const foldr = curry(
  (reducerFn, initialValue, arr) =>  reduce(arr.reverse(), reducerFn, initialValue)
)

export const reduceObj = curry(
    (reducerFn, initialValue, o) => Object.values(o).reduce(reducerFn, initialValue)
)

export const filterObj = curry(function agnosticFilter(predicateFn, o) {
    const newObj = {}
    
	Object.keys(o)
	.filter(key => predicateFn(o[key]))
    .forEach(key => newObj[key] = o[key])
    
	return newObj
})

export const objectFromEntries = (arr) => Object.assign({}, ...arr.map(([k, v]) => ({ [k]: v }) ))



/**
 * ----------------------------
 *  ---- Misc ----
 * ----------------------------
 */


export const binary = fn => curry((arg1,arg2) => fn(arg1,arg2))

export const unary = fn => arg1 => fn(arg1)

export const map9000 = (fn, [head, ...tail]) => (
    head === undefined && tail.length < 1
      ? []
      : [fn(head), ...map9000(fn, tail)]
)

export const compose9000 = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0]

export const filter9000 = (pred, [head, ...tail]) => head === undefined ? [] : (
    pred(head) ?
      [head, ...filter9000(pred, tail)] : [...filter9000(pred, tail)]
)

export const trace = curry(
    (message, x) => {
        console.log(message, x)
        return x
    }
)
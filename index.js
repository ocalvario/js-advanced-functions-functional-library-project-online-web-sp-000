const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        let collectionKeys = Object.keys(collection);
        for(let i = 0; i < collectionKeys.length; i++) {
            callback(collection[collectionKeys[i]], collectionKeys[i], collection);
        }
        return collection;
    },

    map: function(collection, callback) {
        let collectionKeys = Object.keys(collection);
        let newCollection = [];
        for(let i = 0; i < collectionKeys.length; i++) {
            newCollection.push(callback(collection[collectionKeys[i]], collectionKeys[i], collection));
        }
        return newCollection;
    },

    reduce: function(collection, callback, memo) {
        let collectionKeys = Object.keys(collection);
        let i = 0;
        memo = memo ? memo : collection[collectionKeys[i++]];
        for(; i < collectionKeys.length; i++) {
            memo = callback(memo, collection[collectionKeys[i]], collection);
        }
        return memo;
    },

    find: function(collection, callback) {
        for(let i in collection)
            if(callback(collection[i])) return collection[i]
    },

    filter: function(collection, callback) {
        let newCollection = [];
        for(let i in collection)
            if(callback(collection[i])) newCollection.push(collection[i]) 
        return newCollection;
    },

    size: function(collection) {
        return Object.keys(collection).length;
    },

    first: function(collection, n) {
        return n ? collection.slice(0, n) : collection[0];
    },

    last: function(collection, n) {
        return n ? collection.slice(collection.length - n) : collection[collection.length - 1];
    },

    compact: function(collection) {
        return this.filter(collection, x => !!x);
    },

    sortBy: function(collection, callback) {
        return [...collection].sort((a, b) => callback(a) - callback(b)); 
    },

    flatten: function(collection, f) {
        let stack = [...collection];
        let flatArr = [];
        let i;
        if(f){
            for(i of stack){
                if (typeof i === 'object'){
                    for(let j of i) 
                        flatArr.push(j);
                }else{
                    flatArr.push(i);
                }
            }
        } else{
            while(stack.length){
                i = stack.shift()
                typeof i === 'object' ? stack.unshift(...i) : flatArr.push(i);
            }
        }
        return flatArr;
         
    },

    uniq: function(array, isSorted=false, callback = x => x) {
        let newArray = [];
        if(isSorted) {
            for(let i = 0; i < array.length; i++){
                newArray.push(array[i])
                if(callback(array[i]) === callback(array[i + 1])) i++;
            }
        }else {
            for(let i = 0; i < array.length; i++) {
                if(!newArray.find(x => callback(x) === callback(array[i]))) newArray.push(array[i]);
            };
        }
        return newArray;
    },

    keys: function(object) {
        const res = [];
        for(let i in object){
           res.push(i); 
        }
        return res;
    },

    values: function(object) {
        const res = [];
        for(let i in object){
           res.push(object[i]); 
        }
        return res;
    },

    functions: function(object) {
        const res = [];
        for(let i in object) {
            if(typeof object[i] === 'function') res.push(object.key);
        }
        return res.sort();
    }


  }
})()

fi.libraryMethod()
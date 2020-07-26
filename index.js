const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for (var i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)
      if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      let passing = [];
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          passing.push(collection[i]);
        }
      }
      return passing;
    },

    size: function(collection) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      return collection.length;
    },

    first: function(array, n) {
      if (!n) {
        return array[0];
      }
      else {
        return array.slice(0, n);
      }

    },

       last: function(array, n) {
      if (!n) {
        return array[array.length - 1];
      }
      else {
        return array.slice(array.length - n, array.length);
      }
    },


    compact: function(array) {
      let compacted = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          compacted.push(array[i]);
        }
      }
      return compacted;
    },

    sortBy: function(array, callback) {
      let sorted = array.slice(0);
      sorted.sort(function(a, b) {
        return callback(a) - callback(b);
      });
      return sorted;
    },


    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)

    },
    
     flatten: function(array, shallow, flat = []) {
      if (!Array.isArray(array)) return flat.push(array);
      if (shallow) {
        for (let val of array) {
          Array.isArray(val) ? this.unpack(flat, val) : flat.push(val);
        }
      }
      else {
        for (let val of array) {
          this.flatten(val, false, flat);
        }
      }
      return flat;
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(array, isSorted = false, callback=false) {
      if (isSorted) {
        return fi.uniqSorted(array, callback);
      }
      else if (!callback) {
        return Array.from(new Set(array));
      }
      else {
        const modifiedVals = new Set();
        const uniqVals = new Set();
        for (let val of array) {
          const modVal = callback(val);
          if (!modifiedVals.has(modVal)) {
            modifiedVals.add(modVal);
            uniqVals.add(val);
          }
        }
        return Array.from(uniqVals);
      }
    },

    keys: function(object) {
      const keys = [];
      for (let key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      const vals = [];
      for (let key in object) {
        vals.push(object[key]);
      }
      return vals;
    },

})()

fi.libraryMethod()

const src = {
    prop11: {
      prop21: 21,
      prop22: {
        prop31: 31,
        prop32: 32
      }
    },
    prop12: 12
  };
  
  const proto = {
    prop11: {
      prop22: null
    }
  };
  
  function projectObject(source, prototype) {
    const result = {};
  
    for (let key in prototype) {
      if (prototype.hasOwnProperty(key) && source.hasOwnProperty(key)) {
        if (typeof prototype[key] === 'object' && prototype[key] !== null && typeof source[key] === 'object' && source[key] !== null) {
          result[key] = projectObject(source[key], prototype[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
  
    return result;
  }
  
  const res = projectObject(src, proto);
  console.log(res);
  
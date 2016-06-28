function allAnagrams (string) {
  
  let sorted = string.split('').sort()
  const FINAL_LENGTH = string.length
  
  let remaining = new Map();
  remaining.set('', sorted);
  
  function oneLevel(anas) {
    let next = anas.map( (agm) => {
      let unUsed = remaining.get(agm);
      return unUsed.map( (char, i) => {
        let newCombo = agm + char;
        let newUnused = extract(unUsed, i);
        if (!isRepeat(newCombo)) {
          remaining.set(newCombo, newUnused);
          return newCombo;
        } else {
          return null;
        }
      })
    })
    let nextRound = flattenOneLevel(next).filter( x => !!x);
    return nextRound[0].length === FINAL_LENGTH ? nextRound : oneLevel(nextRound);
  }
  
  return oneLevel(['']);
  
  
  
  
  
  
  function isRepeat(str) {
    return remaining.has(str);
  }
  
  function extract(arr, i) {
    let copy = arr.slice();
    copy.splice(i, 1);
    return copy;
  }
  
  function flattenOneLevel(outerArr) {
    let flat = [];
    outerArr.forEach( (innerArr) => {
      innerArr.forEach( (arr) => {
        flat.push(arr)
      })
    });
    return flat;
  }

}

module.exports = allAnagrams;


function xify(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      value += 'x';
    }
    return value;
  }
  
  function smilify(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      value += '😊';
    }
    return value;
  }
  
  function yellingChars(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      value += str[i]+'!';
    }
    return value;
  }
  
  function indexedChars(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      value += i+str[i];
    }
    return value;
  }
  
  function numberedChars(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      value += '('+(i+1)+')'+str[i];
    }
    return value;
  }
  
  function exclaim(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      if (str[i] === '?' || str[i] === '.') {
      value += '!';
      } else {
        value += str[i];
      }
    }
    return value;
  }
  
  function repeatIt(str, num) {
    let value = '';
    for (i = 0; i < num; i++) {
      value += str;
    }
    return value;
  }
  
  function trunacate(str) { //////////////////////////////////////
    let value = '';
    for (i = 0; i < str.length; i++) {
      if (i < 15) {
      value += str[i];
      } else if (i > 14) {
        value += str[i];
        return value + '...';
      }
    } 
  }
  
  function ciEmailify(str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        value += str[i].toLowerCase();
      } else if (str[i] === ' ') {
        value += '.';
      }
    }
    return value + '@codeimmersives.com';
  }
  
  function reverse(str) {
    let value = '';
  
    for (let i = str.length - 1; i > -1; i--) {
      value += str[i]
    }
    return value;
  }
  
  function onlyVowels(str) {
    let value = '' 
  
      for (i = 0; i <= str.length; i++) {
        if ('aeiouAEIOU'.includes(str[i])) {
          value += str[i];
        }
      }
    return value;
    }
  
  function crazyCase(str) {
    let value = '';
  
    for (let i = 0; i < str.length; i++) {
      if(i % 2 === 1) {
        value += str[i].toUpperCase();
      } else {
        value += str[i].toLowerCase();
      }
    }
    return value;
  }
  
  function titleCase(str) {
    let value = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i-1] === ' ' || i === 0) {
        value = value + str[i].toUpperCase();
      } else {
      value += str[i].toLowerCase();
      }
    }
    return value;
  }
  
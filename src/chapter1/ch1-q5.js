export function oneWay(str1, str2) {
  const length1 = str1.length, length2 = str2.length;
  if (Math.abs(length1 - length2) > 1) {return false;}
  if (str1 === str2) {return true;}

  let diffCounter = 0;
  if(length1 === length2) {
    for(let i=0; i<length1; i++) {
      if(str1[i] !== str2[i]) {
        diffCounter += 1;
        if(diffCounter > 1) {return false;}
      }
    }
  }
  else {
    let shortest = length1 < length2 ? str1 : str2;
    let longest = length1 > length2 ? str1 : str2;
    for (let lptr = 0, sptr = 0; lptr < longest.length; lptr ++) {
      if(longest[lptr] !== shortest[sptr]) {
        diffCounter += 1;
        if(diffCounter > 1) {return false;}
      }
      else {sptr ++}
    }
  }
  return true;
}

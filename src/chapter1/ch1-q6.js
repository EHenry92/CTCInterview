export function strCompression (str) {
  if(!str || str.length <= 1) {return str;}
  let count = 1, out = '', char = str[0];

  for(let i=1; i<= str.length; i++) {
    if (str[i] == char) {
      count ++;
    }
    else {
      out += (char + count);
      count = 1;
      char = str[i];
      if( out.length >= str.length) {
        return str;
      }
    }
  }
  return out;
}

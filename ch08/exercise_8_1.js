let s = "How's%20it%20going%3F";
let decode_uri = decodeURIComponent(s);
console.log(decode_uri);

let u = "How's it going?";
let encode_uri = encodeURIComponent(u);
console.log(encode_uri);

let web_uri = "http://www.basescript.com?=Hello World";
let encode_web_uri = encodeURIComponent(web_uri);
console.log(encode_web_uri);
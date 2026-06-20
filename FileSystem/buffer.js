 const buf = new Buffer.alloc(5, 'a', 'ascii');
//  console.log(buf);
 const newBuf = new Buffer.from('I love js');
//  console.log(newBuf.toString());
//  console.log(newBuf.toJSON());
 
 const bufCopy = new Buffer.from(buf);
//  console.log(newBuf, bufCopy);

 const wordBuf = new Buffer.from('Artem loves lego');
 const catchBuf = new Buffer.from('Batma loves iron');
 
 catchBuf.copy(wordBuf);
 console.log(wordBuf.toString());
 
 wordBuf.write('Artem loves lego');
 catchBuf.copy(wordBuf, 5, 5, catchBuf.length ); 
 console.log(wordBuf.toString());

 
 
 
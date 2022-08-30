// Empty

const argon2 = require('argon2');

function hashit(flag){

    try {
        const hash = argon2.hash(flag);
      } catch (err) {
        //...
      }
      return hash
}

majhash=hashit("LubosSource542sa62s3x1y47s8sad92bg5iz2r1c");

console.log(majhash)
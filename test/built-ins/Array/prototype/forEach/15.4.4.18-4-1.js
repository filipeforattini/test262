// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-4-1
description: Array.prototype.forEach throws TypeError if callbackfn is undefined
includes: [runTestCase.js]
---*/

function testcase() {

  var arr = new Array(10);
  try {
    arr.forEach();    
  }
  catch(e) {
    if(e instanceof TypeError)
      return true;  
  }

 }
runTestCase(testcase);
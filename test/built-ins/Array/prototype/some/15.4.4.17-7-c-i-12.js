// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-12
description: >
    Array.prototype.some - element to be retrieved is own accessor
    property that overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var kValue = "abc";

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val === kValue;
            }
            return false;
        }
        
        var arr = [];
        try {
            Array.prototype[1] = 100;
            Object.defineProperty(arr, "1", {
                get: function () {
                    return kValue;
                },
                configurable: true
            });

            return arr.some(callbackfn);
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
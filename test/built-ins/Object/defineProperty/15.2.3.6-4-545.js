// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-545
description: >
    ES5 Attributes - fail to update [[Enumerable]] attribute of
    accessor property ([[Get]] is a Function, [[Set]] is a Function,
    [[Enumerable]] is true, [[Configurable]] is false) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: false
        });
        var result1 = false;
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        for (var p1 in obj) {
            if (p1 === "prop") {
                result1 = true;
            }
        }

        try {
            Object.defineProperty(obj, "prop", {
                enumerable: false
            });

            return false;
        } catch (e) {
            var result2 = false;
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            for (var p2 in obj) {
                if (p2 === "prop") {
                    result2 = true;
                }
            }

            return result1 && result2 && desc1.enumerable === true && desc2.enumerable === true && e instanceof TypeError;
        }
    }
runTestCase(testcase);
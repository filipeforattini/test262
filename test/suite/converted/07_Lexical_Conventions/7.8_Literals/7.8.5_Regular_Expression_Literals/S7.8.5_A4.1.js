// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A regular expression literal is an input element that is converted to
 * a RegExp object when it is scanned
 *
 * @section 7.8.5
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.5_Regular_Expression_Literals/S7.8.5_A4.1.js
 * @description Check ((/(?:)/ instanceof RegExp) === true)
 */

//CHECK#1
if ((/(?:)/ instanceof RegExp) !== true) {
  $ERROR('#1: (/(?:)/ instanceof RegExp) === true. Actual: ' + ((/(?:)/ instanceof RegExp)));
}   
   

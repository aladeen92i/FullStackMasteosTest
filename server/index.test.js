import {doubleIt, isEven, whatExtension, longestString, sumNestedArrays} from './utils/utils.js'
import { strict as assert } from 'assert'

function testDoubleIt() {
    [
        { input: 2, expected: 4},
        { input: -4, expected: -8},
    ].forEach(testCase => assert.deepEqual(doubleIt(testCase.input), testCase.expected))
}

function testIsEven() {
    [
        { input: 2, expected: true},
        { input: 3, expected: false},
    ].forEach(testCase => assert.deepEqual(isEven(testCase.input), testCase.expected))
}
function testWhatExtension() {
    [
        { input: 'aladeen.txt', expected: 'txt'},
        { input: 'aladeen.txt.aladeen', expected: 'aladeen'},
    ].forEach(testCase => assert.deepEqual(whatExtension(testCase.input), testCase.expected))
}
function testLongestString() {
    [
        { input: ['aaa','bbbb','ccccc'], expected: 'ccccc'},
        { input: ['ffffff','ee','ccccc'], expected: 'ffffff'},
    ].forEach(testCase => assert.deepEqual(longestString(testCase.input), testCase.expected))
}
function testSumNestedArray() {
    [
        { input: [1, 2], expected: 3 },
        { input: [1, [3]], expected: 4 },
    ].forEach(testCase => assert.deepEqual(sumNestedArrays(testCase.input), testCase.expected))
}


testDoubleIt()
testIsEven()
testWhatExtension()
testLongestString()
testSumNestedArray()
import { exportAllDeclaration, tsExternalModuleReference } from '@babel/types'
import reverseString from './reverseString'
import capitalizeFirstLetter from './capitalizeFirstLetter'
import caesar from './caesar'
import analyze from './analyze'

test('test capitalizing first letter', () => {
    expect(capitalizeFirstLetter('caesar')).toBe('Caesar')
})

test('test simple string reverse', () => {
    expect(reverseString('caesar')).toBe('raseac')
})

test('test simple caesar', () => {
    expect(caesar('caesar!',1)).toBe('dbftbs!')
})

test('test wraparound caesar', () => {
    expect(caesar('caesar?',25)).toBe('bzdrzq?')
})

test('test negative wraparound caesar', () => {
    expect(caesar('caesar!',-25)).toBe('dbftbs!')
})

test('test capitalized caesar', () => {
    expect(caesar('Caesar?',1)).toBe('Dbftbs?')
})

const returnedObj = analyze([0,1,2,3,4])

test('test obj length property', () => {
    expect(returnedObj.length).toBe(5)
})

test('test obj average property', () => {
    expect(returnedObj.average).toBe(2)
})
test('test obj min property', () => {
    expect(returnedObj.min).toBe(0)
})
test('test obj max property', () => {
    expect(returnedObj.max).toBe(4)
})
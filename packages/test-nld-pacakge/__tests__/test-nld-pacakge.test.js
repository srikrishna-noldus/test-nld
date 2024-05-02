const { isEven } = require('../dist/test-nld-pacakge.js')

test('isEven', ()=>{
    expect(isEven(1)).toBe(false);
    expect(isEven(10)).toBe(true);
});
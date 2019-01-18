const sum = require('./sum');


test('1 + 2 = 3', function(){
  expect(sum(1,2)).toBe(3);
});
// 1 + 2 เท่ากับ 3
test('1 + 2 = 3', ()=> {
  expect(sum(1,2)).toBe(3);
});


test('20 + 1 = 21', function(){
expect(sum(20,1)).toBe(21);
});
// 20 + 1 เท่ากับ 21

test('2 + 5 = 7', function(){
  expect(sum(2,5)).toBe(7);
});
// 2 + 5 เท่ากับ 7 

test('10 + 10 = 20', function(){
  expect(sum(10,10)).toBe(20);
});

test('12 + 4 = 16', function(){
  expect(sum(12,4)).toBe(16);
});
  
test('8 + 3 = 11', ()=>{
 expect(sum(8,3)).toBe(11);
});


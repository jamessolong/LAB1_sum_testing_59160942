const minus = require('./minus')


test('20 - 1 = 19', function(){
    expect(minus(20,1)).toBe(19);
});
   
    
test('5 - 2 = 3', function(){
      expect(minus(5,2)).toBe(3);
});
   
    
test('10 - 10 = 0', function(){
      expect(minus(10,10)).toBe(0);
});
    
test('12 - 4 = 8', function(){
      expect(minus(12,4)).toBe(8);
});
      
test('8 - 3 = 5', function(){
     expect(minus(8,3)).toBe(5);
});
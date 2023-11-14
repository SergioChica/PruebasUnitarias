const volumenEsfera = require("./esfera");

test('(3/4) * pi * radio = 6 == 904.7786842338603', () => {
     expect(volumenEsfera(6)).toBe(904.7786842338603)
     })

test('(3/4) * pi * radio = 6 == 904.7786842338603', () => {
expect(volumenEsfera(6)).not.toBe(904)
})
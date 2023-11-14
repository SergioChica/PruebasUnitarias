const areaTriangulo = require("./triangulo")

test('multiplicar Base = 60 por Altura = 95 da un area de = 2850', () => {
     expect(areaTriangulo(60,95)).toBe(2850);
     })
const { sum, resta } = require("../calculador/app.js")


test("La suma de 4 y 4 debe ser igual a 8", () => {
    expect(sum(4, 4)).toBe(8)
})

test("La resta de 10 menos 5 es igual a 5", () => {
    expect(resta(10, 5)).toBe(5)
})
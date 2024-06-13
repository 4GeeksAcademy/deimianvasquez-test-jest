const { isUpperCase } = require("../calculador/app.js")


describe("Valiación en una palabra", () => {


    // Primera prueba posible

    test('The string HELLO should return true', () => {

        const result = isUpperCase('HELLO');

        expect(result).toBe(true);

    })

    // Segunda prueba posible

    test('Testing for Hello (mixed)', () => {

        const result = isUpperCase('Hello');

        expect(result).toBe(false);

    })

    // Tercera prueba posible

    test('Testing for hello (lower)', () => {

        const result = isUpperCase('hello');

        expect(result).toBe(false);

    })

    // Cuarta prueba posible

    // test('Boolean should return false', () => {

    //     const result = isUpperCase(true);

    //     expect(result).toBe(false);

    // })

    // Quinta prueba posible

    // test('Number should return false', () => {

    //     const result = isUpperCase(12341234);

    //     expect(result).toBe(false);

    // })
})


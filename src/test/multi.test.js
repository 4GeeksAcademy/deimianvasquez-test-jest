const {multi} = require("../calculador/app.js")



test("2 multiplicado 2 igual a 4", ()=>{
    expect(multi(2,2)).toBe(4)
})
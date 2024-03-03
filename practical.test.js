const cap = require("./practical");

test("check capital", ()=>{
    expect(cap.capital("ahmed")).toBe("A");
})

test("reverse string", ()=>{
    expect(cap.rev("GeeksforGeeks")).toBe("skeeGrofskeeG");
})

test("make calcultion", ()=>{
    expect(cap.calc(1,3)).toBe((4,0,1/3,3));
})

test.skip("caeser", ()=>{
    expect(cap.caesar("ahmed")).toBe("binfe");
})
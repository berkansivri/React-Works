const add = (a, b) => a + b

test("should add two numbers", () => {
  const result = add(3,4)
  expect(result).toBe(7)
})

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`

test("should greet", () => {
  const result = generateGreeting("Berkan")
  expect(result).toBe('Hello Berkan!')
})
const add = (a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers',() => {
    const result = add(4,5);
    expect(result).toBe(9);
});

test('should generate a greeting', () => {
    const greeting = generateGreeting('Ribamar');
    expect(greeting).toBe('Hello Ribamar!');
});
import test from 'tape';

// YOUR CODE HERE -----------------------


// TESTS --------------------------------

test('------- Least common multiple of 72', assert => {
    // arrange
    const messageResult  = `Least common multiple of 72 is '2^3 * 3^2'`;
    const expectedResult = '2^3 * 3^2';
    const actualResult   = lcm([72]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

test('------- Least common multiple of 50', assert => {
    // arrange
    const messageResult  = `Least common multiple of 50 is '2 * 5^2'`;
    const expectedResult = '2 * 5^2';
    const actualResult   = lcm([50]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

test('------- Least common multiple of 23', assert => {
    // arrange
    const messageResult  = `Least common multiple of 23 is '23'`;
    const expectedResult = '23';
    const actualResult   = lcm([23]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

test('------- Least common multiple of 0', assert => {
    // arrange
    const messageResult  = `Least common multiple of 0 is '0'`;
    const expectedResult = '0';
    const actualResult   = lcm([0]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

test('------- Least common multiple of 72 y 50', assert => {
    // arrange
    const messageResult  = `Least common multiple of 72 and 50 is '2^3 * 3^2 * 5^2'`;
    const expectedResult = '2^3 * 3^2 * 5^2';
    const actualResult   = lcm([72, 50]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});


test('------- Least common multiple of 12 y 9', assert => {
    // arrange
    const messageResult  = `Least common multiple of 12 and 9 is '2^2 * 3^2'`;
    const expectedResult = '2^2 * 3^2';
    const actualResult   = lcm([12, 9]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

import test from 'tape'
import R from 'ramda'

// YOUR CODE HERE -----------------------

const factorize = (number) => {

    const getDivisors = (divisor, number, acc) => {

        const factor      = 0 === number % divisor ? divisor : undefined;
        const newNumber   = factor ? (number / divisor) : number;
        const nextDivisor = factor ? divisor : ++divisor;
        const accumulator = Array.prototype.concat.call([], acc, factor || []);

        if (divisor > newNumber) {
            return 1 === accumulator.length ? [divisor] : accumulator;
        }

        return getDivisors(nextDivisor, newNumber, accumulator);
    };

    return 0 === number || 1 === number ? [number] : getDivisors(2, number, [])
};

const groupByFactor = (divisors) => {
    return divisors
        .reduce((acc, val) => {
            const count = acc[val] ? ++acc[val] : 1;
            return Object.assign({}, acc, {[val]: count})
        }, {})
};

const mergeMaxFactor = (mergedFactors, factors) => {
    const bases = Object.keys(factors);

    const factorsWithHigherExponent = bases.reduce((acc, val) => {
        const exponent = mergedFactors[val] && mergedFactors[val] > factors[val] ? mergedFactors[val] : factors[val];
        return Object.assign({}, acc, {[val]: exponent});
    }, {});

    return Object.assign({}, mergedFactors, factorsWithHigherExponent);
};

const lcmToString = (factors) => {

    const bases = Object.keys(factors);

    const basesWithExponent = bases.reduce((acc, val) => {
        const inString = factors[val] > 1 ? `${val}^${factors[val]}` : `${val}`;
        return Array.prototype.concat.call([], acc, inString);
    }, []);

    return basesWithExponent.join(' * ')
};

const lcm = (numbers) => {

    const _lcm = R.pipe(
        R.map(factorize),
        R.map(groupByFactor),
        R.reduce(mergeMaxFactor, {}),
        lcmToString
    );

    return _lcm(numbers);

};

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

test('------- Least common multiple of 72 and 50', assert => {
    // arrange
    const messageResult  = `Least common multiple of 72 and 50 is '2^3 * 3^2 * 5^2'`;
    const expectedResult = '2^3 * 3^2 * 5^2';
    const actualResult   = lcm([72, 50]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

test('------- Least common multiple of 12 and 9', assert => {
    // arrange
    const messageResult  = `Least common multiple of 12 and 9 is '2^2 * 3^2'`;
    const expectedResult = '2^2 * 3^2';
    const actualResult   = lcm([12, 9]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

test('------- Least common multiple of 12, 9 and 10', assert => {
    // arrange
    const messageResult  = `Least common multiple of 12, 9 and 10 is '2^2 * 3^2 * 5'`;
    const expectedResult = '2^2 * 3^2 * 5';
    const actualResult   = lcm([12, 9, 5]);

    // act

    // assert
    assert.equal(actualResult, expectedResult, messageResult);
    assert.end();
});

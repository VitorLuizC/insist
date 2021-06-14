import test from 'ava';
import insist from './insist';

test("insist is a function that returns a 'Promise'", (context) => {
  const result = insist(() => true);
  context.is(typeof insist, 'function');
  context.true(result instanceof Promise);
});

test("insist's Promise is resolved when condition returns 'true'", async (context) => {
  await insist(() => true);

  context.pass();
});

test("insist's checks condition until it is satisfied", async (context) => {
  let count = 0;

  await insist(() => {
    count++;
    return count === 5;
  }, 50);

  context.is(count, 5);
});

test("insist's waits time to check condition again", async (context) => {
  const TIME = 100;

  let count = 0;
  const before = Date.now();

  await insist(() => {
    count++;
    return count === 3;
  }, TIME);

  context.true(Date.now() >= before + count * TIME);
});

test('insist support async conditions', async (context) => {
  let count = 0;

  await insist(() => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        count++;
        resolve(count === 3);
      }, 0);
    });
  });

  context.is(count, 3);
});

test("insist assumes thrown errors as 'false'", async (context) => {
  let count = 0;

  await insist(() => {
    count++;

    if (count < 3) {
      throw new Error('count is invalid.');
    }

    return true;
  });

  context.is(count, 3);
});

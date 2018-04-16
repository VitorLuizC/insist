import test from 'ava'
import insist from '../'

test('Module exports a function', (context) => {
  context.is(typeof insist, 'function')
})

test('When check is true Insistence\'s is resolved', async (context) => {
  let isFinished = false
  const now = Date.now()
  setTimeout(() => isFinished = true, 1000)
  await insist(() => isFinished)
  context.true(isFinished)
  context.true(Date.now() - now >= 1000)
})

test('Check can be asynchronous', async (context) => {
  const now = Date.now()
  await insist(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  })
  context.true(Date.now() - now >= 1000)
})

test('Check assumes errors thrown as false', async (context) => {
  const now = Date.now()
  await insist(() => {
    if (Date.now() - now < 1000)
      throw new Error('It need more time')
    return true
  })
  context.true(Date.now() - now >= 1000)
  await insist(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
    if (Date.now() - now < 2000)
      throw new Error('It need more time')
    return true
  })
  context.true(Date.now() - now >= 2000)
})

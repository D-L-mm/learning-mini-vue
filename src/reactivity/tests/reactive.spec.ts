
import {reactive}  from '../reactive'
describe('reactive 猫', () => {

  it('reactive', () => {

    const qq = {foo: 100}
    const newQ = reactive(qq)

    expect(newQ).not.toBe(qq)

    expect(newQ.foo).toBe(100)
    
  })
})
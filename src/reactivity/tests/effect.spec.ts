import { reactive } from '../reactive'
import { effect } from '../effect'


describe('effect', () => {

  it('happy path', () => {

    const user = reactive({ age: 100 })

    let aa
    effect(() =>{
      aa = user.age + 10
    })

    expect(aa).toBe(110)

    aa++
    expect(aa).toBe(111)

  })

  it('runner', () => {
    // 1, effect    ->   runftion(runner)   -> fn  ->  return

    let foo = 10
    const runner = effect(() => {
      foo++;
      return "foo"
    });

    expect(foo).toBe(11);

    const r = runner();

    expect(r).toBe("foo")
  })

})
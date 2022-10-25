class reactiveEffect {
  private _fn: any

  constructor(fn) {
    this._fn = fn
  }
  run() { 
    activeEffect
    return this._fn()
  }
}

let targetMap = new Map()
export function track(target, key) {
  let depsMap = targetMap.get(target)
  if(!depsMap) {
    depsMap = targetMap.set(target, (depsMap = new Map()))
  }

  let deps = targetMap.get(key)
  if(!deps) {
    deps = targetMap.set(key, (deps = new Set()))
  }
}



export function trigger(target, key) { 
  let depsMap = targetMap.get(target)
  let deps = depsMap.get(key)

  for (const effect of deps) {
      effect.run()
  }
}


let activeEffect
export function effect(Fn) {

  const _effect = new reactiveEffect(Fn)
  _effect.run()

  return _effect.run.bind(_effect)

}

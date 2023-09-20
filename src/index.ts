
import Base from "./domain/base/base.entitie";

const base = new Base({
    description:'Description',
})
base.deactivate()
console.log(base);
base.activate()
console.log(base)


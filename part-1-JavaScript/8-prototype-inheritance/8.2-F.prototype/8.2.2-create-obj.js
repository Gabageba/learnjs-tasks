function Obj(objName) {
  this.name = objName
}

//сработает
const obj = new Obj('Object')
const obj2 = new obj.constructor('Object2')
console.log(obj2.name)

//не сработает
Obj.prototype = {}
const obj3 = new Obj('Object3')
const obj4 = new obj3.constructor('Object4')
console.log(obj4.name)

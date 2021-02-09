//Что будет выведено в консоль?

var foo = 'global foo';

const obj = {
  text: 'text',
  foo: function () {
    let that = this;
    console.log('foo', this.text);
    function bar() {
      console.log('bar this', this.text);
      console.log('bar that', that.text);
    }
    bar.call(this);
  },
};

obj.foo();

const doSomething = obj.foo.bind(obj);
doSomething();

//-------------------
function f(a, b, c) {
  return a * b + c;
}

console.log(f.bind(f, 1, 2, 3)());
console.log(f.call(f, 4, 5, 6));
console.log(f.apply(f, [1, 2, 3]));
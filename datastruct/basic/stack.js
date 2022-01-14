// 栈实现
class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  get length() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

class ObjectStack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 0; i < this.items.length; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

function decimalToBinary(decimalNumber) {
  const remStack = new Stack()
  let number = decimalNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

function baseConverter(decimalNumber, base) {
  const remStack = new Stack()
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz"
  let number = decimalNumber
  let rem
  let baseString = ''
  if (!(base >= 2 && base <= 36)) {
    return ""
  }
  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}

function parenthesesChecker(symbols) {
  const stack = new Stack();
  const opens = '([{';
  const closers = ')]}';
  let balanced = true;
  let index = 0;
  let symbol;
  let top;

  while (index < symbols.length && balanced) {
    symbol = symbols[index];
    if (opens.indexOf(symbol) >= 0) {
      stack.push(symbol);
    } else if (stack.isEmpty()) {
      balanced = false;
    } else {
      top = stack.pop();
      if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
        balanced = false;
      }
    }
    index++;
  }
  return balanced && stack.isEmpty();
}

console.log(decimalToBinary(44))
console.log(decimalToBinary(10))
console.log(baseConverter(1003, 2))
console.log(baseConverter(10, 2))

console.log(parenthesesChecker("[][]("))

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(4)
stack.push(5)
console.log(stack.peek())
stack.push(11)
console.log(stack.isEmpty())
console.log(stack.size())
stack.clear()
console.log(stack.length)

const objectStack = new ObjectStack()
console.log(Object.getOwnPropertyNames(objectStack))
console.log(Object.keys(objectStack))
console.log(objectStack.items)

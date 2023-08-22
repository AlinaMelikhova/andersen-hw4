function concatStrings(str, separator) {
  let divider = '';
  const acc = [];

  const concatStringsInner = (str, separator) => {
    if (typeof separator === 'string') {
      divider = separator;
    }

    if (typeof str !== 'string') {
      return acc.join(divider);
    }

    acc.push(str);

    return concatStringsInner;
  };

  return concatStringsInner(str, separator);
}

class Calculator {
  constructor(x, y) {
    this.setX(x);
    this.setY(y);
  }

  setX = (x) => {
    this.validateValue(x, 'x');
    this.x = x;
  };

  setY = (y) => {
    this.validateValue(y, 'y');
    this.y = y;
  };

  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };

  logSub = () => {
    console.log(this.x - this.y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error(`y is zero`);
    }
    console.log(this.x / this.y);
  };

  validateValue(value, name) {
    if (
      typeof value !== 'number' ||
      value === Infinity ||
      value === -Infinity ||
      isNaN(value)
    ) {
      throw new Error(`${name} is not a number`);
    }
  }
}

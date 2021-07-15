class Node {
  constructor(value, level = 1, parentLevel = 0, left = null, right = null) {
    this._value = this.validateValue(value);
    this._left = left;
    this._right = right;
    this._level = level;
    this._parentLevel = parentLevel;
  }
  
  get value() {
    if (this._value === undefined || this._value === null || isNaN(value)) {
      console.error("Aucun nombre n'a été donné comme valeur à ce noeud!");
      return null;
    } else {
      return this._value;
    }
  }
  
  set value(newValue) {
    this._value = this.validateValue(newValue);
  }
  
  validateValue(newValue) {
    if (newValue !== undefined && newValue !== null && !isNaN(newValue)) {
      if (['number', 'string'].includes(typeof newValue) && Number.parseInt(newValue) == Number.parseFloat(newValue)) {
        return Number.parseInt(newValue);
      } else {
        console.error(`Ce nombre "${newValue}" n'est pas un int!`);
	return null;
      }
    } else {
      console.error(`Cette valeur "${newValue}" n'est pas un nombre!`);
      return null;
    }
  }
  
  toString(way = "inorder") {
    if (way === undefined || way === null || !["inorder", "preorder", "postorder"].includes(way)) {
      console.error(`L'argument "${way}" n'est ni "inorder", ni "preorder", ni "postorder"!`);
      way = "inorder";
    }
    switch (way) {
      case "preorder":
        return this.getPreOrder().toString();
        break;
      case "postorder":
        return this.getPostOrder().toString();
        break;
      default:
        return this.getInOrder().toString();
        break;
    }
  }
  
  printInOrder() {
    let value_to_s = (this._value === null ? null : this._value.toString());
    if (this._right !== null) {
      this._right.printInOrder();
    } else {
      console.log(`${' '.padStart(value_to_s.length * Math.pow(this._level, this._parentLevel), '.')}(right à null)`);
    }
    console.log(`${' '.padStart(value_to_s.length * Math.pow(this._level, this._parentLevel), '=')}${value_to_s} (level : ${this._level})`);
    if (this._left !== null) {
      this._left.printInOrder();
    } else {
      console.log(`${' '.padStart(value_to_s.length * Math.pow(this._level, this._parentLevel), '.')}(left à null)`);
    }
  }
  
  insert(newValue) {
    const newNode = new Node(newValue);
    if (newValue < this._value) {
      if (this._left === null) {
        newNode._parentLevel = this._level;
        newNode._level = this._level + 1;
        this._left = newNode;
      } else {
        this._left.insert(newNode._value);
      }
    } else if (newValue > this._value) {
      if (this._right === null) {
        newNode._parentLevel = this._level;
        newNode._level = this._level + 1;
        this._right = newNode;
      } else {
        this._right.insert(newNode._value);
      }
    } else {
      console.error(`Ce nombre "${newValue}" se trouve déjà dans l'arbre!`);
    }
  }
  
  find(value) {
    if (this._value === value) {
      return this;
    } else if (value < this._value && this._left != null) {
      return this._left.find(value);
    } else if (value > this._value && this._right != null) {
      return this._right.find(value);
    }
    return null;
  }
  
  getInOrder() {
    let numbersArray = [];
    if (this._left !== null) {
      const leftNumbersArray = this._left.getInOrder();
      //console.log(`Sous-arbre à gauche : [${leftNumbersArray}]`);
      numbersArray = numbersArray.concat(leftNumbersArray);
    }
    numbersArray.push(this._value);
    if (this._right !== null) {
      const rightNumbersArray = this._right.getInOrder();
      //console.log(`Sous-arbre à droite : [${rightNumbersArray}]`);
      numbersArray = numbersArray.concat(rightNumbersArray);
    }
    return numbersArray;
  }
  
  getPreOrder() {
    let numbersArray = [];
    numbersArray.push(this._value);
    if (this._left !== null) {
      const leftNumbersArray = this._left.getPreOrder();
      //console.log(`Sous-arbre à gauche : [${leftNumbersArray}]`);
      numbersArray = numbersArray.concat(leftNumbersArray);
    }
    if (this._right !== null) {
      const rightNumbersArray = this._right.getPreOrder();
      //console.log(`Sous-arbre à droite : [${rightNumbersArray}]`);
      numbersArray = numbersArray.concat(rightNumbersArray);
    }
    return numbersArray;
  }
  
  getPostOrder() {
    let numbersArray = [];
    if (this._left !== null) {
      const leftNumbersArray = this._left.getPostOrder();
      //console.log(`Sous-arbre à gauche : [${leftNumbersArray}]`);
      numbersArray = numbersArray.concat(leftNumbersArray);
    }
    if (this._right !== null) {
      const rightNumbersArray = this._right.getPostOrder();
      //console.log(`Sous-arbre à droite : [${rightNumbersArray}]`);
      numbersArray = numbersArray.concat(rightNumbersArray);
    }
    numbersArray.push(this._value);
    return numbersArray;
  }
}

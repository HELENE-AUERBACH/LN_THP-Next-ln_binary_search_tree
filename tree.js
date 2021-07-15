class Tree {
  _intsArray = [4,2,9,5,1,8,9];
  
  constructor() {
    this._root = null;
    //console.log(`[${this._intsArray}] est de type "${typeof this._intsArray}".`);
    if (this._intsArray !== undefined && this._intsArray !== null && (typeof this._intsArray === 'object')) {
      this._intsArray.forEach((number) => {
        this.insert(number);
      });
      console.log(`Cet arbre a été initialisé avec ${this._intsArray.length} nombres.`);
    }
  }
  
  to_s() {
    if (this._root === null){
      console.log(`Cet arbre est vide!`);
    } else {
      this._root.printInOrder();
    }
  }
  
  toString() {
    if (this._root === null){
      console.error(`Cet arbre est vide!`);
      return null;
    } else {
      return this._root.toString();
    }
  }
  
  insert(number) {
    const newNode = new Node(number);
    if (this._root === null){
        this._root = newNode;
    } else {
      this._root.insert(newNode._value);
    }
  }
  
  find(value) {
    return this._root.find(value);
  }
  
  getInOrder() {
    return this._root.getInOrder();
  }
  
  getPreOrder() {
    return this._root.getPreOrder();
  }
  
  getPostOrder() {
    return this._root.getPostOrder();
  }
}

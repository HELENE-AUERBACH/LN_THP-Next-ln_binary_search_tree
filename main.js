var tree;

function setup() {
  tree = new Tree();
  console.log(tree);
  console.log(`\ninorder : [${tree.getInOrder()}]`);
  console.log(`postorder : [${tree.getPostOrder()}]`);
  console.log(`preorder : [${tree.getPreOrder()}]`);
  console.log(`\nMon dessin "super limpide" de l'arbre :`);
  tree.to_s();
}

setup();

function TreeConstructor(strArr) {
    //Formaterer bedre
    const tree = strArr.map(i => i.replace(/[\(\)]/, '').split(',').map(i => parseInt(i)));
    const child = tree.map(i => i[0]);//Lager array med childnodes
    const parent = tree.map(i => i[1]);//Lager array med parentnodes
    
    //Sjekker om det er 3 av samme parent, eller 2 av samme child
    return !(('_' + parent.sort().join('_') + '_').match(/(_\d+)\1\1_/) || ('_' + child.sort().join('_') + '_').match(/(_\d+)\1_/));
}
console.log(TreeConstructor(readline()));
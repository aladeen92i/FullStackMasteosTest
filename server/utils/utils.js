export function sumNestedArrays(array) {
    // avoid modifying the original array
    const stack = array.slice()
    // je vais utiliser cette liste comme un stack sous mon controle
    // donc je copie la liste originale pour éviter de la manipuler
    let total = 0
    while (stack.length !== 0) {
        const item = stack.pop()
        if (typeof item === 'number') {
            total += item
        }
        else if (item instanceof Array) {
            // avoid recursion and smashing the stack
            for (const innerItem of item) {
                stack.push(innerItem)
            }
            // j'évite la syntaxe `stack.push(...item)`, qu'on pourrait utiliser
            // à la place de la boucle, pour éviter de saturer le call stack
            // j'évite l'appel de fonction récursive pour la même raison
        }
    }
    return total
}
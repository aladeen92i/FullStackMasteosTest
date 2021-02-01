export function doubleIt(integer) {
    if(typeof integer === 'number'){
		const result = integer * 2
		return result
	}else{
		throw new Error('veuillez entrer un nombre')
	}
}

export function isEven(integer) {
	if (integer % 2 === 0) {
        return true// 'its even !'
	}
	else {
		return false // 'its odd !'
	}
}

export function whatExtension(string) {
    //is there a point in the string
	if (string.indexOf('.') < 0) {
		return 'didnt find file extension'
	}
	// Otherwise, we need to grab and return the extension
	let filenameParts = string.split('.')
	return filenameParts[filenameParts.length-1]
}

export function longestString(array) {
    let longestLength = 0
	let returnString = ''
	array.forEach(function(item){
		if ((typeof item === 'string') && (item.length > longestLength)) {
			longestLength = item.length
			returnString = item
		}
	})
	return returnString
}

export function sumNestedArrays(array) {
    // avoid modifying the original array
    const stack = array.slice()
    // je vais utiliser cette liste comme un stack sous mon controle
    // donc je copie la liste originale pour éviter de la manipuler
    // pas d'effet de bords !

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
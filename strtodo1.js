// Remove Blanks
function remove_blanks(str) {
    arr = str.split(" ")
    return arr.join("")
}
console.log(remove_blanks(" Pl ayTha tF u nkyM usi c"))

// Get Digits
function get_digits(str) {
    num_str = ""
    for (var i = 0; i < str.length; i++) {
        if (Number.isInteger(Number(str[i]))) {
            num_str = num_str.concat(str[i])
        }
    }
    return num_str
}
console.log(get_digits("0s1a3y5w7h9a2t4?6!8?0"))

// Acronyms
function acronyms(str) {
    acros = ""
    arr = str.split(" ")
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (j == 0) {
                acros = acros.concat(arr[i][0].toUpperCase())
            }
            else {
                break
            }
        }   
    }
    return acros
}
console.log(acronyms(" there's no free lunch - gotta pay yer way. "))
console.log(acronyms("Live from New York, it's Saturday Night!"))

// Zip Arrays into Map
function zip_to_map(arr, arr2) {
    var map = {}
    for (var i = 0; i < arr.length; i++) {
        map[arr[i]] = arr2[i]
    }
    return map
}
//There seem's to be an implicit type coercion and forceful reordering of the key:value pairs that I can't prevent
//The keys and values all match up as the assignment wants, but the 3 key goes from int to string and the abc and yo keys go from strings to symbols when printed
console.log(zip_to_map(["abc", 3, "yo"], [42, "wassup", true]))

// Invert Hash
function invertHash(obj) {
    new_obj = {}
    for (key in obj) {
        new_obj[obj[key]] = key
    }
    return new_obj
}
console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}))
// same implicit type coercion issue as above, keys go from strings to symbols when the new object is printed
// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
    // We concatenate a space at the end of our string. We will use every space detected in our for loop in the if condition. If it finds a space it will execute the slice function using the indices and then push each element in the array arr. We use first the manual output of our desired string so we can see clearly the relationship of the indices that we will use.
    // console.log(s.slice(0,4))
    // console.log(s.slice(5,8))
    // console.log(s.slice(9,15))

    s = s.concat(' ')
    let arr = []
    let j = 0
    for(i=0; i<=s.length-1; i++){
        if(s[i] == ' '){
            // console.log(j, i)
            arr.push(s.slice(j,i))
            j = i + 1
        }
    }
    let arr1 = [] 
    for(i=0; i<=arr.length-1; i++){
        arr1.push(arr[i].length)
    }
    // console.log(arr1)

    let arr2 = []
    for(i=0; i<=arr1.length-1; i++){
        arr2.push(arr[i].length)
    }
    // console.log(`arr2 ${arr2}`)

    arr1.sort(function(a, b){return a-b});
    // console.log(arr1)
    let lowest = arr1[0]
    // console.log(lowest)

    for(i=0; i<=arr2.length-1; i++){
        // console.log(arr2[i], lowest)
        if(arr2[i] == lowest){
            // console.log(arr[i], lowest)
            console.log(`In the string:\n${s}`)
            console.log(`The shortest word is [${arr[i]}],\nlength is ${lowest}`)
        }
    }
}
findShort('find the length of the shortest word')
console.log('========')
findShort("bitcoin take over the world maybe who knows perhaps")
console.log('========')
findShort("Let's travel abroad shall we")
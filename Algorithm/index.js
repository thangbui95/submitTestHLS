const miniMaxSum = (num1, num2, num3, num4, num5) => {
    
    let a = num1 + num2 + num3 + num4 + num5
    let minsum = a;
    let maxsum = 0;
    let minelement = num1;
    let maxelement = num2;
    let odd = [];
    let even = [];
    let b = []
    b.push(num1)
    b.push(num2)
    b.push(num3)
    b.push(num4)
    b.push(num5)
    b.forEach((n,i) => {
        a -= n
        if(a>maxsum) {
            maxsum = a
            a += n
        } else if(a<minsum) {
            minsum = a
            a += n
        }
        if (n % 2 == 0) {
            even.push(n)
        } else {
            odd.push(n)
        }
        if (n>maxelement) {
            maxelement = n
        } else if (n<minelement) {
            minelement = n
        }
    })
    console.log(`min max sum result: ${minsum} ${maxsum}`)
    console.log(`total of array: ${a}`)
    console.log(`min of array: ${minelement}`)
    console.log(`max of array: ${maxelement}`)
    console.log(`even of array: ${even}`)
    console.log(`odd of array: ${odd}`)
}

miniMaxSum(1,2,3,4,5)

/*
        Bouns:
    + Count total of array
    + Find min in array
    + Find max in array
    + Find even elements in array
    + Find odd elements in array
*/
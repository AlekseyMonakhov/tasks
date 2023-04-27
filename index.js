let foo = { n: 1 };
let bar = foo;
foo.x = foo = { n: 2 };
console.log(foo);
console.log(bar);

const arr = [1, 2, 3, 4, 5, 22, -1, 2, 3, 3, 3, -22, 44,-1,-2,3,3,55,5,-4,99];

function findMaxSlice(arr) {
    const resultArray = [];
    let startIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            const currentSlice = arr.slice(startIndex, i);

            if (currentSlice.length) {
                resultArray.push(currentSlice);
            }
            startIndex = i + 1;
        }

        if (i + 1 === arr.length) {
            resultArray.push(arr.slice(startIndex, arr.length));
        }
    }

    const [maxSlice] = resultArray.sort((a, b) => {
        if (
            a.reduce((prev, cur) => prev + cur, 0) >
            b.reduce((prev, cur) => prev + cur, 0)
        ) {
            return -1;
        }

        if (
            a.reduce((prev, cur) => prev + cur, 0) ===
            b.reduce((prev, cur) => prev + cur, 0)
        ) {
            return 0;
        }

        return 1;
    });

    console.log(maxSlice);
}

findMaxSlice(arr);
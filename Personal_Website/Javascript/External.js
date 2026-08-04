let numarray=[];
for (let i = 0; i < 10; i++) {
    const randomnum = Math.floor(Math.random() * 100) + 1;
    numarray.push(randomnum);
}


let totalcount = numarray.length;

let highestnum = 
Math.max(...numarray);

console.log("Array is " + numarray + " total count is " + totalcount + " highest num in the array is " + highestnum)
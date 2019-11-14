var arr = [0,1,2,3,4,5,6]

var hasil = arr.slice(2,5)

// console.log(hasil)

var output = `Rp. ${new Intl.NumberFormat('id-ID').format(2500000)}`

// console.log(output)

// var a  = setInterval(()=> console.log('hello'), 3000)

// console.log(a)

 function getRand(){
    return Math.floor(new Date().getTime() /    (37* 1000000));
}

console.log(getRand())

//map method
let arrayMoney = [500, 400, 300]
function add(numbers){
    return numbers-400;
}
let newArray = arrayMoney.map(add)
console.log(newArray)


//find method
let movies = [
    {
        name:"lionkind",
        id:53
    },
       {
        name:'hunters',
        id:62

    }
]
function proj(movie){
    if (movie.id === 62){
        console.log(movie.name)
    }
    
}
let movu= movies.find(proj)


//for loop
let array = ["abdi","farhan","hassan","ali"]
for(i=0; i<array.length; i++){
    console.log(`hello ${array[i]}`)
}

//reduce
let rays= [5,7,8,9,4]
function myFunc(total, num) {
    return total + num;
  }
  let totals = rays.reduce(myFunc)
  console.log(totals);

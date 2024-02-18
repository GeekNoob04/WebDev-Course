console.log("Hacker hai")
console.log("Hecker hai")

// setTimeout(() => {  //async function
//     console.log("I am inside setTimeout")
// }, 2000);
// setTimeout(() => {
//     console.log("I am inside setTimeout 2")
// }, 2000);

console.log("The End")

const fn = () => {
  console.log("Nothing")
}


const callback = (arg,fn) => {
    console.log(arg)
    fn()
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Harshit",fn)
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

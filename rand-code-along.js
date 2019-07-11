const multiplier = 100;
function rand(){
    const decimal = Math.random();
    const times = decimal * multiplier;
    const final = Math.floor(times)
    
    return final
}
console.log(rand());

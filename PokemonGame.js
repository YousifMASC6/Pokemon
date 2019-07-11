const roster = ["Pikachu" , "Mewtwo", "Onix", "Eevee"]
roster.push("Snorlax")
// roster.pop("")
const catchChance = (.25)
const catchAttempt = Math.random()

if(catchAttempt < catchChance){
    console.log("Caught It!"); 
    roster.push("Charizard")
}else if (catchAttempt >= catchChance){
    console.log("Aargh! Almost had it!");
}  
console.log(roster.length)
if(roster.length < 6){
    roster.push("EMPTY");
}
const elements = ["plant","fire","water"];
const enemyAttackType = elements[Math.floor(Math.random()*elements.length)];

if (enemyAttackType === "plant"){
    console.log ("It's super effective!");
}else if (enemyAttackType === "fire"){
    console.log ("It's not very effective!");
}
else if (enemyAttackType === "water")
 console.log ("Nothing special happened!")
else console.log("Error, this isn't supposed to be seen!")
console.log(roster);

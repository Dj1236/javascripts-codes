const marverl_heros =["batman ","superman ","thanos","aquaman"]
const dc_heros=["ironman","hulk","thor","spiderman"]
marverl_heros.push(dc_heros)//aa array ni andar bijo array lai lai
const all_Hero = marverl_heros.concat(dc_heros)// aa array ni andar badha element lai lei new array ma
const all_new_hero = [...marverl_heros,...dc_heros]
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // upar vadi problem karvamate aano use thai
console.log(Array.isArray("dhairya"))
console.log(Array.form({name:'dhairya'})) // interseting topic for interview its return empty string
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

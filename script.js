const diesel = process.argv[2];
const afval = process.argv[3];
const natuur = parseInt(process.argv[4]);
let sterren = 0;

if (diesel === "ja") {
    sterren++;
}
if (afval === "ja") {
    sterren++;
}
if (natuur > 25) {
    sterren++;
}

if (sterren === 3) {
    console.log("Het is een milieuvriendelijke stad");
} else if (sterren === 0) {
    console.log("De stad moet omgevormd worden");
} else {
    const nogNodig = 3 - sterren;
    console.log(`De stad heeft nog ${nogNodig} sterren nodig`);
}
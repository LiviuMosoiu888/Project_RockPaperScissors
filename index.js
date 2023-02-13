function getComputerChoice() {
    const threeOptionsList = ["Rock", "Paper", "Scissors"];
    const randomPick = Math.floor(Math.random() * threeOptionsList.length);

    console.log(threeOptionsList[randomPick]);
}

getComputerChoice();

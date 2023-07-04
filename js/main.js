const chessContainer = document.querySelector(".chess-container");

for (let i=1; i < 101; i++) {
    //let singleCell = `<div class="chess-square"></div>`;
    //chessContainer.innerHTML += singleCell;

    //credo un div dentro il container e poi ci aggiungo il nome chess-quare (quindi lo cancello da HTML)
    let singleCell = document.createElement("div");
    singleCell.classList.add("chess-square");


    if (i % 3 === 0) {
        if (i % 5 === 0) {
            singleCell.classList.add("bg-fizzbuzz", "text-center")
            singleCell.innerHTML = "fizzbuzz";
        } else {
            singleCell.classList.add("bg-fizz", "text-center")
            singleCell.innerHTML = "fizz";
        }
        
    } else if (i % 5 === 0) {
        singleCell.classList.add("bg-buzz", "text-center")
        singleCell.innerHTML = "buzz";
    } else {
        singleCell.classList.add("bg-number", "text-center")
        singleCell.innerHTML += i;
    }
    chessContainer.append(singleCell);
}
    



``

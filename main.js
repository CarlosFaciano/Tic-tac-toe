const menu_main = document.querySelector("#menu_main")
const game_section = document.querySelector("#game_section")
const vs_cpu = document.querySelector("#game_cpu")
const vs_player = document.querySelector("#game_player")
const game_buttons = document.querySelector(".squares_container")
const buttons = document.querySelectorAll(".squares")
let choose_player1 = document.querySelector(".choose_player1")
let choose_player2 = document.querySelector(".choose_player2")
const tic_tac = document.querySelector("body")
console.log(choose_player1)


/* hide and show menu game, game section and win section */
vs_cpu.addEventListener("click", toggleSection)
vs_player.addEventListener("click", toggleSection)
/* choose_player1.addEventListener("click", game_x) 
choose_player2.addEventListener("click", game_o)    */
game_buttons.addEventListener("click",  (e) => {
    let player_x = choose_player1.value
    let player_o = choose_player2.value
    console.log(e.target.value)
   if ( choose_player1.value === "x" && e.target.matches(".squares") && e.target.innerHTML === "" ) {
      const img = document.createElement("img")
       img.src = "icons8-x-64.png"
       img.setAttribute("class", "x_player")
       e.target.appendChild(img) 
       

   } 
   else{
       const img = document.createElement("img")
       img.src = "circle-svgrepo-com.svg"
       img.setAttribute("class", "circle")
       img.alt = ""
       e.target.appendChild(img)
       e.preventDefault 
   }
}) 
/* tic_tac.addEventListener("click", (e) => 
     )  */


   /* console.log(tic_tac.target.tagName("BUTTON")) */


function game_x(e) {
    let turn_x = choose_player1
        if (e.target.matches(".squares") && e.target.innerHTML === "" && e.target.matches(".choose_player1")) {
            const img = document.createElement("img")
            img.src = "icons8-x-64.png"
            img.setAttribute("class", "x_player")
            e.target.appendChild(img)


        }
        else if (e.target.value > 0) {
            e.target = ""
        }
    } 


function game_o(e) {
    if (e.target.matches(".squares") && e.target.innerHTML === "" && e.target.matches(".choose_player2")) {
        const img = document.createElement("img")
        img.src = "circle-svgrepo-com.svg"
        img.setAttribute("class", "circle")
        img.alt = ""
        e.target.appendChild(img)
        e.preventDefault
        console.log(e.target)
    }
    else if (e.target.value > 0) {
        e.target = ""
    }

}

function toggleSection() {
    menu_main.classList.toggle("d-none")
    game_section.classList.toggle("d-none")
}


/* const svg = document.createElement("svg")
svg.xmlns = "http://www.w3.org/2000/svg"
svg.fill = "none"
svg.viewBox = "0 0 24 24"
svg.stroke_width = "1.5"
svg.stroke = "currentColor"
svg.setAttribute("class", "size-6 x_player")
e.target.appendChild(svg) */
/* when the player clicks on a button, it turns on a circle or an x */
/* function ticTacToe(){
     const img = document.createElement("img")
    img.src ="circle-svgrepo-com.svg"
    img.setAttribute("class", "circle")
    img.alt = ""
    game_buttons.appendChild(img) 

}  */

/*<svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-6 x_player "> */

const buttonBgc = document.getElementById("bgc");
const texto = document.getElementById("text");
const buttonImg = document.getElementById("img");
const buttonTitleColor = document.getElementById("title-color");
const buttonDelete = document.getElementById("delete");
const result = document.getElementById("result");

buttonBgc.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
})

texto.addEventListener("click", () => {
    result.innerHTML += `<p>El anime de Jujutsu Kaisen cuenta con 3 temporadas que suman un total de 64 episodios oficiales (52 episodios divididos entre la primera y segunda temporada, más los 12 confirmados de la primera mitad de la tercera). Además, la historia se complementa con una película precuela. </p>`;
})

buttonImg.addEventListener("click", () => {
    img.innerHTML += `<img src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/f6/JJK_New_Key_Visual.jpg/revision/latest/scale-to-width-down/1200?cb=20200914020414&path-prefix=es" alt="Corazón Azul">`;
})

buttonTitleColor.addEventListener("click", () => {
    if (titulo.style.color === "blue") {
        titulo.style.color = "black";
    } else {
        titulo.style.color = "blue";
    }
})

buttonDelete.addEventListener("click", () => {
    img.innerHTML = "";
})



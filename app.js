let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelector(".button");

btns.forEach(function (btn){
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++
        }else{
            count  = 0;
        }

        if(count > 0){
        }else if(count < 0) {
            value.style.color ="red";
        }else (count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
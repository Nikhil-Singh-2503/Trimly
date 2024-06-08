const inputURL = document.querySelector(".inputURL");
const shortBtn = document.querySelector(".shortBtn");
const resultEl = document.querySelector(".result_container");

const fetchURL = async() =>{
    const apiURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(inputURL.value);
    fetch(apiURL).then(res =>res.text()).then(data=>{
        resultEl.innerHTML = `
        <span class="shortendURL">
        ${data}
        </span>`;
        resultEl.style.color= "#FFFFFF";
        resultEl.style.fontweight ="600";
        resultEl.style.justifyContent = "center";
    })
    .catch((err) =>{
        resultEl.innerHTML = "An Error Occured";
    });
}

shortBtn.addEventListener("click", fetchURL);


inputURL.addEventListener("keypress",(e) =>{
    if(e.key === "ENTER") fetchURL();
});

window.addEventListener("DOMContentLoaded",() =>{
    inputURL.value = "";
    resultEl.innerHTML = "Shortened URL will appear here."
})

// var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

//     function loop() {
//         location.hash = f[Math.floor((Date.now()/100)%f.length)];

//         setTimeout(loop, 50);
//     }

//     loop();
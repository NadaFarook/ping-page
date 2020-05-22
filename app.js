let email = document.querySelector("#email");
let notify = document.querySelector("#notify");
let error = document.querySelector("#error");
let boder = document.querySelector("div.box4 input")
let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
error.style.display = "none";

notify.addEventListener("click",() => {
    let input = email.value;
    let testmail = regex.test(input);
    if(input.length === 0 || !testmail){
        error.style.display = "block";
        boder.style.border = "1px solid red";

    }else{
        error.style.display = "none";
        boder.style.border = "1px solid hsl(223, 100%, 88%)";
    }
}

)
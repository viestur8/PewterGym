let trainers = document.getElementsByClassName("trainer");


for (let i =0; i<trainers.length; i++) {
    trainers[i].addEventListener("click", (e)=> {
        let current = document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active", "");
        this.classname += "active";
    })
}
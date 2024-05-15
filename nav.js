document.addEventListener("DOMContentLoaded", function () {
    let inAside = false;
    let movingAnimation = false;
    document.getElementById("menu").addEventListener("click", ()=>{
        if(!movingAnimation){
            document.querySelector("body").style.overflow = "hidden"
            movingAnimation = true;
            if(!inAside){
                setTimeout(() => {
                    document.querySelector(".main").classList.toggle("displayNone");
                    movingAnimation = false;
                }, 700);    
                document.querySelector("aside").classList.toggle("displayNone")
                document.querySelector("aside").animate([
                    { transform: `translateX(-${screen.width}px)` },
                    { transform: `translateX(0px)` }],
                    {
                        duration: 600
                    })
        
                inAside = true;
            }
            else {
                document.querySelector(".main").classList.toggle("displayNone");

                document.querySelector("aside").animate([
                    { transform: `translateX(0)` },
                    { transform: `translateX(-${screen.width}px)` }],
                    {
                        duration: 600
                    })
                    setTimeout(() => {
                        document.querySelector("aside").classList.toggle("displayNone");
                        movingAnimation = false;
                        document.querySelector("body").style.overflow = "visible"
                    }, 590);
                inAside = false;
            }
        }

    })
});
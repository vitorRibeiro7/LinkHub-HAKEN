const r = document.querySelector(':root');

const rs = getComputedStyle(r);

const img = document.getElementById("imgSwitch")

function myFunction_get() {

    const rbackground = (rs.getPropertyValue('--background-color'))

    // rs.getPropertyValue('--circle-color')

    if (rbackground == " #F6F6F6") { //LIGHTMODE
        console.log("a")
        r.style.setProperty('--background-color', ' linear-gradient(107.56deg, #008F8C 0%, #015958 100%)');


        img.src = "./img/toggleOff.png"
    }

    if (rbackground == " linear-gradient(107.56deg, #008F8C 0%, #015958 100%)") { //DARKMODE
        console.log("a")
        r.style.setProperty('--background-color', ' #F6F6F6');


        img.src = "./img/toggleOn.png"
    }

}



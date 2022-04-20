const r = document.querySelector(':root');

const rs = getComputedStyle(r);

const img = document.getElementById("imgSwitch")

function myFunction_get() {

    const rbackground = (rs.getPropertyValue('--background-color'))

    // rs.getPropertyValue('--circle-color')

    if (rbackground == " #F6F6F6") { //DARKMODE
        r.style.setProperty('--background-color', ' linear-gradient(107.56deg, #008F8C 0%, #015958 100%)');
        r.style.setProperty('--backgroundContent-color', ' #015958');
        r.style.setProperty('--circle-color', ' #f6f6f6');
        r.style.setProperty('--userName-color', ' #F6F6F6');
        r.style.setProperty('--userDescription-color', ' #f6f6f6');
        r.style.setProperty('--buttonBackground-color', ' #008F8C');
        r.style.setProperty('--text-color', ' #f6f6f6');
        r.style.setProperty('--linksBtn-color', ' #F6F6F6');



        img.src = "./img/toggleOff.png"
    }

    if (rbackground == " linear-gradient(107.56deg, #008F8C 0%, #015958 100%)") { //LIGHTMODE
        r.style.setProperty('--background-color', ' #F6F6F6');
        r.style.setProperty('--backgroundContent-color', ' #F6F6F6');
        r.style.setProperty('--circle-color', ' #006C6A');
        r.style.setProperty('--userName-color', ' #4F4F4F');
        r.style.setProperty('--userDescription-color', ' #4F4F4F');
        r.style.setProperty('--buttonBackground-color', ' #008F8C');
        r.style.setProperty('--text-color', ' #f6f6f6');
        r.style.setProperty('--linksBtn-color', ' #008F7C');




        img.src = "./img/toggleOn.png"
    }

}



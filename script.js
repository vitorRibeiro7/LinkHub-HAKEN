const r = document.querySelector(':root');

const rs = getComputedStyle(r);

const img = document.getElementById("imgSwitch")

function myFunction_get() {

    const rbackground = (rs.getPropertyValue('--background-color'))

    // rs.getPropertyValue('--circle-color')

    if (rbackground == " #F6F6F6") { //DARKMODE 
        r.style.setProperty('--background-color', ' #1E1E1E');
        r.style.setProperty('--backgroundContent-color', ' #121212');
        r.style.setProperty('--circle-color', ' #121212');
        r.style.setProperty('--userName-color', ' #F6F6F6');
        r.style.setProperty('--userDescription-color', ' #f6f6f6');
        r.style.setProperty('--buttonBackground-color', ' #616161');
        r.style.setProperty('--text-color', ' #f6f6f6');
        r.style.setProperty('--linksBtn-color', ' #F6F6F6');
        r.style.setProperty('--logo-color', ' #F6F6F6');
        r.style.setProperty('--buttonBackgroundHover-color', ' #757575');




        img.src = "./img/toggleOff.png"
    }

    if (rbackground == " #1E1E1E") { //LIGHTMODE
        r.style.setProperty('--background-color', ' #F6F6F6');
        r.style.setProperty('--backgroundContent-color', ' #F6F6F6');
        r.style.setProperty('--circle-color', ' #006C6A');
        r.style.setProperty('--userName-color', ' #4F4F4F');
        r.style.setProperty('--userDescription-color', ' #4F4F4F');
        r.style.setProperty('--buttonBackground-color', ' #008F8C');
        r.style.setProperty('--text-color', ' #f6f6f6');
        r.style.setProperty('--linksBtn-color', ' #008F8C');
        r.style.setProperty('--logo-color', ' #006C6A');
        r.style.setProperty('--buttonBackgroundHover-color', ' #00adab');




        img.src = "./img/toggleOn.png"
    }

}



const IMG_EL = document.querySelector("#car-image");

const images = ['bak', 'front', 'interiør', 'side']
let count = -1;

IMG_EL.src = `images/kuga_side.jpg`;

setInterval(() => {
    count += count > 2 ? -3 : 1;
    IMG_EL.src = `images/kuga_${images[count]}.jpg`;
}, 2000);
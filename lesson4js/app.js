const images = [
    "https://masterpiecer-images.s3.yandex.net/a890262665d911ee93a76a0259d7362a:upscaled",
    "https://masterpiecer-images.s3.yandex.net/05e18c525ec411eeaa29da477c0f1ee2:upscaled",
    "https://lh7-us.googleusercontent.com/EIRIc2E6QW8aaxyMZyCfgC890JTup39_AQ2tx-P-cpke8d3kvSZ_ijI49GTAoOSDjlF4JdVsFxJgyp02COSLMTF6JI9J4wAHqv2716Km4ig6guh2nO9_O45ro_T7Gr3KjHuivpXN_ztIyvhgW2DYKDM",
    "https://masterpiecer-images.s3.yandex.net/8e711928572a11ee9653363fac71b015:upscaled",
   "https://avatars.mds.yandex.net/get-shedevrum/9283310/cc84ea95b1df11ee9de2ced9e91a1749/orig",
];

let currentImageIndex = 0; 

function changeImage() {
    currentImageIndex++; 
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    
    const imageElement = document.getElementById("image");
    imageElement.style.opacity = 0; 
    setTimeout(() => {
        imageElement.src = images[currentImageIndex]; 
        imageElement.style.opacity = 1;
    }, 500); 
}
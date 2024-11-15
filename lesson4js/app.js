const images = [
    "https://masterpiecer-images.s3.yandex.net/a890262665d911ee93a76a0259d7362a:upscaled",
    "https://masterpiecer-images.s3.yandex.net/05e18c525ec411eeaa29da477c0f1ee2:upscaled",
    "https://lh7-us.googleusercontent.com/EIRIc2E6QW8aaxyMZyCfgC890JTup39_AQ2tx-P-cpke8d3kvSZ_ijI49GTAoOSDjlF4JdVsFxJgyp02COSLMTF6JI9J4wAHqv2716Km4ig6guh2nO9_O45ro_T7Gr3KjHuivpXN_ztIyvhgW2DYKDM",
    "https://masterpiecer-images.s3.yandex.net/8e711928572a11ee9653363fac71b015:upscaled",
   "https://avatars.mds.yandex.net/get-shedevrum/9283310/cc84ea95b1df11ee9de2ced9e91a1749/orig",
//    "https://amournsk.ru/upload/medialibrary/f43/f4354e1263bef30293879a313092b2ca.jpg",
//    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uWx_1Z_7H__zcGyXgJW0C98sUz9YVZLNmg&s",
//    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj42AHDZCW0E1fqNInkr3lOMJrYy41vSXivw&s",
//    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW23C0GJbN_lKa3WVp6vnArs3EESgIxVYtGA&s",
//    "https://static.insales-cdn.com/r/KWAmqDiGBO0/rs:fit:960:960:1/plain/images/articles/1/7634/4726226/strelitsiya.jpg@jpg"
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
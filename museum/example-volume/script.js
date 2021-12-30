const progress = document.querySelector('.progress');
let progressBar = document.querySelector('.progress');
const progress2 = document.querySelector('.progress_2');
let progressBar2 = document.querySelector('.progress_2');

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`;
});



function videoChangeVolume() {
    'use strict';
    var volume = progressBar.value / 100;
    video.forEach((item) => {
        item.volume = volume;
        if(item.volume == 0) {
            b.style.display = 'block';
        } else {
            item.volume != 0;
            b.style.display = 'none';
        }
    });
}

progress2.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`;
  });

function videoChangeVolume() {
    'use strict';
    var volume = progressBar2.value / 100;
    video.forEach((item) => {
        item.volume = volume;
        if(item.volume == 0) {
            b.style.display = 'block';
        } else {
            item.volume != 0;
            b.style.display = 'none';
        }
    });
}
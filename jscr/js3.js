var aspect = 0.65128205128205;
var sliderWrapper = document.getElementById('motoslider_wrapper5bef7934289bb');
var outerWidth = sliderWrapper.offsetWidth;
var curHeight = outerWidth * aspect;
sliderWrapper.querySelector('[data-motoslider]').height = curHeight + 'px';
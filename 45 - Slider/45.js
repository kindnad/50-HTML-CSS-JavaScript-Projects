const range = document.getElementById('range')
const label = range.nextElementSibling
range.addEventListener('input', (e)=>{
   
//console.log(value)
range.nextElementSibling.innerHTML = value
const range_width = getComputedStyle(e.target).getPropertyValue('width')
const label_width = getComputedStyle(label).getPropertyValue('width')

const range_width_value = +range_width.substring(0,range_width.length - 2)
const label_width_range = +label_width.substring(0,label_width.length - 2)



const min = +range.min
const max = +range.max
//console.log(min)
const left = value * (range_width_value/max) - label_width_range / 2 + scale(value, min, max, 10, -10)
label.style.left = `${left}px`
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
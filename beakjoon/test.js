let h = 0;
let m = 59;

function min() {
  if(m < 60 && m >= 45) {
    m = m -45
    console.log(h, m);
  } else {
    m = m+15
    h = h-1
    console.log(h, m)
  }
}


if (h == 0) {
  h =h + 23
  min()
} else if (h < 24) {
  min()
}
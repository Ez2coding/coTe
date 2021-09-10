let h = 23;
let m = 40;


m -= 45;

if (m < 0 ) {
  h = h == 0 ? 23 : h-1;
  m += 60;
}

console.log(h,m);
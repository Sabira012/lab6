//2.Write a function that finds a perimeter of the rectangle given by two sides.
function rectPerimeter(width, height) {
    return 2 * width + 2 * height;
  }
  
  // define width
  let w = 6; 
  // define height
  let h = 5; 
  
  console.log(rectPerimeter(w, h));

//13.Write a function that returns the greatest among the given two numbers.
function greatest(a,b) {
  if (a>b) {
      return a;
    }
  else {
      return b;
    }
  }
let maxValue = greatest(10,20)
console.log(maxValue)

//14.Write a function that returns the greatest among the given three numbers.
function f(a,b,c) {
  if (a>b) {
    if (a>c) {
      return a;
    }
    else {
      if (b>c) {
        return b;
      }
      else {
        return c;
      }
    }
  }
  else {
    if (b>c) {
      return b;
    }
    else {
      if (c>a) {
        return c;
      }
      else {
        return b;
      }
    }
  }
}
let max = f(22,35,5)
console.log(max)
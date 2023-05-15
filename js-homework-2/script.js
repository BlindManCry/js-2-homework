// davaleba1----------------------------------------------------------------------------------------------------------

function fibonacci(n) {
  var a = 0;
  var b = 1;
  var x;
  console.log(b);
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b;
    b = x;
    console.log(b);
  }
}

fibonacci(9);

// davaleba2----------------------------------------------------------------------------------------------------------------

function number(x) {
  if (x % 5 == 0 && x % 3 == 0) {
    console.log("fizz buzz");
  } else if (x % 5 == 0) {
    console.log("buzz");
  } else if (x % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(x);
  }
}

number(13);

// davaleba3-------------------------------------------------------------------------------------------------------------------

function BigerAndLower() {
  var a = prompt("sheiyvanet ricxvi");
  var b = prompt("sheiyvanet ricxvi");
  if (a < b) {
    for (let i = a; i <= b; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }

  if (b < a) {
    for (let i = b; i <= a; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }
}
BigerAndLower();

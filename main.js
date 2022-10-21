var arr = [];
document.getElementById("result").onclick = function () {
  var n = +document.getElementById("soN").value;
  arr.push(n);
  var hienThi = arr.join(", ");
  document.getElementById("hienThiSo").innerHTML = hienThi;
};
var n = +document.getElementById("soN").value;

function ex1() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  document.getElementById("kq1").innerHTML = sum;
}

function ex2() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  document.getElementById("kq2").innerHTML = count;
}

function ex3() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById("kq3").innerHTML = min;
}

function ex4() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  document.getElementById("kq4").innerHTML = min;
}

function ex5() {
  var temp = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      temp = arr[i];
    }
  }
  document.getElementById("kq5").innerHTML = temp;
}

function ex6() {
  console.log("hello");
  var number1 = +document.getElementById("numberChange1").value;
  var number2 = +document.getElementById("numberChange2").value;

  for (var i = 0; i < arr.length; i++) {
    var temp = arr[number1];
    arr[number1] = arr[number2];
    a[number2] = temp;
  }
  document.getElementById("kq6").innerHTML = arr;
}

function ex7() {
  var isSwapped = false;
  for (var k = arr.length; k >= 0; k--) {
    for (var i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      console.log(arr);
      return;
    }
  }
  document.getElementById("kq7").innerHTML = arr;
}

function ex8() {
  var temp = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      if (arr[i] % arr[i] === 0) {
        temp = arr[i];
        break;
      }
    }
  }
  document.getElementById("kq8").innerHTML = temp;
}

function ex9() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  document.getElementById("kq9").innerHTML = count;
}

function ex10() {
  var countPositive = 0;
  var countNegative = 0;
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countNegative++;
    }
    if (arr[i] > 0) {
      countPositive++;
    }
  }
  if (countNegative > countPositive) {
    result = "So am > So duong";
  } else if (countNegative < countPositive) {
    result = "So duong > So am";
  } else {
    result = "So duong = So am";
  }
  document.getElementById("kq10").innerHTML = result;
}

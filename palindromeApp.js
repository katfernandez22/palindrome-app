function palindrome() {
  event.preventDefault();

  let str = document.getElementById('input').value;
  let lowerAlpha = str.toLowerCase().replace(/[^a-z0-9]+/gi, "");
  let lowerAlphaReverse = lowerAlpha.split('').reverse().join('');

  if (lowerAlpha == lowerAlphaReverse && str.length > 0) {
    results.innerHTML = 'is a palindrome';
    document.getElementById("results").style.color = "black";
    word.innerHTML = str;
  } else {
    results.innerHTML = 'is not a palindrome';
    document.getElementById("results").style.color = "red";
    word.innerHTML = str;
  }
}
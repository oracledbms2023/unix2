const answer1 = document.getElementById("copyResult1");
const answer2 = document.getElementById("copyResult2");
const answer3 = document.getElementById("copyResult3");
const answer4 = document.getElementById("copyResult4");
const answer5 = document.getElementById("copyResult5");
const answer6 = document.getElementById("copyResult6");
const answer7 = document.getElementById("copyResult7");
const answer8 = document.getElementById("copyResult8");
const answer9 = document.getElementById("copyResult9");
const answer10 = document.getElementById("copyResult10");
const answer11 = document.getElementById("copyResult11");




const copy1 = document.getElementById("copyButton1");
const copy2 = document.getElementById("copyButton2");
const copy3 = document.getElementById("copyButton3");
const copy4 = document.getElementById("copyButton4");
const copy5 = document.getElementById("copyButton5");
const copy6 = document.getElementById("copyButton6");
const copy7 = document.getElementById("copyButton7");
const copy8 = document.getElementById("copyButton8");
const copy9 = document.getElementById("copyButton9");
const copy10 = document.getElementById("copyButton10");
const copy11 = document.getElementById("copyButton11");




const selection = window.getSelection();
const range = document.createRange();


const textToCopy1 = document.getElementById("textToCopy1");
const textToCopy2 = document.getElementById("textToCopy2");
const textToCopy3 = document.getElementById("textToCopy3");
const textToCopy4 = document.getElementById("textToCopy4");
const textToCopy5 = document.getElementById("textToCopy5");
const textToCopy6 = document.getElementById("textToCopy6");
const textToCopy7 = document.getElementById("textToCopy7");
const textToCopy8 = document.getElementById("textToCopy8");
const textToCopy9 = document.getElementById("textToCopy9");
const textToCopy10 = document.getElementById("textToCopy10");
const textToCopy11 = document.getElementById("textToCopy11");




copy1.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy1);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer1.innerHTML = 'C';
  } else {
    answer1.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy2.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy2);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer2.innerHTML = 'C';
  } else {
    answer2.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy3.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy3);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer3.innerHTML = 'C';
  } else {
    answer3.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy4.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy4);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer4.innerHTML = 'C';
  } else {
    answer4.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy5.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy5);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer5.innerHTML = 'C';
  } else {
    answer5.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});
copy6.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy6);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer6.innerHTML = 'C';
  } else {
    answer6.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy7.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy7);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer7.innerHTML = 'C';
  } else {
    answer7.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy8.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy8);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer8.innerHTML = 'C';
  } else {
    answer8.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy9.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy9);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer9.innerHTML = 'C';
  } else {
    answer9.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy10.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy10);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer10.innerHTML = 'C';
  } else {
    answer10.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

copy11.addEventListener('click', function (e) {
  range.selectNodeContents(textToCopy11);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if (successful) {
    answer11.innerHTML = 'C';
  } else {
    answer11.innerHTML = 'U';
  }
  window.getSelection().removeAllRanges()
});

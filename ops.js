let btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');
value.style.color = 'blue';
let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    let styles = event.currentTarget.classList;
    if (styles.contains('descrease')) {
      counter--;
      console.log('descrease', 1);
    } else if (styles.contains('reset')) {
      counter = 0;
      console.log('reset', 2);
    } else if (styles.contains('increase')) {
      counter++;
      value.style.color = 'green';
      console.log('increase', 3);
    }
    value.textContent = counter;



    //let randomNumber = Math.random();
    randomNumber = randomNumber * 100;
    randomNumber = Math.floor(randomNumber) + 1;
    document.write(randomNumber);
  });
});

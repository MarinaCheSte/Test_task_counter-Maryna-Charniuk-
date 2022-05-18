function createCounter(counter) {
  if (!counter) {
    counter = 0;
  }

  const parentContainer = document.getElementById("addCounter");
  const parentDiv = document.createElement("div");

  const counterResult = document.createElement("p");
  counterResult.innerHTML = `counter: ${counter}`;

  const minusBtn = document.createElement("button");
  minusBtn.innerText = "-";

  const plusBtn = document.createElement("button");
  plusBtn.innerText = "+";

  parentContainer.append(parentDiv);
  parentDiv.append(minusBtn, plusBtn, counterResult);

  function buttonDisabled() {
    if (counter >= 10) {
      plusBtn.disabled = true;
    } else {
      plusBtn.disabled = false;
    }

    if (counter <= -10) {
      minusBtn.disabled = true;
    } else {
      minusBtn.disabled = false;
    }
  }

  return {
    decrement: (minusBtn.onclick = function () {
      counter--;
      counterResult.innerHTML = `counter: ${counter}`;
      buttonDisabled();
    }),
    increment: (plusBtn.onclick = function () {
      counter++;
      counterResult.innerHTML = `counter: ${counter}`;
      buttonDisabled();
    }),
    counter: function () {
      return counter;
    },
  };
}

const counter_1 = createCounter();
console.log(counter_1.counter());

const counter_2 = createCounter(11);
counter_2.decrement();
console.log(counter_2.counter());

const counter_3 = createCounter(-6);
counter_3.increment();
console.log(counter_3.counter());

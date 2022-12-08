const calcRange = (start, end, step = 1) => {
    let arr = [];

    if (step < 0 && start < end) {
      return console.log("Начало не может быть меньше конца при отрицательном шаге");
    } else if (step > 0 && start > end) {
      return console.log("Начало не может быть больше конца при положительном шаге")
    }

    for (let i = start; step < 0 ? (i >= end) : (i <= end); i = i + step) {
      arr.push(i);
    }

    console.log('Массив: [' + arr + ']');
  };

  calcRange(50, 15, -5);
const createMultiplicationTable = () => {

    const container = document.getElementById('container');

    for (let i = 1; i <= 9; i++) {

        let number = document.createElement('div');
        let result = '<ul>'

        for (let j = 1; j <= 9; j++) {
            result += `<li>${i} * ${j} = ${i * j}</li>`;
        }

        result += '</ul>'

        number.innerHTML = result;
        container.appendChild(number);
    }
}

createMultiplicationTable();
const loadData =  async() => {
    try {
        const res = await fetch(`https://forbes400.onrender.com/api/forbes400?limit=10`);
        const data = await res.json();
        showData(data)
    } catch (error) {
        console.log(error);
    }
}

// SHOW DATA
const showData = (data) =>{
    console.log(data)
    const billTable = document.getElementById('bill-table');
    const tbody = document.getElementById('tbody');
    const total = document.getElementById('total-amount');
    const loader = document.getElementById('loader');
    data.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${element.personName}</td>
        <td>${element.countryOfCitizenship}</td>
        <td>${element.industries[0]}</td>
        <td>${element.rank}</td>
        <td>$<span class="amounts">${element.privateAssetsWorth}</span></td>
        `;
        tbody.appendChild(tr);
    });
    loader.classList.add('d-none');
    billTable.classList.remove('d-none');
    const amountsNode = document.getElementsByClassName('amounts');
    const amounts = [...amountsNode];
    let sum = 0;
    for (const amount of amounts) {
        const value = parseFloat(amount.innerText);
        sum += value;
    }
    total.innerHTML = sum;
}


loadData();
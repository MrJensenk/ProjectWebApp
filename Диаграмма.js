"use strict"

export function createChart(statistics) {
    let expensesMap = new Map(Object.entries(statistics["expenseCategoryMap"]));
    let expenses = statistics["expenses"];
    console.log(expenses);
    let categoryList = document.querySelector('#categories');

    let categories = [];
    let values = [];

    for (let type of expensesMap.keys()) {
        categories.push(type);
        const element = document.createElement('li');
        element.textContent = type;
        element.className = "category_item";
        categoryList.appendChild(element);
        values.push(expensesMap.get(type));
    }

    var ctx = $("#myChart").get(0).getContext("2d");

    var data = {
        labels: categories,
        datasets: [
            {
                data: values,
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56"
                ],
                label: 'My dataset'
            }]
    };
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
    });

}
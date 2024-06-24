import { createChart } from './Диаграмма.js';

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let fromDate = new Date(currentYear, currentMonth, 1);

let to = formatDate(currentDate);
let from = formatDate(fromDate);

function formatDate(date) {
    return date.getFullYear() + "-"
    + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1)
    + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
    + " " + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
    + "-" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    + "-" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
}

const statisticUrl = "http://localhost:8080/profile/statistics?from=" + from + "&to=" + to;

async function getStatistics() {
    let token = 'Bearer ' + localStorage.getItem("jwt-token");

    let response = await fetch(
        statisticUrl,
        {
            method : "GET",
            headers : { 'Authorization' : token }
        }
    );

    let json = await response.json();

    return json;
}

let statistics = await getStatistics();
createChart(statistics);

var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myDoughnutChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
        labels: ["Likes", "Dislikes"],
        datasets: [
            {
                data: [66, 33],
                backgroundColor: ["#00FF00", "#FF0000"],
                hoverBackgroundColor: ["#33FF33", "#FF3333"]
            }
        ]
    },
    options: {
        responsive: true
    }      
});
            
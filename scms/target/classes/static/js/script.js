
// Chart.js - Applications Over Time
const ctx1 = document.getElementById('applicationsChart');
if (ctx1) {
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Applications',
                data: [80, 120, 250, 300, 450, 550],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Chart.js - Scholarships by Category
const ctx2 = document.getElementById('categoriesChart');
if (ctx2) {
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Merit-Based', 'Need-Based', 'Sports', 'Other'],
            datasets: [{
                label: 'Categories',
                data: [45, 30, 15, 10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
}

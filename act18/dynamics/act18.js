$(document).ready(()=>{
  let ctx = $("#canvas")[0].getContext('2d');
  let grafica = new Chart(ctx, {

    type: 'pie',
    data: {
      labels: ['Comida tonta', 'Comida cool','Comida que da igual'],
      datasets: [{
        backgroundColor: ["#de2a61","#5412a5","#6fef3d"],
        data: [69230,62300,35550],
      }]
    },

    options: {
      title:{
        display: true,
        text: 'Popularidad de consolas de videojuegos'
      }
    }

  });
});

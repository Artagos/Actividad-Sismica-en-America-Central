

window.onload= function () {
  fetch('./UltimosTGrouped.json')
  .then(response => response.json())
  .then(data => {
    const dataPointsGrouped=[]
    for (const region in data){
      if(data[region].length>40)dataPointsGrouped.push({label: String(region)===' CA'?'America Central':String(region), y: data[region].length})
    }
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      dataPointWidth: 20,
      title:{
        text: "Cantidad de terremotos por region de los ultimos dos años "              
      },
      data: [//array of dataSeries  

        { //dataSeries object
          type: "bar",
		    

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         dataPoints:dataPointsGrouped
       }
       ]
     });
  
    chart.render();
  })
  .catch(error => console.error('Error:', error));

  }



    fetch('./AmericaCentral.json')
  .then(response => response.json())
  .then(data => {
    const center=[21.521757,-77.781167]
    const map = L.map('map', {
        center: center, // Centra el mapa en Cuba
        zoom: 4, // Establece el nivel de zoom inicial
        
        maxZoom: 7, // Establece el zoom máximo permitido
        minZoom: 4, // Establece el zoom mínimo permitido
      });
      var redDotIcon = L.icon({
        iconUrl: 'https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png',
        iconSize:     [10, 10], // size of the icon
        });

        var blueDotIcon = L.icon({
            iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/021/815/780/small_2x/transparent-circle-icon-background-png.png',
            iconSize:     [10, 10], // size of the icon
            });
        
        var greenDotIcon = L.icon({
            iconUrl: 'https://www.freepnglogos.com/uploads/dot-png/dot-system-status-and-maintenance-schedule-beachboard-3.png',
            iconSize:     [10, 10], // size of the icon
            });
            
        var yellowDotIcon = L.icon({
            iconUrl: 'https://static.vecteezy.com/system/resources/previews/020/906/679/non_2x/geometric-circle-shape-on-a-transparent-background-free-png.png',
            iconSize:     [10, 10], // size of the icon
            });


      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        
        for (const index in data['EarthQ']){
            var terremoto= data['EarthQ'][index]
            var markerr;
            if(terremoto.Depth<70){
               markerr= L.marker([terremoto.Lat,terremoto.Lon],{icon: greenDotIcon}).addTo(map).bindPopup("I am a green leaf.");
            }
            else if(terremoto.Depth<150){
                markerr=L.marker([terremoto.Lat,terremoto.Lon],{icon: yellowDotIcon}).addTo(map).bindPopup("I am a green leaf.");
            }
            else if(terremoto.Depth<300){
                markerr=L.marker([terremoto.Lat,terremoto.Lon],{icon: redDotIcon}).addTo(map).bindPopup("I am a green leaf.");
            }
            else {
                markerr=L.marker([terremoto.Lat,terremoto.Lon],{icon: redDotIcon}).addTo(map).bindPopup("I am a green leaf.");
            }
            var customPopup ='<b>Magnitud: '+terremoto.Mag+'</b></br><b>Profundidad: '+terremoto.Depth+'km</b></br><b>Region: '+terremoto.Region+'</b></br><b>Año: '+terremoto.año+'</b></br><b>Mes: ' + terremoto.Month+'</b></br>'
            markerr.bindPopup(customPopup)
            
        }
  })

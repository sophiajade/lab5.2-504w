
new Chart(document.getElementById("pie-chart"), {
          type: 'pie',
          data: {
            labels: ["2D", "Bust", "Environment", "Figure Pole", "Fountain", "Historical Landmark", "Infrastructure", "Installation", "Monument", "Mural", "Painting", "Sculpture", "Sound Installation", "Story Pole", "Structure", "Totem Pole"],
            datasets: [{
              label: "mediums",
              backgroundColor: ["#3e95cd", "#cc6699","#3cba9f","#e8c3b9","#c45850","#9933ff","#00cccc","#ffffb3","#ff6666","#3377ff","#999966","#333399","#006633","#ccff99","#6666ff","#ff9933"],
              data: [1,1,5,2,1,1,1,1,4,2,1,24,1,1,12,6]
            }]
          },
          options: {
            title: {
              display: true,
              text: 'mediums:'
            }
          }
      });



      new Chart(document.getElementById("parks-chart"), {
          type: 'bar',
          data: {
            labels: ["Great Smoky Mountains", "Grand Canyon", "Rocky Mountain", "Zion", "Yellowstone", "Yosemite", "Acadia", "Grand Teton", "Olympic", "Glacier"],
            datasets: [
              {
                label: "2018",
                backgroundColor: "#008080",
                data: [11421,6380,4590,4320,4115, 4009, 3538, 3491, 3104, 2965]
              }, {
                label: "2019",
                backgroundColor: "#00b386",
                data: [12548, 5974, 4670, 4488, 4020, 4423, 3437, 3406, 3246, 3050]
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Visitors (millions)'
            }
          }
      });

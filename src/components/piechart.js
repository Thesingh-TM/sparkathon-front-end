import React from 'react';
import ReactDOM from 'react-dom'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
 
 class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 10,
                height:10,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
</div>
      )
    }
    
}

export {ApexChart};

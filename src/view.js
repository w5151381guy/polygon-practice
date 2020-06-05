import * as Highcharts from 'highcharts'
import { getPolygonDatas, getRegionDots } from './data'
require('highcharts/highcharts-more')(Highcharts)

export const drawPolygon = () => {
  Highcharts.chart('container', {
    title: {
      text: ''
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        enabled: false
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    series: [
      {
        name: 'Target',
        type: 'polygon',
        data: getPolygonDatas(),
        color: Highcharts.color(Highcharts.getOptions().colors[0])
          .setOpacity(0.5)
          .get(),
        enableMouseTracking: false,
        accessibility: {
          exposeAsGroupOnly: true,
          description:
            'Target ranges in an upwards trending diagonal from 149 to 180 on the x axis, and 42 to 77 on the y axis.'
        }
      },
      {
        name: 'Observations',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: getRegionDots()
      }
    ],
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x} , {point.y} '
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              layout: 'horizontal',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  })
}

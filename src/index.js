import { setPolygonDatas } from './data'
import { drawPolygon } from './view'
import $ from 'jquery'

const submitPolygonPoints = () => {
  const x = parseFloat($('.x > input').val())
  const y = parseFloat($('.y > input').val())
  setPolygonDatas([x, y])
  $('.x > input').val('')
  $('.y > input').val('')
  $('.points').append(`(${x}, ${y}),`)
}

$(() => {
  $('#submit').click(submitPolygonPoints)
  $('#drawChart').click(drawPolygon)
})

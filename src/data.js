import classifyPoint from 'robust-point-in-polygon'

const polygonDatas = []

export const setPolygonDatas = data => polygonDatas.push(data)

export const getPolygonDatas = () => polygonDatas

export const adaptDataRegions = () => {
  let regionX = []
  let regionY = []
  let regionDots = []
  const polygons = getPolygonDatas()

  const x = polygons.map(datas => datas[0]).sort((a, b) => a - b)
  const y = polygons.map(datas => datas[1]).sort((a, b) => a - b)

  for (let i = x[0]; i <= x[x.length - 1]; i++) {
    regionX.push(i)
  }

  for (let i = y[0]; i <= y[y.length - 1]; i++) {
    regionY.push(i)
  }

  for (let i = 0; i <= regionX.length - 1; i++) {
    for (let j = 0; j <= regionY.length - 1; j++) {
      regionDots.push([regionX[i], regionY[j]])
    }
  }

  return regionDots
}

export const getRegionDots = () => {
  const regionDots = adaptDataRegions()
  const polygons = getPolygonDatas()
  const filterPoints = regionDots.filter(
    dots => classifyPoint(polygons, dots) !== 1
  )
  polygons.forEach(datas => filterPoints.push(datas))
  return filterPoints
}

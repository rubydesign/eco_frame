// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.

//= require_self

# Map to points in the surfaces of a post (no top/ bottom)
POST_COORDINATE_MAP = [
  [0, 1, 3, 2] # left
  [5, 4, 6, 7] # right
  [3, 1, 5, 7] # front
  [0, 2, 6, 4] # back
]
seen = {}
seen.Eco = {
  beam : (x,y , width , size ) =>
    return seen.Shapes.rectangle( seen.P(x,y, 0), seen.P(x + width , y + size , size))

  post : (x ,y , height , size) =>
    point1 = seen.P(x,y,0)
    point2 = seen.P(x + size , y + height , size)
    compose = (x, y, z) ->
      return seen.P(
        x(point1.x, point2.x)
        y(point1.y, point2.y)
        z(point1.z, point2.z)
      )

    points = [
      compose(Math.min, Math.min, Math.min)
      compose(Math.min, Math.min, Math.max)
      compose(Math.min, Math.max, Math.min)
      compose(Math.min, Math.max, Math.max)
      compose(Math.max, Math.min, Math.min)
      compose(Math.max, Math.min, Math.max)
      compose(Math.max, Math.max, Math.min)
      compose(Math.max, Math.max, Math.max)
    ]

    return new seen.Shape('post', seen.Shapes.mapPointsToSurfaces(points, POST_COORDINATE_MAP))
}

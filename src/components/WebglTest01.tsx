import * as Aurora from 'aurora-utils'
import { useEffect } from 'react'

const WebglTest = () => {
  console.log(Aurora.webglUtils)

  const vertexShader = `
  attribute vec4 a_Position;
  attribute float a_PointSize;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
  }
  `

  const fragmentShader = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
      gl_FragColor = u_FragColor;
    }
  `

  function draw() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gl = canvas.getContext('webgl') as WebGLRenderingContext
    Aurora.webglUtils.initShaders(gl, vertexShader, fragmentShader)

    const a_Position = gl.getAttribLocation((gl as any).program, 'a_Position')
    const a_PointSize = gl.getAttribLocation((gl as any).program, 'a_PointSize')

    const u_FragColor = gl.getUniformLocation((gl as any).program, 'u_FragColor')

    gl.vertexAttrib3f(a_Position, 0, 0.0, 0.0)
    gl.vertexAttrib1f(a_PointSize, 50.0)
    gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0)

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    gl.drawArrays(gl.POINTS, 0, 1)
  }

  useEffect(() => {
    draw()
  }, [])




  return (
    <div className='w-full h-full bg-slate-400'>
      <canvas id='canvas'></canvas>
    </div>
  )
}
export default WebglTest

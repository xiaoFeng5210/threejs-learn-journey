import * as Aurora from 'aurora-utils'

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
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    }
  `

  return (
    <div className='w-full h-full bg-slate-400'>
      <canvas id='canvas'></canvas>
    </div>
  )
}
export default WebglTest

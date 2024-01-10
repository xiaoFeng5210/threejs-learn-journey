import * as THREE from 'three'
import { useEffect, useRef } from 'react'

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
const IMAGE_SKY = new URL('../assets/img/starry-sky.jpg', import.meta.url).href
let width: number, height: number, depth = 1400
const StarrySkyBox = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    width = containerRef.current?.clientWidth || 0
    height = containerRef.current?.clientHeight || 0
    initScene()
    initSceneBg()
  }, [])

  
  const initScene = () => {
    scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 0.0003, 100000)
  }
  const initSceneBg = () => {
    new THREE.TextureLoader().load(IMAGE_SKY, texture => {
      const geometry = new THREE.BoxGeometry(width, height, depth)
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        // 背面显示
        side: THREE.BackSide,
      })
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
    })
  }
  const initCamera = () => {
    // 相机的视野夹角
    const fov = 15
    // 计算相机距离物体的距离
    const distance = (width / 2) /Math.tan(Math.PI / 12)
  }
  return (
    <div ref={containerRef} className="w-screen h-screen">
      
    </div>
  )
}
export default StarrySkyBox

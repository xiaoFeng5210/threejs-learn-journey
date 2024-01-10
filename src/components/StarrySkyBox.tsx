import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
const IMAGE_SKY = new URL('../assets/img/starry-sky.jpg', import.meta.url).href
const IMAGE_EARTH = new URL('../assets/img/earth_map.jpg', import.meta.url).href
let width: number, height: number, depth = 1400
let renderer: THREE.WebGLRenderer
const StarrySkyBox = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    width = containerRef.current?.clientWidth || 0
    height = containerRef.current?.clientHeight || 0
    initScene()
    initSceneBg()
    initCamera()
    initSphereModal()
    initLight()
    initRenderer()
    initOrbitControls()
    animate()
    initHelper()
  }, [])


  const initScene = () => {
    scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 0, 30000)
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
    const distance = (width / 2) / Math.tan(Math.PI / 12)
    const zAxisNumber = Math.floor(distance - depth / 2)
    camera = new THREE.PerspectiveCamera(fov, width / height, 1, 100000)
    camera.position.set(0, 0, zAxisNumber)
    camera.lookAt(0, 0, 0)
  }

  // 添加辅助线
  const initHelper = () => {
    const axesHelper = new THREE.AxesHelper(10000)
    scene.add(axesHelper)
  }

  const initRenderer = () => {
    renderer = new THREE.WebGLRenderer()
    // 定义渲染器
    renderer.setSize(width, height)
    containerRef.current?.appendChild(renderer.domElement)
  }

  const initOrbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled = true
    controls.update()
  }

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }



  const initSphereModal = () => {
    const geometry = new THREE.SphereGeometry(50, 64, 32)
    const material = new THREE.MeshPhongMaterial()
    const texture = new THREE.TextureLoader().load(IMAGE_EARTH)
    material.map = texture
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-400, 200, -200)
    scene.add(mesh)
  }

  /**
   * 光线
   */
  const initLight = () => {
    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)
    // 点光源
    const pointLight = new THREE.PointLight(0x0655fd, 5, 0)
    pointLight.position.set(0, 100, -200)
    scene.add(pointLight)
  }


  return (
    <div ref={containerRef} className="w-screen h-screen">

    </div>
  )
}
export default StarrySkyBox

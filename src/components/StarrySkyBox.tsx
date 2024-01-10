import * as THREE from 'three'
import { useEffect, useRef } from 'react'

let scene: THREE.Scene

const StarrySkyBox = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    
  })

  
  const initScene = () => {
    scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 0.0003, 100000)
  }
  return (
    <div ref={containerRef} className="w-screen h-screen">
      
    </div>
  )
}
export default StarrySkyBox

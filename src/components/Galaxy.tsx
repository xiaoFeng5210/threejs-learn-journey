import React, {useEffect, useRef} from "react";
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
import {CameraControls} from "@react-three/drei"
extend({ OrbitControls, TransformControls })

const Galaxy = () => {
  const canvasRef = useRef(null)
	const camera = { fov: 55, near: 0.1, far: 1000, position: [2, 3, 5] }
	useEffect(() => {
		
	}, []);
	return (
		<div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
			<Canvas shadows camera={camera as any}>
				<ambientLight intensity={0.5} color="white"/>
				<directionalLight position={[3, 1, 5]}/>
				<mesh>
					<boxGeometry/>
					<meshPhongMaterial color="green"/>
				</mesh>
				<CameraControls makeDefault/>
			</Canvas>
		</div>
	)
}

export default Galaxy
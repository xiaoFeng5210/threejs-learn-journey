import React, {Suspense, useEffect, useRef} from "react";
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CoolCar from "./3d/CoolCar";

const Galaxy = () => {
  const canvasRef = useRef(null)
	const camera = { fov: 755, near: 0.1, far: 1000, position: [200, 600, 800] }
	useEffect(() => {
		
	}, []);
	return (
		<div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
			<Canvas shadows camera={camera as any}>
				<Suspense>
					<ambientLight intensity={4} color="white"/>
					<pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2}/>
					<CoolCar/>
					<OrbitControls/>
					<Stats/>
				</Suspense>
			</Canvas>
		</div>
	)
}

export default Galaxy
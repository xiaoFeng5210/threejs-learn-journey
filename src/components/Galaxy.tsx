import React, {Suspense, useEffect, useRef} from "react";
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CoolCar from "./3d/CoolCar";

const Galaxy = () => {
  const canvasRef = useRef(null)
	const camera = { fov: 55, near: 0.1, far: 1000, position: [2, 6, 8] }
	useEffect(() => {
		
	}, []);
	return (
		<div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
			<Canvas camera={camera as any}>
				{/*<Suspense>*/}
					<ambientLight intensity={22} />
					<directionalLight position={[3, 10, 10]} intensity={7}/>
				  <spotLight position={[3, 3, 0]} intensity={150} penumbra={0.4} angle={1} />
					<CoolCar/>
					<OrbitControls/>
					<Stats/>
				  <axesHelper/>
				{/*</Suspense>*/}
			</Canvas>
		</div>
	)
}

export default Galaxy
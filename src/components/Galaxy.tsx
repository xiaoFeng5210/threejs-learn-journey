import React, {Suspense, useEffect, useRef} from "react";
import {Canvas} from '@react-three/fiber'
import {Stats, OrbitControls} from '@react-three/drei'
import * as Three from 'three'

// @ts-ignore
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import CoolCar from "./3d/CoolCar";

const Galaxy = () => {
	const canvasRef = useRef(null)
	const camera = {fov: 55, near: 0.1, far: 1000, position: [16, 12, -16]}
	useEffect(() => {

	}, []);
	return (
		<div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
			<Canvas camera={camera as any}>
				<Suspense>
					<ambientLight intensity={20}/>
					<directionalLight position={[3, 20, 10]} intensity={7}/>
					<spotLight position={[3, 3, 0]} intensity={100} penumbra={0.4} angle={1}/>
					<hemisphereLight args={[0xddeeff, 0x0f0e0d, 0.02]} intensity={50}/>
					<CoolCar/>
					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<planeGeometry args={[8, 1000]}/>
						<meshBasicMaterial color={0xffff00} side={Three.DoubleSide}/>
					</mesh>
					<OrbitControls/>
					<Stats/>
					<axesHelper/>
				</Suspense>
			</Canvas>
		</div>
	)
}

export default Galaxy
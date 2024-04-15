import React, {useEffect, useRef} from "react";
import { Canvas } from '@react-three/fiber'

const Galaxy = () => {
  const canvasRef = useRef(null)
	useEffect(() => {
		
	}, []);
	return (
		<div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
			<Canvas>
				<ambientLight intensity={0.1}/>
				<directionalLight color="red" position={[0, 0, 5]}/>
				<mesh>
					<boxGeometry/>
					<meshStandardMaterial/>
				</mesh>
			</Canvas>
		</div>
	)
}

export default Galaxy
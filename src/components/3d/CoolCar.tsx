import {useGLTF} from '@react-three/drei'
// @ts-ignore
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useFrame} from "@react-three/fiber";

const CoolCar = () => {
	const {nodes, materials, scene} = useGLTF('/gltf/car/scene.gltf')
	console.log(nodes)
	console.log(materials)
	console.log(scene)

	useFrame(({clock}) => {
		const elapsedTime = clock.getElapsedTime()
		const step = Math.sin(elapsedTime) * 10
		scene.position.set(0, 0, step)
	})
	return (
		<primitive scale={[0.01, 0.01, 0.01]} object={scene}/>
	)
}

export default CoolCar
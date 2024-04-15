import {useGLTF} from '@react-three/drei'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const CoolCar = () => {
	const { nodes, materials, scene } = useGLTF( '/gltf/car/scene.gltf')
	console.log(nodes)
	console.log(materials)
	console.log(scene)
	return (
		<primitive object={scene}/>
	)
}

export default CoolCar
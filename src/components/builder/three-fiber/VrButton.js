import { VRButton } from "three/examples/jsm/webxr/VRButton"
import { useThree } from 'react-three-fiber'

const VrButton = () => {
    const { gl } = useThree()
    document.body.appendChild(VRButton.createButton(gl));
    return null
}
export default VrButton
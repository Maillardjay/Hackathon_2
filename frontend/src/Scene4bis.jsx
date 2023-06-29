/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("Scene4/scene.gltf");
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.04, 0.87, -0.62]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.redminote8T}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene4/scene.gltf");

export default Model;

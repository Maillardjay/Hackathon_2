/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("Scene5/scene.gltf");
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-12.23, 639.09, 19.83]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cube__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene5/scene.gltf");

export default Model;

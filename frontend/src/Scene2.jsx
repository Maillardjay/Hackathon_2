/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("Scene2/scene.gltf");
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
          <group scale={100}>
            <mesh
              geometry={nodes["3dphoneuvmap_topface_0"].geometry}
              material={materials.topface}
            />
            <mesh
              geometry={nodes["3dphoneuvmap_lowerface_0"].geometry}
              material={materials.lowerface}
            />
            <mesh
              geometry={nodes["3dphoneuvmap_sides_0"].geometry}
              material={materials.sides}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene2/scene.gltf");

export default Model;

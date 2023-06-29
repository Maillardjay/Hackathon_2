/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("Scene7/scene.gltf");
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-771.15, 195.27, 103.76]} scale={79.96}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.shouji}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.shouji}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.shouji}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.shouji}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.shouji}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.shouji}
            />
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_27.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_30.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_33.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_39.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_42.geometry}
              material={materials.BOLI}
            />
            <mesh
              geometry={nodes.Object_45.geometry}
              material={materials.BOLI}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene7/scene.gltf");

export default Model;

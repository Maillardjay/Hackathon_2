import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.04, 0.08, -0.01]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials["Material.033"]}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials["Material.032"]}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials["Material.031"]}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Flash}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials["Material.050"]}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials["Google.002"]}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials["Material.021"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene3/scene.gltf");

export default Model;

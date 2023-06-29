import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Bezel}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Antenna_Plastic}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.Back_Cover_Glass}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Black_hole}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.SAMSUNG_LOGO}
            />
          </group>
          <group position={[0, -0.07, 0]} scale={0.01}>
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Usb_1}
            />
          </group>
          <group position={[0, -0.07, 0]} scale={0.01}>
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.Usb_2}
            />
          </group>
          <group scale={0.01}>
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Display_ActiveArea}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials.Big_Cam_Glass}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.Flash}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials.Flash_Glass}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials.Front_Cam_Glass}
            />
          </group>
          <group
            position={[0, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_30.geometry}
              material={materials.material_13}
            />
          </group>
          <group scale={0.01}>
            <mesh
              geometry={nodes.Object_32.geometry}
              material={materials.Back_Cam_GlassCover_Black_Panel}
            />
          </group>
          <group scale={0.01}>
            <mesh
              geometry={nodes.Object_34.geometry}
              material={materials.Cam_Glass}
            />
          </group>
          <group scale={0.01}>
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.Rearcase}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

export default Model;

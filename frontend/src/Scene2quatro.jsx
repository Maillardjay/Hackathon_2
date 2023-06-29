/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("Scene2/scene.gltf");
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[110.04, 8.21, 94.97]} rotation={[-1.57, 0, -Math.PI]}>
          <group
            position={[110.04, -94.97, -8.21]}
            rotation={[-1.57, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Back_Texture}
            />
          </group>
        </group>
        <group position={[110.04, 8.21, 94.97]} rotation={[-1.57, 0, -Math.PI]}>
          <group
            position={[110.04, -94.97, -8.21]}
            rotation={[-1.57, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials["24_-_Default"]}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.Chrom}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Bordure_Noire}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Back_Texture}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Chromff}
            />
          </group>
        </group>
        <group
          position={[110.04, 8.21, 94.97]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        >
          <group
            position={[110.04, -94.97, -8.21]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.qccessoires_lens}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.screen}
            />
          </group>
        </group>
        <group
          position={[110.04, 8.21, 94.97]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        >
          <group
            position={[110.04, -94.97, -8.21]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Bordure_Noire}
            />
          </group>
        </group>
        <group
          position={[107.73, 17.84, -7.41]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.12}
        >
          <group
            position={[922.46, 63.46, -152.77]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={8.56}
          >
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.Chrom}
            />
          </group>
        </group>
        <group
          position={[76.09, 13.13, -59.85]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[0.49, 0.28, 0.18]}
        >
          <group
            position={[155.76, -47.39, -341.39]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[2.05, 3.61, 5.7]}
          >
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.Chrom}
            />
          </group>
        </group>
        <group
          position={[180.3, 12.31, 118.88]}
          rotation={[Math.PI / 2, 1.57, 0]}
          scale={[0.52, 1, 0.43]}
        >
          <group
            position={[-23.78, -118.88, -416.75]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.31, 1.93, 1]}
          >
            <mesh
              geometry={nodes.Object_27.geometry}
              material={materials.Chrom}
            />
          </group>
        </group>
        <group
          position={[180.3, 12.56, 168.16]}
          rotation={[Math.PI / 2, 1.57, 0]}
          scale={[0.65, 1, 0.43]}
        >
          <group
            position={[-19.27, -168.16, -416.75]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.31, 1.53, 1]}
          >
            <mesh
              geometry={nodes.Object_30.geometry}
              material={materials.Chrom}
            />
          </group>
        </group>
        <group
          position={[155.52, 19.47, 164.44]}
          rotation={[-1.57, 0, -Math.PI]}
          scale={[1.03, 1.03, 0.31]}
        >
          <group
            position={[151.13, -159.8, -63.71]}
            rotation={[-1.57, 0, -Math.PI]}
            scale={[0.97, 3.27, 0.97]}
          >
            <mesh
              geometry={nodes.Object_33.geometry}
              material={materials.Glass2}
            />
          </group>
        </group>
        <group
          position={[107.72, 13.13, -59.72]}
          rotation={[-1.57, 0, -Math.PI]}
        >
          <group
            position={[105.41, 216.26, -18.06]}
            rotation={[-1.57, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.TYPE_C_Plqstic}
            />
          </group>
        </group>
        <group
          position={[155.52, 19.47, 195.56]}
          rotation={[-1.57, 0, -Math.PI]}
          scale={[1.03, 1.03, 0.31]}
        >
          <group
            position={[151.13, -190.04, -63.71]}
            rotation={[-1.57, 0, -Math.PI]}
            scale={[0.97, 3.27, 0.97]}
          >
            <mesh
              geometry={nodes.Object_39.geometry}
              material={materials.Glass2}
            />
          </group>
        </group>
        <group
          position={[155.52, 19.47, 224.84]}
          rotation={[-1.57, 0, -Math.PI]}
          scale={[1.03, 1.03, 0.31]}
        >
          <group
            position={[151.13, -218.49, -63.71]}
            rotation={[-1.57, 0, -Math.PI]}
            scale={[0.97, 3.27, 0.97]}
          >
            <mesh
              geometry={nodes.Object_42.geometry}
              material={materials.Glass2}
            />
          </group>
        </group>
        <group
          position={[125.47, 19.47, 224.59]}
          rotation={[-1.57, 0, -Math.PI]}
          scale={[1, 1, 0.26]}
        >
          <group
            position={[125.47, -224.59, -74.67]}
            rotation={[-1.57, 0, -Math.PI]}
            scale={[1, 3.84, 1]}
          >
            <mesh
              geometry={nodes.Object_45.geometry}
              material={materials.Glass2}
            />
          </group>
        </group>
        <group position={[110.04, 8.21, 94.97]} rotation={[-1.57, 0, -Math.PI]}>
          <group
            position={[110.04, -94.97, -8.21]}
            rotation={[-1.57, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_48.geometry}
              material={materials.Glass}
            />
          </group>
        </group>
        <group
          position={[143.26, 19.98, 194.71]}
          rotation={[-1.57, 0, -Math.PI]}
        >
          <group
            position={[176.47, -294.44, -31.77]}
            rotation={[-1.57, 0, -Math.PI]}
          >
            <mesh
              geometry={nodes.Object_51.geometry}
              material={materials.qccessoires_l1}
            />
            <mesh
              geometry={nodes.Object_52.geometry}
              material={materials.qccessoires_l2}
            />
            <mesh
              geometry={nodes.Object_53.geometry}
              material={materials.qccessoires_lens}
            />
          </group>
        </group>
        <group
          position={[125.3, 19.47, 194.83]}
          rotation={[-1.57, 0, -Math.PI]}
          scale={[0.88, 0.88, 0.23]}
        >
          <group
            position={[142.28, -221.22, -84.79]}
            rotation={[-1.57, 0, -Math.PI]}
            scale={[1.14, 4.35, 1.14]}
          >
            <mesh
              geometry={nodes.Object_56.geometry}
              material={materials.Glass2}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene2/scene.gltf");

export default Model;

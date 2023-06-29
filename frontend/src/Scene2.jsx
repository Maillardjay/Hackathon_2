import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("Scene2/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.8}>
            <group position={[-1.01, -0.44, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.CamModuleFrame_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group position={[-1.01, -0.44, 0.04]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.CamModule_CameraModule_0.geometry}
                material={materials.CameraModule}
              />
            </group>
            <group position={[0.98, 2.04, 0.51]} scale={[-0.26, 0.26, 0.26]}>
              <group position={[0, 2.78, 0]}>
                <group position={[0, 0, -0.27]} scale={[0.5, 0.5, 0.21]}>
                  <mesh
                    geometry={nodes.Lens2_Lens_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  geometry={nodes.Camera2_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Camera2_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Camera2_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.Camera2_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[2.61, -0.07, 0]} scale={0.68}>
                <group position={[0, 0.01, -0.28]} scale={[0.42, 0.42, 0.23]}>
                  <mesh
                    geometry={nodes.Lens4_Lens_0.geometry}
                    material={materials.Lens}
                  />
                  <mesh
                    geometry={nodes.Lens4_Camera2_0.geometry}
                    material={materials.Camera2}
                  />
                </group>
                <mesh
                  geometry={nodes.Camera4_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Camera4_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.Camera4_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Camera4_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[2.61, 2.84, 0]} scale={0.68}>
                <mesh
                  geometry={nodes.Sensor_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Sensor_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Sensor_Red_0.geometry}
                  material={materials.material}
                />
                <mesh
                  geometry={nodes.Sensor_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[2.61, 1.42, 0]} scale={0.35}>
                <mesh
                  geometry={nodes.Flashh_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Flashh_Flash_0.geometry}
                  material={materials.Flash}
                />
                <mesh
                  geometry={nodes.Flashh_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[0, -2.86, 0]}>
                <mesh
                  geometry={nodes.Camera3_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Camera3_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Camera3_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.Camera3_Lens001_0.geometry}
                  material={materials["Lens.001"]}
                />
                <mesh
                  geometry={nodes.Camera3_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[0, 0, -0.27]} scale={[0.32, 0.32, 0.22]}>
                <mesh
                  geometry={nodes.Lens1_Lens_0.geometry}
                  material={materials.Lens}
                />
                <mesh
                  geometry={nodes.Lens1_Camera2_0.geometry}
                  material={materials.Camera2}
                />
              </group>
              <group
                position={[3.99, 4.51, -1.76]}
                rotation={[0, 0, Math.PI]}
                scale={[-0.73, 0.73, 0.73]}
              >
                <group
                  position={[0, 0, 0.12]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.16, 0.16, 0.09]}
                >
                  <mesh
                    geometry={nodes.LensFC_Lens_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  geometry={nodes.FrontCamera_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.FrontCamera_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.FrontCamera_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <mesh
                geometry={nodes.Camera1_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                geometry={nodes.Camera1_Camera2_0.geometry}
                material={materials.Camera2}
              />
              <mesh
                geometry={nodes.Camera1_Camera3_0.geometry}
                material={materials.Camera3}
              />
              <mesh
                geometry={nodes.Camera1_Glass_0.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              geometry={nodes.Back_Back_0.geometry}
              material={materials.Back}
            />
            <mesh
              geometry={nodes.Screen_Screen_0.geometry}
              material={materials.Screen}
            />
            <mesh
              geometry={nodes.ScreenBezel_ScreenBezel_0.geometry}
              material={materials.ScreenBezel}
            />
            <group
              position={[1.74, 1.32, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                geometry={nodes.VolumeButton__BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group
              position={[1.74, 0.43, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                geometry={nodes.PowerButton_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group
              position={[-0.11, -3.08, 0.44]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[-0.49, 0.49, 0.49]}
            >
              <mesh
                geometry={nodes.Logo_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <mesh
              geometry={nodes.S21ULTRA_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              geometry={nodes.S21ULTRA_Speaker_0.geometry}
              material={materials.Speaker}
            />
            <mesh
              geometry={nodes.S21ULTRA_Chrome_0.geometry}
              material={materials.Chrome}
            />
            <mesh
              geometry={nodes.S21ULTRA_Antennas_0.geometry}
              material={materials.Antennas}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("Scene2/scene.gltf");

export default Model;

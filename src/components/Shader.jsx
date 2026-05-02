import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function ShaderPlane() {
  const materialRef = useRef();
  const { size } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.u_resolution.value.set(
        size.width,
        size.height
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(0, 0) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float u_time;
          uniform vec2 u_resolution;
          varying vec2 vUv;

          float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453);
          }

          void main() {
            vec2 uv = vUv;

            // aspect fix
            float aspect = u_resolution.x / u_resolution.y;
            uv.x *= aspect;

            float scale = 60.0;

            // GRID
            vec2 gridUV = uv * scale;
            vec2 id = floor(gridUV);
            vec2 gv = fract(gridUV) - 0.5;

            float square = step(max(abs(gv.x), abs(gv.y)), 0.25);
            float checker = mod(id.x + id.y, 2.0);

            // ------------------------
            // 🔥 FIXED COLUMN BANDS
            // ------------------------

            float speed = 0.08;

            float x = uv.x + u_time * speed;

            // repeating columns (no hard gaps)
            float col = fract(x * 1.2);

            // distance from center of each column
            float band = smoothstep(0.35, 0.0, abs(col - 0.5));

            // subtle randomness
            float rand = random(id);

            float density = step(0.75, rand);

            float mask = band * density;

            // ------------------------
            // FINAL
            // ------------------------
            float finalShape = square * checker * mask;

            finalShape *= smoothstep(1.2, 0.2, vUv.y);

            vec3 color = vec3(32.0/255.0, 33.0/255.0, 36.0/255.0);

            gl_FragColor = vec4(color * finalShape, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <ShaderPlane />
    </Canvas>
  );
}
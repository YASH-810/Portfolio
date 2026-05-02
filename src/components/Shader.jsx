import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";

function ShaderPlane() {
  const materialRef = useRef();
  const { size, gl, clock } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      const t = state.clock.elapsedTime;

      materialRef.current.uniforms.u_time.value = t;
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

          float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                   (c - a)*u.y*(1.0 - u.x) +
                   (d - b)*u.x*u.y;
          }

          float fbm(vec2 st) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 4; i++) {
              v += a * noise(st);
              st *= 2.0;
              a *= 0.5;
            }
            return v;
          }

          float pattern(vec2 p) {
            vec2 p2 = p - vec2(u_time * 0.6, 0.0);
            return fbm(p + fbm(p2));
          }

          void main() {
            vec2 uv = vUv;

            float aspect = u_resolution.x / u_resolution.y;
            uv.x *= aspect;

            float scale = 60.0;

            vec2 gridUV = uv * scale;
            vec2 id = floor(gridUV);
            vec2 gv = fract(gridUV) - 0.5;

            float square = step(max(abs(gv.x), abs(gv.y)), 0.25);
            float checker = mod(id.x + id.y, 2.0);

            // ------------------------
            // BASE FLOW
            // ------------------------
            float f = pattern(uv * 2.5);
            float mask = smoothstep(0.5, 0.7, f);

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
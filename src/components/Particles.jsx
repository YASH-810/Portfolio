"use client";
import { useRef, useEffect } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // ⭐ STAR FIELD
    let stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
    }));

    // 🛸 UFO
    let ufo = {
      x: w / 2,
      y: h * 0.25,
      dx: 0.6,
      sway: 0,
    };

    function drawUFOBeam() {
      const endY = h * 0.55;
      let beamGradient = c.createLinearGradient(ufo.x, ufo.y, ufo.x, endY);
      beamGradient.addColorStop(0, "rgba(120, 0, 255, 0.20)");
      beamGradient.addColorStop(1, "rgba(120, 0, 255, 0)");
      c.fillStyle = beamGradient;

      c.beginPath();
      c.moveTo(ufo.x - 20, ufo.y + 8);
      c.lineTo(ufo.x + 20, ufo.y + 8);
      c.lineTo(ufo.x + 45, endY);
      c.lineTo(ufo.x - 45, endY);
      c.closePath();
      c.fill();
    }

    function drawUFO() {
      ufo.sway += 0.03;
      ufo.y = h * 0.25 + Math.sin(ufo.sway) * 12;
      ufo.x += ufo.dx;
      if (ufo.x > w + 60) ufo.x = -60;

      drawUFOBeam();

      // Body
      c.shadowBlur = 15;
      c.shadowColor = "cyan";
      c.fillStyle = "rgba(150,255,255,0.85)";
      c.beginPath();
      c.ellipse(ufo.x, ufo.y, 36, 12, 0, 0, Math.PI * 2);
      c.fill();

      // Dome
      c.shadowBlur = 6;
      c.fillStyle = "rgba(200,255,255,0.45)";
      c.beginPath();
      c.arc(ufo.x, ufo.y - 8, 14, 0, Math.PI * 2);
      c.fill();

      // Blinking Lights
      const blink = (Math.sin(Date.now() * 0.005) + 1) / 2;
      c.shadowBlur = 10;
      c.shadowColor = "cyan";
      c.fillStyle = `rgba(0,255,255,${0.3 + blink * 0.7})`;

      c.beginPath();
      c.arc(ufo.x - 18, ufo.y + 4, 4, 0, Math.PI * 2);
      c.fill();

      c.beginPath();
      c.arc(ufo.x + 18, ufo.y + 4, 4, 0, Math.PI * 2);
      c.fill();
    }

    function animate() {
      // PURE BLACK BACKGROUND
      c.fillStyle = "black";
      c.fillRect(0, 0, w, h);

      // 🌌 MAIN NEBULA (reduced size)
      let nebulaRight = c.createRadialGradient(
        w * 0.82, 
        h * 0.25,
        0,
        w * 0.82,
        h * 0.25,
        w * 0.28 // reduced from 0.45 → smaller nebula
      );
      nebulaRight.addColorStop(0, "rgba(170, 70, 255, 0.55)");
      nebulaRight.addColorStop(1, "rgba(0, 0, 0, 0)");
      c.fillStyle = nebulaRight;
      c.fillRect(0, 0, w, h);

      // 🌌 SECOND NEBULA (random-ish left lower)
      let nebulaLeft = c.createRadialGradient(
        w * 0.30,
        h * 0.7,
        0,
        w * 0.18,
        h * 0.7,
        w * 0.22
      );
      nebulaLeft.addColorStop(0, "rgba(130, 60, 240, 0.4)");
      nebulaLeft.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = nebulaLeft;
      c.fillRect(0, 0, w, h);

      // ⭐ STARS
      c.fillStyle = "white";
      stars.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > w) s.dx *= -1;
        if (s.y < 0 || s.y > h) s.dy *= -1;

        c.beginPath();
        c.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        c.fill();
      });

      // 🛸 UFO
      drawUFO();

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10"></canvas>;
}

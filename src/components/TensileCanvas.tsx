import React, { useEffect, useRef } from 'react';

export const TensileCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid parameters for hyperbolic paraboloid membrane simulation
    const cols = 22;
    const rows = 14;
    let time = 0;
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const points: { x: number; y: number; z: number }[][] = [];
      const colStep = width / (cols - 1);
      const rowStep = height / (rows - 1);

      // Compute 3D Hypar curve points
      for (let r = 0; r < rows; r++) {
        points[r] = [];
        const normY = (r / (rows - 1) - 0.5) * 2; // -1 to 1

        for (let c = 0; c < cols; c++) {
          const normX = (c / (cols - 1) - 0.5) * 2; // -1 to 1
          
          // Saddle formula: z = x^2 - y^2 with oscillating wave
          const baseZ = (normX * normX - normY * normY) * 35;
          const wave = Math.sin(normX * 3 + time) * Math.cos(normY * 3 + time * 0.8) * 12;
          
          let px = c * colStep;
          let py = r * rowStep + baseZ + wave;

          // Subtle reaction to mouse
          if (mouse.active) {
            const dx = mouse.x - px;
            const dy = mouse.y - py;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const force = (1 - dist / 180) * 15;
              px -= (dx / dist) * force;
              py -= (dy / dist) * force;
            }
          }

          points[r].push({ x: px, y: py, z: baseZ });
        }
      }

      // Draw tension grid lines (Weft & Warp cables)
      // Horizontal cables (Gold / Amber tint)
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const pt = points[r][c];
          if (c === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = r % 2 === 0 ? 'rgba(212, 175, 55, 0.22)' : 'rgba(212, 175, 55, 0.12)';
        ctx.lineWidth = r % 2 === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // Vertical cables (Cobalt / Cyan tint)
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const pt = points[r][c];
          if (r === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = c % 2 === 0 ? 'rgba(56, 189, 248, 0.22)' : 'rgba(148, 163, 184, 0.1)';
        ctx.lineWidth = c % 2 === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // Draw tension anchor node points at intersections
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const pt = points[r][c];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = (r === 0 || r === rows - 1 || c === 0 || c === cols - 1)
            ? 'rgba(250, 204, 21, 0.8)' 
            : 'rgba(56, 189, 248, 0.5)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto opacity-75 ${className}`}
    />
  );
};

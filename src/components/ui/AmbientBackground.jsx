import { useReducedMotion } from 'framer-motion';

/*
  AmbientBackground — reusable 3-layer background system
  ───────────────────────────────────────────────────────
  Layer 1: SVG feTurbulence grain   — premium texture, zero animation cost
  Layer 2: Dot grid                 — technical/engineering depth (optional)
  Layer 3: Breathing radial blobs   — warmth and dimension (optional, paused on reduce)

  Usage:
    <section className="relative overflow-hidden ...">
      <AmbientBackground variant="ivory" dots blobs />
      <div className="relative z-10 ...">…content…</div>
    </section>

  Props:
    variant  — "ivory" | "sand" | "dark"
    dots     — boolean, render dot grid layer
    blobs    — boolean, render breathing blob layer (default true)

  Performance:
    - All layers: position absolute, pointer-events none, will-change auto
    - Blobs only: will-change transform (GPU composited)
    - Animations: transform + opacity only (no layout-triggering props)
    - prefers-reduced-motion: blobs hidden, grain + dots remain
*/

const variants = {
  ivory: {
    noiseOpacity:  0.022,
    blobA: {
      gradient: 'radial-gradient(circle, rgba(27,58,45,0.07) 0%, transparent 60%)',
      size: '52vw',
      top: '-15%', right: '-8%',
      animClass: 'section-blob-primary',
    },
    blobB: {
      gradient: 'radial-gradient(circle, rgba(184,147,42,0.045) 0%, transparent 60%)',
      size: '40vw',
      bottom: '-12%', left: '-5%',
      animClass: 'section-blob-secondary',
    },
  },
  sand: {
    noiseOpacity:  0.028,
    blobA: {
      gradient: 'radial-gradient(circle, rgba(184,147,42,0.09) 0%, transparent 58%)',
      size: '56vw',
      top: '-18%', right: '-10%',
      animClass: 'section-blob-primary',
    },
    blobB: {
      gradient: 'radial-gradient(circle, rgba(27,58,45,0.055) 0%, transparent 58%)',
      size: '44vw',
      bottom: '-14%', left: '-6%',
      animClass: 'section-blob-secondary',
    },
  },
  dark: {
    noiseOpacity:  0.038,
    blobA: null,
    blobB: null,
  },
};

export default function AmbientBackground({ variant = 'ivory', dots = false, blobs = true }) {
  const shouldReduce = useReducedMotion();
  const config = variants[variant] ?? variants.ivory;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 1: Grain texture ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 noise-grain"
        style={{ opacity: config.noiseOpacity }}
      />

      {/* ── Layer 2: Dot grid ──────────────────────────────────────────── */}
      {dots && (
        <div
          className={`absolute inset-0 ${variant === 'dark' ? 'dot-grid-dark' : 'dot-grid-light'}`}
          style={{ opacity: 1 }}
        />
      )}

      {/* ── Layer 3: Breathing blobs ───────────────────────────────────── */}
      {blobs && !shouldReduce && config.blobA && (
        <div
          className={config.blobA.animClass}
          style={{
            position: 'absolute',
            borderRadius: '9999px',
            width:  config.blobA.size,
            height: config.blobA.size,
            top:    config.blobA.top,
            right:  config.blobA.right,
            bottom: config.blobA.bottom,
            left:   config.blobA.left,
            background: config.blobA.gradient,
            filter: 'blur(72px)',
            willChange: 'transform',
          }}
        />
      )}
      {blobs && !shouldReduce && config.blobB && (
        <div
          className={config.blobB.animClass}
          style={{
            position: 'absolute',
            borderRadius: '9999px',
            width:  config.blobB.size,
            height: config.blobB.size,
            top:    config.blobB.top,
            right:  config.blobB.right,
            bottom: config.blobB.bottom,
            left:   config.blobB.left,
            background: config.blobB.gradient,
            filter: 'blur(60px)',
            willChange: 'transform',
          }}
        />
      )}
    </div>
  );
}

/*
  Homepage section order — Enterprise Gateway landing pattern (toolkit):
  1. Hero (dark green)              — Mission/Value prop, kinetic headline
  2. TrustBar (light ivory)         — PDO/MEM/ISO credentials
  3. Stats (medium green accent)    — Single dark break in light section flow
  4. Services (light ivory)         — Bento grid, 6 service lines
  5. About (warm sand)              — Identity narrative + heritage timeline
  6. OmanIdentity (warm sand alt)   — Editorial storytelling, proudly Omani
  7. QHSE (light ivory)             — 4-pillar safety culture
  8. CTABanner (dark green)         — Contact Sales, final conversion

  CLAUDE.md rule: "lighter soothing tones" →
  Dark sections: Hero + Stats strip + CTABanner only (3 of 8)
  Light/warm sections: TrustBar + Services + About + OmanIdentity + QHSE (5 of 8)
*/

import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import OmanIdentity from '../components/sections/OmanIdentity';
import QHSE from '../components/sections/QHSE';
import CTABanner from '../components/sections/CTABanner';
import ScrollMotionSection from '../components/motion/ScrollMotionSection';

export default function Home() {
  return (
    <main>
      <Hero />

      <ScrollMotionSection parallax={18} blur={6}>
        <TrustBar />
      </ScrollMotionSection>

      <ScrollMotionSection parallax={22} delay={0.05}>
        <Stats />
      </ScrollMotionSection>

      <ScrollMotionSection parallax={26} delay={0.08}>
        <Services />
      </ScrollMotionSection>

      <ScrollMotionSection parallax={30} delay={0.12}>
        <About />
      </ScrollMotionSection>

      <ScrollMotionSection parallax={28} delay={0.12}>
        <OmanIdentity />
      </ScrollMotionSection>

      <ScrollMotionSection parallax={24} delay={0.14}>
        <QHSE />
      </ScrollMotionSection>

      <ScrollMotionSection parallax={20} delay={0.1} blur={4}>
        <CTABanner />
      </ScrollMotionSection>
    </main>
  );
}

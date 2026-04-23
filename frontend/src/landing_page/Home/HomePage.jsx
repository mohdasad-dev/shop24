import React from 'react';

// ── Existing components ──
import Hero from './Hero';
import Category from './Category';
import Anytime from './Anytime';
import Offer from './Offer';
import Quality from './Quality';

// ── New sections ──
import FlashDeals from './FlashDeals';
import LiveKitchen from './LiveKitchen';
import PrimeBanner from './PrimeBanner';

// ── New section styles ──
import './newSections.css';

function HomePage() {
  return (
    <>
      {/* ─── 1. Hero ─── */}
      <Hero />

      {/* ─── 3. Existing Category Grid ─── */}
      <Category />

      {/* ─── 4. Flash Deals (countdown timer) ─── */}
      <FlashDeals />

      {/* ─── 5. Live Kitchen ─── */}
      <LiveKitchen />

      {/* ─── 10. Prime Membership Banner ─── */}
      {/* <PrimeBanner /> */}

      {/* ─── 11. Existing Anytime + Offer + Quality ─── */}
      <Anytime />
      <Offer />
      <Quality />
    </>
  );
}

export default HomePage;
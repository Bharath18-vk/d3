import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroducingSection } from './components/IntroducingSection';
import { CollectionsSection } from './components/CollectionsSection';
import { ArtOfLivingSection } from './components/ArtOfLivingSection';
import { MaterialsSection } from './components/MaterialsSection';
import { InspirationGallerySection } from './components/InspirationGallerySection';
import { WhyExploreSection } from './components/WhyExploreSection';
import { VisitShowroomSection } from './components/VisitShowroomSection';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';
import { PlanVisitModal } from './components/PlanVisitModal';
import { CategoryModal } from './components/CategoryModal';
import type { CategoryItem } from './types';

export function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  return (
    <div className="min-h-screen bg-ivory text-espresso flex flex-col selection:bg-bronze selection:text-white font-sans antialiased">
      {/* Navigation */}
      <Navbar onOpenVisitModal={() => setIsVisitModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 03 Hero */}
        <Hero onOpenVisitModal={() => setIsVisitModalOpen(true)} />

        {/* 05 Introducing the Experience */}
        <IntroducingSection />

        {/* 06 Explore the Collections */}
        <CollectionsSection onSelectCategory={(cat) => setSelectedCategory(cat)} />

        {/* 07 The Art of Living */}
        <ArtOfLivingSection onOpenVisitModal={() => setIsVisitModalOpen(true)} />

        {/* 08 Materials & Details */}
        <MaterialsSection />

        {/* 09 Inspiration Gallery */}
        <InspirationGallerySection />

        {/* 10 Why Explore D3 */}
        <WhyExploreSection />

        {/* 11 Visit the Showroom */}
        <VisitShowroomSection onOpenVisitModal={() => setIsVisitModalOpen(true)} />
      </main>

      {/* 13 Footer */}
      <Footer />

      {/* 12 Floating WhatsApp Inquiry System */}
      <WhatsAppFloating />

      {/* Interactive Modals */}
      <PlanVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
      />
    </div>
  );
}

export default App;

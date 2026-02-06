import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { ArtistsMarquee } from "@/components/ArtistsMarquee";
import { PremiumBanner } from "@/components/PremiumBanner";
import { ReleasesCarousel } from "@/components/ReleasesCarousel";
import { TopCharts } from "@/components/TopCharts";
import { FeaturedPlayer } from "@/components/FeaturedPlayer";
import { GenresShowcase } from "@/components/GenresShowcase";
import { LiveRadio } from "@/components/LiveRadio";
import { EventsSection } from "@/components/EventsSection";
import { NewsHighlight } from "@/components/NewsHighlight";
import { Testimonials } from "@/components/Testimonials";
import { AppDownload } from "@/components/AppDownload";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Stats Section */}
      <div className="container mx-auto px-5">
        <StatsSection />
      </div>

      {/* Artists Marquee */}
      <ArtistsMarquee />

      {/* Releases - Full Width */}
      <div className="w-full section-bg-darker-gray py-16">
        <div className="container mx-auto px-5">
          <PremiumBanner />
          <ReleasesCarousel />
        </div>
      </div>

      {/* Top Charts - Full Width */}
      <div className="w-full section-bg-gray py-16">
        <div className="container mx-auto px-5">
          <TopCharts />
        </div>
      </div>

      <main className="container mx-auto px-5">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FeaturedPlayer />
            <GenresShowcase />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Live Radio - Full Width */}
      <div className="w-full section-bg-gray py-16">
        <div className="container mx-auto px-5">
          <LiveRadio />
        </div>
      </div>

      {/* Events - Full Width */}
      <div className="w-full section-bg-darker-gray py-16">
        <div className="container mx-auto px-5">
          <EventsSection />
        </div>
      </div>

      {/* News - Full Width */}
      <div className="w-full section-bg-darker-gray py-16">
        <div className="container mx-auto px-5">
          <NewsHighlight />
        </div>
      </div>

      {/* App Download - Full Width */}
      <div className="w-full section-bg-gray py-16">
        <div className="container mx-auto px-5">
          <AppDownload />
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

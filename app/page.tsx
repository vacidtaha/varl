import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DotCursorField from "@/components/DotCursorField";

export default function Home() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Animasyon - Tüm sayfayı kaplıyor */}
      <div className="absolute inset-0 z-0">
        <DotCursorField />
      </div>
      
      {/* İçerik */}
      <div className="absolute inset-0 z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

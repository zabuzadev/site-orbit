import { useRef, useState } from 'react';

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";


const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900 py-16 sm:py-24">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 sm:mb-8">
            <Play className="h-4 w-4 text-white" />
            <span className="text-white font-medium text-sm tracking-wide">EXPERIÊNCIA EXCLUSIVA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-balance px-4 tracking-tight">
            <span className="text-white">Mergulhe no Universo</span>
            <br className="sm:hidden" />
            <span className="text-white">da </span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 text-transparent bg-clip-text">Alta Relojoaria</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto text-balance px-4 leading-relaxed">
            Descubra os segredos por trás de cada criação através de uma jornada visual única pelos nossos ateliers suíços.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8 sm:mb-16 max-w-[1400px] mx-auto relative">
          {/* Efeito de Vinheta */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-radial from-transparent to-slate-950/80 rounded-[2rem] z-0"></div>
          
          <div className="relative aspect-[2.35/1] bg-slate-950 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl group">
            {/* Overlay de Play/Pause */}
            <div 
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/30 group-hover:bg-black/40 transition-all duration-500"
              onClick={togglePlay}
            >
              {!isPlaying && (
                <Button
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-8 sm:p-10 group scale-90 hover:scale-100 transition-all duration-300"
                >
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 ml-1" />
                </Button>
              )}
            </div>

            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              preload="metadata"
              controlsList="nodownload"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              autoPlay
              muted
              loop
              poster="/thumbnail-video.jpg"
            >
              <source src="/Orbit Watch f1.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          {/* Descrição do Vídeo - Visível apenas em Mobile */}
          <div className="mt-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg sm:hidden border border-white/10">
            <h3 className="font-serif font-semibold text-white mb-2">
              Descubra a Excelência
            </h3>
            <p className="text-sm text-white/80">
              Toque para assistir nossa jornada pela alta relojoaria suíça.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

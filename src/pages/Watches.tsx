import React from 'react';
import Footer from '../components/Footer';
import AllWatches from '../components/AllWatches';
import Breadcrumb from '../components/Breadcrumb';
import { Clock, Crown, Shield } from 'lucide-react';

const WatchesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Breadcrumb 
        items={[
          { label: 'Todos os Relógios' }
        ]} 
      />

      {/* Banner de Garantias */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-y border-slate-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <Clock className="h-6 w-6 text-slate-200" />
              </div>
              <div>
                <h3 className="text-slate-200 font-medium">Garantia 1 ano</h3>
                <p className="text-slate-400 text-sm">Assistência técnica permanente</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <Crown className="h-6 w-6 text-slate-200" />
              </div>
              <div>
                <h3 className="text-slate-200 font-medium">Certificado de Autenticidade</h3>
                <p className="text-slate-400 text-sm">Todas as peças são certificadas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <Shield className="h-6 w-6 text-slate-200" />
              </div>
              <div>
                <h3 className="text-slate-200 font-medium">Envio Seguro</h3>
                <p className="text-slate-400 text-sm">Transporte especializado e seguro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <AllWatches />
      </main>
      <Footer />
    </div>
  );
};

export default WatchesPage; 
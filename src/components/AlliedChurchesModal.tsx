import React, { useState, useEffect } from 'react';
import { X, Search, PlusCircle, Church, MapPin, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/academyData';

interface AlliedChurchesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChurchEntry {
  id: string;
  name: string;
  location: string;
  country: string;
  pastor?: string;
  isRecent?: boolean;
}

const INITIAL_CHURCHES: ChurchEntry[] = [
  // El Salvador
  { id: 'sv-1', name: 'Iglesias Presbiterianas de El Salvador', location: 'El Salvador', country: 'El Salvador' },
  { id: 'sv-2', name: 'Red de Iglesias Cristo Vive', location: 'El Salvador', country: 'El Salvador' },
  { id: 'sv-3', name: 'Asociación de Pastores de la Zona Oriente', location: 'Zona Oriente', country: 'El Salvador' },
  { id: 'sv-4', name: 'Iglesia "Por la Gracia de Dios, San Miguel"', location: 'San Miguel', country: 'El Salvador', isRecent: true },

  // Guatemala y México
  { id: 'gt-1', name: 'Red de Institutos Bíblicos Fronterizos', location: 'Guatemala y México', country: 'Guatemala' },
  { id: 'gt-2', name: 'Iglesias Misión Centroamericana', location: 'Guatemala', country: 'Guatemala' },
  { id: 'mx-1', name: 'Iglesias Presbiterianas de Chiapas', location: 'Chiapas', country: 'México' },

  // Nicaragua
  { id: 'ni-1', name: 'Iglesias Presbiterianas Reformadas de Nicaragua', location: 'Nicaragua', country: 'Nicaragua' },
  { id: 'ni-2', name: 'Confraternidad Pastoral Ministerio Oasis', location: 'Chinandega, Nicaragua', country: 'Nicaragua' },

  // Honduras
  { id: 'hn-1', name: 'Iglesia Bíblica Gracia sin Fin', location: 'Tegucigalpa, Honduras', country: 'Honduras' },
  { id: 'hn-2', name: 'Iglesia Cristiana Reformada de Corinto', location: 'San Lorenzo, Valle', country: 'Honduras' },

  // Internacional
  { id: 'int-1', name: 'Gospel Society Mission', location: 'El Salvador / Internacional', country: 'Internacional' },
  { id: 'int-2', name: 'Trinitarian Bible Society', location: 'Londres, Inglaterra', country: 'Internacional' },
  { id: 'int-3', name: 'Centro de Estudios Kuyper', location: 'Argentina', country: 'Internacional' },
  { id: 'int-4', name: 'Teaching Missions International - Teaching Biblical Reformed', location: 'USA', country: 'Internacional' },
  { id: 'int-5', name: 'Third Millennium Ministries', location: 'USA', country: 'Internacional' },
  { id: 'int-6', name: 'Chapel Library', location: 'USA', country: 'Internacional' },
  { id: 'int-7', name: 'Iglesia Bíblica Maranatha Lynn', location: 'Mass, USA', country: 'Internacional' },
  { id: 'int-8', name: 'Equipping the Church International (ECI) by Pastor José Amézquita', location: 'USA', country: 'Internacional' }
];

export const AlliedChurchesModal: React.FC<AlliedChurchesModalProps> = ({ isOpen, onClose }) => {
  const [churches, setChurches] = useState<ChurchEntry[]>(() => {
    try {
      const saved = localStorage.getItem('abe_allied_churches_v2');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_CHURCHES;
  });

  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Todos');

  const [newChurch, setNewChurch] = useState({
    name: '',
    pastor: '',
    country: 'El Salvador',
    city: '',
    phone: ''
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('abe_allied_churches_v2', JSON.stringify(churches));
    } catch {}
  }, [churches]);

  if (!isOpen) return null;

  const filteredChurches = churches.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'Todos' || c.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const handleAddChurch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChurch.name || !newChurch.city) return;

    const entry: ChurchEntry = {
      id: `custom-${Date.now()}`,
      name: newChurch.name,
      pastor: newChurch.pastor,
      location: newChurch.city,
      country: newChurch.country,
      isRecent: true
    };

    setChurches([entry, ...churches]);
    setIsSaved(true);

    const waMsg = 
`*Nueva Iglesia que se une a la Red de Aliados - Academia Bíblica El Evangelio*
⛪ *Iglesia / Ministerio:* ${newChurch.name}
👤 *Pastor / Representante:* ${newChurch.pastor || 'No especificado'}
📍 *Ubicación:* ${newChurch.city}, ${newChurch.country}
📱 *Teléfono:* ${newChurch.phone || 'No especificado'}
_Deseamos vincularnos a la red de iglesias y ministerios aliados._`;

    window.open(buildWhatsAppUrl(waMsg), '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSaved(false);
      setActiveTab('list');
      setNewChurch({ name: '', pastor: '', country: 'El Salvador', city: '', phone: '' });
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-amber-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Church className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                Comunión Eclesial y Red Fraterna
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-white truncate">
                Directorio de Iglesias y Aliados
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'list' 
                  ? 'bg-amber-500 text-slate-950' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Ver Directorio ({churches.length})
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'add' 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-emerald-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Unir o Actualizar mi Iglesia</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {activeTab === 'list' ? (
            <>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar iglesia, ciudad o ministerio..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="Todos">Todos los Países</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="México">México</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Internacional">Internacional</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredChurches.map((church) => (
                  <div
                    key={church.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/40 transition-colors space-y-1.5 relative group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {church.country}
                      </span>
                      {church.isRecent && (
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Unida Reciente</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                      {church.name}
                    </h4>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{church.location}</span>
                    </div>

                    {church.pastor && (
                      <p className="text-[11px] text-slate-400 italic">
                        Pastor: {church.pastor}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {filteredChurches.length === 0 && (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No se encontraron iglesias con ese criterio de búsqueda.
                </div>
              )}
            </>
          ) : (
            <div className="max-w-xl mx-auto space-y-5">
              <div className="text-center space-y-1">
                <h3 className="font-serif text-lg font-bold text-white">
                  Registrar o Actualizar una Iglesia
                </h3>
                <p className="text-xs text-slate-300">
                  Las iglesias aliadas reciben folletos de estudio, apoyo en conferencias y comunión eclesial.
                </p>
              </div>

              {isSaved ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="font-bold text-sm text-white">¡Iglesia Agregada con Éxito!</p>
                  <p className="text-xs text-slate-300">
                    Se ha abierto WhatsApp para notificar a la coordinación pastoral de la Academia.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddChurch} className="space-y-3 text-xs bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Nombre de la Iglesia o Confraternidad *</label>
                    <input
                      type="text"
                      required
                      value={newChurch.name}
                      onChange={(e) => setNewChurch({ ...newChurch, name: e.target.value })}
                      placeholder="Ej: Iglesia Cristiana Reformada Gracia y Paz"
                      className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Pastor o Líder Principal</label>
                      <input
                        type="text"
                        value={newChurch.pastor}
                        onChange={(e) => setNewChurch({ ...newChurch, pastor: e.target.value })}
                        placeholder="Nombre del pastor"
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">País *</label>
                      <select
                        value={newChurch.country}
                        onChange={(e) => setNewChurch({ ...newChurch, country: e.target.value })}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                      >
                        <option value="El Salvador">El Salvador</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="México">México</option>
                        <option value="Internacional">Internacional</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Ciudad / Aldea / Cantón *</label>
                      <input
                        type="text"
                        required
                        value={newChurch.city}
                        onChange={(e) => setNewChurch({ ...newChurch, city: e.target.value })}
                        placeholder="Ej: Ahuachapán / Chinandega"
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">WhatsApp de Contacto</label>
                      <input
                        type="tel"
                        value={newChurch.phone}
                        onChange={(e) => setNewChurch({ ...newChurch, phone: e.target.value })}
                        placeholder="+505 / +503 ..."
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow cursor-pointer transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Guardar y Notificar por WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Alianza Eclesial Sin Fines de Lucro</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

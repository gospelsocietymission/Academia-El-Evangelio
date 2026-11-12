import React, { useState } from 'react';
import { X, Heart, CheckCircle2, MessageCircle, Gift, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<string>('beca-estudiante');
  const [donorName, setDonorName] = useState('');
  const [donorCountry, setDonorCountry] = useState('Nicaragua');

  if (!isOpen) return null;

  const tiers = [
    {
      id: 'folletos',
      title: 'Patrocinio de Material Didáctico',
      amount: '$10 USD / mes',
      detail: 'Cubre la impresión y entrega de folletos físicos con espacios de trabajo para 2 estudiantes rurales.'
    },
    {
      id: 'beca-estudiante',
      title: 'Beca Completa de Estudiante Rural',
      amount: '$25 USD / mes',
      detail: 'Cubre folletos, videos didácticos y alimentación durante los encuentros mensuales prácticos de un obrero o pastor.'
    },
    {
      id: 'centro-misionero',
      title: 'Sostenimiento de Sedes y Centros Misioneros',
      amount: '$50 USD / mes o donación voluntaria',
      detail: 'Apoyo a las sedes de entrenamiento rural en Tacaná, San Lorenzo, Chinandega y El Crucero.'
    }
  ];

  const handleSendDonationInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const chosen = tiers.find((t) => t.id === selectedTier);
    const tierName = chosen ? chosen.title : 'Donación Voluntaria';

    const waText = 
`*Deseo Apoyar con una Donación - Academia Bíblica El Evangelio*
❤️ *Proyecto:* ${tierName}
👤 *Nombre:* ${donorName || 'Hermano(a) en Cristo'}
📍 *País:* ${donorCountry}
💬 *Mensaje:* Deseo conocer los canales para realizar mi donación voluntaria (transferencia bancaria local o envío internacional).
_Enviado desde academiabiblica.net_`;

    window.open(buildWhatsAppUrl(waText), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-slate-900 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Heart className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                Sembrando en el Reino de Dios
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Donar a la Academia Bíblica El Evangelio
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-stone-50 space-y-5 overflow-y-auto flex-1 text-xs">
          
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Transparencia y Mayordomía</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              En la Academia Bíblica El Evangelio <strong>no cobramos matrícula anual</strong>. Como entidad sin fines de lucro, cada donación se destina a la impresión de materiales de estudio para pastores de zonas rurales vulnerables, sustento de los centros misioneros y becas solidarias.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="space-y-2.5">
            <label className="block text-slate-900 font-bold uppercase tracking-wider text-[11px]">
              Selecciona una forma de bendecir el ministerio:
            </label>

            {tiers.map((tier) => (
              <label
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  selectedTier === tier.id
                    ? 'bg-amber-500/10 border-amber-600 shadow-sm'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <input
                  type="radio"
                  name="donationTier"
                  checked={selectedTier === tier.id}
                  onChange={() => setSelectedTier(tier.id)}
                  className="mt-1 text-amber-600 focus:ring-amber-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{tier.title}</span>
                    <span className="font-mono font-bold text-amber-700">{tier.amount}</span>
                  </div>
                  <p className="text-stone-600 text-[11px] mt-0.5 leading-snug">{tier.detail}</p>
                </div>
              </label>
            ))}
          </div>

          {/* Donor details form */}
          <form onSubmit={handleSendDonationInquiry} className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-800 font-semibold mb-1">Tu Nombre (o Anónimo)</label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Ej. Familia Martínez / Hermano en Cristo"
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">País</label>
                <select
                  value={donorCountry}
                  onChange={(e) => setDonorCountry(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white"
                >
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Estados Unidos">Estados Unidos / Diáspora</option>
                  <option value="Otro">Otro país</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Al hacer clic, se abrirá WhatsApp con nuestro equipo pastoral para brindarte los números de cuenta bancaria local o métodos de envío según tu país.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Coordinar Donación por WhatsApp ({INSTITUTION_INFO.phone})</span>
            </button>
          </form>

        </div>

        {/* Footer */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>{INSTITUTION_INFO.domain} · {INSTITUTION_INFO.email}</span>
          <button onClick={onClose} className="hover:text-slate-950 underline">
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

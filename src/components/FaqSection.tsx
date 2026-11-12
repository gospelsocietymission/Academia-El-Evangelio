import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/academyData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Resolviendo tus Inquietudes</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Todo lo que necesitas saber sobre el estudio por correspondencia y la vida académica.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-950/70 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-md bg-slate-900 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

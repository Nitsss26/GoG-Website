import React, { useState, useEffect } from 'react';
import { EventDataForm } from '../../adminTypes';
import { Calendar, MapPin, Eye, BookOpen, ArrowRight } from 'lucide-react';

interface EventLivePreviewProps {
  formData: EventDataForm;
  activeTab?: 'basic' | 'modules';
}

const EventLivePreview: React.FC<EventLivePreviewProps> = ({ formData, activeTab = 'basic' }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  // Reset selected module when switching back to basic tab
  useEffect(() => {
    if (activeTab === 'basic') {
      setSelectedModuleId(null);
    }
  }, [activeTab]);

  const renderBasicPreview = () => (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* --- Card Preview Section --- */}
      <div>
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">1. Main Card Preview</h3>
        <div className="w-full max-w-sm mx-auto aspect-square relative bg-[#080808] border border-white/10 rounded-sm overflow-hidden group">
          <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[#34D562] z-40" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-[3px] border-r-[3px] border-[#34D562] z-40" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[3px] border-l-[3px] border-[#34D562] z-40" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[3px] border-r-[3px] border-[#34D562] z-40" />
          
          <div className="absolute inset-0 z-0">
            {formData.cardImage ? (
              <img src={formData.cardImage} alt="Card Preview" className="w-full h-full object-cover opacity-60" />
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700 text-xs uppercase font-bold">No Image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          </div>

          <div className="relative h-full flex flex-col justify-between p-6 z-30">
            <div>
              <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-[#34D562] shadow-[0_0_10px_rgba(52,213,98,0.4)]">
                      <span className="text-black text-[8px] font-black uppercase tracking-tighter italic">{formData.tag || 'EVENT'}</span>
                  </div>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="flex items-center gap-1.5 opacity-80">
                      <Calendar className="w-3 h-3 text-[#34D562]" />
                      <span className="text-white text-[9px] font-extrabold tracking-[0.1em]">{formData.date ? formData.date.toUpperCase() : 'DATE TBD'}</span>
                  </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${formData.isActive ? 'bg-yellow-500 animate-pulse' : 'bg-[#34D562]'}`} />
                  <span className={`text-[9px] font-bold tracking-widest uppercase ${formData.isActive ? 'text-[#34D562]' : 'text-white'}`}>
                      {formData.isActive ? 'Program Active' : 'Completed'}
                  </span>
              </div>

              <h3 className="text-sm md:text-base font-black text-white leading-tight tracking-tighter uppercase italic group-hover:text-[#34D562] transition-colors duration-400 mb-1">
                  {formData.title || 'UNTITLED EVENT'}
              </h3>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <div className="flex flex-col gap-1 max-w-[55%]">
                    <div className="flex items-start gap-1.5 text-white">
                        <MapPin className="w-3 h-3 text-[#34D562] shrink-0 mt-0.5" />
                        <span className="text-[8px] font-black italic leading-tight">{formData.venue ? formData.venue.toUpperCase() : 'VENUE TBD'}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-white font-black overflow-hidden shrink-0">
                    <span className="text-[9px] tracking-tighter italic">LAUNCH.VIEW</span>
                    <div className="p-1.5 bg-[#34D562] text-black">
                        <Eye className="w-3 h-3" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Detail Preview Section --- */}
      <div>
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">2. Event Details View</h3>
        
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#34D562]/10 text-[#34D562] text-[10px] font-semibold rounded-full border border-[#34D562]/20 tracking-wider">
                    {formData.isActive ? 'Active Programme' : formData.tag}
                </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight mb-4">
                {formData.title || 'Event Title'}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#34D562]" />
                    {formData.date || 'Date'}
                </span>
                <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#34D562]" />
                    {formData.venue || 'Venue'}
                </span>
            </div>
        </div>

        <div className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl p-5 border border-white/5 mb-10">
            <p className="text-gray-300 leading-relaxed text-sm">
                {formData.shortDescription || 'Short description will appear here...'}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-[#34D562]/5 border border-[#34D562]/15 rounded-full text-[10px] text-[#34D562] font-medium">
                    {formData.organizedBy || 'Geeks of Gurukul'}
                </span>
                {formData.inAssociationWith && (
                    <span className="px-2 py-1 bg-blue-500/5 border border-blue-500/15 rounded-full text-[10px] text-blue-400 font-medium">
                        In association with {formData.inAssociationWith}
                    </span>
                )}
            </div>
        </div>
      </div>
    </div>
  );

  const renderGalleryPreview = () => (
    <div className="animate-in fade-in zoom-in-95 duration-300 pb-12">
      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">2. Event Gallery Preview</h3>
      
      {formData.subEvents.length === 0 ? (
        <div className="text-center py-12 bg-white/[0.02] rounded-2xl border border-white/5">
          <p className="text-gray-500 text-sm">No modules found. Please generate modules first.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formData.subEvents.map(sub => (
            <div 
              key={sub.id} 
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#34D562]/50 transition-colors cursor-pointer group flex flex-col h-[280px]"
              onClick={() => setSelectedModuleId(sub.id)}
            >
              {/* Top Banner (PM-UShA style) */}
              <div className="bg-[#2a2a2a] py-2 px-4 flex justify-between items-center z-10 mx-4 mt-4 rounded-full shadow-lg relative">
                 <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#34D562]" />
                     <span className="text-[9px] font-bold text-white tracking-widest uppercase">{formData.tag}</span>
                 </div>
                 <span className="text-[9px] font-bold text-[#34D562] tracking-widest">{sub.date || 'DATE TBD'}</span>
              </div>

              <div className="relative flex-1 -mt-10 overflow-hidden">
                {sub.images.length > 0 ? (
                   <img src={sub.images[0]} alt={sub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : formData.cardImage ? (
                   <img src={formData.cardImage} alt={sub.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                ) : (
                   <div className="w-full h-full bg-[#111] flex items-center justify-center text-gray-700 font-bold uppercase text-xs">No Image</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-center">
                   <h3 className="text-sm font-black text-white italic tracking-tight leading-tight mb-4 uppercase">{sub.title}</h3>
                   <button className="bg-[#34D562] hover:bg-green-400 text-black px-4 py-2 rounded-full text-[10px] font-bold w-full max-w-[180px] flex items-center justify-center gap-2 uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(52,213,98,0.3)]">
                     VIEW PROGRAM DETAILS
                     <ArrowRight size={12} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderModuleDetailPreview = () => {
    const sub = formData.subEvents.find(s => s.id === selectedModuleId);
    if (!sub) return null;

    return (
      <div className="space-y-8 animate-in slide-in-from-right-4 duration-300 pb-12">
        <button 
          onClick={() => setSelectedModuleId(null)}
          className="text-[#34D562] hover:text-green-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 transition-colors bg-[#34D562]/10 px-4 py-2 rounded-lg"
        >
          <ArrowRight className="rotate-180" size={14} /> Back to Gallery
        </button>

        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">3. Module Details Preview</h3>
          <h2 className="text-2xl font-black text-white italic tracking-tight leading-tight mb-2 uppercase">{sub.title}</h2>
          {sub.date && (
              <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-[#34D562]" />
                  <span className="text-[#34D562] font-semibold text-sm italic">{sub.date}</span>
              </div>
          )}
          <p className="text-gray-300 bg-white/[0.02] p-5 rounded-xl border border-white/5 leading-relaxed text-sm">{sub.summary}</p>
        </div>

        {sub.images.length > 0 && (
            <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-[#34D562]" /> Gallery / Slideshow
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                    {sub.images.map((img, i) => (
                        <img key={i} src={img} alt={`Slide ${i}`} className="w-48 h-32 object-cover rounded-xl border border-white/10 shrink-0 shadow-lg" />
                    ))}
                </div>
            </div>
        )}

        {sub.sessions.length > 0 && (
            <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-[#34D562]" /> Learning Outcomes
                </h4>
                <div className="grid grid-cols-1 gap-3">
                    {sub.sessions.map((session, idx) => (
                        <div key={session.id} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex gap-4 items-start hover:border-[#34D562]/30 transition-colors">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34D562]/10 flex items-center justify-center text-[#34D562] font-bold text-sm shadow-[0_0_10px_rgba(52,213,98,0.2)]">
                                {idx + 1}
                            </span>
                            <div>
                                <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-tight">{session.title}</h5>
                                <p className="text-gray-400 text-sm leading-relaxed">{session.learningOutcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-[#030303] text-white p-6 md:p-8 custom-scrollbar font-sans relative">
      {/* Mini "Preview" Badge */}
      <div className="absolute top-4 right-4 bg-[#34D562] text-black text-[10px] font-black tracking-widest px-3 py-1.5 rounded-sm uppercase z-50 shadow-[0_0_10px_rgba(52,213,98,0.5)] flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        Live Preview
      </div>

      <div className="max-w-3xl mx-auto pt-4">
        {activeTab === 'basic' && renderBasicPreview()}
        {activeTab === 'modules' && !selectedModuleId && renderGalleryPreview()}
        {activeTab === 'modules' && selectedModuleId && renderModuleDetailPreview()}
      </div>
    </div>
  );
};

export default EventLivePreview;

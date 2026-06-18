import React, { useState, useEffect } from 'react';
import { EventDataForm } from '../../adminTypes';
import { Calendar, MapPin, Eye, BookOpen, ArrowRight } from 'lucide-react';

interface EventLivePreviewProps {
  formData: EventDataForm;
  activeTab?: 'basic' | 'gallery' | 'details';
}

const EventLivePreview: React.FC<EventLivePreviewProps> = ({ formData, activeTab = 'basic' }) => {
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  // Auto-advance slideshow for Program Details
  useEffect(() => {
    if (formData.programImages.length <= 1) return;
    const timer = setInterval(() => {
      setSlideshowIndex(prev => (prev + 1) % formData.programImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [formData.programImages.length]);

  useEffect(() => {
    setSlideshowIndex(0);
  }, [formData.programImages.length]);

  const visibleOutcomesCount = formData.programImages.length >= 6 ? 6 : 4;

  // Get the single card data
  const cardData = formData.subEvents[0] || { title: '', date: '' };

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

  // ── Gallery Preview — EXACT PM-UShA card style ──
  const renderGalleryPreview = () => {
    return (
      <div className="animate-in fade-in zoom-in-95 duration-300 h-full flex flex-col pb-8">
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 shrink-0">2. Event Gallery Preview</h3>
        
        {/* Single Centered Card — exact PM-UShA style */}
        <div className="flex-1 flex items-center justify-center min-h-[450px]">
          <div 
            className="group relative cursor-pointer aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0a0a0a]"
            style={{ width: '100%', maxWidth: '380px' }}
          >
            {/* Dynamic Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#34D562]/20 via-transparent to-[#34D562]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[2s]">
              {cardData.images && cardData.images.length > 0 ? (
                <img
                  src={cardData.images[0]}
                  alt={cardData.title || 'Card'}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
              ) : formData.cardImage ? (
                <img
                  src={formData.cardImage}
                  alt={cardData.title || 'Card'}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
              ) : (
                <div className="w-full h-full bg-[#111] flex items-center justify-center text-gray-700 font-bold uppercase text-xs">
                  Upload an image
                </div>
              )}
              {/* Mirror-like Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
            </div>

            {/* Floating Content Layer */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between items-start">
              {/* Top Pill Badge — Event Type + Date */}
              <div className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#34D562] animate-pulse" />
                  <span className="text-white/80 text-[10px] font-black tracking-widest uppercase">{formData.eventType}</span>
                </div>
                <span className="text-[#34D562] text-[9px] font-bold tracking-tighter uppercase italic">
                  {cardData.date || 'DATE TBD'}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="w-full mt-auto">
                {/* Title — variable white text */}
                <h3 className="text-base md:text-lg font-black text-white leading-tight tracking-tight uppercase italic mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,1)] group-hover:text-[#34D562] transition-colors duration-500 line-clamp-3 min-h-[3.3em]">
                  {cardData.title || 'Card Title Text'}
                </h3>

                {/* VIEW PROGRAM DETAILS button — single line */}
                <div className="relative group/btn w-full">
                  <div className="absolute -inset-1 bg-[#34D562]/40 rounded-xl blur-md opacity-20 group-hover:opacity-100 transition duration-500" />
                  <button className="relative w-full py-3.5 bg-gradient-to-r from-[#34D562] to-[#2eb554] text-black rounded-xl font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_25px_rgba(52,213,98,0.5)] group-hover:scale-[1.03] whitespace-nowrap">
                    View Program Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Outer Glass Frame */}
            <div className="absolute inset-0 border-[3px] border-white/5 rounded-[2.5rem] group-hover:border-[#34D562]/30 transition-colors duration-500 pointer-events-none z-20" />
          </div>
        </div>
      </div>
    );
  };

  // ── Program Details Preview — PM-UShA detail page style ──
  const renderProgramDetailsPreview = () => {
    const hasImages = formData.programImages.length > 0;
    const currentImage = hasImages ? formData.programImages[slideshowIndex % formData.programImages.length] : null;

    return (
      <div className="space-y-10 animate-in fade-in duration-300 pb-12">
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">3. Program Details Preview</h3>

        {/* ── Hero Section with Event Type Badge, Title, Date, Location ── */}
        <div>
          {/* Event Type Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-[#34D562]/10 text-[#34D562] text-[10px] font-semibold rounded-full border border-[#34D562]/20 tracking-wider">
              {formData.eventType}
            </span>
          </div>
          
          {/* Event Title */}
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight uppercase mb-4">
            {cardData.title || formData.title || 'Event Title'}
          </h2>

          {/* Date (mapped from Page 2) + Location */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#34D562]" />
              {cardData.date || 'Date TBD'}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#34D562]" />
              {formData.location || formData.venue || 'Location TBD'}
            </span>
          </div>
        </div>

        {/* ── Image Slideshow ── */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-[#050505]">
          {currentImage ? (
            <>
              <img 
                key={slideshowIndex}
                src={currentImage} 
                alt="Event" 
                className="w-full h-full object-cover opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
              
              {/* Event Highlights badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#34D562] shadow-[0_0_15px_rgba(52,213,98,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span className="text-black text-[9px] font-black uppercase tracking-tighter italic">Event Highlights</span>
                </div>
              </div>

              {/* Pagination Dots */}
              {formData.programImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {formData.programImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 transition-all duration-500 rounded-full ${idx === slideshowIndex % formData.programImages.length ? 'w-8 bg-[#34D562] shadow-[0_0_10px_rgba(52,213,98,0.5)]' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-700 flex-col gap-2">
              <Eye className="w-6 h-6" />
              <span className="text-xs uppercase font-bold">Upload images to preview</span>
            </div>
          )}
        </div>

        {/* ── Event Module Section ── */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#34D562]/10 border border-[#34D562]/20 flex items-center justify-center text-[#34D562] font-bold text-xs">1</span>
            <span className="text-[#34D562]/60 text-xs font-semibold uppercase tracking-[0.2em]">Event Module</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
            {formData.eventModuleTitle || 'Module Title'}
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#34D562] via-[#34D562]/40 to-transparent" />
            <p className="pl-5 text-gray-400 leading-relaxed text-sm">
              {formData.eventModuleSummary || 'Module summary will appear here...'}
            </p>
          </div>
        </div>

        {/* ── Event Gallery (2-column grid) ── */}
        {hasImages && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-4 h-4 text-[#34D562]" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Event Gallery</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {formData.programImages.slice(0, 4).map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Event Outcomes ── */}
        {formData.eventOutcomes.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#34D562]" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Event Outcomes</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {formData.eventOutcomes.slice(0, visibleOutcomesCount).map((outcome, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-[#34D562]/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#34D562]/10 flex items-center justify-center text-[#34D562] font-bold text-xs shadow-[0_0_10px_rgba(52,213,98,0.2)]">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="text-white font-bold text-sm mb-1">{outcome.title}</h5>
                      <p className="text-gray-500 text-xs leading-relaxed">{outcome.description}</p>
                    </div>
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

      <div className={`max-w-3xl mx-auto pt-4 ${activeTab === 'gallery' ? 'h-full flex flex-col' : ''}`}>
        {activeTab === 'basic' && renderBasicPreview()}
        {activeTab === 'gallery' && renderGalleryPreview()}
        {activeTab === 'details' && renderProgramDetailsPreview()}
      </div>
    </div>
  );
};

export default EventLivePreview;

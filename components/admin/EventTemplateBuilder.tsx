import React, { useState, useEffect } from 'react';
import { EventDataForm, SubEventForm, EventSessionForm, EventType, EventOutcome } from '../../adminTypes';
import { PlusCircle, Trash2, Image as ImageIcon, Copy, Check, AlertTriangle } from 'lucide-react';
import EventLivePreview from './EventLivePreview';

const EVENT_TYPES: EventType[] = [
  'Monthly Hackathons',
  'Monthly Marathons',
  'Monthly Test',
  'Monthly Workshops',
  'Industry Expert Session',
  'Monthly Seminar'
];

const generateId = (prefix: string) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

const DEFAULT_IMAGE = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmG9PCVL9JsNJDh5kVFrBSUFwyPWSbURNW1qFl8Y4GLr7oBE9Z8Zum6BHx0X9L1-cgFZu_r2iohH9zAr-u11ShUmRfEL9hyI_FCc7QCHoMhEGR3pE4u6A5_4J9c3oHIRfd9impTKKlEd8o=s1360-w1360-h1020-rw";

// ── Pre-defined Event Module text per event type ──
const getEventModuleDefaults = (eventType: EventType): { title: string; summary: string } => {
  switch (eventType) {
    case 'Monthly Hackathons':
      return { title: 'Hackathon & Innovation Sprint', summary: 'Building innovative solutions through code, collaboration, and creative problem solving.' };
    case 'Monthly Marathons':
      return { title: 'Coding Marathon Challenge', summary: 'A rigorous marathon testing endurance, strategy, and problem-solving under time constraints.' };
    case 'Monthly Test':
      return { title: 'Assessment & Evaluation', summary: 'Comprehensive testing of technical knowledge and analytical thinking across key domains.' };
    case 'Monthly Workshops':
      return { title: 'Hands-on Workshop Training', summary: 'Practical skill-building sessions bridging theory to real-world application.' };
    case 'Industry Expert Session':
      return { title: 'Industry Expert Interaction', summary: 'Direct engagement with industry leaders sharing real-world insights and career guidance.' };
    case 'Monthly Seminar':
      return { title: 'Research & Academic Seminar', summary: 'Deep-dive academic discussions exploring recent research findings and future directions.' };
    default:
      return { title: '', summary: '' };
  }
};

// ── Pre-defined 6 Event Outcomes per event type ──
const getEventOutcomeDefaults = (eventType: EventType): EventOutcome[] => {
  switch (eventType) {
    case 'Monthly Hackathons':
      return [
        { title: 'Innovation Mindset', description: 'Develop creative approaches to technical challenges' },
        { title: 'Team Collaboration', description: 'Build effective cross-functional teamwork skills' },
        { title: 'Rapid Prototyping', description: 'Learn to build functional MVPs under time pressure' },
        { title: 'Technical Mentorship', description: 'Receive guidance from industry experts' },
        { title: 'Presentation Skills', description: 'Master pitching ideas to technical judges' },
        { title: 'Problem Decomposition', description: 'Break complex problems into solvable components' },
      ];
    case 'Monthly Marathons':
      return [
        { title: 'Strategic Planning', description: 'Develop long-term approaches to complex problems' },
        { title: 'Code Endurance', description: 'Build stamina for extended coding sessions' },
        { title: 'Algorithm Mastery', description: 'Strengthen core DSA skills under pressure' },
        { title: 'Time Management', description: 'Optimize solution delivery within constraints' },
        { title: 'Debugging Skills', description: 'Quickly identify and resolve issues' },
        { title: 'Competitive Thinking', description: 'Sharpen analytical edge against peers' },
      ];
    case 'Monthly Test':
      return [
        { title: 'Knowledge Assessment', description: 'Evaluate understanding of core concepts' },
        { title: 'Analytical Thinking', description: 'Test logical reasoning and problem-solving' },
        { title: 'Conceptual Clarity', description: 'Validate foundational understanding' },
        { title: 'Performance Tracking', description: 'Monitor growth over time' },
        { title: 'Exam Readiness', description: 'Prepare for competitive evaluations' },
        { title: 'Self Evaluation', description: 'Identify personal strengths and areas for improvement' },
      ];
    case 'Monthly Workshops':
      return [
        { title: 'Core Fundamentals', description: 'Understand foundational principles of the topic' },
        { title: 'Practical Application', description: 'Apply theory to real-world scenarios' },
        { title: 'Hands-on Experience', description: 'Build projects with guided mentorship' },
        { title: 'Tool Proficiency', description: 'Master industry-standard tools and frameworks' },
        { title: 'Peer Learning', description: 'Collaborate and learn from fellow participants' },
        { title: 'Portfolio Building', description: 'Create showcase-worthy projects' },
      ];
    case 'Industry Expert Session':
      return [
        { title: 'Industry Trends', description: 'Learn about the latest trends and technologies' },
        { title: 'Career Guidance', description: 'Get insights into industry career paths' },
        { title: 'Real-world Insights', description: 'Understand practical industry challenges' },
        { title: 'Networking Opportunities', description: 'Connect with experienced professionals' },
        { title: 'Technical Deep-dive', description: 'Explore advanced topics with experts' },
        { title: 'Q&A Interaction', description: 'Get answers to specific career and technical questions' },
      ];
    case 'Monthly Seminar':
      return [
        { title: 'Academic Insights', description: 'Explore recent research and findings' },
        { title: 'Diverse Perspectives', description: 'Understand different viewpoints on complex issues' },
        { title: 'Research Methodology', description: 'Learn effective research approaches' },
        { title: 'Critical Thinking', description: 'Develop analytical evaluation skills' },
        { title: 'Knowledge Sharing', description: 'Exchange ideas with peers and mentors' },
        { title: 'Publication Awareness', description: 'Understand academic publishing landscape' },
      ];
    default:
      return [];
  }
};

const enforceConstants = (data: Partial<EventDataForm>, isTypeChange: boolean = false): EventDataForm => {
  const currentType = data.eventType || 'Monthly Hackathons';
  const moduleDefaults = getEventModuleDefaults(currentType);
  const outcomeDefaults = getEventOutcomeDefaults(currentType);
  
  // For the gallery card, we always have exactly 1 subEvent
  const existingSub = data.subEvents && data.subEvents.length > 0 ? data.subEvents[0] : null;
  const singleModule: SubEventForm = {
    id: existingSub?.id || generateId('module'),
    title: isTypeChange ? '' : (existingSub?.title || ''),
    date: isTypeChange ? '' : (existingSub?.date || ''),
    duration: '',
    summary: '',
    sessions: [],
    images: [],
  };

  return {
    ...(data as EventDataForm),
    tag: 'Monthly Events',
    date: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    venue: 'Multiple Colleges',
    location: data.location || 'Multiple Colleges',
    organizedBy: 'Geeks of Gurukul',
    cardImage: data.cardImage || DEFAULT_IMAGE,
    isActive: true,
    shortDescription: 'Join us for our exciting monthly event series across multiple colleges.',
    subEvents: [singleModule],
    trainers: [],
    programImages: isTypeChange ? [] : (data.programImages || []),
    eventModuleTitle: isTypeChange ? moduleDefaults.title : (data.eventModuleTitle || moduleDefaults.title),
    eventModuleSummary: isTypeChange ? moduleDefaults.summary : (data.eventModuleSummary || moduleDefaults.summary),
    eventOutcomes: isTypeChange ? outcomeDefaults : (data.eventOutcomes && data.eventOutcomes.length > 0 ? data.eventOutcomes : outcomeDefaults),
  };
};

const initialFormState: EventDataForm = enforceConstants({
  id: '',
  title: 'Monthly Hackathons',
  eventType: 'Monthly Hackathons',
  tagline: '',
  inAssociationWith: '',
  trainers: [],
  subEvents: [],
  programImages: [],
  eventModuleTitle: '',
  eventModuleSummary: '',
  eventOutcomes: [],
  location: '',
}, true);

const EventTemplateBuilder: React.FC = () => {
  const [formData, setFormData] = useState<EventDataForm>(initialFormState);
  const [activeTab, setActiveTab] = useState<'basic' | 'gallery' | 'details'>('basic');
  const [copied, setCopied] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gog_event_draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(enforceConstants(parsed));
      } catch (e) {
        console.error('Failed to parse saved draft');
      }
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => {
      localStorage.setItem('gog_event_draft', JSON.stringify(formData));
      setSaveStatus('saved');
    }, 500);
    return () => clearTimeout(timer);
  }, [formData]);

  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as EventType;
    setFormData(prev => enforceConstants({ 
      ...prev, 
      eventType: newType,
      title: newType
    }, true));
  };

  // --- Gallery Card helpers (single card) ---
  const updateCardField = (field: 'title' | 'date', value: string) => {
    setFormData(prev => ({
      ...prev,
      subEvents: prev.subEvents.map((s, i) => i === 0 ? { ...s, [field]: value } : s)
    }));
  };

  const handleCardImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          subEvents: prev.subEvents.map((s, i) => i === 0 ? { ...s, images: [reader.result as string] } : s)
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Program Details Images ---
  const handleProgramImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            programImages: [...prev.programImages, reader.result as string]
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeProgramImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      programImages: prev.programImages.filter((_, i) => i !== index)
    }));
  };

  // --- Event Outcomes ---
  const updateOutcome = (index: number, field: keyof EventOutcome, value: string) => {
    setFormData(prev => ({
      ...prev,
      eventOutcomes: prev.eventOutcomes.map((o, i) => i === index ? { ...o, [field]: value } : o)
    }));
  };

  const generateJSON = () => {
    const exportData = {
      ...formData,
      id: formData.id || generateId('event'),
      tag: formData.eventType === 'Monthly Workshops' ? 'Workshop' : 
           formData.eventType === 'Monthly Hackathons' ? 'Hackathon' : 
           formData.eventType === 'Monthly Seminar' ? 'Seminar' : 'Session',
    };
    return JSON.stringify(exportData, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateJSON());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // ── Compute visible outcomes count based on image count ──
  const visibleOutcomesCount = formData.programImages.length >= 6 ? 6 : 4;
  const imageValidation = {
    hasMinImages: formData.programImages.length >= 4,
    isMultipleOf2: formData.programImages.length % 2 === 0,
    isValid: formData.programImages.length >= 4 && formData.programImages.length % 2 === 0,
  };

  // Get the single card data
  const cardData = formData.subEvents[0] || { title: '', date: '', images: [] };

  const renderBasicTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
        <label className="block text-sm font-medium text-gray-300 mb-3">Select Event Type</label>
        <select
          value={formData.eventType}
          onChange={handleEventTypeChange}
          className="w-full bg-black border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:border-[#34D562] text-lg font-semibold"
        >
          {EVENT_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">Main Preview Image</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors border border-gray-700 flex items-center gap-2">
              <ImageIcon size={18} /> Upload Image
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, (url) => setFormData(prev => ({...prev, cardImage: url})))} />
            </label>
            {formData.cardImage && formData.cardImage !== DEFAULT_IMAGE && <span className="text-sm text-[#34D562]">Custom Image selected ✓</span>}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Auto-Configured Settings</h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <div><span className="text-gray-500">Title:</span> {formData.title}</div>
            <div><span className="text-gray-500">Date:</span> {formData.date}</div>
            <div><span className="text-gray-500">Venue:</span> {formData.venue}</div>
            <div><span className="text-gray-500">Tag:</span> {formData.tag}</div>
            <div><span className="text-gray-500">Status:</span> Active Programme</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ── Page 2: Event Gallery — Only 3 variables: Date, Title, Card Image ──
  const renderGalleryTab = () => (
    <div className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">Event Gallery Card</h3>
        <p className="text-xs text-gray-500">Design one card at a time. Only the date, title text, and card image are editable.</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="bg-black/50 p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#34D562]/20 text-[#34D562] flex items-center justify-center font-bold text-sm">
              1
            </span>
            <span className="text-sm font-semibold text-white">Card Configuration</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* 1. Date */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">Date</label>
            <input
              type="text"
              value={cardData.date}
              onChange={(e) => updateCardField('date', e.target.value)}
              placeholder="e.g. 3-7 FEBRUARY 2026"
              className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#34D562]"
            />
          </div>

          {/* 2. Title (white text on card) */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">Card Title Text</label>
            <textarea
              value={cardData.title}
              onChange={(e) => updateCardField('title', e.target.value)}
              rows={2}
              placeholder="e.g. APPLICATION OF ARTIFICIAL INTELLIGENCE IN ENVIRONMENTAL SCIENCE"
              className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#34D562] text-sm"
            />
          </div>

          {/* 3. Card Image */}
          <div className="items-center justify-center ">
            <label className="block text-xs font-medium text-gray-400 mb-2">Gallery Card Image</label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg transition-colors border border-gray-700 flex items-center gap-2 text-sm">
                <ImageIcon size={18} /> Upload Image
                <input type="file" accept="image/*" className="hidden" onChange={handleCardImageUpload} />
              </label>
              {cardData.images && cardData.images[0] && (
                <span className="text-sm text-[#34D562]">Custom image ✓</span>
              )}
            </div>
            {cardData.images && cardData.images[0] && (
              <div className="mt-3 w-32 h-32 rounded-lg overflow-hidden border border-gray-700">
                <img src={cardData.images[0]} alt="Card" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Constants info */}
      {/* <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-800/50">
        <h4 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Auto-configured (from Page 1)</h4>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
          <div><span className="text-gray-600">Event Type:</span> {formData.eventType}</div>
          <div><span className="text-gray-600">Tag:</span> PM-UShA</div>
          <div><span className="text-gray-600">Button:</span> VIEW PROGRAM DETAILS →</div>
          <div><span className="text-gray-600">Status:</span> Active</div>
        </div>
      </div> */}
    </div>
  );

  // ── Page 3: Program Details ──
  const renderDetailsTab = () => (
    <div className="space-y-8">
      {/* Location */}
      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
        <label className="block text-sm font-medium text-gray-300 mb-2">Event Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          placeholder="e.g. IIIT Bhopal"
          className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#34D562]"
        />
        {/* Show mapped date from Page 2 */}
        <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
          <p className="text-xs text-gray-500">
            <span className="text-gray-400 font-medium">Date:</span> {cardData.date || 'Not set'} 
            <span className="text-gray-600 ml-2">(mapped from Page 2)</span>
          </p>
        </div>
      </div>

      {/* Program Images Upload */}
      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Program Images</h3>
            <p className="text-xs text-gray-500">Minimum 4 images required, must be in multiples of 2</p>
          </div>
          <label className="cursor-pointer flex items-center gap-2 bg-[#34D562] hover:bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors">
            <PlusCircle size={16} /> Add Images
            <input type="file" accept="image/*" multiple className="hidden" onChange={handleProgramImagesUpload} />
          </label>
        </div>

        {/* Validation Messages */}
        {formData.programImages.length > 0 && !imageValidation.isValid && (
          <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center gap-2">
            <AlertTriangle size={16} className="text-yellow-500 shrink-0" />
            <span className="text-yellow-500 text-xs">
              {!imageValidation.hasMinImages && `Minimum 4 images required (currently ${formData.programImages.length}). `}
              {!imageValidation.isMultipleOf2 && `Images must be in multiples of 2 (currently ${formData.programImages.length}).`}
            </span>
          </div>
        )}

        {formData.programImages.length > 0 && imageValidation.isValid && (
          <div className="mb-4 p-3 rounded-lg bg-[#34D562]/10 border border-[#34D562]/30 flex items-center gap-2">
            <Check size={16} className="text-[#34D562] shrink-0" />
            <span className="text-[#34D562] text-xs">
              {formData.programImages.length} images uploaded ✓ — Showing {visibleOutcomesCount} outcomes
            </span>
          </div>
        )}

        {formData.programImages.length > 0 ? (
          <div className="grid grid-cols-4 gap-3">
            {formData.programImages.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-gray-700 group">
                <img src={img} alt={`Program ${i}`} className="w-full h-full object-cover" />
                <button 
                  onClick={() => removeProgramImage(i)}
                  className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={12} />
                </button>
                <div className="absolute bottom-1 left-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-32 border border-gray-800 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-600 text-xs gap-2">
            <ImageIcon size={24} className="text-gray-700" />
            No images uploaded yet
          </div>
        )}
      </div>

      {/* Event Module */}
      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-[#34D562]/20 text-[#34D562] flex items-center justify-center text-xs font-bold">1</span>
          Event Module
          <span className="text-[8px] text-gray-500 bg-gray-800 px-2 py-0.5 rounded uppercase tracking-wider">Auto-set from Event Type</span>
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Module Title</label>
            <input
              type="text"
              value={formData.eventModuleTitle}
              onChange={(e) => setFormData(prev => ({ ...prev, eventModuleTitle: e.target.value }))}
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-[#34D562]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Module Summary</label>
            <textarea
              value={formData.eventModuleSummary}
              onChange={(e) => setFormData(prev => ({ ...prev, eventModuleSummary: e.target.value }))}
              rows={2}
              className="w-full bg-black border border-gray-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#34D562]"
            />
          </div>
        </div>
      </div>

      {/* Event Outcomes */}
      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
        <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
          Event Outcomes
          <span className="text-[8px] text-gray-500 bg-gray-800 px-2 py-0.5 rounded uppercase tracking-wider">Auto-set from Event Type</span>
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Showing {visibleOutcomesCount} of 6 outcomes (based on {formData.programImages.length} images uploaded)
        </p>
        
        <div className="space-y-3">
          {formData.eventOutcomes.slice(0, visibleOutcomesCount).map((outcome, idx) => (
            <div key={idx} className="flex gap-3 items-start bg-black/40 p-3 rounded-lg border border-gray-800">
              <div className="w-6 h-6 rounded-full bg-[#34D562]/20 text-[#34D562] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={outcome.title}
                  onChange={(e) => updateOutcome(idx, 'title', e.target.value)}
                  className="w-full bg-transparent border-b border-gray-700 hover:border-gray-500 focus:border-[#34D562] text-sm text-white font-semibold px-1 py-1 outline-none transition-colors"
                />
                <input
                  type="text"
                  value={outcome.description}
                  onChange={(e) => updateOutcome(idx, 'description', e.target.value)}
                  className="w-full bg-transparent border-b border-gray-700 hover:border-gray-500 focus:border-[#34D562] text-xs text-gray-400 px-1 py-1 outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>

        {visibleOutcomesCount < 6 && (
          <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700 border-dashed">
            <p className="text-xs text-gray-500 text-center">
              Add {6 - formData.programImages.length} more images to unlock remaining {6 - visibleOutcomesCount} outcomes
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="h-16 border-b border-gray-800 bg-[#030303] flex items-center justify-between px-6 shrink-0 relative z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34D562] to-green-400">
            Event Template Builder
          </h1>
          <span className="text-xs font-bold px-2 py-1 bg-[#34D562]/10 text-[#34D562] rounded border border-[#34D562]/20 uppercase tracking-widest ml-2">
            Admin
          </span>
        </div>
      </header>

      <div className="flex-1 overflow-hidden flex flex-row">
        {/* Left Pane: Form */}
        <div className="w-1/2 flex flex-col border-r border-gray-800 bg-[#050505]">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-800 px-6 pt-4 gap-6 bg-[#030303] shrink-0">
            <button 
              onClick={() => setActiveTab('basic')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'basic' ? 'border-[#34D562] text-[#34D562]' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
            >
              1. Basic Info
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'gallery' ? 'border-[#34D562] text-[#34D562]' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
            >
              2. Event Gallery
            </button>
            <button 
              onClick={() => setActiveTab('details')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'details' ? 'border-[#34D562] text-[#34D562]' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
            >
              3. Program Details
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <div className="max-w-2xl mx-auto">
              {activeTab === 'basic' && renderBasicTab()}
              {activeTab === 'gallery' && renderGalleryTab()}
              {activeTab === 'details' && renderDetailsTab()}
              
              {/* Export JSON Section */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Export Data</h3>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs ${saveStatus === 'saved' ? 'text-green-500' : 'text-gray-400'}`}>
                      {saveStatus === 'saved' ? '✓ Saved to browser' : 'Saving...'}
                    </span>
                    <button 
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 bg-[#34D562] hover:bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'Copied!' : 'Copy JSON'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane: Live Preview */}
        <div className="w-1/2 flex flex-col bg-[#030303]">
          <EventLivePreview formData={formData} activeTab={activeTab} />
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}
      </style>
    </div>
  );
};

export default EventTemplateBuilder;

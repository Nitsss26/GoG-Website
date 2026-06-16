import React, { useState, useEffect } from 'react';
import { EventDataForm, SubEventForm, TrainerForm, EventSessionForm, EventType } from '../../adminTypes';
import { PlusCircle, Trash2, Image as ImageIcon, Copy, Check, Save } from 'lucide-react';
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

const getStandardModules = (eventType: EventType): SubEventForm[] => {
  const generateOutcome = (title: string, desc: string): EventSessionForm => ({
    id: generateId('session'), title, learningOutcome: desc
  });

  const generateModule = (title: string, summary: string, outcomes: EventSessionForm[]): SubEventForm => ({
    id: generateId('module'), title, summary, date: '', duration: '', images: [], sessions: outcomes
  });

  switch(eventType) {
    case 'Monthly Hackathons':
      return [
        generateModule('Ideation & Teambuilding', 'Form teams and brainstorm innovative solutions.', [
          generateOutcome('Brainstorming', 'Learn effective ideation techniques.'),
          generateOutcome('Team Formation', 'Collaborate with peers to form complementary teams.')
        ]),
        generateModule('Development & Prototyping', 'Build the core functionality of your project.', [
          generateOutcome('MVP Creation', 'Focus on building a minimum viable product.'),
          generateOutcome('Technical Mentorship', 'Receive guidance from industry experts.')
        ]),
        generateModule('Pitching & Judging', 'Present your solution to the judges.', [
          generateOutcome('Presentation Skills', 'Learn how to pitch a product effectively.')
        ])
      ];
    case 'Monthly Marathons':
      return [
        generateModule('Preparation & Strategy', 'Plan your approach for the marathon.', [
          generateOutcome('Strategic Planning', 'Develop a long-term strategy for success.')
        ]),
        generateModule('Execution Phase', 'The main marathon event.', [
          generateOutcome('Endurance', 'Test your perseverance and problem-solving skills.')
        ])
      ];
    case 'Monthly Test':
      return [
        generateModule('Assessment Phase', 'Core testing module.', [
          generateOutcome('Knowledge Evaluation', 'Assess understanding of key concepts.')
        ])
      ];
    case 'Monthly Workshops':
      return [
        generateModule('Introduction to Concepts', 'Foundation laying session.', [
          generateOutcome('Core Fundamentals', 'Understand the basic principles of the topic.')
        ]),
        generateModule('Hands-on Practice', 'Practical application of learned concepts.', [
          generateOutcome('Practical Application', 'Apply theory to real-world scenarios.')
        ])
      ];
    case 'Industry Expert Session':
      return [
        generateModule('Keynote Speech', 'Insights from industry leaders.', [
          generateOutcome('Industry Trends', 'Learn about the latest trends and technologies.')
        ]),
        generateModule('Q&A Session', 'Interactive discussion with the expert.', [
          generateOutcome('Direct Interaction', 'Get answers to specific career and technical questions.')
        ])
      ];
    case 'Monthly Seminar':
      return [
        generateModule('Research Presentation', 'In-depth analysis of specific topics.', [
          generateOutcome('Academic Insights', 'Explore recent research and findings.')
        ]),
        generateModule('Panel Discussion', 'Debate and discussion among experts.', [
          generateOutcome('Diverse Perspectives', 'Understand different viewpoints on complex issues.')
        ])
      ];
    default:
      return [];
  }
};

const enforceConstants = (data: Partial<EventDataForm>, isTypeChange: boolean = false): EventDataForm => {
  const currentType = data.eventType || 'Monthly Hackathons';
  return {
    ...(data as EventDataForm),
    tag: 'Monthly Events',
    date: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    venue: 'Multiple Colleges',
    organizedBy: 'Geeks of Gurukul',
    cardImage: data.cardImage || DEFAULT_IMAGE,
    isActive: true,
    shortDescription: 'Join us for our exciting monthly event series across multiple colleges.',
    subEvents: isTypeChange || !data.subEvents || data.subEvents.length === 0 ? getStandardModules(currentType) : data.subEvents,
    trainers: [] // Trainers are removed
  };
};

const initialFormState: EventDataForm = enforceConstants({
  id: '',
  title: 'Monthly Hackathons',
  eventType: 'Monthly Hackathons',
  tagline: '',
  inAssociationWith: '',
  trainers: [],
  subEvents: []
}, true);

const EventTemplateBuilder: React.FC = () => {
  const [formData, setFormData] = useState<EventDataForm>(initialFormState);
  const [activeTab, setActiveTab] = useState<'basic' | 'modules'>('basic');
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
    }, 500); // debounce save
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

  // --- SubEvents (Modules) ---
  const addSubEvent = () => {
    const newSubEvent: SubEventForm = {
      id: generateId('module'),
      title: '',
      date: '',
      duration: '',
      summary: '',
      sessions: [],
      images: []
    };
    setFormData(prev => ({ ...prev, subEvents: [...prev.subEvents, newSubEvent] }));
  };

  const removeSubEvent = (id: string) => {
    setFormData(prev => ({ ...prev, subEvents: prev.subEvents.filter(s => s.id !== id) }));
  };

  const updateSubEvent = (id: string, field: keyof SubEventForm, value: any) => {
    setFormData(prev => ({
      ...prev,
      subEvents: prev.subEvents.map(s => s.id === id ? { ...s, [field]: value } : s)
    }));
  };

  // --- Sessions (Outcomes) inside SubEvent ---
  const addSession = (subEventId: string) => {
    const newSession: EventSessionForm = { id: generateId('session'), title: '', learningOutcome: '' };
    setFormData(prev => ({
      ...prev,
      subEvents: prev.subEvents.map(s => {
        if (s.id === subEventId) {
          return { ...s, sessions: [...s.sessions, newSession] };
        }
        return s;
      })
    }));
  };

  const removeSession = (subEventId: string, sessionId: string) => {
    setFormData(prev => ({
      ...prev,
      subEvents: prev.subEvents.map(s => {
        if (s.id === subEventId) {
          return { ...s, sessions: s.sessions.filter(ses => ses.id !== sessionId) };
        }
        return s;
      })
    }));
  };

  const updateSession = (subEventId: string, sessionId: string, field: keyof EventSessionForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      subEvents: prev.subEvents.map(s => {
        if (s.id === subEventId) {
          return {
            ...s,
            sessions: s.sessions.map(ses => ses.id === sessionId ? { ...ses, [field]: value } : ses)
          };
        }
        return s;
      })
    }));
  };

  // --- Module Images ---
  const handleMultipleImagesUpload = (e: React.ChangeEvent<HTMLInputElement>, subEventId: string) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            subEvents: prev.subEvents.map(s => {
              if (s.id === subEventId) {
                return { ...s, images: [...s.images, reader.result as string] };
              }
              return s;
            })
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeModuleImage = (subEventId: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      subEvents: prev.subEvents.map(s => {
        if (s.id === subEventId) {
          const newImages = [...s.images];
          newImages.splice(index, 1);
          return { ...s, images: newImages };
        }
        return s;
      })
    }));
  };

  const generateJSON = () => {
    // Generate a clean JSON without the temporary IDs if needed, but keeping them is fine for the app.
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



  const renderModulesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Nested Modules (Sub-Events)</h3>
        <button onClick={addSubEvent} className="flex items-center gap-2 bg-[#34D562] hover:bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors">
          <PlusCircle size={16} /> Add Module
        </button>
      </div>

      {formData.subEvents.length === 0 ? (
        <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800 border-dashed">
          <p className="text-gray-500">No modules added yet. Add a module to create nested events like workshops or sessions.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {formData.subEvents.map((sub, index) => (
            <div key={sub.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              {/* Module Header */}
              <div className="bg-black/50 p-4 border-b border-gray-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#34D562]/20 text-[#34D562] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <input
                    type="text"
                    value={sub.title}
                    onChange={(e) => updateSubEvent(sub.id, 'title', e.target.value)}
                    placeholder="Module Title (e.g. Blockchain & Fintech Innovation)"
                    className="bg-transparent border-b border-transparent hover:border-gray-700 focus:border-[#34D562] text-lg font-semibold text-white px-1 py-1 outline-none w-64 md:w-96 transition-colors"
                  />
                </div>
                <button onClick={() => removeSubEvent(sub.id)} className="text-red-500 hover:text-red-400 p-2 rounded hover:bg-red-500/10 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Module Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Date</label>
                    <input
                      type="text"
                      value={sub.date}
                      onChange={(e) => updateSubEvent(sub.id, 'date', e.target.value)}
                      placeholder="e.g. 5th Feb 2026"
                      className="w-full bg-black border border-gray-800 rounded p-2 text-sm text-white focus:outline-none focus:border-[#34D562]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Summary</label>
                    <textarea
                      value={sub.summary}
                      onChange={(e) => updateSubEvent(sub.id, 'summary', e.target.value)}
                      rows={1}
                      placeholder="Brief overview of this module..."
                      className="w-full bg-black border border-gray-800 rounded p-2 text-sm text-white focus:outline-none focus:border-[#34D562]"
                    />
                  </div>
                </div>

                {/* Gallery Upload */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-medium text-gray-400">Gallery Images (Slideshow)</label>
                    <label className="cursor-pointer text-xs text-[#34D562] hover:text-green-400 flex items-center gap-1">
                      <PlusCircle size={14} /> Add Images
                      <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleMultipleImagesUpload(e, sub.id)} />
                    </label>
                  </div>
                  
                  {sub.images.length > 0 ? (
                    <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                      {sub.images.map((img, i) => (
                        <div key={i} className="relative w-32 h-20 rounded-lg overflow-hidden shrink-0 border border-gray-700 group">
                          <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                          <button 
                            onClick={() => removeModuleImage(sub.id, i)}
                            className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-20 border border-gray-800 border-dashed rounded-lg flex items-center justify-center text-gray-600 text-xs">
                      No images added
                    </div>
                  )}
                </div>

                {/* Sessions / Outcomes */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-medium text-gray-400">Sessions / Outcomes</label>
                    <button onClick={() => addSession(sub.id)} className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded flex items-center gap-1 transition-colors">
                      <PlusCircle size={12} /> Add Outcome
                    </button>
                  </div>

                  <div className="space-y-3">
                    {sub.sessions.length === 0 ? (
                      <p className="text-xs text-gray-600 italic">No outcomes added.</p>
                    ) : (
                      sub.sessions.map((session, sIdx) => (
                        <div key={session.id} className="flex gap-3 items-start bg-black/40 p-3 rounded-lg border border-gray-800">
                          <div className="w-6 h-6 rounded bg-gray-800 text-gray-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                            {sIdx + 1}
                          </div>
                          <div className="flex-1 space-y-2">
                            <input
                              type="text"
                              value={session.title}
                              onChange={(e) => updateSession(sub.id, session.id, 'title', e.target.value)}
                              placeholder="Session Title"
                              className="w-full bg-transparent border-b border-gray-700 hover:border-gray-500 focus:border-[#34D562] text-sm text-white px-1 py-1 outline-none transition-colors"
                            />
                            <textarea
                              value={session.learningOutcome}
                              onChange={(e) => updateSession(sub.id, session.id, 'learningOutcome', e.target.value)}
                              placeholder="Learning Outcome..."
                              rows={1}
                              className="w-full bg-transparent border-b border-gray-700 hover:border-gray-500 focus:border-[#34D562] text-xs text-gray-400 px-1 py-1 outline-none transition-colors"
                            />
                          </div>
                          <button onClick={() => removeSession(sub.id, session.id)} className="text-gray-600 hover:text-red-500 p-1">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
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
              onClick={() => setActiveTab('modules')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'modules' ? 'border-[#34D562] text-[#34D562]' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
            >
              2. Event Gallery & Details
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <div className="max-w-2xl mx-auto">
              {activeTab === 'basic' && renderBasicTab()}
              {activeTab === 'modules' && renderModulesTab()}
              
              {/* Export JSON Section at the bottom of the form */}
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
      `}</style>
    </div>
  );
};

export default EventTemplateBuilder;

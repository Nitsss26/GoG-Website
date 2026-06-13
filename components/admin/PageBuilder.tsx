import React, { useState, useEffect } from 'react';
import { Block, BlockType } from '../../adminTypes';
import BlockEditor from './BlockEditor';
import LivePreview from './LivePreview';
import { PlusCircle, Type, Heading, Image as ImageIcon, Users, LayoutGrid, Download, Save } from 'lucide-react';

const initialBlocks: Block[] = [
  {
    id: 'header-1',
    type: 'heading',
    data: { text: 'Welcome to GoG Custom Page', level: 'h1', alignment: 'center' }
  }
];

const PageBuilder: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'split'>('split');
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    const savedBlocks = localStorage.getItem('gog-admin-page-blocks');
    if (savedBlocks) {
      try {
        setBlocks(JSON.parse(savedBlocks));
      } catch (e) {
        setBlocks(initialBlocks);
      }
    } else {
      setBlocks(initialBlocks);
    }
  }, []);

  const saveBlocks = (newBlocks: Block[]) => {
    setBlocks(newBlocks);
    localStorage.setItem('gog-admin-page-blocks', JSON.stringify(newBlocks));
    setIsSaved(true);
  };

  const addBlock = (type: BlockType) => {
    const newBlockId = `block-${Date.now()}`;
    let newBlock: Block;

    switch (type) {
      case 'heading':
        newBlock = { id: newBlockId, type, data: { text: 'New Heading', level: 'h2', alignment: 'left' } };
        break;
      case 'text':
        newBlock = { id: newBlockId, type, data: { content: 'Enter text here...', alignment: 'left' } };
        break;
      case 'image':
        newBlock = { id: newBlockId, type, data: { url: '', alignment: 'center', width: '100%', height: 'auto' } };
        break;
      case 'faculty-cards':
        newBlock = { id: newBlockId, type, data: { cards: [{ id: `card-${Date.now()}`, name: 'Faculty Name', role: 'Speaker', imageUrl: '' }] } };
        break;
      case 'felicitation-images':
        newBlock = { id: newBlockId, type, data: { images: [{ id: `img-${Date.now()}`, url: '', caption: '' }] } };
        break;
      default:
        return;
    }

    const updatedBlocks = [...blocks, newBlock];
    setBlocks(updatedBlocks);
    setIsSaved(false);
  };

  const updateBlock = (id: string, updatedBlock: Block) => {
    const updatedBlocks = blocks.map(b => b.id === id ? updatedBlock : b);
    setBlocks(updatedBlocks);
    setIsSaved(false);
  };

  const removeBlock = (id: string) => {
    const updatedBlocks = blocks.filter(b => b.id !== id);
    setBlocks(updatedBlocks);
    setIsSaved(false);
  };

  const moveBlockUp = (id: string) => {
    const index = blocks.findIndex(b => b.id === id);
    if (index > 0) {
      const newBlocks = [...blocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      setBlocks(newBlocks);
      setIsSaved(false);
    }
  };

  const moveBlockDown = (id: string) => {
    const index = blocks.findIndex(b => b.id === id);
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      [newBlocks[index + 1], newBlocks[index]] = [newBlocks[index], newBlocks[index + 1]];
      setBlocks(newBlocks);
      setIsSaved(false);
    }
  };

  const handleManualSave = () => {
    localStorage.setItem('gog-admin-page-blocks', JSON.stringify(blocks));
    setIsSaved(true);
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(blocks, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "page_layout.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="h-16 border-b border-gray-800 bg-[#030303] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34D562] to-green-400">
            GoG Page Builder
          </h1>
          <div className="hidden md:flex bg-gray-900 rounded-lg p-1 border border-gray-800 ml-4">
            <button 
              onClick={() => setActiveTab('editor')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'editor' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Editor
            </button>
            <button 
              onClick={() => setActiveTab('split')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'split' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Split View
            </button>
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'preview' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Preview Full
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!isSaved && <span className="text-yellow-500 text-sm italic mr-2">Unsaved changes</span>}
          <button 
            onClick={exportJSON}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Download size={16} /> Export
          </button>
          <button 
            onClick={handleManualSave}
            className="flex items-center gap-2 px-4 py-2 bg-[#34D562] hover:bg-green-400 text-black rounded-lg transition-colors text-sm font-bold shadow-[0_0_15px_rgba(52,213,98,0.3)]"
          >
            <Save size={16} /> Save Changes
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 overflow-hidden flex">
        {/* Editor Panel */}
        {(activeTab === 'editor' || activeTab === 'split') && (
          <div className={`${activeTab === 'split' ? 'w-1/2 border-r' : 'w-full'} border-gray-800 flex flex-col h-full bg-[#0a0a0a]`}>
            
            {/* Toolbar */}
            <div className="p-4 border-b border-gray-800 shrink-0 bg-[#0f0f0f]">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Add Blocks</h2>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => addBlock('heading')} className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-[#34D562] hover:text-[#34D562] px-3 py-2 rounded text-sm transition-colors">
                  <Heading size={16} /> Heading
                </button>
                <button onClick={() => addBlock('text')} className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-[#34D562] hover:text-[#34D562] px-3 py-2 rounded text-sm transition-colors">
                  <Type size={16} /> Text
                </button>
                <button onClick={() => addBlock('image')} className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-[#34D562] hover:text-[#34D562] px-3 py-2 rounded text-sm transition-colors">
                  <ImageIcon size={16} /> Image
                </button>
                <button onClick={() => addBlock('faculty-cards')} className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-[#34D562] hover:text-[#34D562] px-3 py-2 rounded text-sm transition-colors">
                  <Users size={16} /> Faculty Cards
                </button>
                <button onClick={() => addBlock('felicitation-images')} className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-[#34D562] hover:text-[#34D562] px-3 py-2 rounded text-sm transition-colors">
                  <LayoutGrid size={16} /> Felicitation Row
                </button>
              </div>
            </div>

            {/* Block List */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {blocks.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  <PlusCircle size={48} className="mb-4 text-gray-700" />
                  <p className="text-lg mb-2">No blocks added yet</p>
                  <p className="text-sm">Click the buttons above to start building your page.</p>
                </div>
              ) : (
                blocks.map((block, index) => (
                  <BlockEditor 
                    key={block.id} 
                    block={block} 
                    onChange={updateBlock}
                    onRemove={removeBlock}
                    onMoveUp={moveBlockUp}
                    onMoveDown={moveBlockDown}
                    isFirst={index === 0}
                    isLast={index === blocks.length - 1}
                  />
                ))
              )}
            </div>
          </div>
        )}

        {/* Live Preview Panel */}
        {(activeTab === 'preview' || activeTab === 'split') && (
          <div className={`${activeTab === 'split' ? 'w-1/2' : 'w-full'} bg-[#030303] overflow-y-auto custom-scrollbar relative`}>
            {activeTab === 'split' && (
              <div className="sticky top-0 right-0 z-10 p-2 pointer-events-none">
                <span className="bg-black/50 backdrop-blur text-[#34D562] text-xs font-bold px-2 py-1 rounded border border-[#34D562]/30 shadow-lg inline-block pointer-events-auto float-right">
                  LIVE PREVIEW
                </span>
              </div>
            )}
            <LivePreview blocks={blocks} />
          </div>
        )}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default PageBuilder;

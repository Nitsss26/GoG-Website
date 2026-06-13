import React from 'react';
import { Block, FacultyCard, FelicitationImage } from '../../adminTypes';
import { Trash2, Plus, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';

interface BlockEditorProps {
  block: Block;
  onChange: (id: string, newBlock: Block) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

const BlockEditor: React.FC<BlockEditorProps> = ({ 
  block, onChange, onRemove, onMoveUp, onMoveDown, isFirst, isLast 
}) => {
  
  const updateData = (newData: Partial<any>) => {
    onChange(block.id, {
      ...block,
      data: { ...block.data, ...newData }
    } as Block);
  };

  const renderEditor = () => {
    switch (block.type) {
      case 'heading':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Text</label>
              <input 
                type="text" 
                value={block.data.text} 
                onChange={(e) => updateData({ text: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                placeholder="Heading text..."
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Level</label>
                <select 
                  value={block.data.level}
                  onChange={(e) => updateData({ level: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                >
                  <option value="h1">Heading 1 (Largest)</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                  <option value="h4">Heading 4</option>
                  <option value="h5">Heading 5</option>
                  <option value="h6">Heading 6 (Smallest)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Alignment</label>
                <select 
                  value={block.data.alignment}
                  onChange={(e) => updateData({ alignment: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Content</label>
              <textarea 
                value={block.data.content} 
                onChange={(e) => updateData({ content: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none min-h-[100px]"
                placeholder="Paragraph text..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Alignment</label>
              <select 
                value={block.data.alignment}
                onChange={(e) => updateData({ alignment: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
              <input 
                type="text" 
                value={block.data.url} 
                onChange={(e) => updateData({ url: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Alignment</label>
                <select 
                  value={block.data.alignment}
                  onChange={(e) => updateData({ alignment: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Width (e.g. 100%, 300px)</label>
                <input 
                  type="text" 
                  value={block.data.width || ''} 
                  onChange={(e) => updateData({ width: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                  placeholder="auto"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Height (e.g. 100%, 300px)</label>
                <input 
                  type="text" 
                  value={block.data.height || ''} 
                  onChange={(e) => updateData({ height: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-[#34D562] focus:outline-none"
                  placeholder="auto"
                />
              </div>
            </div>
          </div>
        );

      case 'faculty-cards':
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 p-3 rounded border border-gray-700 mb-4">
              <h4 className="text-sm font-bold text-gray-300 mb-3 flex items-center justify-between cursor-pointer">
                <span>Layout & Style Settings</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Columns per Row</label>
                  <select 
                    value={block.data.columns || 3}
                    onChange={(e) => updateData({ columns: parseInt(e.target.value) })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                  >
                    <option value={1}>1 Column</option>
                    <option value={2}>2 Columns</option>
                    <option value={3}>3 Columns</option>
                    <option value={4}>4 Columns</option>
                    <option value={5}>5 Columns</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Text Alignment</label>
                  <select 
                    value={block.data.textAlign || 'left'}
                    onChange={(e) => updateData({ textAlign: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Name Color</label>
                  <input 
                    type="text" 
                    value={block.data.nameColor || ''} 
                    onChange={(e) => updateData({ nameColor: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                    placeholder="e.g. #ffffff or white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Name Size</label>
                  <input 
                    type="text" 
                    value={block.data.nameSize || ''} 
                    onChange={(e) => updateData({ nameSize: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                    placeholder="e.g. 1.25rem or 20px"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Role Color</label>
                  <input 
                    type="text" 
                    value={block.data.roleColor || ''} 
                    onChange={(e) => updateData({ roleColor: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                    placeholder="e.g. #34D562"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Role Size</label>
                  <input 
                    type="text" 
                    value={block.data.roleSize || ''} 
                    onChange={(e) => updateData({ roleSize: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                    placeholder="e.g. 0.875rem or 14px"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Card Background</label>
                  <input 
                    type="text" 
                    value={block.data.cardBgColor || ''} 
                    onChange={(e) => updateData({ cardBgColor: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                    placeholder="e.g. #111827"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Card Border</label>
                  <input 
                    type="text" 
                    value={block.data.cardBorderColor || ''} 
                    onChange={(e) => updateData({ cardBorderColor: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-[#34D562] focus:outline-none"
                    placeholder="e.g. #1f2937"
                  />
                </div>
              </div>
            </div>
            {block.data.cards.map((card: FacultyCard, index: number) => (
              <div key={card.id} className="bg-gray-900 p-4 rounded border border-gray-700 relative">
                <button 
                  onClick={() => {
                    const newCards = [...block.data.cards];
                    newCards.splice(index, 1);
                    updateData({ cards: newCards });
                  }}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-400"
                >
                  <Trash2 size={16} />
                </button>
                <h4 className="text-sm font-bold text-gray-300 mb-2">Card {index + 1}</h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                    <input 
                      type="text" 
                      value={card.name} 
                      onChange={(e) => {
                        const newCards = [...block.data.cards];
                        newCards[index] = { ...card, name: e.target.value };
                        updateData({ cards: newCards });
                      }}
                      className="w-full bg-gray-800 border border-gray-700 rounded p-1.5 text-sm text-white focus:border-[#34D562] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Role / Subheading</label>
                    <input 
                      type="text" 
                      value={card.role} 
                      onChange={(e) => {
                        const newCards = [...block.data.cards];
                        newCards[index] = { ...card, role: e.target.value };
                        updateData({ cards: newCards });
                      }}
                      className="w-full bg-gray-800 border border-gray-700 rounded p-1.5 text-sm text-white focus:border-[#34D562] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Image URL</label>
                    <input 
                      type="text" 
                      value={card.imageUrl} 
                      onChange={(e) => {
                        const newCards = [...block.data.cards];
                        newCards[index] = { ...card, imageUrl: e.target.value };
                        updateData({ cards: newCards });
                      }}
                      className="w-full bg-gray-800 border border-gray-700 rounded p-1.5 text-sm text-white focus:border-[#34D562] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => {
                updateData({ 
                  cards: [...block.data.cards, { id: Date.now().toString(), name: '', role: '', imageUrl: '' }] 
                });
              }}
              className="w-full py-2 border border-dashed border-gray-600 text-gray-400 rounded hover:border-[#34D562] hover:text-[#34D562] transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={16} /> Add Faculty Card
            </button>
          </div>
        );

      case 'felicitation-images':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {block.data.images.map((img: FelicitationImage, index: number) => (
                <div key={img.id} className="bg-gray-900 p-3 rounded border border-gray-700 relative">
                  <button 
                    onClick={() => {
                      const newImages = [...block.data.images];
                      newImages.splice(index, 1);
                      updateData({ images: newImages });
                    }}
                    className="absolute top-1 right-1 text-red-500 hover:text-red-400 bg-black bg-opacity-50 rounded-full p-1 z-10"
                  >
                    <Trash2 size={12} />
                  </button>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Image URL</label>
                      <input 
                        type="text" 
                        value={img.url} 
                        onChange={(e) => {
                          const newImages = [...block.data.images];
                          newImages[index] = { ...img, url: e.target.value };
                          updateData({ images: newImages });
                        }}
                        className="w-full bg-gray-800 border border-gray-700 rounded p-1 text-xs text-white focus:border-[#34D562] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Caption (Optional)</label>
                      <input 
                        type="text" 
                        value={img.caption} 
                        onChange={(e) => {
                          const newImages = [...block.data.images];
                          newImages[index] = { ...img, caption: e.target.value };
                          updateData({ images: newImages });
                        }}
                        className="w-full bg-gray-800 border border-gray-700 rounded p-1 text-xs text-white focus:border-[#34D562] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => {
                updateData({ 
                  images: [...block.data.images, { id: Date.now().toString(), url: '', caption: '' }] 
                });
              }}
              className="w-full py-2 border border-dashed border-gray-600 text-gray-400 rounded hover:border-[#34D562] hover:text-[#34D562] transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={16} /> Add Image
            </button>
          </div>
        );

      default:
        return <div>Unknown block type</div>;
    }
  };

  return (
    <div className="bg-[#111] border border-gray-800 rounded-lg overflow-hidden mb-4">
      <div className="bg-[#1a1a1a] border-b border-gray-800 p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="cursor-grab text-gray-500 hover:text-gray-300">
            <GripVertical size={16} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#34D562] bg-[#34D562]/10 px-2 py-1 rounded">
            {block.type.replace('-', ' ')}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => onMoveUp(block.id)} 
            disabled={isFirst}
            className={`p-1.5 rounded ${isFirst ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <ChevronUp size={16} />
          </button>
          <button 
            onClick={() => onMoveDown(block.id)} 
            disabled={isLast}
            className={`p-1.5 rounded ${isLast ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <ChevronDown size={16} />
          </button>
          <div className="w-px h-4 bg-gray-700 mx-1"></div>
          <button 
            onClick={() => onRemove(block.id)} 
            className="p-1.5 rounded text-gray-400 hover:bg-red-900/30 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="p-4">
        {renderEditor()}
      </div>
    </div>
  );
};

export default BlockEditor;

import React from 'react';
import { Block } from '../../adminTypes';

interface LivePreviewProps {
  blocks: Block[];
}

const LivePreview: React.FC<LivePreviewProps> = ({ blocks }) => {
  return (
    <div className="bg-[#030303] text-white min-h-screen w-full font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {blocks.length === 0 && (
          <div className="flex items-center justify-center h-64 text-gray-500 border-2 border-dashed border-gray-700 rounded-lg">
            Add blocks on the left to see the preview here.
          </div>
        )}
        
        {blocks.map((block) => {
          switch (block.type) {
            case 'heading': {
              const Tag = block.data.level;
              const textSize = {
                h1: 'text-5xl md:text-6xl lg:text-7xl',
                h2: 'text-4xl md:text-5xl',
                h3: 'text-3xl md:text-4xl',
                h4: 'text-2xl md:text-3xl',
                h5: 'text-xl md:text-2xl',
                h6: 'text-lg md:text-xl',
              }[block.data.level];
              
              return (
                <Tag 
                  key={block.id} 
                  className={`font-bold mb-6 text-${block.data.alignment} ${textSize} text-[#34D562]`}
                  style={{ textAlign: block.data.alignment }}
                >
                  {block.data.text || 'Heading text'}
                </Tag>
              );
            }
            
            case 'text':
              return (
                <p 
                  key={block.id} 
                  className={`text-gray-300 text-lg mb-6`}
                  style={{ textAlign: block.data.alignment }}
                >
                  {block.data.content || 'Paragraph text'}
                </p>
              );
              
            case 'image':
              return (
                <div key={block.id} className={`w-full flex mb-8`} style={{ justifyContent: block.data.alignment === 'center' ? 'center' : block.data.alignment === 'right' ? 'flex-end' : 'flex-start' }}>
                  {block.data.url ? (
                    <img 
                      src={block.data.url} 
                      alt="Block" 
                      className="rounded-lg shadow-lg object-cover"
                      style={{ 
                        width: block.data.width || 'auto', 
                        height: block.data.height || 'auto',
                        maxWidth: '100%' 
                      }} 
                    />
                  ) : (
                    <div className="bg-gray-800 flex items-center justify-center text-gray-500 rounded-lg w-full h-64">
                      Image placeholder
                    </div>
                  )}
                </div>
              );
              
            case 'faculty-cards': {
              const cols = block.data.columns || 3;
              const gridColsClass = cols === 1 ? 'grid-cols-1' : 
                                    cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 
                                    cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 
                                    cols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 
                                    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5';
                                    
              return (
                <div key={block.id} className={`grid ${gridColsClass} gap-8 mb-12`}>
                  {block.data.cards.map(card => (
                    <div 
                      key={card.id} 
                      className="rounded-xl overflow-hidden transition-all duration-300 group hover:ring-2 hover:ring-[#34D562]/50"
                      style={{ 
                        backgroundColor: block.data.cardBgColor || '#111827',
                        borderColor: block.data.cardBorderColor || '#1f2937',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                      }}
                    >
                      <div className="h-64 overflow-hidden relative">
                        {card.imageUrl ? (
                          <img 
                            src={card.imageUrl} 
                            alt={card.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full bg-black/40 flex items-center justify-center text-gray-500">
                            No image
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
                      </div>
                      <div className="p-6 relative" style={{ textAlign: block.data.textAlign || 'left' }}>
                        <h3 
                          className="font-bold mb-1"
                          style={{ 
                            color: block.data.nameColor || '#ffffff', 
                            fontSize: block.data.nameSize || '1.25rem' 
                          }}
                        >
                          {card.name || 'Faculty Name'}
                        </h3>
                        <p 
                          className="font-mono"
                          style={{ 
                            color: block.data.roleColor || '#34D562', 
                            fontSize: block.data.roleSize || '0.875rem' 
                          }}
                        >
                          {card.role || 'Role / Position'}
                        </p>
                      </div>
                    </div>
                  ))}
                  {block.data.cards.length === 0 && (
                    <div className="col-span-full text-center text-gray-500 italic py-8 border border-dashed border-gray-700 rounded-lg">
                      Add faculty cards to display them here
                    </div>
                  )}
                </div>
              );
            }
              
            case 'felicitation-images':
              return (
                <div key={block.id} className="mb-12">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {block.data.images.map(img => (
                      <div key={img.id} className="relative group rounded-lg overflow-hidden border border-gray-800">
                        <div className="aspect-square bg-gray-900">
                          {img.url ? (
                            <img 
                              src={img.url} 
                              alt={img.caption} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                              No image
                            </div>
                          )}
                        </div>
                        {img.caption && (
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <p className="text-white text-center text-sm">{img.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                    {block.data.images.length === 0 && (
                      <div className="col-span-full text-center text-gray-500 italic py-8 border border-dashed border-gray-700 rounded-lg">
                        Add felicitation images to display them here
                      </div>
                    )}
                  </div>
                </div>
              );
              
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default LivePreview;

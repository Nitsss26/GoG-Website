export type BlockType = 'heading' | 'text' | 'image' | 'faculty-cards' | 'felicitation-images';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  data: {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    alignment: 'left' | 'center' | 'right';
  };
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  data: {
    content: string;
    alignment: 'left' | 'center' | 'right';
  };
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  data: {
    url: string;
    alignment: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
  };
}

export interface FacultyCard {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface FacultyCardsBlock extends BaseBlock {
  type: 'faculty-cards';
  data: {
    cards: FacultyCard[];
    columns?: number;
    nameColor?: string;
    nameSize?: string;
    roleColor?: string;
    roleSize?: string;
    cardBgColor?: string;
    cardBorderColor?: string;
    textAlign?: 'left' | 'center' | 'right';
  };
}

export interface FelicitationImage {
  id: string;
  url: string;
  caption: string;
}

export interface FelicitationImagesBlock extends BaseBlock {
  type: 'felicitation-images';
  data: {
    images: FelicitationImage[];
  };
}

export type Block = HeadingBlock | TextBlock | ImageBlock | FacultyCardsBlock | FelicitationImagesBlock;

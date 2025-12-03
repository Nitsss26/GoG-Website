import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  isPrimary?: boolean;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  icon: React.FC<any>;
  description: string;
}

export interface Workshop {
  title: string;
  tags: string[];
  attendees: string;
  image: string;
  details: {
    location: string;
    prize: string;
    deadline: string;
    gmt: string;
  };
}
import { Database, Cpu, Globe, Zap, Users, HardDrive, Share2, Layers } from 'lucide-react';
import { NavItem, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About GoG', href: '/about' },
  {
    label: 'GoG In Blockchain',
    href: '#',
    children: [
      { label: 'Koii Labs', href: '/blockchain/koii-labs' },
      { label: 'Core Dao', href: '/blockchain/core-dao' },
      { label: 'Educhain', href: '/blockchain/educhain' },
      { label: 'Stellar', href: '/blockchain/stellar' },
      { label: 'Aptos', href: '/blockchain/aptos' },
      { label: 'Agoric', href: '/blockchain/agoric' },
    ]
  },
  { label: 'Our Partnered Institutes', href: '/partnered-colleges' },
  { label: 'Our Team', href: '/teams' },
  { label: 'Our Social Impact', href: '/our-social-impact' },
  { label: 'Programs', href: '/programs' },
];

export const FEATURES: Feature[] = [
  {
    title: "Significant Reduction in Hardware Costs",
    icon: HardDrive,
    description: "Slash infrastructure expenses by utilizing consumer-grade hardware and decentralized resource sharing instead of expensive data centers."
  },
  {
    title: "Scalable Crowd-Sourced Community Devices",
    icon: Users,
    description: "Expand your network infinitely by tapping into a global pool of user-owned devices ready to perform compute tasks."
  },
  {
    title: "Access to More Data",
    icon: Database,
    description: "Bypass centralized gatekeepers and access high-quality, real-time data directly from diverse sources across the web."
  },
  {
    title: "Easily Deployable Large-Scale Systems",
    icon: Layers,
    description: "Launch and manage massive decentralized applications with simplified orchestration tools and automated consensus."
  }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://x.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Facebook', url: 'https://facebook.com' }
];
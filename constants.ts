import { Database, Cpu, Globe, Zap, Users, HardDrive, Share2, Layers } from 'lucide-react';
import { NavItem, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About GoG', href: '/about-gog' },
  {
    label: 'Web 3.0',
    href: '#',
    children: [
      { label: 'Koii Labs', href: '/blockchain/koii-labs', image: '/assets/koii-logo.png' },
      { label: 'Agoric', href: '/blockchain/agoric', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7mO81MqcK_mVARTt1QMm0h7hm75MIO1UMA&s' },
      { label: 'Core Dao', href: '/blockchain/core-dao', image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/23254.png' },
      { label: 'Educhain', href: '/blockchain/educhain', image: 'https://public.bnbstatic.com/static/academy/uploads/0adc5aeca69b42d3928b5f1f47a801b4.png' },
      { label: 'Stellar', href: '/blockchain/stellar', image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/512.png' },
      { label: 'Aptos', href: '/blockchain/aptos', image: 'https://cryptoslate.com/wp-content/uploads/2022/10/Aptos-logo.jpg' },
    ]
  },
  { label: 'Events', href: '/events' },
  { label: 'Winners', href: '/winners' },
  { label: 'Our Partnered Institutes', href: '/partnered-colleges' },
  { label: 'Our Team', href: '/teams' },
  { label: 'B2G Initiatives', href: '/our-social-impact' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Our Culture', href: '/culture' },
      { label: 'Media Presence', href: '/media' },
      { label: 'Careers', href: '/careers' },
      { label: 'Programs', href: '/programs' },
    ]
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Significant Reduction in Hardware Costs",
    icon: HardDrive,
    description: "Reduces the infrastructure expenses by utilizing consumer-grade hardware and decentralized resource sharing."
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
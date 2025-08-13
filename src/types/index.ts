// types/index.ts
import { ReactElement } from 'react';

export interface Line {
    id: string;
    content: ReactElement | string;
  }
  
  export interface Project {
    slug: string;
    name: string;
    blurb: string;
    highlights?: string[];
    year?: string;  
    tech?: string[];
    demo?: string;
    repo?: string;
  }
  
  export interface ProfileConfig {
    name: string;
    handle: string;
    title: string;
    location: string;
    email: string;
    resumeUrl: string;
    website: string;
    socials: {
      github: string;
      linkedin: string;
      twitter: string;
    };
    summary: string;
    skills: string[];
  }
  
  export type ThemeType = "light" | "dark" | "auto";
  
  export interface TerminalState {
    lines: Line[];
    input: string;
    history: string[];
    historyIndex: number;
    showCard: boolean;
    cardComplete: boolean;
  }
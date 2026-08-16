export type PageView = 
  | 'home'
  | 'journey'
  | 'promil'
  | 'trimester1'
  | 'trimester2'
  | 'trimester3'
  | 'menjelang'
  | 'menyambut'
  | 'category'
  | 'dictionary'
  | 'affirmation'
  | 'about'
  | 'baby-blues';

export type CategoryId = 
  | 'tas-persalinan'
  | 'kebutuhan-bayi'
  | 'rumah'
  | 'finansial'
  | 'administrasi'
  | 'pasangan'
  | 'sistem-dukungan'
  | 'pekerjaan-cuti'
  | 'baby-blues';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  subtitle: string;
  iconName: string;
  colorBg: string;
  colorBorder: string;
  colorAccent: string;
  description: string;
}

export interface ConversationQuestion {
  question: string;
  contextNote?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  contentParagraphs: string[];
  keyPoints?: string[];
  editorialSections?: {
    title: string;
    description?: string;
    items: string[];
    badgeColor?: string;
  }[];
  conversationTitle?: string;
  conversationQuestions?: ConversationQuestion[];
}

export interface StageData {
  id: PageView;
  stageNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  bgColor: string;
  accentColor: string;
  borderColor: string;
  chapters: Chapter[];
}

export interface PackingCategory {
  categoryTitle: string;
  subtitle: string;
  iconName: string;
  badgeBg: string;
  badgeText: string;
  items: {
    name: string;
    note?: string;
  }[];
}

export interface DiagramStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  details: string[];
  iconName: string;
}

export interface PreparednessItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyDetails: string[];
  iconName: string;
}

export interface DictionaryTerm {
  term: string;
  letter: string;
  meaning: string;
  whyHeard: string;
  category?: string;
  relatedTopic?: CategoryId;
}

export interface TopicArticle {
  id: string;
  title: string;
  categoryId: CategoryId;
  stage: string;
  summary: string;
  readTime: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    body: string;
    bulletPoints?: string[];
  }[];
}

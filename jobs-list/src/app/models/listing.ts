export type Role = 'Frontend' | 'Backend' | 'Fullstack';
export type Level = 'Junior' | 'Senior' | 'Midweight';
export type Contract = 'Full Time' | 'Part Time' | 'Contract';
export type Location = 'USA Only' | 'UK Only' | 'Worldwide';


export interface JobListing {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: Role;
  level: Level;
  postedAt: string;
  contract: Contract;
  location: Location;
  languages: Array<string>;
  tools: Array<string>;
}

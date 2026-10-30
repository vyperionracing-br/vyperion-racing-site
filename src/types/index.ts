export type Lang = "pt" | "en";
export interface Localized { pt: string; en: string; }
export interface StemStep { n: number; title: string; short: Localized; extra: Localized; icon: "pencil" | "wrench" | "flask" | "flag"; }
export interface TeamMember { name: string; role: Localized; bio: Localized; }
export interface TimelineEvent { date: Localized; title: Localized; text: Localized; future?: boolean; }
export interface Partner { name: string; kind: "institution" | "sponsor"; link: string; }
export interface ImpactCard { id: string; title: Localized; summary: Localized; details: Localized[]; stat: string; statTitle: Localized; statText: Localized; }
export interface Spec { big: Localized; label: Localized; }

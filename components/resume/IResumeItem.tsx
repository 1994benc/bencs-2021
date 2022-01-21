export interface IResumeBodyItem {
    title: string;
    when?: string;
    description?: string;
    outputs?: string[];
    link?: string;
    logo?: string;
}
export interface IResumeItem {
  x: number;
  y: number;
  name: string;
  id: string;
  body?: IResumeBodyItem[];
}

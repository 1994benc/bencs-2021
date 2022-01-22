export interface IResumeBodyItem {
    title: string;
    when?: string;
    where?: string;
    description?: string;
    detailList?: string[];
    link?: string;
    logo?: string;
}
export interface IResumeItem {
  x: number;
  y: number;
  name: string;
  id: string;
  items?: IResumeBodyItem[];
}

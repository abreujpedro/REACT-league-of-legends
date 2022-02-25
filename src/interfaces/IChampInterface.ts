export interface IChampInterface {
  champId: number;
  champPicture: string;
  champName: string;
  champLane: string;
  champCategory: string;
  champRate: number;
  champDescription: string;
}

export interface IBasicChampInterface {
  champPicture: string;
  champName: string;
}

export interface IChampTopInterface {
  champName: string;
  champLane: string;
  champRate: number;
  champPicture: string;
}

export interface NodoPrismic {
  _linkType?: string;
}

export interface DocumentoPrismic {
  node: NodoPrismic;
}

export interface PaginaPrismic {
  edges: DocumentoPrismic[];
}

export interface DataPrismic {
  [key: string]: PaginaPrismic;
}

export interface PrismicResponse {
  data: DataPrismic;
}

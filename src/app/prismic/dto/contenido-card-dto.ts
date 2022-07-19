import { DataPrismic, PaginaPrismic, PrismicImage, PrismicResponse, PrismicRichText } from "src/prismic-graphql";

export interface ContenidoCardDTO {
    title: PrismicRichText[],
    content: PrismicRichText[],
    image: PrismicImage,
}

export interface DataContenidoCard extends DataPrismic {
    allCards: PaginaPrismic
}

export interface ContenidoCardResponde extends PrismicResponse {
    data: DataContenidoCard
}
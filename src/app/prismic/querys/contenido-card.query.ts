export const getCardQuery = (): string => `{
  allCards {
    edges {
      node {
        title
        content
        image
      }
    }
  }
}
`;

import type { Schema, Struct } from '@strapi/strapi';

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links.link': LinksLink;
    }
  }
}

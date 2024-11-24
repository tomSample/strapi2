import type { Schema, Struct } from '@strapi/strapi';

export interface ContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'Form';
    icon: 'envelop';
  };
  attributes: {
    date: Schema.Attribute.Date;
    your_email: Schema.Attribute.Email;
    your_message: Schema.Attribute.Text;
    your_name: Schema.Attribute.String;
  };
}

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
      'contact.form': ContactForm;
      'links.link': LinksLink;
    }
  }
}

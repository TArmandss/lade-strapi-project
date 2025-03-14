import type { Schema, Struct } from '@strapi/strapi';

export interface KrekliVariantsKrekli extends Struct.ComponentSchema {
  collectionName: 'components_krekli_variants_kreklis';
  info: {
    description: '';
    displayName: 'Krekli';
  };
  attributes: {
    colorCode: Schema.Attribute.String;
    tshirt: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tshirtColorName: Schema.Attribute.String;
  };
}

export interface VariantsColorVariant extends Struct.ComponentSchema {
  collectionName: 'components_variants_color_variants';
  info: {
    description: '';
    displayName: 'ColorVariants';
  };
  attributes: {
    colorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    colorName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'krekli-variants.krekli': KrekliVariantsKrekli;
      'variants.color-variant': VariantsColorVariant;
    }
  }
}

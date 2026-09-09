import { images } from '../components/MenuSection';

export const categories = [
  {
 id: 'desayunos',
    title: 'DESAYUNOS',
    badge: 'Para la mañana',
    additionalOptions: [
      { name: 'Arroz', price: '$3K' },
      { name: 'Queso', price: '$3K' },
      { name: 'Hogao', price: '$3K' },
    ],
    items: [
      {
        id: 'huevos-al-gusto',
        title: 'Huevos al Gusto',
        description: 'Fritos, revueltos o pericos.',
        price: '$5.000',
        priceValue: 5000,
        tag: 'DESAYUNO TRADICIONAL',
        longDescription:
          'Dos huevos de campo preparados según tu preferencia: fritos con yema tierna, revueltos suaves o en guiso de pericos frescos con cebolla y tomate de huerta.',
        ingredients: ['Huevos de campo', 'Guiso fresco', 'Acompañamiento a elección', 'Cocción al minuto'],
        image: images.huevos,
      },
      {
        id: 'tamal-completo',
        title: 'Tamal Completo',
        description: 'Tamal + arroz + bebida sencilla.',
        price: '$11.000',
        priceValue: 11000,
        tag: 'DESAYUNO TRADICIONAL',
        longDescription:
          'Tamal envuelto en hoja de plátano, relleno de arroz, pollo y verduras de la casa, servido con una bebida sencilla del día.',
        ingredients: ['Masa de maíz', 'Pollo desmechado', 'Verduras', 'Bebida sencilla incluida'],
        image: images.tamal,
      },
      {
        id: 'huevos-acompanante',
        title: 'Huevos con Acompañante',
        description: 'Huevos al gusto + acompañante + bebida sencilla.',
        price: '$11.000',
        priceValue: 11000,
        tag: 'DESAYUNO TRADICIONAL',
        longDescription:
          'Huevos preparados a tu gusto, acompañados de tu elección (arepa, calentado o pan casero) y una bebida sencilla.',
        ingredients: ['Huevos de campo', 'Acompañante a elección', 'Bebida sencilla incluida'],
        image: images.huevosB,
      },
      {
        id: 'super-desayuno',
        title: 'Súper Desayuno Especial',
        description: 'Huevos + acompañante + chorizo + queso + bebida.',
        price: '$16.000',
        priceValue: 16000,
        tag: 'DESAYUNO TRADICIONAL',
        longDescription:
          'El desayuno completo de la casa: huevos al gusto, acompañante, chorizo asado, queso y una bebida caliente o fría a elección.',
        ingredients: ['Huevos de campo', 'Chorizo asado', 'Queso', 'Acompañante', 'Bebida incluida'],
        image: images.huevitosE,
      },
    ],
  },
  {
id: 'comidas-tipicas',
    title: 'COMIDAS TÍPICAS',
    badge: 'Especialidades caucanas',
    additionalOptions: [
      { name: 'Ají de maní', price: '$2K' },
      { name: 'Hogao extra', price: '$3K' },
      { name: 'Queso', price: '$3K' },
    ],
    items: [
      {
        id: 'empanadas-pipian',
        title: 'Empanadas de Pipián x 10',
        description: 'Con auténtico sjí de maní recién preparado.',
        price: '$9.000',
        priceValue: 9000,
        tag: 'PLATO INSIGNIA',
        longDescription:
          'Diez empanadas artesanales rellenas de papa criolla, acompañadas de nuestro auténtico ajo de maní recién preparado, receta tradicional payanesa.',
        ingredients: ['Papa criolla', 'Maíz', 'Ají de maní', 'Receta payanesa'],
        image: images.empanadas,
      },
      {
        id: 'tamal-pipian',
        title: 'Tamal de Pipián + Pan',
        description: 'Envuelto en hoja de plátano con guiso suave de pipián.',
        price: '$6.000',
        priceValue: 6000,
        tag: 'TRADICIONAL CAUCANO',
        longDescription:
          'Tamal envuelto en hoja de plátano con un guiso suave de pipián de maní, servido con pan casero recién horneado.',
        ingredients: ['Masa de maíz', 'Guiso de pipián', 'Hoja de plátano', 'Pan casero'],
        image: images.tamalPipian,
      },
      {
        id: 'rellena-envuelto',
        title: 'Rellena Especial + Envuelto',
        description: 'Rellena artesanal sazonada con hierbas de azotea.',
        price: '$9.000',
        priceValue: 9000,
        tag: 'TRADICIONAL CAUCANO',
        longDescription:
          'Rellena artesanal sazonada con hierbas frescas de nuestra azotea, acompañada de un envuelto dulce de maíz.',
        ingredients: ['Rellena artesanal', 'Hierbas de azotea', 'Envuelto de maíz'],
        image: images.rellena,
      },
      {
        id: 'carantanta-hogao',
        title: 'Carantanta + Hogao',
        description: 'Hojuelas crocantes de maíz caucano con hogao caliente.',
        priceVariants: [
          { label: 'Personal', price: '$9K' },
          { label: 'Mediana', price: '$15K' },
          { label: 'Grande', price: '$20K' },
        ],
        priceValue: 9000,
        price: '$9K',
        tag: 'TRADICIONAL CAUCANO',
        longDescription:
          'Hojuelas crocantes de maíz caucano, doradas en su punto, servidas con hogao caliente hecho con tomate y cebolla de la huerta.',
        ingredients: ['Maíz caucano', 'Hogao casero', 'Tomate', 'Cebolla larga'],
        image: images.carantanta,
      },
    ],
  },
  {
    id: 'tipicos-frios',
    title: 'TÍPICOS FRÍOS & OTROS ANTOJOS',
    badge: 'Refrescos y bocados',
    variant: 'quick',
    additionalOptions: [
      { name: 'Hielo extra', price: '$1K' },
      { name: 'Leche condensada', price: '$2K' },
      { name: 'Topping de fruta', price: '$3K' },
    ],
    items: [
      {
        id: 'champus',
        title: 'Champús Payanés',
        description: 'Bebida autóctona con reial, fule, piña, hojas de naranjo y melao.',
        price: '$9.000',
        priceValue: 9000,
        tag: 'BEBIDA TRADICIONAL',
        longDescription:
          'Bebida autóctona payanesa preparada con maíz, piña, hojas de naranjo y melao, servida bien fría.',
        ingredients: ['Maíz', 'Piña', 'Hojas de naranjo', 'Melao'],
        image: images.champus,
      },
      {
        id: 'lulada',
        title: 'Lulada Caucana',
        description: 'Lulo macerado al instante con hielo raspado.',
        price: '$10.000',
        priceValue: 10000,
        tag: 'BEBIDA TRADICIONAL',
        longDescription:
          'Lulo fresco macerado al instante, servido con hielo raspado para una bebida refrescante típica del Cauca.',
        ingredients: ['Lulo fresco', 'Hielo raspado', 'Azúcar al gusto'],
        image: images.lulada,
      },
      {
        id: 'salpicion',
        title: 'Salpicón Granizado',
        description: 'Con helado de paila artesanal.',
        price: '$11.000',
        priceValue: 11000,
        tag: 'ANTOJO FRÍO',
        longDescription:
          'Mezcla refrescante de frutas de temporada, coronada con helado de paila artesanal hecho en casa.',
        ingredients: ['Frutas de temporada', 'Helado de paila', 'Hielo granizado'],
        image: images.salpicon,
      },
      {
        id: 'abonajado',
        title: 'Abonajado',
        description: 'Arepa con queso o patacón con hogao, en porción individual o para compartir.',
        priceVariants: [
          { label: 'Arepa + queso', price: '$4.5K' },
          { label: 'Patacón + hogao', price: '$4.5K' },
          { label: 'Porción individual', price: '$9K' },
          { label: 'Porción para compartir', price: '$6K' },
        ],
        priceValue: 4500,
        price: '$4.5K',
        tag: 'ANTOJO',
        longDescription:
          'Antojo caucano clásico: arepa con queso derretido o patacón con hogao casero, disponible en porción individual o para compartir.',
        ingredients: ['Arepa de maíz', 'Queso', 'Patacón', 'Hogao casero'],
        image: images.aborrajado,
      },
    ],
  },
]

export const footerData = {
  instagram: '@moliendomani',
  phone: '3052286556',
  address: 'Calle 10 N # 11 - 05 Santa Clara',
  whatsapp: 'https://wa.me/573052286556',
}
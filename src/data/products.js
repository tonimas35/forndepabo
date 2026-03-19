export const categories = [
  { id: 'bread', ca: 'Pans', es: 'Panes' },
  { id: 'savory', ca: 'Coques i Salats', es: 'Cocas y Salados' },
  { id: 'pastry', ca: 'Pastisseria', es: 'Pastelería' },
  { id: 'seasonal', ca: 'Temporada', es: 'Temporada' },
]

export const products = [
  // Pans
  { id: 1, category: 'bread', ca: 'Pa blanc de taula', es: 'Pan blanco de mesa', descCa: 'El nostre pa de cada dia, amb crosta cruixent i molla tendra.', descEs: 'Nuestro pan de cada día, con corteza crujiente y miga tierna.', price: 1.80, wholesalePrice: 1.20, featured: true },
  { id: 2, category: 'bread', ca: 'Pa integral', es: 'Pan integral', descCa: 'Elaborat amb farina integral de blat, ric en fibra.', descEs: 'Elaborado con harina integral de trigo, rico en fibra.', price: 2.20, wholesalePrice: 1.50 },
  { id: 3, category: 'bread', ca: 'Pa multicereals', es: 'Pan multicereales', descCa: 'Barreja de cereals per un pa nutritiu i saborós.', descEs: 'Mezcla de cereales para un pan nutritivo y sabroso.', price: 2.50, wholesalePrice: 1.70, featured: true },
  { id: 4, category: 'bread', ca: 'Pa de panses i nous', es: 'Pan de pasas y nueces', descCa: 'Perfecte per esmorzars i berenars especials.', descEs: 'Perfecto para desayunos y meriendas especiales.', price: 3.00, wholesalePrice: 2.10 },
  { id: 5, category: 'bread', ca: 'Pa de formatge i oliva', es: 'Pan de queso y oliva', descCa: 'Amb formatge gratinado i olives negres del Priorat.', descEs: 'Con queso gratinado y olivas negras del Priorat.', price: 3.20, wholesalePrice: 2.20 },
  { id: 6, category: 'bread', ca: 'Pa de vidre', es: 'Pan de cristal', descCa: 'Massa hidratada amb alvèols grans. Textura única.', descEs: 'Masa hidratada con alvéolos grandes. Textura única.', price: 2.80, wholesalePrice: 1.90, featured: true },
  { id: 7, category: 'bread', ca: "Pa d'espelta", es: 'Pan de espelta', descCa: "Elaborat amb farina d'espelta ecològica.", descEs: 'Elaborado con harina de espelta ecológica.', price: 3.00, wholesalePrice: 2.00 },
  { id: 8, category: 'bread', ca: 'Pa de moresc', es: 'Pan de maíz', descCa: 'Amb farina de moresc, ideal per a celíacs (conté blat).', descEs: 'Con harina de maíz, ideal acompañamiento.', price: 2.50, wholesalePrice: 1.70 },
  { id: 9, category: 'bread', ca: 'Pa sense gluten', es: 'Pan sin gluten', descCa: 'Elaborat en espai dedicat, apte per a celíacs.', descEs: 'Elaborado en espacio dedicado, apto para celíacos.', price: 4.50, wholesalePrice: 3.20, badges: ['glutenFree'] },
  { id: 10, category: 'bread', ca: 'Pa de motlle amb quinoa', es: 'Pan de molde con quinoa', descCa: 'Pa de motlle nutritiu amb llavors de quinoa.', descEs: 'Pan de molde nutritivo con semillas de quinoa.', price: 3.50, wholesalePrice: 2.40 },
  // Coques i Salats
  { id: 11, category: 'savory', ca: 'Coca en recapte', es: 'Coca en recapte', descCa: 'La coca tradicional amb escalivada i sardines.', descEs: 'La coca tradicional con escalivada y sardinas.', price: 8.50, wholesalePrice: 6.00, featured: true },
  { id: 12, category: 'savory', ca: "Coca d'espinacs", es: 'Coca de espinacas', descCa: 'Farcida amb espinacs frescos, panses i pinyons.', descEs: 'Rellena de espinacas frescas, pasas y piñones.', price: 7.50, wholesalePrice: 5.20 },
  { id: 13, category: 'savory', ca: "Coca d'escalivada", es: 'Coca de escalivada', descCa: "Amb pebrot, albergínia i ceba escalivats al forn.", descEs: 'Con pimiento, berenjena y cebolla asados al horno.', price: 7.50, wholesalePrice: 5.20 },
  { id: 14, category: 'savory', ca: "Quix d'espinacs", es: 'Quiche de espinacas', descCa: 'Quix casolà amb espinacs i formatge.', descEs: 'Quiche casero con espinacas y queso.', price: 12.00, wholesalePrice: 8.50 },
  { id: 15, category: 'savory', ca: 'Quix de carxofa', es: 'Quiche de alcachofa', descCa: 'Amb carxofes de temporada i crema.', descEs: 'Con alcachofas de temporada y crema.', price: 12.00, wholesalePrice: 8.50 },
  { id: 16, category: 'savory', ca: 'Pizzes artesanes', es: 'Pizzas artesanas', descCa: 'Massa mare amb ingredients de proximitat.', descEs: 'Masa madre con ingredientes de proximidad.', price: 9.00, wholesalePrice: 6.30 },
  // Pastisseria
  { id: 17, category: 'pastry', ca: 'Galetes artesanes', es: 'Galletas artesanas', descCa: 'Fetes amb mantega i ous de proximitat.', descEs: 'Hechas con mantequilla y huevos de proximidad.', price: 5.00, wholesalePrice: 3.50 },
  { id: 18, category: 'pastry', ca: 'Pastissos variats', es: 'Pasteles variados', descCa: 'Selecció diària de pastissos artesans.', descEs: 'Selección diaria de pasteles artesanos.', price: 3.50, wholesalePrice: 2.40 },
  { id: 19, category: 'pastry', ca: 'Cheesecake', es: 'Cheesecake', descCa: 'La nostra recepta especial de cheesecake al forn.', descEs: 'Nuestra receta especial de cheesecake al horno.', price: 16.00, wholesalePrice: 11.00, featured: true },
  { id: 20, category: 'pastry', ca: 'Menjablanc', es: 'Menjablanc', descCa: 'Postre típic de Reus amb ametlles.', descEs: 'Postre típico de Reus con almendras.', price: 6.00, wholesalePrice: 4.20 },
  // Temporada
  { id: 21, category: 'seasonal', ca: 'Tortell de Reis', es: 'Roscón de Reyes', descCa: 'Disponible en nata, massapà, xocolata, trufa, crema i crema de pistatxo.', descEs: 'Disponible en nata, mazapán, chocolate, trufa, crema y crema de pistacho.', price: 18.00, wholesalePrice: 13.00, seasonal: true },
  { id: 22, category: 'seasonal', ca: 'Bunyols de Quaresma', es: 'Buñuelos de Cuaresma', descCa: 'Bunyols tradicionals per la Quaresma.', descEs: 'Buñuelos tradicionales de Cuaresma.', price: 8.00, wholesalePrice: 5.50, seasonal: true },
  { id: 23, category: 'seasonal', ca: 'Coca de Dijous Gras', es: 'Coca de Jueves Lardero', descCa: 'Coca dolça tradicional amb llardons.', descEs: 'Coca dulce tradicional con chicharrones.', price: 10.00, wholesalePrice: 7.00, seasonal: true },
  { id: 24, category: 'seasonal', ca: 'Foradat de Nadal', es: 'Foradat de Navidad', descCa: 'Pa tradicional nadalenc amb forma d\'anella.', descEs: 'Pan tradicional navideño con forma de anillo.', price: 5.00, wholesalePrice: 3.50, seasonal: true },
]

export const featuredProducts = products.filter(p => p.featured)

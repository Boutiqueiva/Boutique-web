// producto.js

// Definimos los datos de nuestros productos
const productos = {
    // === PRODUCTOS ORIGINALES (de index.html) ===
    'nike-vapor-pro-3': {
        nombre: 'Nike Vapor Pro 3',
        categoria: 'Tenis mujer',
        precio: '$3,199',
        imagenes: [
            './src/imagenes/Tenis/Tenis1/2.svg',
            './src/imagenes/Tenis/Tenis1/1.svg',
            './src/imagenes/Tenis/Tenis1/3.svg'
        ],
        descripcion: 'Inspirado en el AJ1 original, el Air Jordan 1 Mid ofrece a los fans la oportunidad de seguir los pasos de MJ. El color flamante bordea los detalles de la zapatilla y la hace única.',
        tallas: ['CM 25', 'CM 25.5', 'CM 26', 'CM 26.5', 'CM 27', 'CM 27.5', 'CM 28', 'CM 28.5', 'CM 29', 'CM 29.5', 'CM 30', 'CM 30.5', 'CM 31']
    },
    'nikecourt-victory': {
        nombre: 'NikeCourt Victory',
        categoria: 'Playera Dri-FIT',
        precio: '$949',
        imagenes: [
            './src/imagenes/Tenis/Tenis2/5.svg',
            './src/imagenes/Tenis/Tenis2/4.svg',
            './src/imagenes/Tenis/Tenis2/6.svg'
        ],
        descripcion: 'La Playera Dri-FIT NikeCourt Victory está diseñada para mantenerte fresco y cómodo durante tus partidos más intensos. Su tecnología de secado rápido te ayuda a mantener la concentración en la cancha.',
        tallas: ['S', 'M', 'L', 'XL', 'XXL']
    },
    'nike-court-lite-4': {
        nombre: 'Nike Court Lite 4',
        categoria: 'Tenis hombre',
        precio: '$1,699',
        imagenes: [
            './src/imagenes/Tenis/Tenis3/7.svg',
            './src/imagenes/Tenis/Tenis3/8.svg',
            './src/imagenes/Tenis/Tenis3/9.svg'
        ],
        descripcion: 'Los Nike Court Lite 4 ofrecen un ajuste cómodo y durabilidad excepcional para jugadores que buscan rendimiento en la cancha. Su suela de goma proporciona tracción y estabilidad.',
        tallas: ['CM 25', 'CM 25.5', 'CM 26', 'CM 26.5', 'CM 27', 'CM 27.5', 'CM 28', 'CM 28.5', 'CM 29', 'CM 29.5', 'CM 30', 'CM 30.5', 'CM 31']
    },
    'nikecourt-slam': {
        nombre: 'NikeCourt Slam',
        categoria: 'Shorts',
        precio: '$1,899',
        imagenes: [
            './src/imagenes/Tenis/Tenis4/10.svg',
            './src/imagenes/Tenis/Tenis4/11.svg',
            './src/imagenes/Tenis/Tenis4/12.svg'
        ],
        descripcion: 'Los Shorts NikeCourt Slam están hechos con tejido ligero y transpirable que te mantiene fresco durante los partidos. Su corte ergonómico permite un movimiento libre y sin restricciones.',
        tallas: ['S', 'M', 'L', 'XL', 'XXL']
    },
    'conjunto-adidas': {
        nombre: 'Conjunto Adidas',
        categoria: 'Gorra, playera y pans',
        precio: '$549',
        imagenes: [
            './src/imagenes/tenis/Tenis19/55.svg',
            './src/imagenes/tenis/Tenis19/56.svg',
            './src/imagenes/tenis/Tenis19/57.svg'
        ],
        descripcion: 'Este conjunto Adidas incluye una gorra, una playera y unos pants ideales para entrenamientos casuales o días de descanso. Combina estilo y comodidad en un solo paquete.',
        tallas: ['S', 'M', 'L', 'XL', 'XXL']
    },
    'nikecourt-dry': {
        nombre: 'NikeCourt Dry',
        categoria: 'Falda',
        precio: '$1,299',
        imagenes: [
            './src/imagenes/Tenis/Tenis16/46.svg',
            './src/imagenes/Tenis/Tenis16/47.svg',
            './src/imagenes/Tenis/Tenis16/48.svg'
        ],
        descripcion: 'La Falda NikeCourt Dry está diseñada para ofrecer libertad de movimiento y comodidad durante el juego. Su tejido transpirable y suave se adapta perfectamente a tu cuerpo.',
        tallas: ['S', 'M', 'L', 'XL', 'XXL']
    },
    'zoom-bella': {
        nombre: 'Zoom Bella',
        categoria: 'Entrenamiento',
        precio: '$2,100',
        imagenes: [
            './src/imagenes/Tenis/Tenis25/74.svg',
            './src/imagenes/Tenis/Tenis25/75.svg',
            './src/imagenes/Tenis/Tenis25/76.svg'
        ],
        descripcion: 'Las Nike Zoom Bella son ideales para entrenamientos de alta intensidad. Ofrecen amortiguación responsive y un ajuste seguro que te permite moverte con confianza.',
        tallas: ['CM 25', 'CM 25.5', 'CM 26', 'CM 26.5', 'CM 27', 'CM 27.5', 'CM 28', 'CM 28.5', 'CM 29', 'CM 29.5', 'CM 30', 'CM 30.5', 'CM 31']
    },
    'advantage-polo': {
        nombre: 'Advantage Polo',
        categoria: 'Polo',
        precio: '$1,499',
        imagenes: [
            './src/imagenes/Tenis/Tenis27/80.svg',
            './src/imagenes/Tenis/Tenis27/81.svg',
            './src/imagenes/Tenis/Tenis27/82.svg'
        ],
        descripcion: 'El Polo Advantage combina estilo clásico con tecnología moderna. Su tejido transpirable y su corte ajustado lo hacen perfecto para el campo de tenis o para ocasiones casuales.',
        tallas: ['S', 'M', 'L', 'XL', 'XXL']
    },
    'gp-turbo': {
        nombre: 'GP Turbo',
        categoria: 'Tenis cancha dura',
        precio: '$3,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis21/61.svg',
            './src/imagenes/Tenis/Tenis21/62.svg',
            './src/imagenes/Tenis/Tenis21/63.svg'
        ],
        descripcion: 'Los GP Turbo están diseñados específicamente para canchas duras. Ofrecen una excelente amortiguación y tracción, protegiendo tus pies durante los partidos más exigentes.',
        tallas: ['CM 25', 'CM 25.5', 'CM 26', 'CM 26.5', 'CM 27', 'CM 27.5', 'CM 28', 'CM 28.5', 'CM 29', 'CM 29.5', 'CM 30', 'CM 30.5', 'CM 31']
    },
    'nike-pro': {
        nombre: 'Nike Pro',
        categoria: 'Capa base',
        precio: '$849',
        imagenes: [
            './src/imagenes/Tenis/Tenis18/52.svg',
            './src/imagenes/Tenis/Tenis18/53.svg',
            './src/imagenes/Tenis/Tenis18/54.svg'
        ],
        descripcion: 'La Capa Base Nike Pro es esencial para cualquier atleta. Su tejido de secado rápido y su ajuste ceñido ayudan a regular la temperatura corporal y a mantener la piel seca durante el ejercicio.',
        tallas: ['S', 'M', 'L', 'XL', 'XXL']
    },

    // === NUEVOS PRODUCTOS DE ROPA-HOMBRE.HTML ===
    'nike-air-jersey-1': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/Carhartt/17.svg',
            './src/imagenes/Ropa/Playera/Carhartt/18.svg',
        ],
        descripcion: 'Jersey cómodo y transpirable para uso diario. Ideal para entrenamientos o salidas casuales.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-2': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis1/2.svg',
            './src/imagenes/Tenis/Tenis1/1.svg',
            './src/imagenes/Tenis/Tenis1/3.svg'
        ],
        descripcion: 'Jersey deportivo con diseño moderno y tejido ligero.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-pantalon-1': {
        nombre: 'Nike Air',
        categoria: 'Pantalón mezclilla',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 1/4.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 1/3.svg',
        ],
        descripcion: 'Pantalón de mezclilla duradero y con ajuste moderno.',
        tallas: ['28', '30', '32', '34']
    },
    'nike-air-jersey-3': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis2/5.svg',
            './src/imagenes/Tenis/Tenis2/4.svg',
            './src/imagenes/Tenis/Tenis2/6.svg'
        ],
        descripcion: 'Jersey versátil para cualquier ocasión deportiva.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-conjunto-1': {
        nombre: 'Nike Air',
        categoria: 'Conjunto deportivo',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pans/Champions/2.svg',
            './src/imagenes/Ropa/Pans/Champions/1.svg'
        ],
        descripcion: 'Conjunto completo de pans para entrenamiento o descanso.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-4': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis3/7.svg',
            './src/imagenes/Tenis/Tenis3/8.svg',
            './src/imagenes/Tenis/Tenis3/9.svg'
        ],
        descripcion: 'Jersey con estilo urbano y comodidad extrema.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-5': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis4/10.svg',
            './src/imagenes/Tenis/Tenis4/11.svg',
            './src/imagenes/Tenis/Tenis4/12.svg'
        ],
        descripcion: 'Jersey premium con acabados de alta calidad.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-falda-1': {
        nombre: 'Nike Air',
        categoria: 'Falda deportiva',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 2/6.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 2/5.svg',
        ],
        descripcion: 'Falda deportiva con diseño moderno y tejido transpirable.',
        tallas: ['S', 'M', 'L']
    },
    'nike-air-jersey-6': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/DKNY/19.svg',
            './src/imagenes/Ropa/Playera/DKNY/20.svg'
        ],
        descripcion: 'Jersey colaboración con DKNY, estilo único y confortable.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-7': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis5/15.svg',
            './src/imagenes/Tenis/Tenis5/13.svg',
            './src/imagenes/Tenis/Tenis5/14.svg'
        ],
        descripcion: 'Jersey con gráficos llamativos y tejido suave.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-pantalon-2': {
        nombre: 'Nike Air',
        categoria: 'Pantalón vestir',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon vestir/Negro/13.svg',
            './src/imagenes/Ropa/Pantalon vestir/Negro/14.svg'
        ],
        descripcion: 'Pantalón formal en color negro, perfecto para eventos.',
        tallas: ['28', '30', '32', '34']
    },
    'nike-air-jersey-8': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis6/18.svg',
            './src/imagenes/Tenis/Tenis6/16.svg',
            './src/imagenes/Tenis/Tenis6/17.svg'
        ],
        descripcion: 'Jersey con diseño minimalista y máxima comodidad.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-pantalon-3': {
        nombre: 'Nike Air',
        categoria: 'Pantalón mezclilla',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 3/8.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 3/7.svg'
        ],
        descripcion: 'Pantalón de mezclilla con corte recto y tela resistente.',
        tallas: ['28', '30', '32', '34']
    },
    'nike-air-short-negro': {
        nombre: 'Nike Air',
        categoria: 'Short negro',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Short/Nike/Negro/25.svg',
            './src/imagenes/Ropa/Short/Nike/Negro/24.svg'
        ],
        descripcion: 'Short deportivo en color negro clásico, ideal para cualquier actividad.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-9': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis7/19.svg',
            './src/imagenes/Tenis/Tenis7/20.svg',
            './src/imagenes/Tenis/Tenis7/21.svg'
        ],
        descripcion: 'Jersey con estampado exclusivo y tejido transpirable.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-pantalon-4': {
        nombre: 'Nike Air',
        categoria: 'Pantalón vestir',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon vestir/CK/11.svg',
            './src/imagenes/Ropa/Pantalon vestir/CK/12.svg'
        ],
        descripcion: 'Pantalón de vestir colaboración con Calvin Klein.',
        tallas: ['28', '30', '32', '34']
    },
    'nike-air-pantalon-5': {
        nombre: 'Nike Air',
        categoria: 'Pantalón mezclilla',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 4/10.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 4/9.svg'
        ],
        descripcion: 'Pantalón de mezclilla con lavado vintage y ajuste moderno.',
        tallas: ['28', '30', '32', '34']
    },
    'nike-air-short-azul': {
        nombre: 'Nike Air',
        categoria: 'Short azul',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Short/Lululemon/Azul/29.svg',
            './src/imagenes/Ropa/Short/Lululemon/Azul/28.svg'
        ],
        descripcion: 'Short deportivo en tono azul intenso, perfecto para el verano.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-10': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis8/23.svg',
            './src/imagenes/Tenis/Tenis8/22.svg',
            './src/imagenes/Tenis/Tenis8/24.svg'
        ],
        descripcion: 'Jersey con cuello redondo y diseño limpio.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-11': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis9/27.svg',
            './src/imagenes/Tenis/Tenis9/26.svg',
            './src/imagenes/Tenis/Tenis9/25.svg'
        ],
        descripcion: 'Jersey con mangas cortas y tejido ultraligero.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-pantalon-6': {
        nombre: 'Nike Air',
        categoria: 'Pantalón vestir',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon vestir/Tommy/15.svg',
            './src/imagenes/Ropa/Pantalon vestir/Tommy/16.svg'
        ],
        descripcion: 'Pantalón de vestir colaboración con Tommy Hilfiger.',
        tallas: ['28', '30', '32', '34']
    },
    'nike-air-jersey-12': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis10/30.svg',
            './src/imagenes/Tenis/Tenis10/28.svg',
            './src/imagenes/Tenis/Tenis10/29.svg'
        ],
        descripcion: 'Jersey con logo bordado y acabados premium.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-13': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis11/31.svg',
            './src/imagenes/Tenis/Tenis11/32.svg',
            './src/imagenes/Tenis/Tenis11/33.svg'
        ],
        descripcion: 'Jersey con diseño deportivo y colores vibrantes.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-14': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis12/34.svg',
            './src/imagenes/Tenis/Tenis12/36.svg',
            './src/imagenes/Tenis/Tenis12/35.svg'
        ],
        descripcion: 'Jersey con corte regular y tejido suave al tacto.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-15': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis13/38.svg',
            './src/imagenes/Tenis/Tenis13/39.svg',
            './src/imagenes/Tenis/Tenis13/37.svg'
        ],
        descripcion: 'Jersey con estampado gráfico y diseño urbano.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-16': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis14/40.svg',
            './src/imagenes/Tenis/Tenis14/42.svg',
            './src/imagenes/Tenis/Tenis14/41.svg'
        ],
        descripcion: 'Jersey con inspiración retro y materiales modernos.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-17': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis15/43.svg',
            './src/imagenes/Tenis/Tenis15/45.svg',
            './src/imagenes/Tenis/Tenis15/44.svg'
        ],
        descripcion: 'Jersey con cuello en V y diseño elegante.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-18': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis16/46.svg',
            './src/imagenes/Tenis/Tenis16/48.svg',
            './src/imagenes/Tenis/Tenis16/47.svg'
        ],
        descripcion: 'Jersey con tecnología Dri-FIT para mantenerte seco.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-19': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis17/49.svg',
            './src/imagenes/Tenis/Tenis17/51.svg',
            './src/imagenes/Tenis/Tenis17/50.svg'
        ],
        descripcion: 'Jersey con diseño minimalista y colores neutros.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-20': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis18/52.svg',
            './src/imagenes/Tenis/Tenis18/54.svg',
            './src/imagenes/Tenis/Tenis18/53.svg'
        ],
        descripcion: 'Jersey con logo pequeño y corte clásico.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-21': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis19/55.svg',
            './src/imagenes/Tenis/Tenis19/57.svg',
            './src/imagenes/Tenis/Tenis19/56.svg'
        ],
        descripcion: 'Jersey con estampado floral y estilo casual.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-22': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis20/58.svg',
            './src/imagenes/Tenis/Tenis20/60.svg',
            './src/imagenes/Tenis/Tenis20/59.svg'
        ],
        descripcion: 'Jersey con rayas laterales y diseño deportivo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-23': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis21/61.svg',
            './src/imagenes/Tenis/Tenis21/63.svg',
            './src/imagenes/Tenis/Tenis21/62.svg'
        ],
        descripcion: 'Jersey con inspiración en básquetbol y tejido resistente.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-24': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis22/66.svg',
            './src/imagenes/Tenis/Tenis22/64.svg',
            './src/imagenes/Tenis/Tenis22/65.svg'
        ],
        descripcion: 'Jersey con diseño técnico y máximo rendimiento.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-25': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis23/69.svg',
            './src/imagenes/Tenis/Tenis23/70.svg',
            './src/imagenes/Tenis/Tenis23/68svg',
            './src/imagenes/Tenis/Tenis23/67.svg'
        ],
        descripcion: 'Jersey con corte holgado y estilo streetwear.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-26': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis24/73.svg',
            './src/imagenes/Tenis/Tenis24/71.svg',
            './src/imagenes/Tenis/Tenis24/72.svg'
        ],
        descripcion: 'Jersey con estampado geométrico y colores modernos.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-27': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis25/74.svg',
            './src/imagenes/Tenis/Tenis25/76.svg',
            './src/imagenes/Tenis/Tenis25/75.svg'
        ],
        descripcion: 'Jersey con tecnología de compresión y soporte muscular.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-28': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis26/79.svg',
            './src/imagenes/Tenis/Tenis26/77.svg',
            './src/imagenes/Tenis/Tenis26/78.svg'
        ],
        descripcion: 'Jersey con diseño aerodinámico para alto rendimiento.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-air-jersey-29': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Tenis/Tenis27/80.svg',
            './src/imagenes/Tenis/Tenis27/81.svg',
            './src/imagenes/Tenis/Tenis27/82.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'nike-conjunto-3': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Conjuntos/3/26.svg',
            './src/imagenes/Ropa/Playera/Tommy/Polo/17.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'pantalon-mezclilla-5': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 5/1.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 5/2.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'pantalon-mezclilla-6': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 6/3.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 6/4.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'pantalon-mezclilla-7': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 7/5.svg',
            './src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 7/6.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'pantalon-vestir-gris': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Pantalon vestir/Gris/7.svg',
            './src/imagenes/Ropa/Pantalon vestir/Gris/8.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'jersey-oklahoma': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Jersey/21.svg',
            './src/imagenes/Ropa/Jersey/22.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'jersey-tnunders': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Jersey/Rojo/24.svg',
            './src/imagenes/Ropa/Jersey/Rojo/23.svg'
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'playera-tipo-polo': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/Tipo Polo/11.svg',
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'playera-ralph': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/Tipo Polo/Ralph/13.svg',
            './src/imagenes/Ropa/Playera/Tipo Polo/Ralph/14.svg',
            './src/imagenes/Ropa/Playera/Tipo Polo/Ralph/12.svg'
            
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'playera-vans': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/Vans/20.svg',
            './src/imagenes/Ropa/Playera/Vans/18.svg',
            './src/imagenes/Ropa/Playera/Vans/19.svg'
            
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'playera-tommy-polo': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/Tommy/Polo/17.svg',
            './src/imagenes/Ropa/Playera/Tommy/Polo/16.svg',
            './src/imagenes/Ropa/Playera/Tommy/Polo/15.svg'
            
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'conjunto-tommy': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Conjuntos/5/28.svg',
            './src/imagenes/Ropa/Playera/Tipo Polo/Ralph/13.svg',
            './src/imagenes/Ropa/Pantalon vestir/Tommy/15.svg'
            
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'conjunto-4': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Conjuntos/4/27.svg',
            './src/imagenes/Ropa/Playera/Tipo Polo/Ralph/13.svg',
            './src/imagenes/Ropa/Pantalon vestir/Gris/7.svg'
            
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
    'playera-char-roja': {
        nombre: 'Nike Air',
        categoria: 'Jersey para hombre',
        precio: '$1,599',
        imagenes: [
            './src/imagenes/Ropa/Playera/Carhartt/Roja/10.svg',
            './src/imagenes/Ropa/Playera/Carhartt/Roja/9.svg'            
        ],
        descripcion: 'Jersey con acabados premium y estilo contemporáneo.',
        tallas: ['S', 'M', 'L', 'XL']
    },
};

// === FUNCIONES EXISTENTES (NO CAMBIAN) ===

// Función para obtener el ID del producto de la URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Función para cargar los datos del producto
function loadProductData(productId) {
    const product = productos[productId];
    if (!product) {
        console.error('Producto no encontrado:', productId);
        document.body.innerHTML = '<h1>Producto no encontrado</h1><p>El producto solicitado no existe.</p>';
        return;
    }

    document.title = `${product.nombre} - Nike Clone`;

    document.getElementById('productName').textContent = product.nombre;
    document.getElementById('productCategory').textContent = product.categoria;
    document.getElementById('productPrice').textContent = product.precio;
    document.getElementById('productDescription').innerHTML = `<p>${product.descripcion}</p>`;

    const thumbnailGallery = document.getElementById('thumbnailGallery');
    thumbnailGallery.innerHTML = '';
    product.imagenes.forEach((imgSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = `${product.nombre} - Vista ${index + 1}`;
        imgElement.addEventListener('click', () => {
            updateMainImage(imgSrc, index);
            setActiveThumbnail(index);
        });
        thumbnailGallery.appendChild(imgElement);
    });

    if (product.imagenes.length > 0) {
        document.getElementById('mainProductImage').src = product.imagenes[0];
        document.querySelector('.thumbnail-gallery img').classList.add('active');
    }

    const sizeButtonsContainer = document.getElementById('sizeButtons');
    sizeButtonsContainer.innerHTML = '';
    product.tallas.forEach(talla => {
        const btn = document.createElement('button');
        btn.textContent = talla;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-buttons button').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
        sizeButtonsContainer.appendChild(btn);
    });

    initImageNavigation(product.imagenes);
}

// Función para actualizar la imagen principal
function updateMainImage(imgSrc, index) {
    document.getElementById('mainProductImage').src = imgSrc;
    currentImageIndex = index;
}

// Función para marcar la miniatura activa
function setActiveThumbnail(index) {
    const thumbnails = document.querySelectorAll('.thumbnail-gallery img');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

let currentImageIndex = 0;

function initImageNavigation(images) {
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');

    prevBtn.addEventListener('click', () => {
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateMainImage(images[currentImageIndex], currentImageIndex);
            setActiveThumbnail(currentImageIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateMainImage(images[currentImageIndex], currentImageIndex);
            setActiveThumbnail(currentImageIndex);
        }
    });
}

function initFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    let isFavorite = false;

    favoriteBtn.addEventListener('click', () => {
        isFavorite = !isFavorite;
        const heartIcon = favoriteBtn.querySelector('i');
        if (isFavorite) {
            heartIcon.classList.replace('far', 'fas');
            favoriteBtn.style.backgroundColor = '#f5f5f5';
        } else {
            heartIcon.classList.replace('fas', 'far');
            favoriteBtn.style.backgroundColor = 'white';
        }
    });
}

function initAddToCartButton() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', () => {
        alert(`¡${document.getElementById('productName').textContent} ha sido agregado a tu bolsa de compra!`);
    });
}

function initPage() {
    const productId = getProductIdFromUrl();
    if (productId) {
        loadProductData(productId);
        initFavoriteButton();
        initAddToCartButton();
    } else {
        console.error('No se encontró el parámetro "id" en la URL.');
        document.body.innerHTML = '<h1>Error</h1><p>No se especificó ningún producto.</p>';
    }
}

document.addEventListener('DOMContentLoaded', initPage);
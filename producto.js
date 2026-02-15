// producto.js

// Definimos los datos de nuestros productos
const productos = {
    // === Tenis ===
    'nike-07 SE': {
        nombre: 'Nike Air Force 1 ’07 SE',
        categoria: 'Nike',
        precio: '$2,400',
        imagenes: [
            'src/imagenes/Tenis/Tenis1/2.svg',
            'src/imagenes/Tenis/Tenis1/1.svg',
            'src/imagenes/Tenis/Tenis1/3.svg'
        ],
        descripcion: 'Los Nike Air Force 1 ’07 SE combinan el estilo icónico que nunca pasa de moda con detalles modernos que elevan cualquier outfit. Su diseño limpio y elegante los convierte en el complemento perfecto para un look urbano, casual o incluso más atrevido.',
        tallas: ['CM 23', 'CM 26',]
    },
    'Hustle 3': {
        nombre: 'Nike G.T. Hustle 3',
        categoria: 'Nike',
        precio: '$3,800',
        imagenes: [
            'src/imagenes/Tenis/Tenis2/5.svg',
            'src/imagenes/Tenis/Tenis2/4.svg',
            'src/imagenes/Tenis/Tenis2/6.svg'
        ],
        descripcion: 'Los Nike G.T. Hustle 3 están diseñados para jugadores que lo dan todo en la cancha. Ligeros, rápidos y reactivos, estos tenis ofrecen el soporte y la comodidad necesarios para movimientos explosivos, cambios de dirección y jugadas intensas.',
        tallas: ['CM 26.5']
    },
    'Metallic Gold': {
        nombre: 'Air Jordan 1 Mid "Metallic Gold"',
        categoria: 'Jordan',
        precio: '$3,800',
        imagenes: [
            'src/imagenes/Tenis/Tenis3/7.svg',
            'src/imagenes/Tenis/Tenis3/8.svg',
            'src/imagenes/Tenis/Tenis3/9.svg'
        ],
        descripcion: 'Los Air Jordan 1 Mid “Metallic” destacan por su diseño icónico con detalles metálicos que aportan un toque moderno y sofisticado al legendario modelo Jordan 1. Una silueta que combina historia, estilo y actitud en cada paso.',
        tallas: ['CM 24.5']
    },
    'NXXT Gen AMPD': {
        nombre: 'LeBron NXXT Gen AMPD',
        categoria: 'LeBron',
        precio: '$2,200',
        imagenes: [
            'src/imagenes/Tenis/Tenis4/10.svg',
            'src/imagenes/Tenis/Tenis4/11.svg',
            'src/imagenes/Tenis/Tenis4/12.svg'
        ],
        descripcion: 'Los LeBron NXXT Gen AMPD están diseñados para jugadores que buscan potencia, velocidad y estabilidad en cada jugada. Inspirados en el estilo explosivo de LeBron James, estos tenis combinan rendimiento de alto nivel con un diseño moderno y agresivo.',
        tallas: ['CM 26.5']
    },
    '1 Low Alt SE': {
        nombre: 'Jordan 1 Low Alt SE',
        categoria: 'Jordan',
        precio: '$2,500',
        imagenes: [
            'src/imagenes/Tenis/Tenis16/46.svg',
            'src/imagenes/Tenis/Tenis16/47.svg',
            'src/imagenes/Tenis/Tenis16/48.svg'
        ],
        descripcion: 'Los Jordan 1 Low Alt SE ofrecen el estilo clásico de Jordan 1 en una versión más práctica y cómoda para el uso diario. Su diseño de corte bajo permite mayor libertad de movimiento, mientras que los detalles especiales le dan un toque moderno y fresco.',
        tallas: ['CM 24.5']
    },
    'Delta 3 Low': {
        nombre: 'Jordan Delta 3 Low',
        categoria: 'Jordan',
        precio: '$1,950',
        imagenes: [
            'src/imagenes/Tenis/Tenis25/74.svg',
            'src/imagenes/Tenis/Tenis25/75.svg',
            'src/imagenes/Tenis/Tenis25/76.svg'
        ],
        descripcion: 'Los Jordan Delta 3 Low combinan innovación, comodidad y estilo moderno en un diseño ligero y versátil. Pensados para el ritmo del día a día, estos tenis destacan por su estética contemporánea y su construcción enfocada en la comodidad.',
        tallas: ['CM 25.5']
    },
    'Terrex Agravic': {
        nombre: 'Adidas Terrex Agravic Speed Trail',
        categoria: 'Adidas',
        precio: '$2,200',
        imagenes: [
            'src/imagenes/Tenis/Tenis27/80.svg',
            'src/imagenes/Tenis/Tenis27/81.svg',
            'src/imagenes/Tenis/Tenis27/82.svg'
        ],
        descripcion: 'Los Adidas Terrex Agravic Speed Trail están diseñados para correr a alta velocidad en terrenos irregulares y exigentes. Ligeros, resistentes y con excelente agarre, son ideales para quienes buscan rendimiento y control en rutas de montaña y senderos.',
        tallas: ['CM 25.5']
    },
    'NMD_r1': {
        nombre: 'Adidas NMD_r1',
        categoria: 'Adidas',
        precio: '$2,400',
        imagenes: [
            'src/imagenes/Tenis/Tenis21/61.svg',
            'src/imagenes/Tenis/Tenis21/62.svg',
            'src/imagenes/Tenis/Tenis21/63.svg'
        ],
        descripcion: 'Los Adidas NMD_R1 combinan diseño urbano moderno con comodidad excepcional, convirtiéndose en un básico imprescindible para el día a día. Inspirados en el estilo streetwear, destacan por su estética limpia y versátil que se adapta fácilmente a cualquier outfit.',
        tallas: ['CM 26.5']
    },
    'Low Ridescent Swoosh': {
        nombre: 'Nike Dunk Low Ridescent Swoosh',
        categoria: 'Nike',
        precio: '$2,350',
        imagenes: [
            'src/imagenes/Tenis/Tenis18/52.svg',
            'src/imagenes/Tenis/Tenis18/53.svg',
            'src/imagenes/Tenis/Tenis18/54.svg'
        ],
        descripcion: 'Los Nike Dunk Low “Iridescent Swoosh” combinan el estilo clásico del Dunk con un detalle moderno que roba miradas: su Swoosh iridiscente, que cambia de tono según la luz. Un diseño atrevido que eleva cualquier look urbano.',
        tallas: ['CM 26.5']
    },
    'Flyease oly': {
        nombre: 'Nike Air Force 1 ’07 Flyease Oly',
        categoria: 'Nike',
        precio: "$2,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis11/31.svg',
            'src/imagenes/Tenis/Tenis11/32.svg',
            'src/imagenes/Tenis/Tenis11/33.svg'
        ],
        descripcion: 'Un ícono reinventado para mayor comodidad y accesibilidad. Los Nike Air Force 1 ’07 FlyEase combinan el diseño clásico que nunca pasa de moda con un sistema de ajuste innovador que permite calzarlos de forma rápida y sencilla.',
        tallas: ['CM 25']
    },
    'jordan1 low': {
        nombre: 'Jordan 1 Low',
        categoria: 'jordan',
        precio: "$2,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis8/23.svg',
            'src/imagenes/Tenis/Tenis8/22.svg',
            'src/imagenes/Tenis/Tenis8/24.svg'
        ],
        descripcion: 'Los Jordan 1 Low en color marrón combinan el diseño icónico de Jordan con una paleta de tonos cálidos que aporta un estilo elegante y versátil. Su silueta de corte bajo los hace ideales para el uso diario, ofreciendo comodidad y libertad de movimiento sin perder la esencia clásica de la marca.',
        tallas: ['CM 22.5', 'CM 24', 'CM 26', 'CM 27']
    },
    'Stan-Smith': {
        nombre: 'Adidas Stan Smith',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis64/68.svg',
            'src/imagenes/Tenis/Tenis64/69.svg',
            'src/imagenes/Tenis/Tenis64/70.svg'
        ],
        descripcion: 'Los Adidas Stan Smith son un ícono del calzado deportivo y urbano. Su diseño limpio y minimalista los convierte en un par atemporal que combina con cualquier outfit, desde looks casuales hasta estilos más sofisticados.',
        tallas: ['CM 23', 'CM 25']
    },
    'Court-base': {
        nombre: 'Adidas VL Court Base',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis75/102.svg',
            'src/imagenes/Tenis/Tenis75/103.svg',
            'src/imagenes/Tenis/Tenis75/104.svg'
        ],
        descripcion: 'Los Adidas VL Court Base combinan un diseño clásico inspirado en el skate y el estilo urbano con la comodidad ideal para el uso diario. Su silueta limpia y atemporal los convierte en un par versátil que se adapta fácilmente a cualquier outfit casual.',
        tallas: ['CM 26 ']
    },
    'Force-1-dance': {
        nombre: 'Nike Air Force One Dance',
        categoria: 'Nike',
        precio: "$2,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis10/30.svg',
            'src/imagenes/Tenis/Tenis10/28.svg',
            'src/imagenes/Tenis/Tenis10/29.svg'
        ],
        descripcion: 'Los Nike Air Force 1 Dance reinventan el icónico modelo Air Force 1 con un diseño pensado para el movimiento y la expresión. Ideales para baile, entrenamientos dinámicos o uso urbano, combinan estilo clásico con una construcción más flexible y ligera.',
        tallas: ['CM 26']
    },
    'Dunk-jumbo': {
        nombre: 'Nike Air Dunk Jumbo Photon Dust',
        categoria: 'Nike',
        precio: "$2,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis32/17.svg',
            'src/imagenes/Tenis/Tenis32/18.svg',
            'src/imagenes/Tenis/Tenis32/19.svg',
            'src/imagenes/Tenis/Tenis32/20.svg',
            'src/imagenes/Tenis/Tenis32/21.svg',
            'src/imagenes/Tenis/Tenis32/22.svg'
        ],
        descripcion: 'El Nike Dunk Jumbo Photon Dust es una reinterpretación moderna del clásico Dunk, pensada para quienes buscan destacar con un estilo urbano más audaz. Este modelo conserva la esencia icónica de Nike Dunk, pero incorpora detalles oversized que le dan una vibra contemporánea y llamativa.',
        tallas: ['CM 26']
    },
    'GT-cut-3': {
        nombre: 'Nike G.T Cut 3',
        categoria: 'Nike',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis70/86.svg',
            'src/imagenes/Tenis/Tenis70/87.svg',
            'src/imagenes/Tenis/Tenis70/88.svg'
        ],
        descripcion: 'Para el jugador que no conoce límites. Presentamos las Nike G.T. Cut 3, diseñadas para los más rápidos, los que cambian de dirección en un instante y exigen cada centímetro de la cancha. No es solo una evolución; es la culminación de la filosofía G.T. (Greater Than), donde la velocidad, la tracción y la amortiguación se fusionan en una sola herramienta de dominación.',
        tallas: ['CM 25']
    },
    'Ship-PE': {
        nombre: 'Jordan Air Ship PE SP Tech Grey',
        categoria: 'Jordan',
        precio: "$2,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis6/18.svg',
            'src/imagenes/Tenis/Tenis6/17.svg',
            'src/imagenes/Tenis/Tenis6/16.svg'
        ],
        descripcion: 'Antes del Air Jordan 1, estaba el Air Ship. Esta silueta histórica, que Michael Jordan lució en sus primeros meses como profesional, regresa en una edición especial de colección: el Air Ship PE SP Tech Grey. Este colorway "Player Exclusive" (PE) captura la esencia pura de la era en que una leyenda comenzaba a despegar.',
        tallas: ['CM 27 ']
    },
    'Dunk-retro': {
        nombre: 'Nike Dunk low retro',
        categoria: 'Nike',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis20/58.svg',
            'src/imagenes/Tenis/Tenis20/59.svg',
            'src/imagenes/Tenis/Tenis20/60.svg'
        ],
        descripcion: 'La silueta que conquistó primero las canchas y luego el mundo. La Nike Dunk Low Retro revive el diseño original de 1985, creado para dominar la duela y representar a las mejores universidades. Hoy, tras ser adoptada por las subculturas del skate y el streetwear, se ha convertido en un símbolo de autenticidad y estilo irreverente.',
        tallas: ['CM 25.5 ']
    },
    '1 Low LV8': {
        nombre: 'Nike Air Force 1 Low LV8 Black White',
        categoria: 'Nike',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis39/43.svg',
            'src/imagenes/Tenis/Tenis39/44.svg',
            'src/imagenes/Tenis/Tenis39/45.svg',
            'src/imagenes/Tenis/Tenis39/46.svg'
        ],
        descripcion: 'La silueta más limpia y reconocible del mundo, llevada a un nuevo nivel de sofisticación. Las Nike Air Force 1 Low LV8 en Black White toman la fórmula imbatible del diseño original y la refinan con materiales y detalles superiores. No es solo una Air Force 1; es la expresión premium de un legado que nunca pasa de moda.',
        tallas: ['CM 26.5 ']
    },
    'low-se': {
        nombre: 'Jordan 1 Low Se vaquero',
        categoria: 'Jordan',
        precio: "$2,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis13/38.svg',
            'src/imagenes/Tenis/Tenis13/39.svg',
            'src/imagenes/Tenis/Tenis13/37.svg'
        ],
        descripcion: 'La silueta más icónica de las calles adopta el material más icónico de América. Las Jordan 1 Low SE Denim son una celebración de dos pilares de la cultura: el baloncesto y el workwear. Este modelo Special Edition (SE) toma la versión baja de la AJ1 y la viste con mezclilla lavada y detalles inspirados en la sastrería vaquera, creando un zapato único, lleno de carácter y versátil.',
        tallas: ['CM 24.5', 'CM 26 ']
    },
    'af1-basicos': {
        nombre: 'Nike Air Force 1 Blancos',
        categoria: 'Nike',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis14/40.svg',
            'src/imagenes/Tenis/Tenis14/41.svg',
            'src/imagenes/Tenis/Tenis14/42.svg'
        ],
        descripcion: 'No son solo unas zapatillas. Son el estándar. Las Nike Air Force 1 en blanco total son la piedra angular sobre la que se ha construido gran parte de la cultura sneaker y del streetwear moderno. Desde su nacimiento en la duela en 1982 hasta su reinado absoluto en las calles, este par representa la pureza, la versatilidad y la actitud imbatible. Un lienzo en blanco que todos han customizado, pero que en su estado original sigue siendo la declaración más poderosa.',
        tallas: ['CM 24 ', 'CM 25']
    },
    'Air Ship PE SP': {
        nombre: 'Nike Jordan Air Ship PE SP Corporate Got',
        categoria: 'Nike Jordan',
        precio: "$2,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis5/15.svg',
            'src/imagenes/Tenis/Tenis5/14.svg',
            'src/imagenes/Tenis/Tenis5/13.svg'
        ],
        descripcion: 'Esto no es un lanzamiento. Es un artefacto histórico. Los Jordan Air Ship PE SP Corporate Got encapsulan uno de los momentos más audaces y significativos en la historia del negocio del deporte: cuando Michael Jordan y su agente, David Falk, forzaron a Nike a crear una línea de calzado exclusiva para él, dando a luz al fenómeno Air Jordan. El "Corporate Got" (algo así como "Le Ganamos a la Corporación") es un guiño interno a esa victoria.',
        tallas: ['CM 26 ']
    },
    'Low LX': {
        nombre: 'Nike Dunk Low LX Rosa',
        categoria: 'Nike ',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis7/19.svg',
            'src/imagenes/Tenis/Tenis7/20.svg',
            'src/imagenes/Tenis/Tenis7/21.svg'
        ],
        descripcion: 'La silueta que conquistó las rampas y las calles adopta una expresión de lujo audaz. Las Nike Dunk Low LX en rosa toman la esencia cruda del Dunk original y la refinan con materiales premium y una paleta de color con carácter. Este no es un color pastel tímido; es una declaración de confianza, energía y un estilo que no pasa desapercibido.',
        tallas: ['CM 26', 'CM 27']
    },
    'Low-07 Next': {
        nombre: 'Nike Tenis Air Force 1 Low ’07 Next Nature/Aster Pink',
        categoria: 'Nike ',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis9/27.svg',
            'src/imagenes/Tenis/Tenis9/26.svg',
            'src/imagenes/Tenis/Tenis9/25.svg'
        ],
        descripcion: 'Dale un toque fresco y moderno a tu outfit con los Nike Air Force 1 Low ’07 Next Nature en Aster Pink. Este clásico reinventado combina el icónico diseño Air Force 1 con materiales más responsables, sin perder estilo ni comodidad. Su tonalidad rosa suave aporta un look femenino y versátil, perfecto para el día a día. Cuentan con una suela resistente y amortiguación Air que brinda confort en cada paso, ideales para quienes buscan tendencia, calidad y actitud en un solo par.',
        tallas: ['CM 25.5']
    },
    'low evo action': {
        nombre: 'Nike Air Force 1 low evo action',
        categoria: 'Nike ',
        precio: "$2,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis12/34.svg',
            'src/imagenes/Tenis/Tenis12/35.svg',
            'src/imagenes/Tenis/Tenis12/36.svg'
        ],
        descripcion: 'Los Nike Air Force 1 Low Evo Action reinventan un clásico con un diseño dinámico y detalles modernos que elevan cualquier outfit. Mantienen la silueta icónica del Air Force 1, combinada con materiales de alta calidad y una construcción resistente que ofrece comodidad y durabilidad durante todo el día.',
        tallas: ['CM 24.5']
    },
    'Velvet Laces': {
        nombre: 'Nike Air Force 1 Velvet Laces',
        categoria: 'Nike ',
        precio: "$2,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis15/43.svg',
            'src/imagenes/Tenis/Tenis15/44.svg',
            'src/imagenes/Tenis/Tenis15/45.svg'
        ],
        descripcion: 'Los Nike Air Force 1 Velvet Laces combinan el diseño clásico que nunca pasa de moda con un detalle sofisticado que marca la diferencia: sus agujetas de terciopelo. Este toque elegante eleva cualquier outfit, aportando estilo y personalidad sin perder la esencia urbana del Air Force 1.',
        tallas: ['CM 25.5', 'CM 26.5']
    },
    'Upside Down': {
        nombre: 'Nike Dunk Low Upside Down',
        categoria: 'Nike ',
        precio: "$ 1,950",
        imagenes: [
            'src/imagenes/Tenis/Tenis17/49.svg',
            'src/imagenes/Tenis/Tenis17/50.svg',
            'src/imagenes/Tenis/Tenis17/51.svg'
        ],
        descripcion: 'Los Nike Dunk Low Upside Down rompen las reglas con un diseño creativo y lleno de actitud. Este modelo destaca por sus detalles invertidos y contrastes únicos que le dan un look atrevido y moderno, ideal para quienes buscan salirse de lo común.',
        tallas: ['CM 24']
    },
    'Red Stardust': {
        nombre: 'Nike Tenis Dunk Low "Red Stardust"',
        categoria: 'Nike ',
        precio: "$ 1,950",
        imagenes: [
            'src/imagenes/Tenis/Tenis19/55.svg',
            'src/imagenes/Tenis/Tenis19/56.svg',
            'src/imagenes/Tenis/Tenis19/57.svg'
        ],
        descripcion: 'Los Nike Dunk Low “Red Stardust” destacan por su combinación de colores suaves y modernos que aportan un look fresco y lleno de estilo. Su diseño clásico Dunk se fusiona con detalles femeninos y versátiles, ideales para complementar outfits casuales o streetwear.',
        tallas: ['CM 25.5']
    },
    'Terrex Agravic speed': {
        nombre: 'Adidas Trail Running Terrex Agravic Speed Ultra',
        categoria: 'Adidas ',
        precio: "$ 2,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis22/66.svg',
            'src/imagenes/Tenis/Tenis22/65.svg',
            'src/imagenes/Tenis/Tenis22/64.svg'
        ],
        descripcion: 'Los Adidas Terrex Agravic Speed Ultra están diseñados para quienes buscan máximo rendimiento en trail running sin sacrificar estilo. Su construcción ligera y resistente brinda estabilidad y soporte en terrenos irregulares, mientras que su suela de alto agarre ofrece tracción superior incluso en condiciones exigentes.',
        tallas: ['CM 25.5']
    },
    'NMD_S1 W': {
        nombre: 'Adidas NMD_S1 W in the Cloud White',
        categoria: 'Adidas ',
        precio: "$ 2,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis23/69.svg',
            'src/imagenes/Tenis/Tenis23/67.svg',
            'src/imagenes/Tenis/Tenis23/68.svg',
            'src/imagenes/Tenis/Tenis23/70.svg'
        ],
        descripcion: 'Los Adidas NMD_S1 W “Cloud White” combinan un diseño futurista con un estilo minimalista que eleva cualquier look urbano. Su silueta moderna en tono blanco aporta un aire limpio y sofisticado, ideal para outfits casuales o streetwear.',
        tallas: ['CM 25']
    },
    'Granville Pro': {
        nombre: 'Jordan Granville Pro SP',
        categoria: 'Jordan ',
        precio: "$ 2,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis24/73.svg',
            'src/imagenes/Tenis/Tenis24/72.svg',
            'src/imagenes/Tenis/Tenis24/71.svg',
        ],
        descripcion: 'Los Jordan Granville Pro SP en “Cool Grey” combinan un diseño moderno con la esencia deportiva de la marca Jordan. Su tonalidad gris aporta un look limpio y versátil, fácil de combinar con cualquier outfit urbano o casual.',
        tallas: ['CM 25']
    },
    'Adidas NMD_R1': {
        nombre: 'Adidas NMD_R1 con toques rojos y azules',
        categoria: 'Adidas ',
        precio: "$ 1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis26/79.svg',
            'src/imagenes/Tenis/Tenis26/77.svg',
            'src/imagenes/Tenis/Tenis26/78.svg',
        ],
        descripcion: 'Los Adidas NMD_R1 en color blanco con bloques en rojo y azul combinan un diseño limpio con acentos vibrantes que le dan un toque moderno y urbano. Su silueta icónica se adapta fácilmente a cualquier outfit casual o streetwear, aportando estilo y personalidad.',
        tallas: ['CM 22']
    },
    'Zoom Pegasus': {
        nombre: 'Nike Air Zoom Pegasus 39',
        categoria: 'Nike ',
        precio: "$ 1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis28/3.svg',
            'src/imagenes/Tenis/Tenis28/1.svg',
            'src/imagenes/Tenis/Tenis28/2.svg',
            'src/imagenes/Tenis/Tenis28/4.svg'
        ],
        descripcion: 'Los Nike Zoom Pegasus 39 están diseñados para ofrecer comodidad, ligereza y respuesta en cada carrera. Su diseño versátil los hace ideales tanto para entrenamientos diarios como para el uso casual deportivo.',
        tallas: ['CM 26.5']
    },
    'Downshifter 13': {
        nombre: 'Nike Downshifter 13',
        categoria: 'Nike ',
        precio: "$ 1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis29/5.svg',
            'src/imagenes/Tenis/Tenis29/6.svg',
            'src/imagenes/Tenis/Tenis29/7.svg',
            'src/imagenes/Tenis/Tenis29/8.svg'
        ],
        descripcion: 'Los Nike Downshifter 13 combinan ligereza, comodidad y estilo para acompañarte en cada paso del día. Diseñados con una malla transpirable y suela flexible, ofrecen soporte y amortiguación ideales tanto para entrenamientos como para uso diario. Su diseño moderno y versátil los hace perfectos para quienes buscan un calzado funcional sin renunciar al look urbano.',
        tallas: ['CM 25']
    },
    'Vision Low Beige': {
        nombre: 'Nike Court Vision Low Beige And White',
        categoria: 'Nike ',
        precio: "$ 1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis30/9.svg',
            'src/imagenes/Tenis/Tenis30/10.svg',
            'src/imagenes/Tenis/Tenis30/11.svg'
        ],
        descripcion: 'Los Nike Court Vision Low en Beige y White combinan un estilo clásico con detalles modernos, perfectos para cualquier outfit casual o urbano. Su diseño versátil y colores neutros los hacen fáciles de combinar, mientras que la construcción resistente y la suela acolchada brindan comodidad durante todo el día. Un calzado que mezcla estilo, funcionalidad y la esencia deportiva de Nike.',
        tallas: ['CM 27']
    },
    'Dn Green': {
        nombre: 'Nike Air Max Dn Green',
        categoria: 'Nike ',
        precio: "$ 2,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis31/12.svg',
            'src/imagenes/Tenis/Tenis31/13.svg',
            'src/imagenes/Tenis/Tenis31/14.svg',
            'src/imagenes/Tenis/Tenis31/15.svg',
            'src/imagenes/Tenis/Tenis31/16.svg'
        ],
        descripcion: 'Los Nike Air Max Dn Green combinan la icónica amortiguación Air Max con un diseño moderno y lleno de estilo. Su color verde aporta un look fresco y urbano, perfecto para destacar en tu día a día. La construcción ligera y la suela acolchada ofrecen comodidad y soporte en cada paso, ideales para quienes buscan tendencia sin sacrificar confort.',
        tallas: ['CM 26.5']
    },
    'Structure 26': {
        nombre: 'Nike Structure 26 running',
        categoria: 'Nike ',
        precio: "$ 2,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis34/27.svg',
            'src/imagenes/Tenis/Tenis34/28.svg',
            'src/imagenes/Tenis/Tenis34/29.svg',
            'src/imagenes/Tenis/Tenis34/30.svg'
        ],
        descripcion: 'Los Nike Structure 26 están diseñados para brindar estabilidad y soporte en cada carrera, combinando rendimiento y comodidad. Su amortiguación reactiva protege tus pies durante largas distancias, mientras que la parte superior de malla transpirable mantiene la frescura y ligereza en cada paso. Ideales tanto para corredores principiantes como experimentados que buscan confianza y eficiencia en sus entrenamientos.',
        tallas: ['CM 26']
    },
    'C1TY': {
        nombre: 'Nike C1TY',
        categoria: 'Nike ',
        precio: "$ 1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis35/31.svg',
            'src/imagenes/Tenis/Tenis35/32.svg',
            'src/imagenes/Tenis/Tenis35/33.svg',
        ],
        descripcion: 'Los Nike C1TY combinan estilo urbano y comodidad para el día a día. Su diseño moderno y minimalista los hace perfectos para cualquier outfit casual o streetwear, mientras que la construcción ligera y la amortiguación proporcionan confort durante todo el día. Ideales para quienes buscan un calzado versátil que se vea tan bien como se siente.',
        tallas: ['CM 26.5']
    },
    'Air Winflo': {
        nombre: 'Nike Air Winflo 10',
        categoria: 'Nike ',
        precio: "$ 1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis36/34.svg',
            'src/imagenes/Tenis/Tenis36/35.svg',
            'src/imagenes/Tenis/Tenis36/36.svg',
            'src/imagenes/Tenis/Tenis36/39.svg'
        ],
        descripcion: 'Los Nike Air Winflo 10 están diseñados para ofrecer comodidad y rendimiento en cada paso. Su amortiguación Air proporciona una pisada suave y reactiva, mientras que la parte superior de malla transpirable mantiene el pie fresco y ligero durante entrenamientos o uso diario. Perfectos para corredores que buscan soporte, ligereza y estilo en un solo calzado.',
        tallas: ['CM 27']
    },
    'Premium Airscape': {
        nombre: 'Nike Pegasus Premium Airscape',
        categoria: 'Nike ',
        precio: "$ 3,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis38/37.svg',
            'src/imagenes/Tenis/Tenis38/38.svg',
            'src/imagenes/Tenis/Tenis38/40.svg',
            'src/imagenes/Tenis/Tenis38/41.svg',
            'src/imagenes/Tenis/Tenis38/42.svg'
        ],
        descripcion: 'Los Nike Pegasus Premium Airscape combinan la legendaria comodidad de la línea Pegasus con un diseño moderno y urbano. Su amortiguación reactiva ofrece pisadas suaves y estables, mientras que la parte superior de malla transpirable mantiene tus pies frescos durante todo el día. Ideales para entrenamientos, caminatas o simplemente para lucir un estilo deportivo y sofisticado.',
        tallas: ['CM 26.5']
    },
    'Frank Rudy': {
        nombre: 'Nike Air Max 97 Frank Rudy',
        categoria: 'Nike ',
        precio: "$ 3,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis40/47.svg',
            'src/imagenes/Tenis/Tenis40/48.svg',
            'src/imagenes/Tenis/Tenis40/49.svg',
            'src/imagenes/Tenis/Tenis40/50.svg',
            'src/imagenes/Tenis/Tenis40/51.svg',
            'src/imagenes/Tenis/Tenis40/52.svg'
        ],
        descripcion: 'Los Nike Air Max 97 “Frank Rudy” rinden homenaje al innovador diseñador de la amortiguación Air, combinando estilo icónico con tecnología de confort superior. Su silueta futurista y líneas fluidas, junto con los detalles modernos en color, los hacen perfectos para destacar en cualquier look urbano o casual. La amortiguación Air proporciona una pisada suave y estable, ideal para quienes buscan diseño y rendimiento en un solo par.',
        tallas: ['CM 25.5']
    },
    'Waffle Debut': {
        nombre: 'Nike Waffle Debut',
        categoria: 'Nike ',
        precio: "$ 1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis41/53.svg',
            'src/imagenes/Tenis/Tenis41/54.svg',
            'src/imagenes/Tenis/Tenis41/55.svg'
        ],
        descripcion: 'Los Nike Waffle Debut combinan la silueta clásica de Nike con un estilo moderno y versátil. Su suela con patrón Waffle proporciona tracción y durabilidad, mientras que la parte superior ligera y transpirable garantiza comodidad durante todo el día. Perfectos para quienes buscan un calzado casual con un toque retro y urbano.',
        tallas: ['CM 26']
    },
    'Cosmic Runner': {
        nombre: 'Nike Cosmic Runner',
        categoria: 'Nike ',
        precio: "$ 1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis42/1.svg',
            'src/imagenes/Tenis/Tenis42/2.svg',
            'src/imagenes/Tenis/Tenis42/3.svg'
        ],
        descripcion: 'Los Nike Cosmic Runner están diseñados para ofrecer comodidad y rendimiento durante todo el día, con un estilo moderno que se adapta a cualquier look urbano o deportivo. Su amortiguación ligera proporciona pisadas suaves y reactivas, mientras que la parte superior de malla transpirable mantiene el pie fresco y cómodo en cada paso. Ideales para entrenamientos, caminatas o para quienes buscan un calzado versátil y con actitud.',
        tallas: ['CM 24']
    },
    'Adjust 5': {
        nombre: 'Nike Sunray Adjust 5 V2 Azul',
        categoria: 'Nike ',
        precio: "$ 550",
        imagenes: [
            'src/imagenes/Tenis/Tenis43/4.svg',
            'src/imagenes/Tenis/Tenis43/5.svg'
        ],
        descripcion: 'Los Nike Sunray Adjust 5 V2 combinan comodidad, practicidad y estilo deportivo en un solo calzado. Su diseño ligero y ajustable permite un calce perfecto, mientras que la suela resistente brinda tracción segura en cada paso. El vibrante color azul aporta un look fresco y moderno, ideal para actividades al aire libre, juegos o uso diario.',
        tallas: ['CM 24']
    },
    'IsoFly': {
        nombre: 'Nike IsoFly Naranjas',
        categoria: 'Nike ',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis44/6.svg',
            'src/imagenes/Tenis/Tenis44/7.svg',
            'src/imagenes/Tenis/Tenis44/8.svg'
        ],
        descripcion: 'Los Nike IsoFly Naranjas destacan por su estilo vibrante y diseño moderno, combinando comodidad y rendimiento en cada paso. Su amortiguación ligera y reactiva brinda pisadas suaves, mientras que la parte superior transpirable mantiene el pie fresco durante entrenamientos o uso diario. Ideales para quienes buscan un calzado llamativo, versátil y con actitud.',
        tallas: ['CM 23.5']
    },
    'G.T. Cut 3-blancos': {
        nombre: 'Nike G.T. Cut 3 Blancos',
        categoria: 'Nike ',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis45/9.svg',
            'src/imagenes/Tenis/Tenis45/10.svg',
            'src/imagenes/Tenis/Tenis45/11.svg'
        ],
        descripcion: 'Los Nike G.T. Cut 3 Blancos combinan estilo moderno y comodidad para tus entrenamientos de alto rendimiento. Su diseño elegante y minimalista permite un look limpio y versátil, mientras que la amortiguación ligera y la suela resistente brindan soporte y confort en cada paso. Perfectos para deportes, gym o para un estilo urbano activo.',
        tallas: ['CM 23.5']
    },
    'Copa Pure II': {
        nombre: 'Adidas Copa Pure II Club Multiterreno ',
        categoria: 'Adidas ',
        precio: "$850",
        imagenes: [
            'src/imagenes/Tenis/Tenis47/15.svg',
            'src/imagenes/Tenis/Tenis47/16.svg',
            'src/imagenes/Tenis/Tenis47/17.svg',
            'src/imagenes/Tenis/Tenis47/18.svg'
        ],
        descripcion: 'Los Adidas Copa Pure II Club Multiterreno están diseñados para ofrecer control, precisión y comodidad en cualquier superficie de juego. Su construcción resistente y materiales de alta calidad garantizan durabilidad, mientras que el diseño ergonómico y la suela multiterreno brindan tracción óptima y soporte en cada movimiento. Perfectos para jugadores que buscan rendimiento y estilo dentro y fuera del campo.',
        tallas: ['CM 23.5']
    },
    'Tatum 1': {
        nombre: 'Jordan Tatum 1',
        categoria: 'Jordan ',
        precio: "$2,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis48/19.svg',
            'src/imagenes/Tenis/Tenis48/20.svg',
            'src/imagenes/Tenis/Tenis48/21.svg'
        ],
        descripcion: 'Los Jordan Tatum 1 combinan el estilo icónico de la línea Jordan con la innovación y rendimiento que exige el juego moderno. Diseñados para brindar soporte y comodidad en la cancha, cuentan con amortiguación reactiva y suela de tracción avanzada para movimientos rápidos y precisos. Su diseño moderno y versátil también los hace perfectos para lucir un look urbano fuera del deporte.',
        tallas: ['CM 24']
    },
    'Retro High OG': {
        nombre: 'Nike Air Jordan 1 Retro High OG',
        categoria: 'Jordan ',
        precio: "$3,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis3/7.svg',
            'src/imagenes/Tenis/Tenis3/8.svg',
            'src/imagenes/Tenis/Tenis3/9.svg'
        ],
        descripcion: 'Inspirados en el espíritu revolucionario de Michael Jordan, los Air Jordan 1 Retro High OG son mucho más que unas zapatillas: son el arma de estilo definitiva que combina el ADN explosivo del baloncesto con una actitud callejera indomable. Diseñados para quienes no solo siguen tendencias, sino que las dictan desde 1985.',
        tallas: ['CM 24.5']
    },
    'Low Jumbo': {
        nombre: 'Nike Air Dunk Low Jumbo Photon Dust',
        categoria: 'Nike ',
        precio: "$2,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis32/17.svg',
            'src/imagenes/Tenis/Tenis32/18.svg',
            'src/imagenes/Tenis/Tenis32/19.svg',
            'src/imagenes/Tenis/Tenis32/20.svg',
            'src/imagenes/Tenis/Tenis32/21.svg'
        ],
        descripcion: 'Para los que creen que los clásicos deben evolucionar o morir. Los Nike Dunk Low jumbo Photon Dust toman la silueta más venerada del streetwear y la someten a una transformación radical: dimensiones exageradas, texturas disruptivas y una paleta que parece extraída de un paisaje post-digital. No es una reinterpretación; es una reinvención agresiva.',
        tallas: ['CM 26']
    },
    'nike-07 SE Black': {
        nombre: 'Nike Air Force 1 ’07 SE Black',
        categoria: 'Nike ',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis39/43.svg',
            'src/imagenes/Tenis/Tenis39/44.svg',
            'src/imagenes/Tenis/Tenis39/45.svg',
            'src/imagenes/Tenis/Tenis39/46.svg'
        ],
        descripcion: 'Cuando el ícono más blanco del calzado decide vestirse de noche, el resultado es puro poder sofisticado. Los Nike Air Force 1 ’07 SE Black toman la leyenda y la sumergen en una negrura elegante, añadiendo materiales superiores y detalles de edición especial que transforman el básico en extraordinario. No es solo una Air Force 1 negra; es la declaración definitiva de minimalismo oscuro con carácter.',
        tallas: ['CM 26.5']
    },
    'Mercurial x Mason': {
        nombre: 'Nike Mercurial x Mason',
        categoria: 'Nike ',
        precio: "$900",
        imagenes: [
            'src/imagenes/Tenis/Tenis49/22.svg',
            'src/imagenes/Tenis/Tenis49/23.svg',
            'src/imagenes/Tenis/Tenis49/24.svg'
        ],
        descripcion: 'Diseñados para jugadores que viven de la velocidad y la precisión, los Nike Mercurial x Mason combinan un diseño audaz con el rendimiento explosivo que caracteriza a la línea Mercurial. Su estructura ligera ofrece un ajuste ceñido que se adapta al pie como una segunda piel, permitiendo cambios de dirección rápidos y un control excepcional del balón.',
        tallas: ['CM 24.5']
    },
    'Manoa': {
        nombre: 'Nike Manoa Negras',
        categoria: 'Nike ',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis50/25.svg',
            'src/imagenes/Tenis/Tenis50/26.svg',
            'src/imagenes/Tenis/Tenis50/27.svg',
            'src/imagenes/Tenis/Tenis50/28.svg'
        ],
        descripcion: 'Las Nike Manoa negras combinan un diseño robusto con una estética limpia y versátil, perfectas tanto para la ciudad como para aventuras casuales al aire libre. Su parte superior de cuero resistente ofrece durabilidad y protección ligera contra el clima, mientras que el cuello acolchado y las lengüetas reforzadas garantizan comodidad incluso durante largas jornadas de uso.',
        tallas: ['CM 23.5', 'CM 24']
    },
    'USA 84': {
        nombre: 'Adidas USA 84 blanco y gris metálico',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis51/29.svg',
            'src/imagenes/Tenis/Tenis51/30.svg',
            'src/imagenes/Tenis/Tenis51/31.svg'
        ],
        descripcion: 'Las Adidas USA 84 rinden homenaje a la estética deportiva de los años 80 con una silueta clásica y elegante que ahora se adapta al estilo urbano de hoy. Presentan una parte superior ligera de textil con detalles sintéticos, creando un look limpio y versátil en blanco con acentos en gris metálico que realzan su diseño sin perder sofisticación.',
        tallas: ['CM 25', 'CM 27']
    },
    'Revolution 7': {
        nombre: 'Nike Revolution 7 Gris',
        categoria: 'Nike',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis52/32.svg',
            'src/imagenes/Tenis/Tenis52/33.svg',
            'src/imagenes/Tenis/Tenis52/34.svg'
        ],
        descripcion: 'Los Nike Revolution 7 son unos tenis de running versátiles que combinan comodidad y estilo deportivo para tu día a día. Diseñados con una entresuela de espuma suave, ofrecen una pisada acolchada y fluida ideal para correr en pavimento o caminar largas distancias con gran confort.',
        tallas: ['CM 24', 'CM 25']
    },
    'Run Defy': {
        nombre: 'Nike Run Defy Blancos',
        categoria: 'Nike',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis53/35.svg',
            'src/imagenes/Tenis/Tenis53/36.svg',
            'src/imagenes/Tenis/Tenis53/37.svg'
        ],
        descripcion: 'Los Nike Run Defy en color blanco combinan rendimiento y estilo moderno para acompañarte tanto en tus entrenamientos como en tu día a día. Diseñados con una parte superior de malla transpirable, mantienen tus pies frescos y cómodos incluso durante carreras o caminatas largas.',
        tallas: ['CM 25.5']
    },
    'Asics Gel-Kayano': {
        nombre: 'Asics Gel-Kayano Trainer Knit MT',
        categoria: 'Asics',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis54/38.svg',
            'src/imagenes/Tenis/Tenis54/39.svg',
            'src/imagenes/Tenis/Tenis54/40.svg'
        ],
        descripcion: 'Los ASICS Gel-Kayano Trainer Knit MT combinan la herencia de la icónica línea Kayano con un toque moderno de confort y estilo urbano. Su parte superior está construida con un tejido knit suave y elástico que abraza el pie como una especie de “calcetín”, ofreciendo una sensación ligera y adaptable a tu forma natural.',
        tallas: ['CM 25.5']
    },
    'Royal': {
        nombre: 'Pro-Keds Royal',
        categoria: 'Pro-Keds',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis55/41.svg',
            'src/imagenes/Tenis/Tenis55/42.svg',
            'src/imagenes/Tenis/Tenis55/43.svg'
        ],
        descripcion: 'Los PRO-Keds Royal son unas zapatillas icónicas que representan la esencia del calzado casual desde 1949, cuando este modelo se convirtió en uno de los favoritos tanto dentro como fuera de las canchas de baloncesto.',
        tallas: ['CM 24']
    },
    'Avryn': {
        nombre: 'Adidas Avryn en color negro/violeta',
        categoria: 'Pro-Keds',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis56/44.svg',
            'src/imagenes/Tenis/Tenis56/45.svg',
            'src/imagenes/Tenis/Tenis56/46.svg',
            'src/imagenes/Tenis/Tenis56/47.svg'
        ],
        descripcion: 'Las Adidas Avryn combinan lo mejor del diseño moderno con comodidad estilo sneaker para el día a día. Inspiradas en siluetas deportivas clásicas pero con un toque contemporáneo, estas zapatillas destacan por su entresuela con tecnología BOOST y Bounce, que ofrece amortiguación reactiva y retorno de energía en cada paso, haciéndolas cómodas tanto para caminar como para actividades ligeras.',
        tallas: ['CM 23.5', 'CM 25.5']
    },
    'Hoops 4.0 Mid': {
        nombre: 'Adidas Hoops 4.0 Mid en color azul con blanco',
        categoria: 'Adidas',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis57/48.svg',
            'src/imagenes/Tenis/Tenis57/49.svg',
            'src/imagenes/Tenis/Tenis57/50.svg'
        ],
        descripcion: 'Las Adidas Hoops 4.0 Mid combinan la esencia clásica del baloncesto retro con un estilo urbano moderno ideal para tu día a día. Inspiradas en el calzado de media caña de los años 80, estas zapatillas ofrecen un diseño robusto con soporte adicional en el tobillo, gracias a su silueta mid-top que equilibra comodidad y presencia visual.',
        tallas: ['CM 23.5']
    },
    'Benassi JDI': {
        nombre: 'Nike Benassi JDI en color negro',
        categoria: 'Nike',
        precio: "$700",
        imagenes: [
            'src/imagenes/Tenis/Tenis58/51.svg',
            'src/imagenes/Tenis/Tenis58/52.svg'
        ],
        descripcion: 'Las Nike Benassi JDI son unas sandalias tipo slide diseñadas para ofrecer comodidad casual y estilo relajado con la calidad característica de Nike. Cuentan con una correa superior sintética forrada con un tejido muy suave, que envuelve el empeine con confort y un acabado agradable al contacto con la piel.',
        tallas: ['CM 26']
    },
    'Victori One': {
        nombre: 'Nike Victori One en color blanco con negro',
        categoria: 'Nike',
        precio: "$700",
        imagenes: [
            'src/imagenes/Tenis/Tenis59/53.svg',
            'src/imagenes/Tenis/Tenis59/54.svg'
        ],
        descripcion: 'Las Nike Victori One reinterpretan un clásico de Nike con un diseño simple pero lleno de comodidad legendaria. Su estructura de espuma de una sola pieza proporciona una sensación suave y ligera en cada paso, ideal para relajarte tras el entrenamiento, usarlas en casa o combinar con outfits casuales en días cálidos.',
        tallas: ['CM 26']
    },
    'Basket Classic': {
        nombre: 'Puma Basket Classic XXI',
        categoria: 'Puma',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis60/55.svg',
            'src/imagenes/Tenis/Tenis60/56.svg',
            'src/imagenes/Tenis/Tenis60/57.svg'
        ],
        descripcion: 'Los Puma Basket Classic XXI son unas tenis de corte bajo que llevan el espíritu del baloncesto clásico de los años 70 al estilo urbano contemporáneo. Con un empeine de piel premium y una construcción limpia y minimalista, estos sneakers ofrecen una estética atemporal que se adapta fácilmente a cualquier outfit casual.',
        tallas: ['CM 25']
    },
    'CA Pro': {
        nombre: 'Puma CA Pro Sport Muted',
        categoria: 'Puma',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis61/58.svg',
            'src/imagenes/Tenis/Tenis61/59.svg',
            'src/imagenes/Tenis/Tenis61/60.svg'
        ],
        descripcion: 'Los Puma CA Pro Sport Muted son unas zapatillas casuales con un diseño limpio y versátil que combina lo mejor del estilo retro inspirado en el calzado de los años 70 con detalles modernos y urbanos. Su parte superior mezcla cuero sintético y materiales duraderos, aportando resistencia y un look contemporáneo que se adapta a múltiples outfits.',
        tallas: ['CM 25.5']
    },
    'Run 60s 4.0': {
        nombre: 'Adidas Run 60s 4.0',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis62/61.svg',
            'src/imagenes/Tenis/Tenis62/62.svg',
            'src/imagenes/Tenis/Tenis62/63.svg'
        ],
        descripcion: 'Las Adidas Run 60s 4.0 son unas zapatillas que unen el estilo clásico inspirado en el running con funcionalidad versátil para tu día a día. Su diseño combina una parte superior de malla transpirable y materiales sintéticos que mantienen los pies frescos y cómodos durante largas jornadas de uso.',
        tallas: ['CM 25.5']
    },
    'RBX': {
        nombre: 'RBX deportivo color blanco',
        categoria: 'RBX',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis65/71.svg',
            'src/imagenes/Tenis/Tenis65/72.svg',
            'src/imagenes/Tenis/Tenis65/73.svg'
        ],
        descripcion: 'Los RBX deportivos en color blanco son unos tenis atléticos diseñados para quienes buscan comodidad y versatilidad en actividades diarias o entrenamientos ligeros. Cuentan con una parte superior en materiales sintéticos transpirables que ayudan a mantener los pies frescos y cómodos mientras te mueves.',
        tallas: ['CM 24.5']
    },
    'GS All-Star': {
        nombre: 'Nike GT Cut 3 GS All-Star',
        categoria: 'Nike',
        precio: "$1,950",
        imagenes: [
            'src/imagenes/Tenis/Tenis66/74.svg',
            'src/imagenes/Tenis/Tenis66/75.svg',
            'src/imagenes/Tenis/Tenis66/76.svg'
        ],
        descripcion: 'Las Nike GT Cut 3 GS All‑Star son unas zapatillas de baloncesto diseñadas para jugadores jóvenes que quieren destacar en la cancha con estilo y rendimiento. Esta edición especial celebra el espíritu del All‑Star con una base mayoritariamente blanca complementada por detalles en azul, rojo y oro metálico, aportando un look dinámico y lleno de energía.',
        tallas: ['CM 24']
    },
    'Revolution 7 negros': {
        nombre: 'Nike Revolution 7 negros',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis67/77.svg',
            'src/imagenes/Tenis/Tenis67/78.svg',
            'src/imagenes/Tenis/Tenis67/79.svg'
        ],
        descripcion: 'Los Nike Revolution 7 son unos tenis de running versátiles que combinan comodidad y estilo deportivo para tu día a día. Diseñados con una entresuela de espuma suave, ofrecen una pisada acolchada y fluida ideal para correr en pavimento o caminar largas distancias con gran confort.',
        tallas: ['CM 25']
    },
    'FLOATRIDE Energy': {
        nombre: 'Reebok FLOATRIDE Energy SYMMETROS 2',
        categoria: 'Reebok',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis68/80.svg',
            'src/imagenes/Tenis/Tenis68/81.svg',
            'src/imagenes/Tenis/Tenis68/82.svg'
        ],
        descripcion: 'Las Reebok Floatride Energy Symmetros 2 son unas zapatillas diseñadas para entrenamientos diarios y running cómodo con tecnología avanzada que potencia tu rendimiento sin perder confort. Están pensadas para corredores de pisada neutra que buscan un calzado equilibrado entre amortiguación, respuesta y ligereza.',
        tallas: ['CM 24']
    },
    'Courtblock': {
        nombre: 'Adidas Courtblock blancos',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis69/83.svg',
            'src/imagenes/Tenis/Tenis69/84.svg',
            'src/imagenes/Tenis/Tenis69/85.svg'
        ],
        descripcion: 'Las Adidas Courtblock en color blanco son unas zapatillas de estilo clásico inspiradas en el diseño deportivo retro, pero pensadas para el uso urbano diario. Su estética minimalista con las icónicas tres bandas de adidas aporta una presencia limpia y versátil que combina con jeans, pantalones deportivos o incluso outfits más casuales.',
        tallas: ['CM 24']
    },
    'Legend 10': {
        nombre: 'Nike Tiempo Legend 10 Academy FG',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis71/89.svg',
            'src/imagenes/Tenis/Tenis71/90.svg',
            'src/imagenes/Tenis/Tenis71/91.svg'
        ],
        descripcion: 'Las Nike Tiempo Legend 10 Academy FG son tacos de fútbol diseñados para jugadores que buscan un equilibrio entre comodidad, control del balón y tracción en el campo de juego natural o terrenos firmes.',
        tallas: ['CM 25.5']
    },
    'Copa Pure': {
        nombre: 'Adidas Copa Pure 2 League color violeta',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis72/92.svg',
            'src/imagenes/Tenis/Tenis72/93.svg',
            'src/imagenes/Tenis/Tenis72/94.svg',
            'src/imagenes/Tenis/Tenis72/95.svg'
        ],
        descripcion: 'Los Adidas Copa Pure 2 League en color violeta son unos tacos de fútbol diseñados para dominar el juego en césped artificial (TF/2G/3G) con estilo y control total del balón. Su diseño mezcla la herencia clásica de la icónica línea Copa con toques modernos que los hacen destacar tanto en rendimiento como en estética.',
        tallas: ['CM 25.5']
    },
    'Post Slide': {
        nombre: 'Air Jordan Post Slide Light Silver Mica Green',
        categoria: 'Jordan',
        precio: "$900",
        imagenes: [
            'src/imagenes/Tenis/Tenis73/96.svg',
            'src/imagenes/Tenis/Tenis73/97.svg',
            'src/imagenes/Tenis/Tenis73/98.svg'
        ],
        descripcion: 'Las Jordan Post Slide Light Silver Mica Green combinan la legendaria estética de la marca Air Jordan con una comodidad extraordinaria para el uso diario. Estos slides cuentan con una estructura de espuma ligera de una sola pieza que ofrece una amortiguación suave y duradera, ideal para caminar, relajarte en casa o usarlas después del entrenamiento.',
        tallas: ['CM 26']
    },
    'Court Vapor': {
        nombre: 'Nike Court Vapor Lite 2',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis74/99.svg',
            'src/imagenes/Tenis/Tenis74/100.svg',
            'src/imagenes/Tenis/Tenis74/101.svg'
        ],
        descripcion: 'Los Nike Court Vapor Lite 2 son unas zapatillas de tenis diseñadas para ofrecer comodidad, tracción y movilidad en cancha dura desde el primer juego.',
        tallas: ['CM 26']
    },
    'Runfalcon': {
        nombre: 'Adidas Runfalcon 2.0',
        categoria: 'Adidas',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis76/105.svg',
            'src/imagenes/Tenis/Tenis76/106.svg',
            'src/imagenes/Tenis/Tenis76/107.svg'
        ],
        descripcion: 'Las Adidas Runfalcon 2.0 son unas zapatillas de estilo running pensadas para acompañarte tanto en tus entrenamientos como en actividades cotidianas. Su diseño combina ligereza, amortiguación y soporte confiable, lo que las hace perfectas si buscas un calzado cómodo para correr, trotar o caminar.',
        tallas: ['CM 26']
    },
    'Ebernon Low': {
        nombre: 'Nike Ebernon Low Premium',
        categoria: 'Nike',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis77/108.svg',
            'src/imagenes/Tenis/Tenis77/109.svg',
            'src/imagenes/Tenis/Tenis77/110.svg'
        ],
        descripcion: 'Los Nike Ebernon Low Premium capturan el look clásico del básquetbol de los años 80 con una silueta elegante y moderna que funciona tanto para el uso diario como para complementar looks urbanos actuales. Su diseño se inspira en los modelos de cancha vintage, con paneles cosidos y líneas limpias que evocan la esencia retro sin perder un toque contemporáneo.',
        tallas: ['CM 27']
    },
    'Phantom Luna': {
        nombre: 'Nike Phantom Luna 2 Academy',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis78/111.svg',
            'src/imagenes/Tenis/Tenis78/112.svg',
            'src/imagenes/Tenis/Tenis78/113.svg',
            'src/imagenes/Tenis/Tenis78/114.svg'
        ],
        descripcion: 'Los Nike Phantom Luna 2 Academy son tacos de fútbol pensados para los jugadores que buscan máximo control del balón y agilidad en diferentes superficies (césped natural y sintético) sin renunciar a confort y durabilidad. Diseñados para ayudar tanto a quienes organizan el juego como a quienes buscan finalizar con precisión, estos tacos combinan tecnología y estilo moderno en cada detalle.',
        tallas: ['CM 26']
    },
    'Notch S': {
        nombre: 'DC Shoes Notch SN',
        categoria: 'DC',
        precio: "$950",
        imagenes: [
            'src/imagenes/Tenis/Tenis79/1.svg',
            'src/imagenes/Tenis/Tenis79/2.svg'
        ],
        descripcion: 'Los DC Shoes Notch SN combinan el estilo clásico del skate con una funcionalidad moderna que los hace perfectos tanto para looks casuales como para el uso diario. Estos sneakers de corte bajo están construidos con una parte superior resistente en materiales sintéticos o cuero, lo que les aporta durabilidad y un ajuste cómodo que se adapta a tu pie desde el primer momento.',
        tallas: ['CM 26']
    },
    'Renew Elevate': {
        nombre: 'Nike Renew Elevate 3',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis80/3.svg',
            'src/imagenes/Tenis/Tenis80/4.svg',
            'src/imagenes/Tenis/Tenis80/5.svg'
        ],
        descripcion: 'Los Nike Renew Elevate 3 son unos tenis de baloncesto diseñados para jugadores que buscan rendimiento completo en ambos extremos de la cancha, combinando soporte, estabilidad y tracción optimizada para acelerar, girar y cambiar de dirección con confianza.',
        tallas: ['CM 26']
    },
    'Petronas Amg': {
        nombre: 'Puma x Mercedes‑AMG Petronas',
        categoria: 'Puma',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis81/6.svg',
            'src/imagenes/Tenis/Tenis81/7.svg'
        ],
        descripcion: 'Los Puma x Mercedes‑AMG Petronas reinterpretan el estilo de carrera de la Fórmula 1 con un look moderno y elegante pensado tanto para fans del motorsport como para uso diario casual. Esta colección de tenis combina la inspiración visual del equipo Mercedes‑AMG Petronas F1® con el diseño clásico y versátil de Puma, ofreciendo una pieza icónica que destaca dentro y fuera de la pista.',
        tallas: ['CM 25.5']
    },
    'Witness 8': {
        nombre: 'Nike LeBron Witness 8',
        categoria: 'LeBron',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis82/8.svg',
            'src/imagenes/Tenis/Tenis82/9.svg',
            'src/imagenes/Tenis/Tenis82/10.svg'
        ],
        descripcion: 'Los Nike LeBron Witness 8 Unisex son unas zapatillas de baloncesto versátiles diseñadas para jugadores que quieren reunir comodidad, amortiguación y tracción en un calzado completo para usar tanto en entrenamientos como en partidos. Inspiradas en la line­a LeBron de Nike, estas zapatillas combinan tecnología probada con un diseño moderno que destaca dentro y fuera de la cancha.',
        tallas: ['CM 26', 'CM 27']
    },
    'Pro Classic': {
        nombre: 'Puma CA Pro Classic',
        categoria: 'Puma',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis83/11.svg',
            'src/imagenes/Tenis/Tenis83/12.svg',
            'src/imagenes/Tenis/Tenis83/13.svg'
        ],
        descripcion: 'Los Puma CA Pro Classic son unos tenis que fusionan el estilo clásico inspirado en los modelos California de los años 80 con una estética contemporánea pensada para el uso diario. Su diseño limpio con líneas suaves y detalles icónicos aporta un look versátil que combina con prácticamente cualquier outfit casual.',
        tallas: ['CM 26']
    },
    'Juniper Trail 2': {
        nombre: 'Nike Juniper Trail 2',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis84/14.svg',
            'src/imagenes/Tenis/Tenis84/15.svg',
            'src/imagenes/Tenis/Tenis84/16.svg'
        ],
        descripcion: 'Los Nike Juniper Trail 2 son zapatillas de trail running diseñadas para corredores y aventureros que buscan tracción, durabilidad y confianza en terrenos irregulares como caminos de tierra, senderos rocosos o subidas y bajadas pronunciadas. Su construcción robusta ofrece una pisada segura y estable sin importar el tipo de superficie bajo tus pies.',
        tallas: ['CM 25.5']
    },
    'smith-adidas': {
        nombre: 'Adidas Originals Stan Smith',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis85/17.svg',
            'src/imagenes/Tenis/Tenis85/18.svg',
            'src/imagenes/Tenis/Tenis85/19.svg'
        ],
        descripcion: 'Las adidas Originals Stan Smith - Core White y sus variantes para hombre, mujer y niño son unas zapatillas clásicas de corte bajo que han trascendido generaciones desde su origen como modelo de tenis en los años 70. Su diseño limpio y simple combina perfectamente con looks urbanos, casuales y deportivos, lo que las convierte en un básico versátil para cualquier guardarropa.',
        tallas: ['CM 26']
    },
    'Suede and Chill': {
        nombre: 'Puma Suede and Chill Marshmallow Team Gold',
        categoria: 'Puma',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis86/20.svg',
            'src/imagenes/Tenis/Tenis86/21.svg',
            'src/imagenes/Tenis/Tenis86/22.svg'
        ],
        descripcion: 'Los Puma Suede XL reinterpretan el legado del clásico modelo Suede de Puma con un toque moderno y estilizado. Inspirados en décadas de cultura urbana y streetwear, estos sneakers aportan un diseño icónico en color Marshmallow (blanco cremoso) con acentos Team Gold (dorado) que les dan un look elegante y versátil que combina con cualquier outfit casual o urbano.',
        tallas: ['CM 26']
    },
    'SYSTM': {
        nombre: 'Nike Air Max SYSTM',
        categoria: 'Nike',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis87/23.svg',
            'src/imagenes/Tenis/Tenis87/24.svg',
            'src/imagenes/Tenis/Tenis87/25.svg'
        ],
        descripcion: 'Los Nike Air Max SYSTM llevan lo mejor de la herencia Air Max de Nike al presente con una estética inspirada en los modelos clásicos de los años 80 y la tecnología actual que los hace perfectos para uso diario.',
        tallas: ['CM 26.5']
    },
    'Hoops 3.0': {
        nombre: 'Adidas Hoops 3.0 Bold',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis88/26.svg',
            'src/imagenes/Tenis/Tenis88/27.svg',
            'src/imagenes/Tenis/Tenis88/28.svg'
        ],
        descripcion: 'Los adidas Hoops 3.0 Bold son unas zapatillas deportivas de estilo urbano inspiradas en el baloncesto clásico, diseñadas para quienes buscan comodidad y moda en un solo par. Estas tenis destacan por su silueta robusta con entresuela de perfil ancho, que aporta un look audaz y moderno y, al mismo tiempo, comodidad durante todo el día.',
        tallas: ['CM 26.5']
    },
    'Swift Run 22': {
        nombre: 'Adidas Swift Run 22 Verdes',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis89/29.svg',
            'src/imagenes/Tenis/Tenis89/30.svg',
            'src/imagenes/Tenis/Tenis89/31.svg'
        ],
        descripcion: 'Las Adidas Swift Run 22 son unas zapatillas inspiradas en el running clásico pero rediseñadas para la comodidad del uso diario y un estilo urbano versátil. Su parte superior de malla tejida ligera brinda una sensación transpirable que envuelve el pie con un ajuste cómodo, ideal tanto para caminar como para actividades casuales.',
        tallas: ['CM 26']
    },
    'Transport Modern': {
        nombre: 'Puma Transport Modern',
        categoria: 'Puma',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis90/33.svg',
            'src/imagenes/Tenis/Tenis90/32.svg',
            'src/imagenes/Tenis/Tenis90/34.svg'
        ],
        descripcion: 'Los Puma Transport Modern son unos tenis deportivos diseñados para ofrecer comodidad día tras día sin complicaciones, combinando funcionalidad con estilo casual. Están pensados para acompañarte desde las caminatas urbanas y el uso diario, hasta trotes ligeros o salidas informales de fin de semana.',
        tallas: ['CM 26']
    },
    'Advantage Base': {
        nombre: 'Adidas Advantage Base 2.0',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis91/35.svg',
            'src/imagenes/Tenis/Tenis91/36.svg',
            'src/imagenes/Tenis/Tenis91/37.svg'
        ],
        descripcion: 'Los adidas Advantage Base 2.0 son unos tenis de estilo lifestyle inspirados en las zapatillas clásicas de tenis, rediseñados para ofrecer comodidad, versatilidad y estilo cotidiano. Su silueta limpia con las icónicas 3 franjas perforadas rinde homenaje al legado deportivo de adidas mientras mantiene un look fresco y moderno listo para cualquier outfit informal o urbano.',
        tallas: ['CM 26']
    },
    'Giannis Freak 5': {
        nombre: 'Nike Giannis Freak 5 SE',
        categoria: 'Nike',
        precio: "$2,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis92/40.svg',
            'src/imagenes/Tenis/Tenis92/38.svg',
            'src/imagenes/Tenis/Tenis92/39.svg'
        ],
        descripcion: 'Los adidas Advantage Base 2.0 son unos tenis de estilo lifestyle inspirados en las zapatillas clásicas de tenis, rediseñados para ofrecer comodidad, versatilidad y estilo cotidiano. Su silueta limpia con las icónicas 3 franjas perforadas rinde homenaje al legado deportivo de adidas mientras mantiene un look fresco y moderno listo para cualquier outfit informal o urbano.',
        tallas: ['CM 25']
    },
    'Duramo Speed': {
        nombre: 'Adidas Duramo Speed',
        categoria: 'Adidas',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis93/41.svg',
            'src/imagenes/Tenis/Tenis93/42.svg',
            'src/imagenes/Tenis/Tenis93/43.svg'
        ],
        descripcion: 'Los Adidas Duramo Speed Hombre son unos tenis de running versátiles diseñados para corredores que buscan ligereza, comodidad y una pisada reactiva, ideales para entrenamientos diarios, running casual o uso activo en tu rutina. Su diseño combina materiales transpirables, amortiguación moderna y tracción estable en superficies urbanas.',
        tallas: ['CM 26']
    },
    'Stan Smith de piel': {
        nombre: 'Adidas Stan Smith de piel',
        categoria: 'Adidas',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis94/45.svg',
            'src/imagenes/Tenis/Tenis94/44.svg',
            'src/imagenes/Tenis/Tenis94/46.svg'
        ],
        descripcion: 'Los Adidas Stan Smith con detalles dorados reinterpretan uno de los sneakers más legendarios de la marca con un toque sofisticado y elegante. Mantienen la silueta baja, limpia y minimalista que ha definido generaciones desde sus orígenes como tenis de tenis clásico, aportando ahora acento metálico dorado en talón, logo o branding que eleva el diseño sin perder su esencia atemporal.',
        tallas: ['CM 25.5']
    },
    'Hustle Academy': {
        nombre: 'Nike G.T. Hustle Academy',
        categoria: 'Nike',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis95/49.svg',
            'src/imagenes/Tenis/Tenis95/48.svg',
            'src/imagenes/Tenis/Tenis95/47.svg'
        ],
        descripcion: 'Los Nike G.T. Hustle Academy son unos tenis de básquetbol diseñados para jugadores que buscan ligereza, comodidad y tracción confiable durante el juego. Ideales tanto para entrenamientos como para partidos casuales, combinan tecnologías modernas de Nike para ofrecer buen rendimiento en la cancha sin sentirse pesados.',
        tallas: ['CM 26']
    },
    'AdiFOM SLTN': {
        nombre: 'Adidas AdiFOM SLTN',
        categoria: 'Adidas',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis96/50.svg',
            'src/imagenes/Tenis/Tenis96/51.svg',
            'src/imagenes/Tenis/Tenis96/52.svg'
        ],
        descripcion: 'Los adidas Originals adiFOM SLTN son unas zapatillas lifestyle que combinan un diseño moderno con una comodidad excepcional para uso diario. Incorporan la innovadora tecnología adiFOM, construida con materiales de espuma ligera que ofrecen amortiguación suave y soporte durante todo el día, lo que las hace perfectas para caminar por la ciudad, salir con amigos o simplemente para estar cómodo sin renunciar al estilo.',
        tallas: ['CM 26.5']
    },
    'Essential 3': {
        nombre: 'Nike Legend Essential 3 Next Nature',
        categoria: 'Nike',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis97/55.svg',
            'src/imagenes/Tenis/Tenis97/54.svg',
            'src/imagenes/Tenis/Tenis97/53.svg'
        ],
        descripcion: 'Las Nike Legend Essential 3 Next Nature son unas zapatillas de entrenamiento diseñadas para acompañarte en sesiones de gimnasio, clases intensas o rutinas diarias que requieren comodidad, estabilidad y tracción confiable. Su enfoque funcional las hace perfectas tanto para levantamientos como para ejercicios de agilidad.',
        tallas: ['CM 26']
    },
    'Daily 3.0-red': {
        nombre: 'Adidas Daily 3.0',
        categoria: 'Adidas',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis99/59.svg',
            'src/imagenes/Tenis/Tenis99/60.svg',
            'src/imagenes/Tenis/Tenis99/61.svg'
        ],
        descripcion: 'Los adidas Daily 3.0 y sus variantes son zapatillas versátiles de estilo casual urbano, perfectas si buscas un sneaker cómodo para el día a día sin complicaciones.',
        tallas: ['CM 27']
    },
    'Grandstand II-white': {
        nombre: 'Nike Grandstand II',
        categoria: 'Nike',
        precio: "$1,650",
        imagenes: [
            'src/imagenes/Tenis/Tenis100/62.svg',
            'src/imagenes/Tenis/Tenis100/63.svg',
            'src/imagenes/Tenis/Tenis100/64.svg'
        ],
        descripcion: 'Los Nike Grandstand II y sus variantes como Nike Grandstand 2 Gris, Nike Casual Grandstand II, Nike Grandstand II Suede, Nike Grandstand II Suede Naranja y Nike Grandstand 2 Dark Russet son zapatillas casuales que mezclan un diseño retro inspirado en los tenis de cancha de principios de los 90 con una construcción moderna ideal para el uso diario',
        tallas: ['CM 26']
    },
    'Advantage Base': {
        nombre: 'Adidas Advantage Base 2.0',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis101/65.svg',
            'src/imagenes/Tenis/Tenis101/66.svg',
            'src/imagenes/Tenis/Tenis101/67.svg'
        ],
        descripcion: 'Los adidas Advantage Base 2.0 son unas zapatillas inspiradas en los tenis clásicos de la cancha que han sido adaptadas para el uso diario urbano con estilo moderno. Combinan una silueta limpia y atemporal con comodidad y funcionalidad, lo que las hace ideales para caminar, salir con amigos o complementar looks casuales sin complicaciones.',
        tallas: ['CM 25.5']
    },
    'Witness 7': {
        nombre: 'Nike LeBron Witness 7',
        categoria: 'LeBron',
        precio: "$1,950",
        imagenes: [
            'src/imagenes/Tenis/Tenis102/68.svg',
            'src/imagenes/Tenis/Tenis102/69.svg',
            'src/imagenes/Tenis/Tenis102/70.svg',
            'src/imagenes/Tenis/Tenis102/71.svg'
        ],
        descripcion: 'Las Nike LeBron Witness 7 combinan el rendimiento dinámico de la línea LeBron con un diseño ligero y moderno, pensadas para jugadores que buscan comodidad, tracción y soporte con explosividad en la cancha. Están entre los modelos más accesibles de la familia Witness, ofreciendo características técnicas que te ayudan tanto en entrenamientos como en juegos informales.',
        tallas: ['CM 26']
    },
    'Swift Run': {
        nombre: 'Adidas Swift Run',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis103/72.svg',
            'src/imagenes/Tenis/Tenis103/73.svg',
            'src/imagenes/Tenis/Tenis103/74.svg'
        ],
        descripcion: 'Las adidas Swift Run son sneakers versátiles que combinan el diseño clásico inspirado en el running con la comodidad moderna que necesitas para tu rutina diaria. Inspiradas en los modelos de los años 80, estas zapatillas presentan una parte superior de malla ligera y transpirable que mantiene tus pies frescos y cómodos en todo momento, desde una caminata por la ciudad hasta actividades casuales',
        tallas: ['CM 26']
    },
    'Ebernon Low': {
        nombre: 'Nike Ebernon Low',
        categoria: 'Nike',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis104/75.svg',
            'src/imagenes/Tenis/Tenis104/76.svg',
            'src/imagenes/Tenis/Tenis104/77.svg'
        ],
        descripcion: 'Los Nike Ebernon Low combinan el icónico look inspirado en los tenis de básquetbol de los años 80 con la comodidad y funcionalidad que necesitas para tu uso diario. Su diseño clásico y perfil bajo los hace perfectos tanto para outfits casuales como para un estilo urbano relajado sin complicaciones.',
        tallas: ['CM 26']
    },
    'Handball Spezial ST': {
        nombre: 'Adidas Handball Spezial ST',
        categoria: 'Adidas',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis106/81.svg',
            'src/imagenes/Tenis/Tenis106/82.svg',
            'src/imagenes/Tenis/Tenis106/83.svg'
        ],
        descripcion: 'Las adidas Handball Spezial son unas zapatillas clásicas inspiradas en el calzado original lanzado en 1979 para el balonmano, que con el paso del tiempo se han convertido en un modelo icónico del estilo urbano y casual por su estética vintage y diseño versátil.',
        tallas: ['CM 25.5']
    },
    'Rapidmove ADV 2 HIIT': {
        nombre: 'Adidas Rapidmove ADV 2 HIIT',
        categoria: 'Adidas',
        precio: "$1,950",
        imagenes: [
            'src/imagenes/Tenis/Tenis107/84.svg',
            'src/imagenes/Tenis/Tenis107/85.svg',
            'src/imagenes/Tenis/Tenis107/86.svg'
        ],
        descripcion: 'Los adidas Rapidmove ADV 2 HIIT están diseñados específicamente para quienes entrenan con ejercicios de alta intensidad (HIIT) y buscan un calzado que responda al dinamismo y variación de cada movimiento. Ya sea que hagas saltos explosivos, sprints cortos, burpees o trabajo de agilidad, estos tenis aportan soporte, estabilidad y confort durante toda tu sesión de entrenamiento.',
        tallas: ['CM 26']
    },
    'Air Max Fusion': {
        nombre: 'Nike Air Max Fusion',
        categoria: 'Nike',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis108/87.svg',
            'src/imagenes/Tenis/Tenis108/88.svg',
            'src/imagenes/Tenis/Tenis108/89.svg',
            'src/imagenes/Tenis/Tenis108/90.svg'
        ],
        descripcion: 'Las Nike Air Max Fusion combinan la icónica amortiguación Air Max con un diseño inspirado en los modelos clásicos de los años 90, ofreciendo una mezcla de comodidad, estilo urbano y durabilidad ideal para el uso diario o actividades casuales.',
        tallas: ['CM 26']
    },
    'Matchcourse': {
        nombre: 'Adidas Matchcourse ',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis109/91.svg',
            'src/imagenes/Tenis/Tenis109/92.svg',
            'src/imagenes/Tenis/Tenis109/93.svg'
        ],
        descripcion: 'Los Adidas Matchcourt son unos sneakers inspirados en las siluetas clásicas de tenis de adidas, pero diseñados para uso urbano y skateboarding con un toque moderno. Su construcción combina materiales resistentes como piel, lona y gamuza para ofrecer durabilidad y confort en el día a día, mientras que su diseño minimalista con las icónicas tres bandas te da un look atemporal que combina con outfits casuales o deportivos.',
        tallas: ['CM 26.5']
    },
    'Precision 7': {
        nombre: 'Nike Precision 7',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis110/98.svg',
            'src/imagenes/Tenis/Tenis110/99.svg',
            'src/imagenes/Tenis/Tenis110/100.svg'
        ],
        descripcion: 'Los Nike Precision 7 Basquetbol Hombre y variantes del modelo Nike Precision 7 son zapatillas de baloncesto versátiles y funcionales, pensadas para jugadores que buscan control, tracción y confort durante partidos y entrenamientos. Diseñadas con una mezcla equilibrada de tecnologías, te ayudan a acelerar, cortar y moverte con confianza cada vez que pisas la cancha.',
        tallas: ['CM 27']
    },
    'Zoom Upturn': {
        nombre: 'Nike Air Zoom Upturn SC',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis111/101.svg',
            'src/imagenes/Tenis/Tenis111/102.svg',
            'src/imagenes/Tenis/Tenis111/103.svg'
        ],
        descripcion: 'Los Nike Air Zoom Upturn SC son unos tenis diseñados para quienes buscan un equilibrio entre comodidad diaria, estilo moderno y rendimiento ligero. Están construidos con una parte superior de malla transpirable y ligera, que favorece la ventilación y mantiene tus pies frescos durante todo el día, ya sea caminando por la ciudad, viajando o en actividades informales.',
        tallas: ['CM 27']
    },
    'Rivalry Lux': {
        nombre: 'Adidas Rivalry Lux Low',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis112/104.svg',
            'src/imagenes/Tenis/Tenis112/105.svg',
            'src/imagenes/Tenis/Tenis112/106.svg',
            'src/imagenes/Tenis/Tenis112/107.svg'
        ],
        descripcion: 'Los adidas Rivalry Lux Low son unos sneakers inspirados en los tenis clásicos de baloncesto de los años 80, reinterpretados con materiales premium de alta calidad y un diseño urbano versátil perfecto para el día a día.',
        tallas: ['CM 27']
    },
    'Retropy E5': {
        nombre: 'Adidas Retropy E5',
        categoria: 'Adidas',
        precio: "$1,950",
        imagenes: [
            'src/imagenes/Tenis/Tenis113/108.svg',
            'src/imagenes/Tenis/Tenis113/109.svg',
            'src/imagenes/Tenis/Tenis113/110.svg',
            'src/imagenes/Tenis/Tenis113/111.svg'
        ],
        descripcion: 'Los adidas Originals Mens Retropy E5 Sneaker y sus variantes son unos sneakers reinterpretados que combinan la estética clásica de las zapatillas running de los años 70 y 80 con la comodidad actual, convirtiéndolos en una opción versátil tanto para uso urbano diario como para caminar o actividades casuales. Su diseño se inspira en los corredores retro de adidas, pero con detalles modernos que los hacen únicos y actuales.',
        tallas: ['CM 26']
    },
    'Retropy E5': {
        nombre: 'Nike Promina running',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis114/112.svg',
            'src/imagenes/Tenis/Tenis114/113.svg',
            'src/imagenes/Tenis/Tenis114/114.svg'
        ],
        descripcion: 'Los Nike Promina están diseñados para brindarte comodidad amortiguada en cada paso, ideados especialmente como tenis de caminata y uso activo informal con un enfoque en ligereza y suavidad.',
        tallas: ['CM 26.5']
    },
    'Terminator High': {
        nombre: 'Nike Terminator High',
        categoria: 'Nike',
        precio: "$2,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis115/115.svg',
            'src/imagenes/Tenis/Tenis115/116.svg',
            'src/imagenes/Tenis/Tenis115/117.svg'
        ],
        descripcion: 'Los Nike Terminator High son una reinterpretación contemporánea de uno de los tenis más emblemáticos de Nike, nacidos en 1985 como calzado de baloncesto universitario y hoy convertidos en un sneaker lifestyle con mucha personalidad.',
        tallas: ['CM 26']
    },
    'NMD R1 Red': {
        nombre: 'Adidas NMD R1 Red',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis116/118.svg',
            'src/imagenes/Tenis/Tenis116/119.svg',
            'src/imagenes/Tenis/Tenis116/120.svg'
        ],
        descripcion: 'Los adidas NMD R1 combinan la herencia de las zapatillas runner clásicas de adidas con una estética deportiva y contemporánea ideal para el uso diario y estilo urbano. Su silueta ligera y perfil bajo toman elementos del diseño original de los 80, incorporando tecnologías modernas que priorizan comodidad y respuesta en cada paso.',
        tallas: ['CM 27']
    },
    'Max SYSTM Black': {
        nombre: 'Nike Air Max SYSTM Black',
        categoria: 'Nike',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis117/121.svg',
            'src/imagenes/Tenis/Tenis117/122.svg',
            'src/imagenes/Tenis/Tenis117/123.svg'
        ],
        descripcion: 'Los Nike Air Max SYSTM en color negro combinan la herencia clásica de la línea Air Max con un diseño moderno y deportivo perfecto para el uso diario urbano o casual. Inspirados en la estética de los modelos Air Max de los años 80, estos sneakers ofrecen un look retro renovado con tecnologías actuales.',
        tallas: ['CM 26.5']
    },
    '4D Fusio': {
        nombre: 'Adidas 4D Fusio',
        categoria: 'Adidas',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis118/124.svg',
            'src/imagenes/Tenis/Tenis118/125.svg',
            'src/imagenes/Tenis/Tenis118/126.svg',
            'src/imagenes/Tenis/Tenis118/127.svg'
        ],
        descripcion: 'Los adidas 4D Fusio son unas zapatillas que llevan la tecnología adidas 4D a un estilo runner‑inspirado con un look moderno y versátil para el uso diario o casual. La característica estrella de este modelo es la entresuela impresa en 3D (4D), fruto de una innovadora tecnología de impresión digital que crea una estructura de amortiguación en forma de red diseñada para absorber impactos y ofrecer retorno de energía en cada paso.',
        tallas: ['CM 26.5']
    },
    'Royale in black': {
        nombre: 'Nike Court Royale in black',
        categoria: 'Nike',
        precio: "$1,250",
        imagenes: [
            'src/imagenes/Tenis/Tenis119/129.svg',
            'src/imagenes/Tenis/Tenis119/130.svg',
            'src/imagenes/Tenis/Tenis119/128.svg'
        ],
        descripcion: 'Los Nike Court Royale en negro son unos sneakers de estilo retro inspirados en los clásicos tenis de cancha, que combinan un diseño limpio y atemporal con la comodidad y durabilidad que caracteriza a Nike. Este modelo es perfecto si quieres unas zapatillas versátiles para el uso diario, outfits casuales o urbano moderno.',
        tallas: ['CM 27']
    },
    'Advantage Base 2.0 black': {
        nombre: 'Adidas Advantage Base 2.0 black',
        categoria: 'Adidas',
        precio: "$1,250",
        imagenes: [
            'src/imagenes/Tenis/Tenis120/131.svg',
            'src/imagenes/Tenis/Tenis120/132.svg',
            'src/imagenes/Tenis/Tenis120/133.svg'
        ],
        descripcion: 'Los adidas Advantage Base 2.0 en negro son unos sneakers de estilo lifestyle inspirados en los clásicos tenis de cancha, diseñados para ofrecer comodidad, versatilidad y un look atemporal que combina fácilmente con cualquier outfit casual o urbano.',
        tallas: ['CM 27']
    },
    'Beavis and Butthead': {
        nombre: 'Adidas 3MC x Beavis and Butthead',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis121/134.svg',
            'src/imagenes/Tenis/Tenis121/135.svg',
            'src/imagenes/Tenis/Tenis121/136.svg'
        ],
        descripcion: 'Los adidas 3MC x Beavis and Butthead son una edición especial y colaborativa entre adidas y la clásica serie animada Beavis and Butt-Head, celebrando la cultura pop de los años 90 con un toque irreverente y divertido. Esta versión toma la silueta del modelo 3MC, conocida por su diseño simple y funcional tanto para skate como para uso casual, y la transforma con estampados gráficos temáticos inspirados en los personajes y sus gustos — como snacks, sodas y su actitud característica.',
        tallas: ['CM 27']
    },
    'White Malachite': {
        nombre: 'Nike Terminator High White Malachite',
        categoria: 'Nike',
        precio: "$2,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis122/137.svg',
            'src/imagenes/Tenis/Tenis122/138.svg',
            'src/imagenes/Tenis/Tenis122/139.svg'
        ],
        descripcion: 'Los Nike Terminator High White Malachite traen de vuelta una de las siluetas más queridas de Nike con una combinación de colores que destaca: una parte superior de cuero blanco limpio con Swoosh y detalles en verde malachite, lo que le da un toque fresco y llamativo sin perder la esencia clásica del diseño alto.',
        tallas: ['CM 27']
    },
    'X_PLR': {
        nombre: 'Adidas X_PLR',
        categoria: 'Adidas',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis123/140.svg',
            'src/imagenes/Tenis/Tenis123/141.svg',
            'src/imagenes/Tenis/Tenis123/142.svg'
        ],
        descripcion: 'Las adidas X_PLR son unas zapatillas diseñadas con inspiración en el running moderno pero pensadas principalmente para el uso diario urbano y casual. Su silueta ligera, líneas sencillas y estilo minimalista las hacen perfectas para caminar por la ciudad, salir con amigos o complementar outfits relajados con un toque deportivo contemporáneo.',
        tallas: ['CM 27']
    },
    'Hoops 4.0 Blanco con Negro': {
        nombre: 'Adidas Hoops 4.0 Blanco con Negro',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis124/143.svg',
            'src/imagenes/Tenis/Tenis124/144.svg',
            'src/imagenes/Tenis/Tenis124/145.svg'
        ],
        descripcion: 'Adidas Hoops 4.0 Black & White y variantes Adidas Unisex Hoops 4.0 / adidas Unisex Hoops 4.0 Shoes son unos tenis casuales con estilo inspirado en el baloncesto clásico que combinan el perfil blanco con detalles en negro para un look urbano versátil.',
        tallas: ['CM 28']
    },
    'bounce cushioning': {
        nombre: 'Adidas Heawyn running bounce cushioning',
        categoria: 'Adidas',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis125/146.svg',
            'src/imagenes/Tenis/Tenis125/147.svg',
            'src/imagenes/Tenis/Tenis125/148.svg'
        ],
        descripcion: 'Zapatillas diseñadas para el running y el uso diario, con un estilo deportivo y moderno. Incorporan tecnología Bounce, que ofrece una amortiguación flexible y reactiva, ayudando a absorber el impacto y brindar mayor comodidad en cada pisada.',
        tallas: ['CM 27.5']
    },
    'Fadeaway Black': {
        nombre: 'Jordan Fadeaway Black Gym Red',
        categoria: 'Jordan',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis126/149.svg',
            'src/imagenes/Tenis/Tenis126/150.svg',
            'src/imagenes/Tenis/Tenis126/151.svg'
        ],
        descripcion: 'Zapatillas de básquet con un diseño potente y urbano, ideales tanto para la cancha como para el street style. Su combinación Black con detalles Gym Red aporta un look agresivo y moderno.',
        tallas: ['CM 27']
    },
    'AMG Petronas F1 Speedfusion': {
        nombre: 'Puma Mercedes AMG Petronas F1 Speedfusion 2.0',
        categoria: 'Puma',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis127/152.svg',
            'src/imagenes/Tenis/Tenis127/153.svg',
            'src/imagenes/Tenis/Tenis127/154.svg'
        ],
        descripcion: 'Zapatillas inspiradas en el automovilismo de alto rendimiento, desarrolladas junto al equipo Mercedes-AMG Petronas Formula 1. Presentan un diseño deportivo y sofisticado, con detalles oficiales del equipo que reflejan velocidad y precisión.',
        tallas: ['CM 27']
    },
    'Legacy in black': {
        nombre: 'Nike Flight Legacy in black',
        categoria: 'Nike',
        precio: "$1,850",
        imagenes: [
            'src/imagenes/Tenis/Tenis128/155.svg',
            'src/imagenes/Tenis/Tenis128/156.svg',
            'src/imagenes/Tenis/Tenis128/157.svg'
        ],
        descripcion: 'Zapatillas de estilo basket retro con un diseño icónico inspirado en los modelos clásicos de Nike. Su acabado en color negro las hace versátiles y fáciles de combinar, perfectas para un look urbano y deportivo. Incorporan amortiguación cómoda para el uso diario, una estructura resistente que brinda buen soporte y una suela de goma que ofrece tracción y durabilidad. Ideales para quienes buscan comodidad, estilo y el ADN histórico del básquet.',
        tallas: ['CM 27']
    },
    'adiFOM SLTN Gris': {
        nombre: 'Adidas adiFOM SLTN Gris',
        categoria: 'Adidas',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis129/158.svg',
            'src/imagenes/Tenis/Tenis129/159.svg',
            'src/imagenes/Tenis/Tenis129/160.svg'
        ],
        descripcion: 'Zapatillas de estilo basket retro con un diseño icónico inspirado en los modelos clásicos de Nike. Su acabado en color negro las hace versátiles y fáciles de combinar, perfectas para un look urbano y deportivo. Incorporan amortiguación cómoda para el uso diario, una estructura resistente que brinda buen soporte y una suela de goma que ofrece tracción y durabilidad. Ideales para quienes buscan comodidad, estilo y el ADN histórico del básquet.',
        tallas: ['CM 27.5']
    },
    'Boost 19 Pink': {
        nombre: 'Adidas Ultra Boost 19 Pink',
        categoria: 'Adidas',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis130/161.svg',
            'src/imagenes/Tenis/Tenis130/162.svg',
            'src/imagenes/Tenis/Tenis130/163.svg',
            'src/imagenes/Tenis/Tenis130/164.svg'
        ],
        descripcion: 'Zapatillas de running de alto rendimiento, diseñadas para ofrecer máxima comodidad y retorno de energía. Incorporan la reconocida tecnología Boost, que proporciona una amortiguación suave, reactiva y continua en cada paso.',
        tallas: ['CM 27']
    },
    'Jacata': {
        nombre: 'Jacata modelo 8601',
        categoria: 'Jacata',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis131/165.svg',
            'src/imagenes/Tenis/Tenis131/166.svg',
            'src/imagenes/Tenis/Tenis131/167.svg',
            'src/imagenes/Tenis/Tenis131/168.svg'
        ],
        descripcion: 'Zapatillas de diseño moderno y versátil, pensadas para el uso diario. Ofrecen una pisada cómoda y ligera, con una estructura resistente que brinda buen soporte durante todo el día. Su diseño sencillo y fácil de combinar las hace ideales para actividades cotidianas, trabajo informal o salidas casuales. Una opción práctica para quienes buscan comodidad y buen estilo a un precio accesible.',
        tallas: ['CM 29']
    },
    'Vision Mid Black and Red': {
        nombre: 'Nike Court Vision Mid Black and Red',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis132/169.svg',
            'src/imagenes/Tenis/Tenis132/170.svg',
            'src/imagenes/Tenis/Tenis132/171.svg'
        ],
        descripcion: 'Zapatillas de estilo retro-básquet que combinan un look clásico con comodidad moderna. Su diseño Black con detalles Red aporta un toque urbano y llamativo, ideal para destacar en cualquier outfit casual o deportivo.',
        tallas: ['CM 28.5']
    },
    'Step XLT': {
        nombre: 'Adidas Originals Drop Step XLT Carbon Black Gray Orange',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis133/172.svg',
            'src/imagenes/Tenis/Tenis133/173.svg',
            'src/imagenes/Tenis/Tenis133/174.svg'
        ],
        descripcion: 'Zapatillas de estilo urbano y deportivo, inspiradas en el básquet, con un diseño moderno y detalles en Carbon, Black, Gray y Orange que destacan a la vista.',
        tallas: ['CM 27']
    },
    'Advantage 2.0 Blancos': {
        nombre: 'Adidas Advantage 2.0 Blancos',
        categoria: 'Adidas',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis134/175.svg',
            'src/imagenes/Tenis/Tenis134/176.svg',
            'src/imagenes/Tenis/Tenis134/177.svg'
        ],
        descripcion: 'Zapatillas de estilo casual y minimalista, inspiradas en los clásicos de tenis. Su diseño limpio y versátil las hace fáciles de combinar con cualquier look urbano o deportivo.',
        tallas: ['CM 28']
    },
    'Base 2.0 Blanco con verde': {
        nombre: 'Adidas advantage Base 2.0 Blanco con verde',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis135/178.svg',
            'src/imagenes/Tenis/Tenis135/179.svg',
            'src/imagenes/Tenis/Tenis135/178.svg'
        ],
        descripcion: 'Zapatillas de estilo casual y minimalista, inspiradas en los clásicos de tenis. Su diseño limpio y versátil las hace fáciles de combinar con cualquier look urbano o deportivo.',
        tallas: ['CM 28']
    },
    'Shot blanco con azul': {
        nombre: 'Nike Court Shot blanco con azul',
        categoria: 'Nike',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis136/181.svg',
            'src/imagenes/Tenis/Tenis136/182.svg',
            'src/imagenes/Tenis/Tenis136/183.svg'
        ],
        descripcion: 'Zapatillas de inspiración básquet retro, con un diseño limpio en blanco con detalles en azul, perfectas para un look urbano y casual.',
        tallas: ['CM 27.5']
    },
    'Adidas SL 72 RS': {
        nombre: 'Adidas SL 72 RS',
        categoria: 'Adidas',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis137/184.svg',
            'src/imagenes/Tenis/Tenis137/185.svg',
            'src/imagenes/Tenis/Tenis137/186.svg'
        ],
        descripcion: 'Zapatillas de estilo retro running con un diseño limpio y elegante, inspiradas en los modelos originales de los 70. Su acabado moderno las hace versátiles y fáciles de combinar con looks urbanos o deportivos.',
        tallas: ['CM 28']
    },
    'Vision Mid Blancos': {
        nombre: 'Nike Court Vision Mid Blancos',
        categoria: 'Nike',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis138/187.svg',
            'src/imagenes/Tenis/Tenis138/188.svg',
            'src/imagenes/Tenis/Tenis138/189.svg'
        ],
        descripcion: 'Zapatillas de estilo retro-básquet, con un diseño clásico en blanco que combina con cualquier look urbano o deportivo.',
        tallas: ['CM 28.5']
    },
    'Adidas Jabbar Low': {
        nombre: 'Adidas Jabbar Low',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis139/190.svg',
            'src/imagenes/Tenis/Tenis139/191.svg',
            'src/imagenes/Tenis/Tenis139/192.svg'
        ],
        descripcion: 'Zapatillas de estilo básquet urbano y retro, con diseño bajo y versátil que se adapta a cualquier look casual o deportivo.',
        tallas: ['CM 30']
    },
    'Max 95 Black Royal': {
        nombre: 'Nike Air Max 95 Black Royal',
        categoria: 'Nike',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis140/193.svg',
            'src/imagenes/Tenis/Tenis140/194.svg',
            'src/imagenes/Tenis/Tenis140/195.svg'
        ],
        descripcion: 'Zapatillas de estilo running clásico y urbano, con un diseño llamativo en negro con detalles Royal que destacan en cualquier outfit. Incorporan la tecnología Air Max para una amortiguación superior, cómoda y reactiva en cada pisada, mientras que su suela de goma resistente garantiza tracción y durabilidad. Ideales para quienes buscan comodidad, estilo y un toque retro en su look deportivo o casual.',
        tallas: ['CM 28.5']
    },
    'Lite Racer 4.0': {
        nombre: 'Adidas Lite Racer 4.0',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis141/196.svg',
            'src/imagenes/Tenis/Tenis141/197.svg',
            'src/imagenes/Tenis/Tenis141/198.svg'
        ],
        descripcion: 'Zapatillas de running y estilo casual, con diseño ligero y moderno que brinda comodidad todo el día. Cuentan con amortiguación suave para una pisada confortable, parte superior transpirable que mantiene el pie fresco y una suela de goma duradera que asegura buen agarre en cualquier superficie. Ideales para entrenar, caminar o complementar un look urbano deportivo.',
        tallas: ['CM 28']
    },
    'Minnie Mouse': {
        nombre: 'Disney Minnie Mouse Rosas',
        categoria: 'Disney',
        precio: "$950",
        imagenes: [
            'src/imagenes/Tenis/Tenis142/1.svg',
            'src/imagenes/Tenis/Tenis142/2.svg',
            'src/imagenes/Tenis/Tenis142/3.svg'
        ],
        descripcion: 'Dale un toque dulce y divertido a cada paso con estos encantadores tenis de Minnie Mouse en color rosa. Su diseño combina estilo y comodidad, destacando los icónicos detalles de Minnie que enamoran a primera vista. Están fabricados con materiales resistentes y ligeros, ideales para el uso diario, mientras que su interior cómodo brinda soporte durante todo el día. Perfectos para las pequeñas fans de Disney que aman la moda, el color y la magia en cada aventura.',
        tallas: ['CM 27']
    },
    'Skool Vintage Floral': {
        nombre: 'Vans Old Skool Vintage Floral',
        categoria: 'Vans',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis143/4.svg',
            'src/imagenes/Tenis/Tenis143/5.svg',
            'src/imagenes/Tenis/Tenis143/6.svg'
        ],
        descripcion: 'Los Vans Old Skool Vintage Floral combinan el diseño clásico de la marca con un delicado estampado floral de inspiración vintage. Su icónica silueta con la inconfundible franja lateral se renueva con un toque femenino y retro, ideal para quienes buscan destacar con un look casual y auténtico. Fabricados con materiales duraderos, cuentan con suela de goma tipo waffle que brinda excelente tracción y comodidad para el uso diario. Perfectos para complementar outfits urbanos con un toque floral y atemporal.',
        tallas: ['CM 25']
    },
    'Air Force 1 rosa': {
        nombre: 'Nike Air Force 1 ’07 SE Rosa',
        categoria: 'Nike',
        precio: "$2,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis144/7.svg',
            'src/imagenes/Tenis/Tenis144/8.svg',
            'src/imagenes/Tenis/Tenis144/9.svg'
        ],
        descripcion: 'Los Nike Air Force 1 ’07 SE Rosa reinventan un clásico con un toque femenino y moderno. Su diseño icónico destaca por su elegante tonalidad rosa, perfecta para elevar cualquier outfit urbano. Confeccionados con materiales de alta calidad, ofrecen durabilidad, comodidad y un ajuste seguro gracias a su estructura acolchada. La suela de goma con amortiguación Air proporciona confort durante todo el día, convirtiéndolos en la opción ideal para un estilo casual con personalidad y tendencia.',
        tallas: ['CM 26']
    },
    'Stan Smith Cloud White Leopard': {
        nombre: 'Adidas Stan Smith Cloud White Leopard',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis145/10.svg',
            'src/imagenes/Tenis/Tenis145/11.svg',
            'src/imagenes/Tenis/Tenis145/12.svg'
        ],
        descripcion: 'Los Adidas Stan Smith Cloud White Leopard combinan la elegancia clásica del modelo icónico con un audaz detalle animal print que marca tendencia. Su base en color blanco aporta un look limpio y versátil, mientras que los acentos de leopardo añaden un toque moderno y sofisticado. Diseñados para ofrecer comodidad durante todo el día, cuentan con materiales de alta calidad y suela de goma resistente. Ideales para quienes buscan un estilo casual con personalidad y un giro fashion.',
        tallas: ['CM 25.5']
    },
    'Women Lace Up': {
        nombre: 'RBX Women Lace Up',
        categoria: 'RBX',
        precio: "$950",
        imagenes: [
            'src/imagenes/Tenis/Tenis146/13.svg',
            'src/imagenes/Tenis/Tenis146/14.svg',
            'src/imagenes/Tenis/Tenis146/15.svg'
        ],
        descripcion: 'Los RBX Women Lace Up Rosas son la combinación perfecta de comodidad y estilo para el día a día. Su diseño moderno en tono rosa aporta un look femenino y versátil, ideal para actividades casuales o rutinas ligeras. Cuentan con ajuste de agujetas que brinda mayor soporte, materiales ligeros y una suela flexible que ofrece confort en cada paso. Perfectos para quienes buscan un calzado práctico sin dejar de verse bien.',
        tallas: ['CM 25']
    },
    'Reebok Energen Tech Plus': {
        nombre: 'running Reebok Energen Tech Plus',
        categoria: 'Reebok',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis147/16.svg',
            'src/imagenes/Tenis/Tenis147/17.svg',
            'src/imagenes/Tenis/Tenis147/18.svg'
        ],
        descripcion: 'Los Reebok Energen Tech Plus Running están diseñados para brindar comodidad y rendimiento en cada entrenamiento. Su diseño deportivo y ligero ofrece una pisada suave y estable, ideal para running y actividades de alto movimiento. Incorporan una entresuela con excelente amortiguación que ayuda a absorber el impacto, mientras que su suela proporciona tracción y durabilidad. Perfectos para quienes buscan un calzado funcional, cómodo y con estilo deportivo moderno.',
        tallas: ['CM 24.5']
    },
    'Max INTRLK Lite color white': {
        nombre: 'Nike Air Max INTRLK Lite color white',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis148/19.svg',
            'src/imagenes/Tenis/Tenis148/20.svg',
            'src/imagenes/Tenis/Tenis148/21.svg'
        ],
        descripcion: 'Los Nike Air Max INTRLK Lite White ofrecen un diseño moderno y minimalista que combina estilo urbano con comodidad superior. Su acabado en color blanco aporta un look limpio y versátil, ideal para cualquier outfit casual o deportivo. Incorporan amortiguación Air Max que brinda una pisada suave y ligera, mientras que su estructura resistente garantiza durabilidad y soporte para el uso diario. Perfectos para quienes buscan un calzado cómodo, fresco y con un toque contemporáneo.',
        tallas: ['CM 25.5']
    },
    'Run Star Hike': {
        nombre: 'Converse Run Star Hike',
        categoria: 'Converse',
        precio: "$",
        imagenes: [
            'src/imagenes/Tenis/Tenis149/23.svg',
            'src/imagenes/Tenis/Tenis149/22.svg',
            'src/imagenes/Tenis/Tenis149/24.svg'
        ],
        descripcion: 'Los Converse Run Star Hike reinventan el estilo clásico de Converse con un diseño atrevido y vanguardista. Su silueta icónica se combina con una plataforma dentada que aporta altura, personalidad y un look urbano único. Fabricados con materiales resistentes y una suela de goma de alto agarre, ofrecen comodidad y estabilidad para el uso diario. Ideales para quienes buscan destacar con un calzado moderno, versátil y lleno de actitud.',
        tallas: ['CM ']
    },
    'Chuck Taylor': {
        nombre: 'Converse Chuck Taylor All Star',
        categoria: 'Converse',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis150/25.svg',
            'src/imagenes/Tenis/Tenis150/26.svg',
            'src/imagenes/Tenis/Tenis150/27.svg'
        ],
        descripcion: 'Los Converse Chuck Taylor All Star son un ícono atemporal que nunca pasa de moda. Su diseño clásico y versátil los convierte en el complemento perfecto para cualquier estilo, desde casual hasta urbano. Fabricados con materiales resistentes y ligeros, ofrecen comodidad para el uso diario, mientras que su suela de goma brinda tracción y durabilidad. Ideales para quienes buscan un calzado auténtico, cómodo y con historia.',
        tallas: ['CM 24']
    },
    'Taylor All Star Gold': {
        nombre: 'Converse Chuck Taylor All Star Gold',
        categoria: 'Converse',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis151/28.svg',
            'src/imagenes/Tenis/Tenis151/29.svg',
            'src/imagenes/Tenis/Tenis151/30.svg'
        ],
        descripcion: 'Los Converse Chuck Taylor All Star Gold llevan el clásico estilo Chuck Taylor a un nivel brillante y moderno. Su elegante acabado dorado agrega un toque de personalidad y sofisticación a cualquier outfit, manteniendo la silueta icónica que todos reconocen. Confeccionados con materiales resistentes y suela de goma duradera, ofrecen comodidad y soporte para el uso diario. Ideales para quienes buscan destacar con un calzado atemporal y lleno de estilo.',
        tallas: ['CM 24.5']
    },
    'Balance 373': {
        nombre: 'New Balance 373 Bungee Lace',
        categoria: 'New Balance',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis152/31.svg',
            'src/imagenes/Tenis/Tenis152/32.svg',
            'src/imagenes/Tenis/Tenis152/33.svg'
        ],
        descripcion: 'Los New Balance 373 Bungee Lace combinan estilo clásico con innovación en comodidad. Su diseño atemporal se moderniza con cordones elásticos tipo bungee, que facilitan el ajuste y aportan practicidad para el día a día. Fabricados con materiales duraderos y una suela ligera, ofrecen soporte y confort en cada paso. Ideales para quienes buscan un calzado versátil, cómodo y con un toque moderno para uso casual o urbano.',
        tallas: ['CM 24.5']
    },
    'Anzarun Lite': {
        nombre: 'Puma Anzarun Lite',
        categoria: 'Puma',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis153/34.svg',
            'src/imagenes/Tenis/Tenis153/35.svg',
            'src/imagenes/Tenis/Tenis153/36.svg'
        ],
        descripcion: 'Los Puma Anzarun Lite están diseñados para ofrecer ligereza, comodidad y estilo en cada paso. Su silueta moderna combina materiales resistentes con una entresuela ligera que brinda amortiguación y soporte durante todo el día. La suela de goma flexible garantiza tracción y durabilidad, perfecta para actividades casuales o deportivas. Ideales para quienes buscan un calzado versátil, cómodo y con un look urbano y dinámico.',
        tallas: ['CM 24']
    },
    'Adidas Stan Smith Bonega': {
        nombre: 'Adidas Stan Smith Bonega',
        categoria: 'Adidas',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis154/37.svg',
            'src/imagenes/Tenis/Tenis154/38.svg',
            'src/imagenes/Tenis/Tenis154/39.svg'
        ],
        descripcion: 'Los Adidas Stan Smith Bonega fusionan el diseño clásico del icónico modelo Stan Smith con detalles modernos y sofisticados. Su acabado limpio y versátil permite combinarlos fácilmente con cualquier outfit casual o urbano, mientras que sus materiales de alta calidad ofrecen durabilidad y comodidad durante todo el día. La suela de goma proporciona tracción y soporte, haciendo de este calzado una opción perfecta para quienes buscan estilo atemporal con un toque contemporáneo.',
        tallas: ['CM 24/5']
    },
    'Run 60s': {
        nombre: 'Adidas Run 60s 2.0',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis155/40.svg',
            'src/imagenes/Tenis/Tenis155/41.svg',
            'src/imagenes/Tenis/Tenis155/42.svg'
        ],
        descripcion: 'Los Adidas Run 60s 2.0 combinan un diseño retro inspirado en los años 60 con la comodidad y rendimiento que necesitas hoy. Su silueta ligera y estilizada permite movimientos ágiles, mientras que la entresuela proporciona amortiguación para una pisada suave y confortable. Fabricados con materiales duraderos y suela de goma de alto agarre, son ideales para el uso diario y para quienes buscan un calzado casual con estilo vintage y funcionalidad moderna.',
        tallas: ['CM 24.5']
    },
    'Rivalry Lux Low': {
        nombre: 'Adidas Rivalry Lux Low',
        categoria: 'Adidas',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis156/43.svg',
            'src/imagenes/Tenis/Tenis156/44.svg',
            'src/imagenes/Tenis/Tenis156/45.svg'
        ],
        descripcion: 'Los Adidas Rivalry Lux Low combinan el estilo clásico del baloncesto con un toque moderno y urbano. Su diseño bajo y elegante permite versatilidad para cualquier outfit, mientras que sus materiales de alta calidad ofrecen comodidad y durabilidad durante todo el día. La suela de goma proporciona tracción y soporte, ideal para caminar, entrenar o destacar en el streetwear. Perfectos para quienes buscan un calzado atemporal con estilo deportivo y sofisticado.',
        tallas: ['CM 25']
    },
    'Quest 5': {
        nombre: 'Nike Quest 5',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis157/46.svg',
            'src/imagenes/Tenis/Tenis157/47.svg',
            'src/imagenes/Tenis/Tenis157/48.svg'
        ],
        descripcion: 'Los Nike Quest 5 están diseñados para quienes buscan rendimiento, comodidad y estilo en cada entrenamiento. Su construcción ligera permite movimientos ágiles, mientras que la entresuela con amortiguación brinda pisadas suaves y soporte durante carreras y actividades de alto impacto. La suela de goma con tracción multidireccional asegura estabilidad y durabilidad en distintas superficies. Perfectos para running, gimnasio o uso diario, combinando funcionalidad y un look deportivo moderno.',
        tallas: ['CM 25.5']
    },
    'Chuck Taylor All Star OX': {
        nombre: 'Converse Chuck Taylor All Star OX',
        categoria: 'Converse',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis158/49.svg',
            'src/imagenes/Tenis/Tenis158/50.svg',
            'src/imagenes/Tenis/Tenis158/51.svg'
        ],
        descripcion: 'Los Converse Chuck Taylor All Star OX mantienen el icónico diseño que ha marcado generaciones, ahora en su versión baja para un estilo más versátil y cómodo. Su silueta clásica y minimalista combina con cualquier outfit casual o urbano, mientras que los materiales resistentes y la suela de goma garantizan durabilidad y tracción. Ideales para quienes buscan un calzado atemporal, cómodo y lleno de personalidad.',
        tallas: ['CM 25']
    },
    'Utility Dimension Grey Purple': {
        nombre: 'Puma Utility Dimension Grey Purple',
        categoria: 'Puma',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis159/52.svg',
            'src/imagenes/Tenis/Tenis159/53.svg',
            'src/imagenes/Tenis/Tenis159/54.svg'
        ],
        descripcion: 'Los PUMA Utility Dimension Grey Purple combinan un estilo moderno con funcionalidad urbana. Su diseño robusto en tonos gris y morado aporta personalidad y versatilidad, mientras que los materiales duraderos garantizan comodidad y resistencia durante todo el día. La suela de goma ofrece tracción y estabilidad, perfecta para caminar, explorar la ciudad o complementar outfits casuales con un toque deportivo y contemporáneo.',
        tallas: ['CM 23']
    },
    'Royale blancos con crema': {
        nombre: 'Nike Court Royale',
        categoria: 'Nike',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis160/55.svg',
            'src/imagenes/Tenis/Tenis160/56.svg',
            'src/imagenes/Tenis/Tenis160/57.svg'
        ],
        descripcion: 'Los Nike Court Royale Blanco con Crema combinan la elegancia clásica del tenis de corte bajo con un toque moderno y versátil. Su diseño limpio en blanco con detalles en crema los hace perfectos para cualquier outfit casual o urbano. Fabricados con materiales duraderos y una suela de goma resistente, ofrecen comodidad, soporte y tracción durante todo el día. Ideales para quienes buscan un calzado atemporal, elegante y lleno de estilo.',
        tallas: ['CM 25.5']
    },
    'AF1 Lover XX': {
        nombre: 'Nike AF1 Lover XX',
        categoria: 'Nike',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis161/58.svg',
            'src/imagenes/Tenis/Tenis161/59.svg',
            'src/imagenes/Tenis/Tenis161/60.svg'
        ],
        descripcion: 'Los Nike Air Force 1 Lover XX reinventan el clásico AF1 con un diseño romántico y moderno. Su silueta icónica se destaca por detalles únicos y delicados que aportan estilo y personalidad, mientras que su construcción con materiales de alta calidad garantiza comodidad y durabilidad. La suela con tecnología Air proporciona amortiguación durante todo el día, haciendo de estos tenis la opción perfecta para un look urbano, romántico y lleno de actitud.',
        tallas: ['CM 24']
    },
    'Ember Trail black': {
        nombre: 'Puma Ember Trail black',
        categoria: 'Puma',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis162/61.svg',
            'src/imagenes/Tenis/Tenis162/62.svg',
            'src/imagenes/Tenis/Tenis162/63.svg',
            'src/imagenes/Tenis/Tenis162/64.svg'
        ],
        descripcion: 'Los Puma Ember Trail están diseñados para quienes buscan aventura, comodidad y estilo en cada paso. Su silueta robusta y moderna combina materiales duraderos con una entresuela ligera que brinda amortiguación y soporte en caminatas o actividades al aire libre. La suela de goma con tracción avanzada garantiza estabilidad en distintas superficies, mientras que su diseño contemporáneo los hace perfectos también para un look urbano casual.',
        tallas: ['CM 24.5']
    },
    'Flyer Runner': {
        nombre: 'Puma Flyer Runner',
        categoria: 'Puma',
        precio: "$1,250",
        imagenes: [
            'src/imagenes/Tenis/Tenis163/65.svg',
            'src/imagenes/Tenis/Tenis163/66.svg',
            'src/imagenes/Tenis/Tenis163/67.svg'
        ],
        descripcion: 'Los Puma Flyer Runner combinan estilo moderno y funcionalidad para un rendimiento cómodo en cada paso. Su diseño ligero y aerodinámico permite movimientos ágiles, mientras que la entresuela ofrece amortiguación y soporte para entrenamientos o uso diario. La suela de goma proporciona tracción y durabilidad, convirtiéndolos en la opción ideal para quienes buscan un calzado versátil, deportivo y con estilo urbano.',
        tallas: ['CM 23']
    },
    'Revolution 7 white Mujer': {
        nombre: 'Nike Revolution 7 white',
        categoria: 'Nike',
        precio: "$1600",
        imagenes: [
            'src/imagenes/Tenis/Tenis164/68.svg',
            'src/imagenes/Tenis/Tenis164/69.svg',
            'src/imagenes/Tenis/Tenis164/70.svg'
        ],
        descripcion: 'Los Nike Revolution 7 White combinan un diseño limpio y moderno con comodidad y rendimiento para el día a día. Su construcción ligera permite una pisada ágil y natural, mientras que la entresuela proporciona amortiguación suave para mayor confort en cada paso. La suela de goma garantiza tracción y durabilidad, ideal para correr, entrenar o complementar un look casual con estilo deportivo.',
        tallas: ['CM 24']
    },
    'Nike Court Legacy swoosh amarillo': {
        nombre: 'Nike Court Legacy',
        categoria: 'Nike',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis165/71.svg',
            'src/imagenes/Tenis/Tenis165/72.svg',
            'src/imagenes/Tenis/Tenis165/73.svg'
        ],
        descripcion: 'Los Nike Court Legacy Swoosh Amarillo combinan la silueta clásica de corte bajo con un toque moderno y llamativo. Su diseño en blanco con el icónico Swoosh amarillo aporta personalidad y estilo a cualquier outfit casual o urbano. Fabricados con materiales resistentes y suela de goma duradera, ofrecen comodidad, soporte y tracción durante todo el día. Perfectos para quienes buscan un calzado versátil, moderno y lleno de actitud.',
        tallas: ['CM 24']
    },
    'Rejuven8 slide': {
        nombre: 'Nike ReactX Rejuven8 slide in Summit White',
        categoria: 'Nike',
        precio: "$950",
        imagenes: [
            'src/imagenes/Tenis/Tenis166/74.svg',
            'src/imagenes/Tenis/Tenis166/75.svg',
            'src/imagenes/Tenis/Tenis166/76.svg'
        ],
        descripcion: 'Los Nike ReactX Rejuven8 Slide Summit White combinan comodidad y estilo minimalista para uso diario o descanso después del entrenamiento. Su diseño ergonómico tipo “slide” permite un ajuste fácil y seguro, mientras que la amortiguación ReactX ofrece una pisada suave y ligera. Con su acabado en blanco Summit, aportan un look limpio, versátil y moderno, ideal para quienes buscan confort sin sacrificar estilo.',
        tallas: ['CM 24']
    },
    'Classic Slip-On': {
        nombre: 'Vans Classic Slip-On',
        categoria: 'Vans',
        precio: "$950",
        imagenes: [
            'src/imagenes/Tenis/Tenis167/77.svg',
            'src/imagenes/Tenis/Tenis167/78.svg',
            'src/imagenes/Tenis/Tenis167/79.svg'
        ],
        descripcion: 'Los Vans Classic Slip-On son el ícono de la comodidad y el estilo urbano sin esfuerzo. Su diseño sin cordones permite un calce rápido y fácil, mientras que la silueta baja y la suela de goma tipo waffle brindan durabilidad y tracción en cada paso. Versátiles y atemporales, son perfectos para cualquier outfit casual, combinando moda y practicidad en un solo par de tenis.',
        tallas: ['CM 24']
    },
    'Caven 2.0 en colores pastel': {
        nombre: 'Puma Caven 2.0 en colores pastel',
        categoria: 'Puma',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis168/80.svg',
            'src/imagenes/Tenis/Tenis168/81.svg',
            'src/imagenes/Tenis/Tenis168/82.svg'
        ],
        descripcion: 'Los Puma Caven 2.0 en colores pastel combinan estilo moderno y frescura con comodidad para el día a día. Su diseño ligero y elegante en tonos suaves aporta un look versátil y femenino, mientras que la entresuela acolchada garantiza amortiguación y soporte en cada paso. La suela de goma proporciona tracción y durabilidad, convirtiéndolos en la opción perfecta para quienes buscan un calzado casual, cómodo y lleno de estilo.',
        tallas: ['CM 23.5']
    },
    'NY 90': {
        nombre: 'Adidas NY 90',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis169/83.svg',
            'src/imagenes/Tenis/Tenis169/84.svg',
            'src/imagenes/Tenis/Tenis169/85.svg'
        ],
        descripcion: 'Los Adidas NYC 90 combinan un diseño retro inspirado en la ciudad de Nueva York con comodidad moderna para el día a día. Su silueta clásica y versátil permite combinarlos con cualquier outfit casual, mientras que sus materiales de alta calidad y la suela de goma proporcionan durabilidad, soporte y tracción en cada paso. Perfectos para quienes buscan un calzado urbano, atemporal y con estilo vintage.',
        tallas: ['CM 23.5']
    },
    'Stan Smith de gamuza': {
        nombre: 'Adidas Stan Smith de gamuza verde oliva',
        categoria: 'Adidas',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis170/86.svg',
            'src/imagenes/Tenis/Tenis170/87.svg',
            'src/imagenes/Tenis/Tenis170/88.svg'
        ],
        descripcion: 'Los Adidas Stan Smith Gamuza Verde Oliva reinventan el clásico icónico con un toque elegante y natural. Su acabado en gamuza verde oliva aporta estilo sofisticado y versatilidad, perfecto para outfits casuales o urbanos. Fabricados con materiales de alta calidad, ofrecen comodidad, durabilidad y una suela de goma que garantiza tracción en cada paso. Ideales para quienes buscan un calzado atemporal con un giro moderno y distintivo.',
        tallas: ['CM 24']
    },
    'DynaSoft Reveal': {
        nombre: 'running New Balance DynaSoft Reveal v4 BOA',
        categoria: 'New Balance',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis171/89.svg',
            'src/imagenes/Tenis/Tenis171/90.svg',
            'src/imagenes/Tenis/Tenis171/91.svg'
        ],
        descripcion: 'Los New Balance DynaSoft Reveal v4 BOA están diseñados para quienes buscan máximo confort, ajuste preciso y rendimiento en cada carrera. Su tecnología DynaSoft ofrece una amortiguación suave y reactiva, mientras que el sistema BOA permite un cierre rápido y personalizado, asegurando un ajuste seguro sin esfuerzo. La suela de goma brinda tracción y durabilidad en distintas superficies, convirtiéndolos en la opción perfecta para running, entrenamientos y uso activo diario.',
        tallas: ['CM 23.5']
    },
    'Game Royal/White': {
        nombre: 'Nike Pacific en color Game Royal/White',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis172/92.svg',
            'src/imagenes/Tenis/Tenis172/93.svg',
            'src/imagenes/Tenis/Tenis172/94.svg'
        ],
        descripcion: 'Los Nike Pacific Game Royal/White combinan estilo retro con comodidad moderna para el día a día. Su diseño de corte bajo en azul intenso con detalles en blanco aporta un look fresco y versátil, ideal para cualquier outfit casual o urbano. Fabricados con materiales duraderos y suela de goma resistente, ofrecen soporte, amortiguación y tracción confiable en cada paso. Perfectos para quienes buscan un calzado icónico, cómodo y lleno de estilo deportivo.',
        tallas: ['CM 24.5']
    },
    'Royale AC flash crimson': {
        nombre: 'Nike Court Royale AC',
        categoria: 'Nike',
        precio: "$1,300",
        imagenes: [
            'src/imagenes/Tenis/Tenis173/95.svg',
            'src/imagenes/Tenis/Tenis173/96.svg',
            'src/imagenes/Tenis/Tenis173/97.svg'
        ],
        descripcion: 'Los Nike Court Royale AC Flash Crimson combinan el diseño clásico de corte bajo con un toque vibrante y moderno. Su color rojo intenso aporta personalidad y estilo a cualquier outfit casual o urbano, mientras que sus materiales resistentes y suela de goma duradera ofrecen comodidad, soporte y tracción durante todo el día. Perfectos para quienes buscan un calzado atemporal con un giro llamativo y lleno de carácter.',
        tallas: ['CM 24.5']
    },
    'Advantage 2.0 lima': {
        nombre: 'Adidas Advantage 2.0 lima',
        categoria: 'Adidas',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis175/101.svg',
            'src/imagenes/Tenis/Tenis175/102.svg',
            'src/imagenes/Tenis/Tenis175/103.svg'
        ],
        descripcion: 'Los Adidas Advantage 2.0 Lima combinan un diseño clásico y minimalista con un toque moderno y colorido. Su vibrante tono lima aporta frescura y estilo a cualquier outfit casual o urbano, mientras que sus materiales de alta calidad ofrecen comodidad, durabilidad y soporte durante todo el día. La suela de goma proporciona tracción confiable, convirtiéndolos en la opción perfecta para quienes buscan un calzado versátil, moderno y lleno de personalidad.',
        tallas: ['CM 23']
    },
    'Asher sin cordones': {
        nombre: 'Vans Asher sin cordones',
        categoria: 'Vans',
        precio: "$850",
        imagenes: [
            'src/imagenes/Tenis/Tenis176/104.svg',
            'src/imagenes/Tenis/Tenis176/105.svg',
            'src/imagenes/Tenis/Tenis176/106.svg'
        ],
        descripcion: 'Los Vans Asher Sin Cordones combinan comodidad y estilo urbano en un diseño práctico y moderno. Su calce slip-on permite ponerse y quitarse los tenis fácilmente, mientras que la suela de goma tipo waffle ofrece tracción y durabilidad en cada paso. Versátiles y ligeros, son ideales para quienes buscan un calzado casual, cómodo y con el toque clásico de Vans.',
        tallas: ['CM 23.5']
    },
    'Hustle D 11': {
        nombre: 'Nike Team Hustle D 11',
        categoria: 'Nike',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis177/107.svg',
            'src/imagenes/Tenis/Tenis177/108.svg',
            'src/imagenes/Tenis/Tenis177/109.svg'
        ],
        descripcion: 'Los Nike Team Hustle D 11 están diseñados para ofrecer rendimiento y comodidad en la cancha y en el día a día. Su construcción resistente proporciona soporte y durabilidad, mientras que la amortiguación acolchada garantiza una pisada cómoda en cada salto y movimiento. La suela de goma con tracción multidireccional asegura estabilidad en diferentes superficies, convirtiéndolos en la opción ideal para jóvenes atletas y amantes del estilo deportivo urbano.',
        tallas: ['CM 22.5']
    },
    'Quest 5 platinum': {
        nombre: 'Nike Quest 5 platinum',
        categoria: 'Nike',
        precio: "$1,600",
        imagenes: [
            'src/imagenes/Tenis/Tenis178/110.svg',
            'src/imagenes/Tenis/Tenis178/111.svg',
            'src/imagenes/Tenis/Tenis178/112.svg'
        ],
        descripcion: 'Los Nike Quest 5 Platinum combinan estilo moderno y rendimiento para el día a día y el entrenamiento. Su diseño ligero permite movimientos ágiles, mientras que la entresuela con amortiguación ofrece pisadas suaves y confort durante largas jornadas. La suela de goma proporciona tracción y durabilidad en distintas superficies, ideal para correr, entrenar o complementar un look casual con un toque deportivo contemporáneo.',
        tallas: ['CM 24']
    },
    'Star Runner 3': {
        nombre: 'Nike Star Runner 3',
        categoria: 'Nike',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis179/113.svg',
            'src/imagenes/Tenis/Tenis179/114.svg',
            'src/imagenes/Tenis/Tenis179/115.svg'
        ],
        descripcion: 'Los Nike Star Runner 3 combinan comodidad, ligereza y estilo juvenil para acompañar cada paso. Su diseño dinámico y versátil permite usarlos tanto para actividades deportivas como para el día a día. La entresuela acolchada proporciona amortiguación y soporte, mientras que la suela de goma ofrece tracción y durabilidad. Perfectos para quienes buscan un calzado activo, moderno y lleno de energía.',
        tallas: ['CM 22.5']
    },
    'Blktop Rider': {
        nombre: 'Puma Blktop Rider',
        categoria: 'Puma',
        precio: "$1,900",
        imagenes: [
            'src/imagenes/Tenis/Tenis180/116.svg',
            'src/imagenes/Tenis/Tenis180/117.svg',
            'src/imagenes/Tenis/Tenis180/118.svg'
        ],
        descripcion: 'Los Puma BlkTop Rider combinan un diseño urbano y moderno con comodidad y durabilidad para el día a día. Su silueta robusta y elegante aporta estilo casual, mientras que la entresuela acolchada brinda amortiguación y soporte en cada paso. La suela de goma proporciona tracción confiable, convirtiéndolos en una opción ideal para quienes buscan un calzado versátil, con actitud y estilo contemporáneo.',
        tallas: ['CM 23.5']
    },
    'Pacific pink/violet': {
        nombre: 'Nike Pacific pink/violet',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis181/119.svg',
            'src/imagenes/Tenis/Tenis181/120.svg',
            'src/imagenes/Tenis/Tenis181/121.svg'
        ],
        descripcion: 'Los Nike Pacific Pink/Violet combinan un diseño retro y colorido con comodidad moderna para el día a día. Su silueta de corte bajo en tonos rosa y violeta aporta frescura y estilo a cualquier outfit casual o urbano. Fabricados con materiales duraderos y suela de goma resistente, ofrecen soporte, amortiguación y tracción confiable en cada paso. Perfectos para quienes buscan un calzado versátil, llamativo y lleno de personalidad.',
        tallas: ['CM 23.5']
    },
    'Breaknet 2.0 lifestyle court': {
        nombre: 'Adidas Breaknet 2.0 lifestyle court',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis182/122.svg',
            'src/imagenes/Tenis/Tenis182/123.svg',
            'src/imagenes/Tenis/Tenis182/124.svg'
        ],
        descripcion: 'Los Adidas Breaknet 2.0 Lifestyle Court combinan el estilo clásico de tenis con la comodidad y funcionalidad modernas. Su diseño inspirado en el tenis de corte bajo aporta un look versátil y urbano, mientras que la entresuela acolchada garantiza amortiguación y soporte durante todo el día. La suela de goma duradera proporciona tracción confiable, haciendo de estos tenis la opción ideal para quienes buscan un calzado casual, cómodo y con estilo atemporal.',
        tallas: ['CM 24']
    },
    'Quest 6 white': {
        nombre: 'Nike Quest 6',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis183/125.svg',
            'src/imagenes/Tenis/Tenis183/126.svg'
        ],
        descripcion: 'Los Nike Quest 6 están diseñados para combinar comodidad, ligereza y rendimiento en cada paso. Su entresuela acolchada proporciona amortiguación suave, mientras que la construcción ligera permite movimientos ágiles durante running, entrenamiento o uso diario. La suela de goma ofrece tracción y durabilidad en distintas superficies, convirtiéndolos en una opción versátil para quienes buscan un calzado deportivo moderno y confiable.',
        tallas: ['CM 22']
    },
    'Field General': {
        nombre: 'Nike Field General',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis184/127.svg',
            'src/imagenes/Tenis/Tenis184/128.svg',
            'src/imagenes/Tenis/Tenis184/129.svg'
        ],
        descripcion: 'Los Nike Field General están diseñados para ofrecer rendimiento, soporte y estilo en la cancha y fuera de ella. Su construcción resistente proporciona durabilidad y estabilidad, mientras que la amortiguación acolchada asegura comodidad en cada movimiento rápido y cambio de dirección. La suela de goma con tracción multidireccional permite agarre seguro en distintas superficies, convirtiéndolos en la opción ideal para atletas y amantes del estilo deportivo.',
        tallas: ['CM 24']
    },
    'Revolution 7 pink/coral': {
        nombre: 'Nike Revolution 7 pink/coral',
        categoria: 'Nike',
        precio: "$1,700",
        imagenes: [
            'src/imagenes/Tenis/Tenis185/130.svg',
            'src/imagenes/Tenis/Tenis185/131.svg',
            'src/imagenes/Tenis/Tenis185/132.svg'
        ],
        descripcion: 'Los Nike Revolution 7 Pink/Coral combinan un diseño moderno y femenino con comodidad y rendimiento para el día a día. Su silueta ligera permite movimientos ágiles, mientras que la entresuela acolchada brinda amortiguación suave y soporte en cada paso. La suela de goma resistente asegura tracción y durabilidad en distintas superficies, ideal para correr, entrenar o complementar un look casual con un toque vibrante.',
        tallas: ['CM 22.5']
    },
    'Madden Protégé': {
        nombre: 'Steve Madden Protégé',
        categoria: 'Steve Madden',
        precio: "$600",
        imagenes: [
            'src/imagenes/Tenis/Tenis186/133.svg',
            'src/imagenes/Tenis/Tenis186/134.svg',
            'src/imagenes/Tenis/Tenis186/135.svg'
        ],
        descripcion: 'Los Steve Madden Protégé combinan estilo urbano y sofisticación con comodidad para el día a día. Su diseño moderno y elegante se adapta a cualquier outfit casual o streetwear, mientras que la construcción de alta calidad ofrece durabilidad y soporte en cada paso. La suela resistente brinda tracción confiable, convirtiéndolos en una opción versátil para quienes buscan un calzado con personalidad, tendencia y confort.',
        tallas: ['CM 23.5']
    },
    'Hex Slide': {
        nombre: 'Jordan Hex Slide',
        categoria: 'Jordan',
        precio: "$700",
        imagenes: [
            'src/imagenes/Tenis/Tenis187/136.svg',
            'src/imagenes/Tenis/Tenis187/137.svg'
        ],
        descripcion: 'Comodidad y estilo que no se detiene. Las Jordan Hex Slide están diseñadas para ofrecer un ajuste ligero y confortable, perfectas para usar en casa, la playa o después de entrenar. Su diseño moderno combina la icónica estética de Jordan con materiales suaves y duraderos, brindando soporte y amortiguación en cada paso. Con la suela texturizada, proporcionan tracción y estabilidad, mientras que la correa ancha asegura un ajuste seguro. Eleva tu look casual con un toque deportivo de leyenda.',
        tallas: ['CM 23']
    },
    'Glide D': {
        nombre: 'Levi s Glide D L1124221',
        categoria: 'Levis',
        precio: "$850",
        imagenes: [
            'src/imagenes/Tenis/Tenis188/138.svg',
            'src/imagenes/Tenis/Tenis188/139.svg',
            'src/imagenes/Tenis/Tenis188/140.svg'
        ],
        descripcion: 'Descubre un estilo casual sin esfuerzo con los Levi’s Glide D L1124221, diseñados especialmente para mujer con una vibra urbana y moderna que combina comodidad y moda en cada paso. Inspirados en la cultura skate y la estética retro, estos tenis son perfectos para tus outfits del día a día, ya sea para un paseo casual por la ciudad o un plan relajado con amigos.',
        tallas: ['CM 24']
    },
    'Kosmo Rider': {
        nombre: 'Puma Kosmo Rider Sorbet',
        categoria: 'Puma',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis189/141.svg',
            'src/imagenes/Tenis/Tenis189/142.svg',
            'src/imagenes/Tenis/Tenis189/143.svg'
        ],
        descripcion: 'Estas sneakers están diseñadas con una silueta inspirada en la tecnología, que combina líneas y paneles dinámicos para un acabado visualmente impactante y contemporáneo. Los tonos tipo sorbet como este rosa claro aportan un toque femenino y vibrante a cualquier outfit, desde jeans hasta prendas deportivas.',
        tallas: ['CM 22']
    },
    'Pacific running Beige': {
        nombre: 'Nike Pacific running Beige',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis190/144.svg',
            'src/imagenes/Tenis/Tenis190/145.svg',
            'src/imagenes/Tenis/Tenis190/146.svg'
        ],
        descripcion: 'Descubre el equilibrio perfecto entre estilo clásico y comodidad urbana con los Nike Pacific en tono beige, un par de tenis que reúnen lo mejor del diseño inspirado en los corredores retro con la calidad moderna de Nike. Con una silueta de perfil bajo y detalles bien pensados, estos tenis elevan cualquier outfit casual sin perder funcionalidad.',
        tallas: ['CM 24']
    },
    'Superstar white': {
        nombre: 'Adidas Superstar',
        categoria: 'Adidas',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis191/147.svg',
            'src/imagenes/Tenis/Tenis191/148.svg',
            'src/imagenes/Tenis/Tenis191/149.svg'
        ],
        descripcion: 'Un ícono del estilo urbano que trasciende generaciones. Los Adidas Superstar son más que un par de tenis; son una declaración de moda y cultura. Desde su lanzamiento en los años 70 como calzado de básquetbol hasta convertirse en un símbolo de la cultura hip-hop y streetwear, estos tenis combinan historia, diseño clásico y comodidad.',
        tallas: ['CM 21']
    },
    'Duramo SL': {
        nombre: 'Adidas Duramo SL',
        categoria: 'Adidas',
        precio: "$1,250",
        imagenes: [
            'src/imagenes/Tenis/Tenis192/150.svg',
            'src/imagenes/Tenis/Tenis192/151.svg',
            'src/imagenes/Tenis/Tenis192/152.svg'
        ],
        descripcion: 'Ligeros, versátiles y listos para cualquier actividad, los Adidas Duramo SL combinan diseño moderno con rendimiento diario. Ideales para running, caminatas o entrenamientos ligeros, estos tenis ofrecen comodidad y soporte sin sacrificar estilo. Su silueta minimalista y elegante permite que los uses tanto en el gimnasio como en tus outfits casuales.',
        tallas: ['CM 23']
    },
    'Nizza Platform': {
        nombre: 'Adidas Nizza Platform',
        categoria: 'Adidas',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis193/153.svg',
            'src/imagenes/Tenis/Tenis193/154.svg',
            'src/imagenes/Tenis/Tenis193/155.svg'
        ],
        descripcion: 'Dale altura y estilo a tu look con los Adidas Nizza Platform, la reinterpretación moderna de un clásico del calzado urbano. Con una suela elevada y una silueta minimalista, estos tenis combinan comodidad, versatilidad y un toque audaz, perfectos para quienes buscan destacar en cualquier ocasión.',
        tallas: ['CM 23']
    },
    'Rickie Jr rosa': {
        nombre: 'Puma Rickie Jr.',
        categoria: 'Puma',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis194/1.svg',
            'src/imagenes/Tenis/Tenis194/2.svg',
            'src/imagenes/Tenis/Tenis194/3.svg'
        ],
        descripcion: 'Agrega un toque dulce y moderno a cada paso con los Puma Rickie Jr en color rosa. Diseñados con una silueta clásica y un acabado encantador, estos tenis ofrecen comodidad, ligereza y un estilo fresco ideal para el día a día. Perfectos para acompañar cualquier outfit con un aire juvenil y lleno de personalidad.',
        tallas: ['CM 22', 'CM 22.5']
    },
    'Rivalry Low bw': {
        nombre: 'Adidas Rivalry Low bw',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis195/4.svg',
            'src/imagenes/Tenis/Tenis195/5.svg',
            'src/imagenes/Tenis/Tenis195/6.svg'
        ],
        descripcion: 'Impón tu estilo con los Adidas Rivalry Low, un ícono del básquet reinventado para el street style actual. Su diseño de perfil bajo y silueta retro se combinan con materiales resistentes y una comodidad duradera, creando el balance perfecto entre actitud clásica y versatilidad moderna. Ideales para elevar cualquier look urbano, de día o de noche.',
        tallas: ['CM 23']
    },
    'Air Zoom Pegasus 39': {
        nombre: 'Nike Air Zoom Pegasus 39',
        categoria: 'Nike',
        precio: "$1,400",
        imagenes: [
            'src/imagenes/Tenis/Tenis196/7.svg',
            'src/imagenes/Tenis/Tenis196/8.svg',
            'src/imagenes/Tenis/Tenis196/9.svg'
        ],
        descripcion: '',
        tallas: ['CM 22']
    },
    'Luka 3 Photo Finish': {
        nombre: 'Jordan Luka 3 Photo Finish',
        categoria: 'Jordan',
        precio: "$2,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis198/13.svg',
            'src/imagenes/Tenis/Tenis198/14.svg',
            'src/imagenes/Tenis/Tenis198/15.svg'
        ],
        descripcion: 'Domina la cancha con los Jordan Luka 3 Photo Finish, creados para el juego dinámico y creativo de Luka Dončić. Su diseño innovador combina una amortiguación reactiva, gran estabilidad y un ajuste seguro que responde a cada cambio de ritmo. Con un look audaz y detalles que roban miradas, estos tenis ofrecen rendimiento de élite y estilo imparable dentro y fuera de la cancha.',
        tallas: ['CM 22.5']
    },
    'Samba': {
        nombre: 'Adidas Samba Og',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis199/16.svg',
            'src/imagenes/Tenis/Tenis199/17.svg',
            'src/imagenes/Tenis/Tenis199/18.svg'
        ],
        descripcion: 'Destaca con un ícono atemporal reinventado en los Adidas Samba OG Silver. Su silueta clásica de perfil bajo se fusiona con un acabado plateado llamativo que aporta un toque moderno y sofisticado. Cómodos, versátiles y llenos de estilo, estos tenis son perfectos para elevar cualquier outfit urbano con una vibra retro y audaz.',
        tallas: ['CM 20']
    },
    'Dearfoams': {
        nombre: 'pantufla de felpa',
        categoria: 'Dearfoams',
        precio: "$380",
        imagenes: [
            'src/imagenes/Tenis/Tenis200/19.svg',
            'src/imagenes/Tenis/Tenis200/20.svg',
            'src/imagenes/Tenis/Tenis200/21.svg'
        ],
        descripcion: 'Disfruta del máximo confort en casa con la pantufla de felpa Dearfoams. Su interior ultrasuave y acogedor envuelve tus pies con una sensación de calidez incomparable, mientras su diseño práctico y cómodo la hace ideal para el uso diario. Perfecta para relajarte y consentirte después de un largo día.',
        tallas: ['CM 26']
    },
    'Benassi': {
        nombre: 'Nike Benassi',
        categoria: 'Nike',
        precio: "$700",
        imagenes: [
            'src/imagenes/Tenis/Tenis201/23.svg',
            'src/imagenes/Tenis/Tenis201/22.svg'
        ],
        descripcion: 'Relaja tus pasos con las Nike Benassi, un básico infaltable para la comodidad diaria. Su diseño minimalista con correa acolchada y plantilla suave brinda una sensación ligera y confortable en cada uso. Ideales para después del entrenamiento, la playa o el día a día, combinan practicidad, estilo deportivo y confort sin esfuerzo.',
        tallas: ['CM 25 ']
    },
    'Solay Thong': {
        nombre: 'Nike Solay Thong',
        categoria: 'Nike',
        precio: "$450",
        imagenes: [
            'src/imagenes/Tenis/Tenis202/24.svg'
        ],
        descripcion: 'Disfruta de una sensación ligera y natural con las Nike Solay Thong. Diseñadas para el confort diario, su plantilla suave y flexible se adapta a cada paso, mientras su diseño sencillo y funcional las hace ideales para climas cálidos y momentos de descanso. Perfectas para un look relajado con el inconfundible estilo Nike.',
        tallas: ['CM 24']
    },
    'Oxford Dickinson': {
        nombre: 'Zapato Oxford Dickinson de Stacy Adams',
        categoria: 'Stacy Adams',
        precio: "$450",
        imagenes: [
            'src/imagenes/Tenis/Tenis203/25.svg',
            'src/imagenes/Tenis/Tenis203/26.svg',
            'src/imagenes/Tenis/Tenis203/27.svg'
        ],
        descripcion: 'Eleva tu look con el zapato Oxford Dickinson de Stacy Adams, una opción clásica que combina elegancia y sofisticación. Su diseño refinado con detalles cuidadosamente trabajados y acabado pulido ofrece una presencia impecable, ideal para ocasiones formales o profesionales. Un calzado que aporta distinción, confort y estilo atemporal en cada paso.',
        tallas: ['CM 22.5']
    },
    'D.O.N. Issue': {
        nombre: 'Adidas D.O.N. Issue #4 Spider-Gwen',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis204/28.svg',
            'src/imagenes/Tenis/Tenis204/29.svg',
            'src/imagenes/Tenis/Tenis204/30.svg'
        ],
        descripcion: 'Lleva tu juego a otra dimensión con los Adidas D.O.N. Issue #4 Spider-Gwen, una edición especial inspirada en el universo Spider-Verse. Diseñados para el alto rendimiento en la cancha, ofrecen amortiguación responsiva, gran tracción y un ajuste seguro que acompaña cada movimiento explosivo. Su diseño vibrante y lleno de personalidad combina velocidad, energía y estilo único, ideales para destacar dentro y fuera del juego.',
        tallas: ['CM 21']
    },
    'James Harden Vol. 4': {
        nombre: 'Adidas James Harden Vol. 4 Galaxy',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis205/31.svg',
            'src/imagenes/Tenis/Tenis205/32.svg',
            'src/imagenes/Tenis/Tenis205/33.svg'
        ],
        descripcion: 'Domina la cancha con los Adidas James Harden Vol. 4 Galaxy, diseñados para un juego explosivo y creativo. Su amortiguación reactiva, soporte estable y ajuste seguro ofrecen rendimiento de élite, mientras su diseño inspirado en la galaxia aporta un toque futurista y audaz. Perfectos para quienes buscan combinar velocidad, control y estilo fuera de este mundo.',
        tallas: ['CM 21']
    },
    'Flex Runner 2coral': {
        nombre: 'Nike Flex Runner 2 coral',
        categoria: 'Nike',
        precio: "$1,000",
        imagenes: [
            'src/imagenes/Tenis/Tenis206/34.svg',
            'src/imagenes/Tenis/Tenis206/35.svg',
            'src/imagenes/Tenis/Tenis206/36.svg'
        ],
        descripcion: 'Da pasos ligeros y con estilo con los Nike Flex Runner 2 Coral. Su diseño sin cordones y su ajuste flexible se adaptan a tus pies como una segunda piel, ofreciendo comodidad y libertad de movimiento todo el día. Con un color coral fresco y moderno, estos tenis son ideales para un look casual, activo y lleno de energía.',
        tallas: ['CM 21']
    },
    'Breaknet 2.0Rb': {
        nombre: 'Adidas Breaknet 2.0 Rosa',
        categoria: 'Adidas',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis207/37.svg',
            'src/imagenes/Tenis/Tenis207/38.svg',
            'src/imagenes/Tenis/Tenis207/39.svg'
        ],
        descripcion: 'Dale un toque juvenil y moderno a tu estilo con los Adidas Breaknet 2.0 Rosa. Su diseño versátil y cómodo combina una silueta clásica con detalles renovados, ofreciendo amortiguación ligera y soporte confiable para el día a día. Perfectos para quienes buscan destacar con frescura y actitud en cada paso.',
        tallas: ['CM 21']
    },
    'Field de nobuk': {
        nombre: 'Timberland Field de nobuk',
        categoria: 'Timberland',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis208/40.svg',
            'src/imagenes/Tenis/Tenis208/41.svg',
            'src/imagenes/Tenis/Tenis208/42.svg'
        ],
        descripcion: 'Explora con estilo y comodidad con los Timberland Field de nobuk. Su resistente material de nobuk y su construcción duradera brindan protección y soporte en cualquier terreno, mientras su diseño clásico y versátil aporta un toque urbano y atemporal. Ideales para aventuras al aire libre o un look casual con carácter.',
        tallas: ['CM 19']
    },
    'Air Force 1 LEB': {
        nombre: 'Nike Air Force 1 LE',
        categoria: 'Nike',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis209/43.svg',
            'src/imagenes/Tenis/Tenis209/44.svg',
            'src/imagenes/Tenis/Tenis209/45.svg'
        ],
        descripcion: 'Imprime actitud y estilo urbano con los Nike Air Force 1 LE Black. Su diseño icónico de perfil bajo, acabado totalmente negro y su suela resistente ofrecen comodidad y versatilidad para cualquier ocasión. Perfectos para quienes buscan un look atemporal, audaz y lleno de carácter en cada paso.',
        tallas: ['CM 21']
    },
    'Smash 3 0 L V': {
        nombre: 'Puma Smash 3 0 L V',
        categoria: 'Puma',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis210/46.svg',
            'src/imagenes/Tenis/Tenis210/47.svg',
            'src/imagenes/Tenis/Tenis210/48.svg'
        ],
        descripcion: 'Combina estilo clásico y comodidad diaria con los Puma Smash 3.0 L V. Su diseño elegante de perfil bajo, materiales duraderos y ajuste confiable los hacen perfectos para el día a día, ofreciendo versatilidad y un toque urbano sin esfuerzo. Ideales para quienes buscan un calzado sencillo, moderno y lleno de estilo.',
        tallas: ['CM 21']
    },
    'Court Borough Low': {
        nombre: 'Nike Court Borough Low 2 or Recraft',
        categoria: 'Nike',
        precio: "$1,000",
        imagenes: [
            'src/imagenes/Tenis/Tenis211/49.svg',
            'src/imagenes/Tenis/Tenis211/50.svg',
            'src/imagenes/Tenis/Tenis211/51.svg'
        ],
        descripcion: 'Luce un estilo retro con los Nike Court Borough Low 2 OR Recraft. Su silueta baja y diseño clásico inspirado en el tenis se combina con materiales resistentes y comodidad confiable para el día a día. Perfectos para un look urbano casual, combinando tradición y frescura en cada paso.',
        tallas: ['CM 20']
    },
    'Break Start': {
        nombre: 'Adidas Break Start',
        categoria: 'Adidas',
        precio: "$1,000",
        imagenes: [
            'src/imagenes/Tenis/Tenis212/52.svg',
            'src/imagenes/Tenis/Tenis212/53.svg',
            'src/imagenes/Tenis/Tenis212/54.svg'
        ],
        descripcion: 'Comienza cada día con comodidad y estilo con los Adidas Break Start. Su diseño versátil y moderno ofrece amortiguación ligera, ajuste confiable y una silueta casual perfecta para cualquier ocasión. Ideales para quienes buscan frescura, practicidad y un look urbano sin esfuerzo.',
        tallas: ['CM 17', 'CM 19']
    },
    'Tatum 1 Tunnel Walk': {
        nombre: 'Jordan Tatum 1 Tunnel Walk',
        categoria: 'Jordan',
        precio: "$1,800",
        imagenes: [
            'src/imagenes/Tenis/Tenis213/55.svg',
            'src/imagenes/Tenis/Tenis213/56.svg',
            'src/imagenes/Tenis/Tenis213/57.svg'
        ],
        descripcion: 'Destaca dentro y fuera de la cancha con los Jordan Tatum 1 Tunnel Walk. Diseñados para rendimiento y comodidad, ofrecen amortiguación reactiva, soporte estable y un ajuste seguro que acompaña cada movimiento explosivo. Con un diseño moderno y detalles llamativos, estos tenis combinan el espíritu competitivo con un estilo urbano inconfundible.',
        tallas: ['CM 19']
    },
    'Wired Run Jr.': {
        nombre: 'Puma Wired Run Jr.',
        categoria: 'Puma',
        precio: "$1,050",
        imagenes: [
            'src/imagenes/Tenis/Tenis214/58.svg',
            'src/imagenes/Tenis/Tenis214/59.svg',
            'src/imagenes/Tenis/Tenis214/60.svg'
        ],
        descripcion: 'Impulsa cada paso con los Puma Wired Run Jr., diseñados para comodidad y estilo en movimiento. Su silueta ligera y flexible ofrece soporte confiable, mientras sus detalles modernos aportan un toque dinámico y juvenil. Perfectos para actividades diarias y para destacar con frescura en cada aventura.',
        tallas: ['CM 18.5']
    },
    'Court LegacyVino': {
        nombre: 'Nike Court Legacy',
        categoria: 'Nike',
        precio: "$1,000",
        imagenes: [
            'src/imagenes/Tenis/Tenis215/61.svg',
            'src/imagenes/Tenis/Tenis215/62.svg',
            'src/imagenes/Tenis/Tenis215/63.svg'
        ],
        descripcion: 'Agrega estilo y sofisticación a tu look con los Nike Court Legacy Vino. Inspirados en el tenis clásico, combinan una silueta limpia con un color vino profundo, ofreciendo comodidad, durabilidad y un toque urbano moderno. Ideales para quienes buscan destacar con elegancia y actitud en el día a día.',
        tallas: ['CM 17']
    },
    'Downshifter 12 NN': {
        nombre: 'Nike Downshifter 12 NN',
        categoria: 'Nike',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis216/64.svg',
            'src/imagenes/Tenis/Tenis216/65.svg',
            'src/imagenes/Tenis/Tenis216/66.svg'
        ],
        descripcion: 'Corre con ligereza y comodidad con los Nike Downshifter 12 NN. Su diseño flexible y transpirable, junto con amortiguación ligera y soporte confiable, los hace ideales para entrenamientos, caminatas o el día a día. Perfectos para quienes buscan rendimiento, frescura y estilo deportivo sin complicaciones.',
        tallas: ['CM 20']
    },
    'Flar': {
        nombre: 'Jordan Flar Black',
        categoria: 'Jordan',
        precio: "$550",
        imagenes: [
            'src/imagenes/Tenis/Tenis217/67.svg',
            'src/imagenes/Tenis/Tenis217/68.svg',
            'src/imagenes/Tenis/Tenis217/69.svg',
            'src/imagenes/Tenis/Tenis217/70.svg'
        ],
        descripcion: 'Imprime actitud y estilo con los Jordan Flar Black. Su diseño moderno y perfil bajo ofrece comodidad, soporte confiable y un ajuste seguro en cada paso. Con acabado completamente negro, estos tenis combinan un look urbano audaz con el rendimiento característico de Jordan, ideales para destacar dentro y fuera de la cancha.',
        tallas: ['CM 22']
    },
    'Hoops 4.0 Bebe': {
        nombre: 'Adidas Hoops 4.0',
        categoria: 'Adidas',
        precio: "$1,000",
        imagenes: [
            'src/imagenes/Tenis/Tenis218/71.svg',
            'src/imagenes/Tenis/Tenis218/72.svg',
            'src/imagenes/Tenis/Tenis218/73.svg'
        ],
        descripcion: 'Domina el estilo urbano con los Adidas Hoops 4.0. Inspirados en el baloncesto clásico, combinan una silueta moderna de perfil alto con comodidad, durabilidad y soporte confiable. Ideales para el día a día, estos tenis ofrecen un look versátil que destaca tanto en la cancha como en la calle.',
        tallas: ['CM 19', 'CM 20']
    },
    'Terrex Voyager 21Niño': {
        nombre: 'Adidas Terrex Voyager 21',
        categoria: 'Adidas',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis219/74.svg',
            'src/imagenes/Tenis/Tenis219/75.svg',
            'src/imagenes/Tenis/Tenis219/76.svg'
        ],
        descripcion: 'Explora sin límites con los Adidas Terrex Voyager 21. Diseñados para aventuras al aire libre, ofrecen resistencia, tracción confiable y comodidad duradera en cualquier terreno. Su diseño robusto y versátil combina funcionalidad y estilo, perfectos para quienes buscan un calzado preparado para la naturaleza y la vida urbana.',
        tallas: ['CM 18']
    },
    'Revolution 6niña': {
        nombre: 'Nike Revolution 6',
        categoria: 'Nike',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis220/77.svg',
            'src/imagenes/Tenis/Tenis220/78.svg',
            'src/imagenes/Tenis/Tenis220/79.svg'
        ],
        descripcion: 'Corre con comodidad y estilo con los Nike Revolution 6. Su diseño ligero y flexible, junto con amortiguación suave, ofrece soporte confiable en cada paso, ideal para entrenamientos, caminatas o el uso diario. Perfectos para quienes buscan rendimiento, frescura y practicidad sin sacrificar estilo.',
        tallas: ['CM 18']
    },
    'Court Legacy azul': {
        nombre: 'Nike Court Legacy',
        categoria: 'Nike',
        precio: "$1,000",
        imagenes: [
            'src/imagenes/Tenis/Tenis221/80.svg',
            'src/imagenes/Tenis/Tenis221/81.svg',
            'src/imagenes/Tenis/Tenis221/82.svg'
        ],
        descripcion: 'Luce un estilo clásico y cómodo con los Nike Court Legacy. Su diseño inspirado en el tenis, combinado con materiales duraderos y suela resistente, ofrece soporte confiable y comodidad durante todo el día. Ideales para quienes buscan un look retro, versatilidad y confort sin sacrificar estilo.',
        tallas: ['CM 19 ']
    },
    'All-Day Active AC+ PS': {
        nombre: 'Puma All-Day Active AC+ PS',
        categoria: 'Puma',
        precio: "$900",
        imagenes: [
            'src/imagenes/Tenis/Tenis222/83.svg',
            'src/imagenes/Tenis/Tenis222/84.svg',
            'src/imagenes/Tenis/Tenis222/85.svg'
        ],
        descripcion: 'Disfruta de comodidad y energía durante todo el día con los Puma All-Day Active AC+ PS. Su diseño ligero y flexible, junto con una amortiguación suave, ofrece soporte confiable en cada paso, perfecto para juegos, entrenamientos o el uso diario. Ideales para quienes buscan rendimiento, frescura y estilo sin esfuerzo.',
        tallas: ['CM 18']
    },
    'Court LegacyAmarilloN': {
        nombre: 'Nike Court Legacy',
        categoria: 'Nike',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis223/86.svg',
            'src/imagenes/Tenis/Tenis223/87.svg',
            'src/imagenes/Tenis/Tenis223/88.svg'
        ],
        descripcion: 'Destaca con estilo y comodidad con los Nike Court Legacy en color amarillo. Su diseño inspirado en el tenis, materiales duraderos y suela resistente ofrecen soporte confiable y confort durante todo el día. Perfectos para quienes buscan un look retro vibrante, versatilidad y estilo sin sacrificar comodidad.',
        tallas: ['CM 17']
    },
    'R78 V PS': {
        nombre: 'Puma R78 V PS',
        categoria: 'Puma',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis224/89.svg',
            'src/imagenes/Tenis/Tenis224/90.svg',
            'src/imagenes/Tenis/Tenis224/91.svg'
        ],
        descripcion: 'Corre con estilo y comodidad con los Puma R78 V PS. Su diseño moderno y detalles llamativos, junto con una suela ligera y flexible, ofrecen soporte confiable en cada paso. Ideales para el día a día, juegos o entrenamientos, perfectos para quienes buscan frescura, versatilidad y un toque de personalidad sin sacrificar confort.',
        tallas: ['CM 18']
    },
    'Revolution 6 NN toddler´s': {
        nombre: 'Nike Revolution 6 NN toddler´s',
        categoria: 'Nike',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis225/92.svg',
            'src/imagenes/Tenis/Tenis225/93.svg',
            'src/imagenes/Tenis/Tenis225/94.svg'
        ],
        descripcion: 'Corre con comodidad y seguridad con los Nike Revolution 6 NN para toddlers. Su diseño ligero y flexible, junto con amortiguación suave, brinda soporte confiable en cada paso, ideal para los primeros juegos, caminatas y aventuras diarias. Perfectos para los más pequeños que necesitan confort, libertad de movimiento y estilo sin esfuerzo.',
        tallas: ['CM 17.5']
    },
    '6 Grafito': {
        nombre: 'Nike Revolution 6 Grafito',
        categoria: 'Nike',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis226/95.svg',
            'src/imagenes/Tenis/Tenis226/96.svg',
            'src/imagenes/Tenis/Tenis226/97.svg'
        ],
        descripcion: 'Disfruta de cada paso con los Nike Revolution 6 en grafito. Su diseño moderno y liviano, junto con amortiguación suave, proporciona comodidad y soporte durante todo el día. Ideales para entrenamientos, caminatas o el uso diario, combinando rendimiento, practicidad y un estilo urbano sofisticado.',
        tallas: ['CM 18']
    },
    'Trinity': {
        nombre: 'Puma Trinity',
        categoria: 'Puma',
        precio: "$1,250",
        imagenes: [
            'src/imagenes/Tenis/Tenis227/98.svg',
            'src/imagenes/Tenis/Tenis227/99.svg',
            'src/imagenes/Tenis/Tenis227/100.svg'
        ],
        descripcion: 'Lleva tu energía a cada paso con los Puma Trinity. Con un diseño estilizado y materiales ligeros, proporcionan comodidad y soporte durante todo el día. Ideales para actividades diarias o momentos activos, combinan funcionalidad, durabilidad y un estilo moderno que resalta en cualquier ocasión.',
        tallas: ['CM 17.5']
    },
    'Grand Court 2.0Lbcn': {
        nombre: 'Adidas Grand Court 2.0',
        categoria: 'Adidas',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis228/101.svg',
            'src/imagenes/Tenis/Tenis228/102.svg',
            'src/imagenes/Tenis/Tenis228/103.svg'
        ],
        descripcion: 'Luce un estilo clásico y cómodo con los Adidas Grand Court 2.0. Su diseño inspirado en el tenis, materiales resistentes y suela duradera ofrecen confort y estabilidad en cada paso. Perfectos para el día a día, paseos o salidas casuales, combinando un look retro con practicidad y estilo urbano.',
        tallas: ['CM 17.5']
    },
    'Nike Revolution 7 rosa azul': {
        nombre: 'Nike Revolution 7 ',
        categoria: 'Nike',
        precio: "$1,100",
        imagenes: [
            'src/imagenes/Tenis/Tenis229/104.svg',
            'src/imagenes/Tenis/Tenis229/105.svg',
            'src/imagenes/Tenis/Tenis229/106.svg'
        ],
        descripcion: 'Da pasos llenos de estilo y comodidad con los Nike Revolution 7 en rosa con Swoosh azul. Su diseño ligero y flexible, junto con amortiguación suave, brinda soporte confiable en cada movimiento. Ideales para entrenamientos, juegos o el uso diario, combinando un look vibrante con confort duradero.',
        tallas: ['CM 17']
    },
    'Balance 574': {
        nombre: 'New Balance 574',
        categoria: 'New Balance',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis230/107.svg',
            'src/imagenes/Tenis/Tenis230/108.svg',
            'src/imagenes/Tenis/Tenis230/109.svg'
        ],
        descripcion: 'Icono del estilo casual, los New Balance 574 combinan un diseño atemporal con comodidad para el día a día. Su estructura resistente, amortiguación equilibrada y silueta clásica los hacen ideales para caminar, salir o completar cualquier outfit con un toque urbano y versátil. Perfectos para quienes buscan confort duradero y estilo que nunca pasa de moda.',
        tallas: ['CM 16']
    },
    'Binzie (TD)': {
        nombre: 'Nike Binzie (TD)',
        categoria: 'Nike',
        precio: "$980",
        imagenes: [
            'src/imagenes/Tenis/Tenis231/110.svg',
            'src/imagenes/Tenis/Tenis231/111.svg',
            'src/imagenes/Tenis/Tenis231/112.svg'
        ],
        descripcion: 'Diseñados para los más pequeños, los Nike Binzie (TD) ofrecen abrigo, comodidad y facilidad de uso en cada paso. Su interior suave, ajuste práctico y suela flexible brindan soporte y seguridad durante las primeras aventuras diarias. Ideales para mantener los pies cálidos y protegidos sin perder estilo.',
        tallas: ['CM 15']
    },
    'Max INTRLK Lite negros': {
        nombre: 'Nike Air Max INTRLK Lite',
        categoria: 'Nike',
        precio: "$1,500",
        imagenes: [
            'src/imagenes/Tenis/Tenis232/113.svg',
            'src/imagenes/Tenis/Tenis232/114.svg',
            'src/imagenes/Tenis/Tenis232/115.svg'
        ],
        descripcion: 'Impulsa tu ritmo con los Nike Air Max INTRLK Lite en color negro. Su diseño moderno y estructura ligera se combinan con una sensación de amortiguación reactiva que aporta comodidad y estabilidad durante todo el día. Ideales para el uso diario o actividades activas, ofrecen un look sobrio con un toque deportivo y actual.',
        tallas: ['CM 18']
    },
    'puma basket vino': {
        nombre: 'Puma basket',
        categoria: 'Puma',
        precio: "$750",
        imagenes: [
            'src/imagenes/Tenis/Tenis233/116.svg',
            'src/imagenes/Tenis/Tenis233/117.svg'
        ],
        descripcion: 'Clásicos y llenos de personalidad, los Puma Basket en color vino destacan por su diseño limpio y elegante. Su estructura cómoda y materiales resistentes los hacen ideales para el uso diario, aportando un toque sofisticado y urbano a cualquier outfit sin dejar de lado el confort.',
        tallas: ['CM 15/5']
    },
    'Grand Court 2.0bebe2': {
        nombre: 'Adidas Grand Court 2.0',
        categoria: 'Adidas',
        precio: "$750",
        imagenes: [
            'src/imagenes/Tenis/Tenis234/118.svg',
            'src/imagenes/Tenis/Tenis234/119.svg',
            'src/imagenes/Tenis/Tenis234/120.svg'
        ],
        descripcion: 'Pensados para los más pequeños, los Adidas Grand Court 2.0 bebé combinan un diseño clásico con comodidad suave para el día a día. Su ajuste práctico, materiales ligeros y suela flexible brindan soporte y seguridad en cada movimiento. Ideales para acompañar los primeros pasos con estilo y confort.',
        tallas: ['CM 15']
    },
    'Cat & Jack': {
        nombre: 'Botiines negros',
        categoria: 'Cat & Jack',
        precio: "$900",
        imagenes: [
            'src/imagenes/Tenis/Tenis235/121.svg',
            'src/imagenes/Tenis/Tenis235/122.svg'
        ],
        descripcion: 'Prácticos y versátiles, los botines negros Cat & Jack ofrecen comodidad y resistencia para el uso diario. Su diseño sencillo y funcional, junto con materiales duraderos y suela firme, brindan soporte y seguridad en cada paso. Ideales para combinar con cualquier outfit y acompañar todas las aventuras del día.',
        tallas: ['CM 13']
    },
    'BMCiTYBM': {
        nombre: 'Botas de nieve',
        categoria: 'BMCiTYBM',
        precio: "$390",
        imagenes: [
            'src/imagenes/Tenis/Tenis236/123.svg',
            'src/imagenes/Tenis/Tenis236/124.svg',
            'src/imagenes/Tenis/Tenis236/125.svg'
        ],
        descripcion: 'Diseñadas para el invierno, las BMCiTYBM toddler winter snow boots ofrecen protección y comodidad para los días fríos. Su interior abrigado, ajuste seguro y suela antideslizante ayudan a mantener los pies cálidos y estables durante juegos y paseos. Ideales para que los más pequeños disfruten la temporada con seguridad y confort.',
        tallas: ['CM 10']
    },
    'Kids Phoenix Sugarlite': {
        nombre: 'Native Shoes Kids Phoenix Sugarlite',
        categoria: 'Native',
        precio: "$380",
        imagenes: [
            'src/imagenes/Tenis/Tenis237/126.svg',
            'src/imagenes/Tenis/Tenis237/127.svg',
        ],
        descripcion: 'Ligeros y divertidos, los Native Shoes Kids Phoenix Sugarlite ofrecen comodidad y libertad de movimiento para los más pequeños. Su material flexible y resistente al agua, junto con un ajuste práctico, los hace ideales para el uso diario, juegos y aventuras. Perfectos para quienes buscan funcionalidad, color y estilo en cada paso.',
        tallas: ['CM 13']
    },
    'Adidas Samba preescolar': {
        nombre: 'Adidas Samba',
        categoria: 'Adidas',
        precio: "$380",
        imagenes: [
            'src/imagenes/Tenis/Tenis238/128.svg',
            'src/imagenes/Tenis/Tenis238/129.svg',
            'src/imagenes/Tenis/Tenis238/130.svg'
        ],
        descripcion: 'Clásicos que nunca pasan de moda, los Adidas Samba preescolar combinan un diseño icónico con comodidad pensada para los más pequeños. Su ajuste seguro, materiales resistentes y suela firme brindan estabilidad en cada paso, ideales para el uso diario, juegos y actividades escolares con un estilo deportivo y atemporal.',
        tallas: ['CM 13']
    },
    'Adidas superstar negrosB': {
        nombre: 'Adidas superstar negros',
        categoria: 'Adidas',
        precio: "$950",
        imagenes: [
            'src/imagenes/Tenis/Tenis239/131.svg',
            'src/imagenes/Tenis/Tenis239/132.svg',
            'src/imagenes/Tenis/Tenis239/133.svg'
        ],
        descripcion: 'Icónicos y prácticos, los Adidas Superstar negros para bebé combinan un diseño clásico con comodidad pensada para los más pequeños. Su ajuste fácil, materiales suaves y suela flexible brindan soporte y libertad de movimiento en cada paso. Ideales para el uso diario, con un estilo atemporal que combina con todo.',
        tallas: ['CM 12']
    },
    'Superstar blancos bebe': {
        nombre: 'Adidas superstar',
        categoria: 'Adidas',
        precio: "$1,200",
        imagenes: [
            'src/imagenes/Tenis/Tenis240/134.svg',
            'src/imagenes/Tenis/Tenis240/135.svg',
            'src/imagenes/Tenis/Tenis240/136.svg'
        ],
        descripcion: 'Icónicos y prácticos, los Adidas Superstar negros para bebé combinan un diseño clásico con comodidad pensada para los más pequeños. Su ajuste fácil, materiales suaves y suela flexible brindan soporte y libertad de movimiento en cada paso. Ideales para el uso diario, con un estilo atemporal que combina con todo.',
        tallas: ['CM 11.5']
    },
    // === PRODUCTOS ORIGINALES (de ropa-hombre.html) Reutilizacion de pares de index para no duplicar codigo ===
    'charhatt force': {
        nombre: 'Playera Charhatt Force Naranja',
        categoria: 'Charhatt Force',
        precio: '$190',
        imagenes: [
            'src/imagenes/Ropa/Playera/Carhartt/18.svg',
            'src/imagenes/Ropa/Playera/Carhartt/17.svg'
        ],
        descripcion: 'La Playera Carhartt Force Naranja combina durabilidad, comodidad y un estilo casual con carácter. Diseñada para el uso diario, ofrece una sensación ligera y fresca sin sacrificar resistencia, ideal para jornadas activas o looks urbanos relajados.',
        tallas: ['S']
    },
    'pantalon-mezclilla-1': {
        nombre: 'Pantalon mezclilla BKE',
        categoria: 'BKE',
        precio: '$350',
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 1/4.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 1/3.svg'
        ],
        descripcion: 'El Pantalón de Mezclilla BKE ofrece un equilibrio perfecto entre estilo clásico y comodidad para el uso diario. Su diseño versátil lo convierte en una prenda esencial que se adapta fácilmente a looks casuales y urbanos.',
        tallas: ['34 X 32']
    },
    'jogger': {
        nombre: 'Pantalón  Jogger gris oscuro',
        categoria: 'jogger',
        precio: "$280",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/jogger/8.svg',
        ],
        descripcion: 'El Pantalón Jogger Gris Oscuro ofrece la combinación perfecta entre comodidad y estilo urbano. Su diseño moderno lo convierte en una prenda ideal tanto para el uso diario como para actividades relajadas o looks casuales.',
        tallas: ['M']
    },
    'nautica chamarra': {
        nombre: 'Chamarra Nautica gray',
        categoria: 'Nautica',
        precio: "$450",
        imagenes: [
            'src/imagenes/Ropa/Chamarras/Nautica/3.svg',
            'src/imagenes/Ropa/Chamarras/Nautica/4.svg'
        ],
        descripcion: 'La Chamarra Nautica Gray combina un diseño moderno y funcional con la comodidad ideal para el uso diario. Su estilo limpio y versátil la convierte en una prenda perfecta para climas frescos y looks casuales con un toque elegante.',
        tallas: ['S']
    },
    'pantalon-mezclilla-2': {
        nombre: 'Pantalón  de mezclilla Liverpool',
        categoria: 'Liverpool',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 2/6.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 2/5.svg'
        ],
        descripcion: 'El Pantalón de Mezclilla Liverpool es una prenda clásica y versátil, ideal para el uso diario. Su diseño atemporal permite combinarlo fácilmente con diferentes estilos, desde looks casuales hasta outfits más formales relajados.',
        tallas: ['33 x 32']
    },
    'lululemon': {
        nombre: 'Short Azul Lululemon',
        categoria: 'Lululemon',
        precio: "$250",
        imagenes: [
            'src/imagenes/Ropa/Short/Lululemon/Azul/29.svg',
            'src/imagenes/Ropa/Short/Lululemon/Azul/28.svg'
        ],
        descripcion: 'El Short Azul Lululemon está diseñado para ofrecer comodidad, libertad de movimiento y un estilo limpio ideal para entrenamientos y uso diario. Su diseño moderno lo convierte en una prenda versátil tanto para actividades deportivas como para looks casuales.',
        tallas: ['36']
    },
    'conjunto1': {
        nombre: 'Conjunto Verano',
        categoria: 'Conjunto',
        precio: "Falta precio",
        imagenes: [
            'src/imagenes/Ropa/Conjuntos/5/28.svg',
            'src/imagenes/Ropa/Playera/Tipo Polo/Ralph/13.svg',
            'src/imagenes/Ropa/Pantalon vestir/Tommy/15.svg'
        ],
        descripcion: 'Este Conjunto de Verano combina elegancia fresca y comodidad, ideal para climas cálidos y ocasiones casuales con un toque sofisticado. La camisa tipo polo Ralph Lauren aporta un estilo clásico y refinado, mientras que el pantalón blanco de lino Tommy Hilfiger añade ligereza y frescura al look.',
    },
    'northface': {
        nombre: 'Chamarra The North Face Skyline Naranja',
        categoria: 'The North Face',
        precio: '$450',
        imagenes: [
            'src/imagenes/Ropa/Chamarras/The North Face/8.svg',
            'src/imagenes/Ropa/Chamarras/The North Face/6.svg',
            'src/imagenes/Ropa/Chamarras/The North Face/7.svg'
        ],
        descripcion: 'La Chamarra The North Face Skyline combina funcionalidad, comodidad y un diseño moderno ideal para el uso diario y actividades al aire libre. Su estilo limpio y versátil la convierte en una prenda perfecta tanto para la ciudad como para climas frescos.',
        tallas: ['XL']
    },
    'jersey-Rockets': {
        nombre: 'Jersey Nike Rockets',
        categoria: 'Nike',
        precio: '$290',
        imagenes: [
            'src/imagenes/Ropa/Jersey/Rojo/24.svg',
            'src/imagenes/Ropa/Jersey/Rojo/23.svg'
        ],
        descripcion: 'Diseñado para los verdaderos fans del básquet y el estilo deportivo. El Jersey Nike Rockets combina un diseño auténtico inspirado en la NBA con materiales ligeros y transpirables que brindan comodidad dentro y fuera de la cancha.',
        tallas: ['M']
    },
    'pantalongris': {
        nombre: 'Pantalón  Gap Gris',
        categoria: 'Gap',
        precio: '$350',
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Gris/7.svg',
            'src/imagenes/Ropa/Pantalon vestir/Gris/8.svg'
        ],
        descripcion: 'El Pantalón GAP Gris combina un diseño clásico con comodidad ideal para el uso diario. Su estilo versátil lo convierte en una prenda fácil de integrar en looks casuales o más formales relajados.',
        tallas: ['34 X 34']
    },
    'pantalon-mezclilla-3': {
        nombre: 'Pantalón  de mezclilla Boss',
        categoria: 'Boss',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 5/1.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 5/2.svg'
        ],
        descripcion: 'El Pantalón de Mezclilla BOSS combina elegancia moderna y comodidad en una prenda versátil de estilo premium. Su diseño limpio y sofisticado lo convierte en una excelente opción tanto para looks casuales refinados como para outfits más formales relajados.',
        tallas: ['34 X 32']
    },
    'pantalon-mezclilla-4': {
        nombre: 'Pantalón  de mezclilla Gap',
        categoria: 'Gap',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 6/3.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 6/4.svg'
        ],
        descripcion: 'El Pantalón de Mezclilla GAP es una prenda clásica y versátil, ideal para el uso diario. Su diseño atemporal permite combinarlo fácilmente con diferentes estilos, desde looks casuales hasta outfits más relajados.',
        tallas: ['34 X 32']
    },
    'cuadros-tommy': {
        nombre: 'Playera Tommy Hilfiger',
        categoria: 'Tommy Hilfiger',
        precio: "$250",
        imagenes: [
            'src/imagenes/Ropa/Playera/Formal/tommy/2.svg',
            'src/imagenes/Ropa/Playera/Formal/tommy/1.svg',
            'src/imagenes/Ropa/Playera/Formal/tommy/3.svg'
        ],
        descripcion: 'La Playera Tommy Hilfiger de Cuadros combina un diseño clásico con un estilo casual moderno, ideal para looks relajados con un toque elegante. Su patrón de cuadros aporta personalidad y versatilidad, perfecta para el uso diario.',
        tallas: ['S']
    },
    'pantalon-mezclilla-5': {
        nombre: 'Pantalón  de mezclilla Hollister',
        categoria: 'Hollister',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 7/5.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 7/6.svg'
        ],
        descripcion: 'El Pantalón de Mezclilla Hollister ofrece un estilo moderno y juvenil ideal para el uso diario. Su diseño versátil se adapta fácilmente a looks casuales y urbanos, manteniendo una apariencia fresca y actual.',
        tallas: ['32 X 32']
    },
    'Old-navy': {
        nombre: 'Playera Old Navy Chicago',
        categoria: 'Old Navy',
        precio: "$180",
        imagenes: [
            'src/imagenes/Ropa/Playera/Old Navy/14.svg',
            'src/imagenes/Ropa/Playera/Old Navy/13.svg'
        ],
        descripcion: 'La Playera Old Navy Chicago ofrece un estilo casual y urbano inspirado en la ciudad, ideal para el uso diario. Su diseño gráfico aporta personalidad y un look relajado que combina fácilmente con jeans, joggers o shorts.',
        tallas: ['S']
    },
    'Pantalon-mezclilla-6': {
        nombre: 'Pantalón  mezclilla Levi’s',
        categoria: 'Levi’s',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 8/9.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 8/10.svg'
        ],
        descripcion: 'El pantalón de mezclilla Levi’s negro es un básico esencial que combina estilo clásico con funcionalidad moderna. Diseñado con el sello de calidad de Levi’s, este jean negro destaca por su versatilidad: desde un outfit casual para el día a día hasta un look urbano más elegante.',
        tallas: ['29 X 30']
    },
    'pantalon-vestir-negro': {
        nombre: 'Pantalón  Perry Ellis Portafilio',
        categoria: 'Perry Ellis',
        precio: "$290",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Azul/6.svg',
            'src/imagenes/Ropa/Pantalon vestir/Azul/7.svg'
        ],
        descripcion: 'El Pantalón Perry Ellis Portfolio combina elegancia moderna con comodidad, ideal para un estilo formal o business casual. Su diseño limpio y bien estructurado ofrece una silueta estilizada que se adapta perfectamente a jornadas de oficina o eventos más formales.',
        tallas: ['30 X 29']
    },
    'jersey-olkahoma': {
        nombre: 'Jersey Oficial Oklahoma City Thunder - NBA / Association Edition',
        categoria: 'NBA',
        precio: "Falta precio",
        imagenes: [
            'src/imagenes/Ropa/Jersey/21.svg',
            'src/imagenes/Ropa/Jersey/22.svg'
        ],
        descripcion: '¡Representa a tu equipo con el auténtico orgullo! Este Jersey Oficial de los Oklahoma City Thunder es la misma versión que lucen los jugadores en la cancha. Confeccionado por Nike con los colores y diseños oficiales de la NBA, es la pieza definitiva para cualquier fan de OKC.',
        tallas: ['L']
    },
    'short-mezclilla': {
        nombre: 'Short de mezclilla Levi’s',
        categoria: 'Levi’s',
        precio: "Falta precio",
        imagenes: [
            'src/imagenes/Ropa/Short/Mezclilla/14.svg',
            'src/imagenes/Ropa/Short/Mezclilla/15.svg'
        ],
        descripcion: 'Encuentra el equilibrio perfecto entre estilo relajado y durabilidad probada con el Short de Mezclilla Levi’s. Confeccionado con el icónico denim de la marca, este short transforma el legado de los jeans en la pieza esencial para los días cálidos. Su corte clásico y su comodidad inigualable lo convierten en un básico que regresa temporada tras temporada.',
        tallas: ['32']
    },
    'tommy-playera': {
        nombre: 'Playera Tommy Hilfiger',
        categoria: 'Tommy Hilfiger',
        precio: "Falta precio",
        imagenes: [
            'src/imagenes/Ropa/Playera/Tommy/21.svg',
            'src/imagenes/Ropa/Playera/Tommy/22.svg',
            'src/imagenes/Ropa/Playera/Tommy/23.svg'
        ],
        descripcion: 'Eleva tu estilo casual con la pureza de un clásico. Esta Playera Tommy Hilfiger en color gris es la prenda esencial que combina la comodidad suprema del algodón con el diseño limpio y reconocible de la marca americana por excelencia. Un tono neutral y sofisticado que sirve de lienzo perfecto para cualquier look.',
        tallas: ['M']
    },
    'Short-rosa': {
        nombre: 'Short-rosa',
        categoria: 'Short',
        precio: "Falta precio",
        imagenes: [
            'src/imagenes/Ropa/Short/Short de vestir/Rosa/18.svg',
            'src/imagenes/Ropa/Short/Short de vestir/Rosa/17.svg'
        ],
        descripcion: 'Redefine la elegancia casual con este Short de Vestir en tono rosa. Diseñado para el hombre contemporáneo que no temba jugar con el color, esta pieza combina la comodidad y frescura de un short con el corte y la sofisticación de un pantalón de vestir. Ideal para eventos diurnos, salidas chic o para infundir un toque de energía a tu guardarropa de temporada.',
        tallas: ['']
    },
    'Charhatt-roja': {
        nombre: 'Playera Charhatt Force Roja',
        categoria: 'Charhatt Force',
        precio: "$190",
        imagenes: [
            'src/imagenes/Ropa/Playera/Carhartt/Roja/10.svg',
            'src/imagenes/Ropa/Playera/Carhartt/Roja/9.svg'
        ],
        descripcion: 'La leyenda de la durabilidad se encuentra con la comodidad diaria. La Playera Carhartt Force en color rojo intenso está diseñada con la misma filosofía de las emblemáticas prendas de trabajo de la marca: materiales excepcionales que resisten el desgaste. No es solo una playera básica; es una herramienta de vestir para quienes valoran la construcción por sobre todo.',
        tallas: ['XL']
    },
    'pantalon-mezclilla-7': {
        nombre: 'Pantalón  mezclilla Levi’s',
        categoria: 'Levi’s',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 16/33.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 16/34.svg'
        ],
        descripcion: 'No es solo un pantalón. Es el arquetipo. El pantalón de mezclilla azul Levi’s es la prenda que inventó una categoría y definió la cultura moderna. Desde las minas de oro hasta las pasarelas, su legado de durabilidad, autenticidad y estilo rebelde permanece intacto. Más que una prenda, es la piedra angular de tu guardarropa.',
        tallas: ['32 X 34']
    },
    'vans-playera': {
        nombre: 'Vans X T&C Vintage Plink',
        categoria: 'Vans',
        precio: "Falta precio",
        imagenes: [
            'src/imagenes/Ropa/Playera/Vans/20.svg',
            'src/imagenes/Ropa/Playera/Vans/18.svg',
            'src/imagenes/Ropa/Playera/Vans/19.svg'
        ],
        descripcion: 'Esto no es solo una colaboración; es una cápsula del tiempo. Las Vans x T&C Vintage Plink reviven uno de los gráficos más emblemáticos de la mítica revista T&C Surf & Skate. Fundada en Hawái en los 80, T&C no era una marca, era la Biblia del estilo de vida costero underground, y su arte grotesco, surrealista y lleno de humor definió una era.',
        tallas: ['M']
    },
    'pantalon-mezclilla-8': {
        nombre: 'Pantalón  de mezclilla Hollister',
        categoria: 'Hollister',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 15/28.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 15/29.svg'
        ],
        descripcion: 'El Pantalón de Mezclilla Hollister ofrece un estilo moderno y juvenil ideal para el uso diario. Su diseño versátil se adapta fácilmente a looks casuales y urbanos, manteniendo una apariencia fresca y actual.',
        tallas: ['30 X 30']
    },
    'playera-ralph': {
        nombre: 'Playera Tipo polo Ralph Lauren',
        categoria: 'Ralph Lauren',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Playera/Tipo Polo/Ralph/13.svg',
            'src/imagenes/Ropa/Playera/Tipo Polo/Ralph/12.svg',
            'src/imagenes/Ropa/Playera/Tipo Polo/Ralph/14.svg'
        ],
        descripcion: 'Respira la esencia del estilo americano clásico con esta playera tipo polo de Ralph Lauren en azul marino con finas rayas blancas. Este diseño es un pilar del wardrobe preppy, evocando imágenes de veleros, clubes de campo y un verano eterno de elegancia despreocupada. No es solo una polo; es un emblema de un legado de estilo impecable.',
        tallas: ['M']
    },
    'Ck-pantalon': {
        nombre: 'Pantalón  Calvin Klein',
        categoria: 'Ck',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/CK/11.svg',
            'src/imagenes/Ropa/Pantalon vestir/CK/12.svg'
        ],
        descripcion: 'La elegancia no grita, susurra. Este pantalón Calvin Klein en blanco puro es la máxima expresión de un estilo sofisticado y moderno. Con su silueta limpia y su color impecable, se convierte en el lienzo perfecto para construir looks de alto impacto con un mínimo de elementos. Más que una prenda, es una declaración de estilo intencional y depurado.',
        tallas: ['']
    },
    'nike-rosa-playera': {
        nombre: 'Nike golf Rosa',
        categoria: 'Nike',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Playera/Nike/4.svg'
        ],
        descripcion: 'Olvídate del verde y azul tradicional. El rosa Nike Golf ha llegado para redefinir la estética en el campo. Este color no es solo una declaración de estilo; es un símbolo de confianza, modernidad y la audacia de jugar con personalidad. Diseñado con la tecnología de rendimiento de Nike, demuestra que el alto nivel y el estilo vanguardista pueden ir de la mano.',
        tallas: ['']
    },
    'tommy-blanco-vestir': {
        nombre: 'Pantalón  Blanco Tommy Hilfiger',
        categoria: 'Tommy Hilfiger',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Tommy/15.svg',
            'src/imagenes/Ropa/Pantalon vestir/Tommy/16.svg'
        ],
        descripcion: 'La bandera del verano eterno y la elegancia descomplicada. Este pantalón Tommy Hilfiger en blanco impecable es mucho más que un básico; es un emblema del estilo de vida americano clásico. Define la actitud preppy: pulcro, seguro y siempre apropiado, ya sea para un club de campo, una salida costera o el smart casual urbano.',
        tallas: ['36 X 30']
    },
    'dickies-pantalon': {
        nombre: 'Pantalón  Dickies café',
        categoria: 'Dickies',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Dickies/30.svg',
            'src/imagenes/Ropa/Pantalon vestir/Dickies/31.svg',
            'src/imagenes/Ropa/Pantalon vestir/Dickies/32.svg'
        ],
        descripcion: 'Desde 1922, el nombre Dickies ha sido sinónimo de resistencia inquebrantable. Este pantalón Dickies en color café (o caqui) es la encarnación de ese legado. No es una prenda de moda inspirada en el trabajo; es la herramienta de vestir original, diseñada con un propósito: soportar el desgaste más intenso día tras día, ofreciendo comodidad y funcionalidad sin concesiones.',
        tallas: ['32 X 30']
    },
    'perri-ellis-gris': {
        nombre: 'Pantalón gris Perri Ellis Slim',
        categoria: 'Perri Ellis',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Gris/Gris 2/2.svg',
            'src/imagenes/Ropa/Pantalon vestir/Gris/Gris 2/1.svg'
        ],
        descripcion: 'Para el hombre que transita entre la oficina moderna y la vida urbana con igual estilo. Este pantalón Perry Ellis en corte slim fit y color gris es la pieza maestra que une sofisticación y comodidad. Su tono neutral y su silueta depurada lo convierten en el fundamento de un guardarropa inteligente, ofreciendo una versatilidad impecable para cualquier ocasión que exija pulcritud y gusto contemporáneo.',
        tallas: ['']
    },
    'Mountain Hardwear': {
        nombre: 'Pantalón Mountain Hardwear gris',
        categoria: 'Mountain Hardwear',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Gris/Gris 3/15.svg',
            'src/imagenes/Ropa/Pantalon vestir/Gris/Gris 3/16.svg'
        ],
        descripcion: 'Lleva la ingeniería de los picos más altos a tu terreno cotidiano. Este pantalón Mountain Hardwear en gris no es solo una prenda casual; es una herramienta de vestir construida con tecnología outdoor de vanguardia. Diseñado para el escalador en la pared de roca y perfecto para quien exige máxima funcionalidad, libertad de movimiento y confort técnico en cada paso, ya sea en la calle o en el sendero.',
        tallas: ['']
    },
    'negro-vestir': {
        nombre: 'Pantalón Negro de vestir',
        categoria: 'Vestir',
        precio: "Falta Precio",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Negro/13.svg',
            'src/imagenes/Ropa/Pantalon vestir/Negro/14.svg'
        ],
        descripcion: 'En el arte de vestir bien, existen prendas accesorias y existen fundamentos no negociables. Este pantalón de vestir negro es el más importante de todos. Es la base sobre la que se construye la elegancia moderna: una pieza de líneas limpias, color absoluto y versatilidad infinita que transita con igual autoridad de la oficina más formal a la cena más sofisticada.',
        tallas: ['34 X 32']
    },
    'pantalon-blanco-mujer': {
        nombre: 'Pantalon Blanco',
        categoria: 'Vestir',
        precio: "$280",
        imagenes: [
            'src/imagenes/Ropa/Pantalon vestir/Blanco/1.svg',
            'src/imagenes/Ropa/Pantalon vestir/Blanco/2.svg'
        ],
        descripcion: 'En el arte de vestir bien, existen prendas accesorias y existen fundamentos no negociables. Este pantalón de vestir blanco es el más importante de todos. Es la base sobre la que se construye la elegancia moderna: una pieza de líneas limpias, color absoluto y versatilidad infinita.',
        tallas: ['M']
    },
    'pantalon-mezclilla-mujer1': {
        nombre: 'Jeans de mezclilla Wrangler negros',
        categoria: 'Wrangler',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 11/18.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 11/19.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 11/20.svg'
        ],
        descripcion: 'Combina estilo, durabilidad y comodidad con los clásicos jeans de mezclilla Wrangler negros. Perfectos para un look casual, urbano o incluso semi-formal, estos jeans son un básico imprescindible en cualquier guardarropa. Su corte clásico y diseño atemporal aseguran versatilidad, mientras que la calidad de la tela garantiza resistencia y confort durante todo el día.',
        tallas: ['32 X 30']
    },
    'pantalon-mezclilla-mujer2': {
        nombre: 'Jeans de mezclilla Wrangler azul',
        categoria: 'Wrangler',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 12/21.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 12/22.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 12/23.svg'
        ],
        descripcion: 'Combina estilo, durabilidad y comodidad con los clásicos jeans de mezclilla Wrangler azul. Perfectos para un look casual, urbano o incluso semi-formal, estos jeans son un básico imprescindible en cualquier guardarropa. Su corte clásico y diseño atemporal aseguran versatilidad, mientras que la calidad de la tela garantiza resistencia y confort durante todo el día.',
        tallas: ['32 X 30']
    },
    'pantalon-mezclilla-mujer3': {
        nombre: 'Jeans de mezclilla levis azul',
        categoria: 'Levis',
        precio: "$350",
        imagenes: [
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 14/26.svg',
            'src/imagenes/Ropa/Pantalon Mezclilla/Pantalon 14/27.svg'
        ],
        descripcion: 'Combina estilo, durabilidad y comodidad con los clásicos jeans de mezclilla levis azul. Perfectos para un look casual, urbano o incluso semi-formal, estos jeans son un básico imprescindible en cualquier guardarropa. Su corte clásico y diseño atemporal aseguran versatilidad, mientras que la calidad de la tela garantiza resistencia y confort durante todo el día.',
        tallas: ['29']
    },

};


function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Número de WhatsApp
const whatsappNumber = "522221733376";

// Variables globales
let currentProduct = null;
let currentImageIndex = 0;
let selectedSize = "";

// ===============================
// CORREGIR RUTA DE IMAGEN - VERSIÓN CORREGIDA PARA GITHUB PAGES
// ===============================
function correctImagePath(imgPath) {
    if (!imgPath) return "";
    
    // Si ya es una URL completa, la dejamos como está
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
        return imgPath;
    }
    
    // Obtener la URL base del sitio (para GitHub Pages)
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
    
    // Limpiar la ruta (eliminar './' si existe)
    let cleanPath = imgPath.replace(/^\.\//, '');
    
    // Si la ruta ya empieza con 'src/', la usamos directamente
    if (cleanPath.startsWith('src/')) {
        return baseUrl + cleanPath;
    }
    
    // Si no, asumimos que está en src/imagenes/
    return baseUrl + 'src/imagenes/' + cleanPath;
}

// ===============================
// CARGAR PRODUCTO
// ===============================
function loadProductData(productId) {
    const product = productos[productId];

    if (!product) {
        document.body.innerHTML = '<h1>Producto no encontrado</h1>';
        return;
    }

    currentProduct = product;
    currentImageIndex = 0;
    selectedSize = "";

    document.title = product.nombre;

    document.getElementById('productName').textContent = product.nombre;
    document.getElementById('productCategory').textContent = product.categoria;
    document.getElementById('productPrice').textContent = product.precio;
    document.getElementById('productDescription').innerHTML = `<p>${product.descripcion}</p>`;

    // ===== MINIATURAS =====
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    thumbnailGallery.innerHTML = '';

    product.imagenes.forEach((imgSrc, index) => {
        const imgElement = document.createElement('img');
        const correctedSrc = correctImagePath(imgSrc);
        console.log('Miniatura cargada:', correctedSrc);
        imgElement.src = correctedSrc;
        imgElement.alt = `${product.nombre} - Vista ${index + 1}`;

        imgElement.addEventListener('click', () => {
            updateMainImage(correctedSrc, index);
            setActiveThumbnail(index);
        });

        thumbnailGallery.appendChild(imgElement);
    });

    // Imagen principal inicial
    if (product.imagenes.length > 0) {
        const mainImg = document.getElementById('mainProductImage');
        const correctedMainSrc = correctImagePath(product.imagenes[0]);
        console.log('Imagen principal cargada:', correctedMainSrc);
        mainImg.src = correctedMainSrc;
    }

    setActiveThumbnail(0);

    // ===== TALLAS - VERSIÓN CORREGIDA =====
    const sizeButtonsContainer = document.getElementById('sizeButtons');
    sizeButtonsContainer.innerHTML = '';

    if (product.tallas && product.tallas.length > 0) {
        product.tallas.forEach(talla => {
            const btn = document.createElement('button');
            btn.textContent = talla;
            
            // IMPORTANTE: Agregar el evento click ANTES de agregar al DOM
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Click en talla:', talla);
                
                // Remover clase selected de todos los botones
                document.querySelectorAll('.size-buttons button').forEach(b => {
                    b.classList.remove('selected');
                });
                
                // Agregar clase selected al botón clickeado
                this.classList.add('selected');
                selectedSize = talla;
                console.log('Talla seleccionada:', selectedSize);
                
                // Actualizar estado del botón de reserva
                updateReserveButton();
            });

            sizeButtonsContainer.appendChild(btn);
        });
        
        // Seleccionar primera talla por defecto después de un breve retraso
        setTimeout(() => {
            const firstBtn = sizeButtonsContainer.querySelector('button');
            if (firstBtn) {
                console.log('Seleccionando primera talla por defecto');
                firstBtn.click();
            }
        }, 200);
    } else {
        sizeButtonsContainer.innerHTML = '<p class="no-sizes">Talla única</p>';
        selectedSize = "Única";
    }

    updateReserveButton();
    initImageNavigation(product.imagenes);
}

// ===============================
// ACTUALIZAR IMAGEN PRINCIPAL
// ===============================
function updateMainImage(imgSrc, index) {
    const mainImg = document.getElementById('mainProductImage');
    mainImg.src = imgSrc;
    currentImageIndex = index;
}

// ===============================
// MINIATURA ACTIVA
// ===============================
function setActiveThumbnail(index) {
    const thumbnails = document.querySelectorAll('#thumbnailGallery img');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// ===============================
// FLECHAS DE NAVEGACIÓN
// ===============================
function initImageNavigation(images) {
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');

    if (prevBtn && nextBtn) {
        prevBtn.onclick = () => {
            if (!images.length) return;

            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            const correctedSrc = correctImagePath(images[currentImageIndex]);
            updateMainImage(correctedSrc, currentImageIndex);
            setActiveThumbnail(currentImageIndex);
        };

        nextBtn.onclick = () => {
            if (!images.length) return;

            currentImageIndex = (currentImageIndex + 1) % images.length;
            const correctedSrc = correctImagePath(images[currentImageIndex]);
            updateMainImage(correctedSrc, currentImageIndex);
            setActiveThumbnail(currentImageIndex);
        };
    }
}

// ===============================
// BOTÓN RESERVAR WHATSAPP - VERSIÓN CORREGIDA
// ===============================
function initReserveButton() {
    const reserveBtn = document.getElementById('reserveBtn');
    if (!reserveBtn) return;

    reserveBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Botón de reserva clickeado');
        console.log('Talla seleccionada actual:', selectedSize);
        console.log('Producto actual:', currentProduct);

        // Verificar si hay tallas y si se seleccionó una
        if (currentProduct && currentProduct.tallas && currentProduct.tallas.length > 0) {
            if (!selectedSize) {
                alert('⚠️ Por favor, selecciona una talla primero');
                
                // Hacer parpadear el selector de tallas
                const sizeSelector = document.querySelector('.size-selector');
                if (sizeSelector) {
                    sizeSelector.style.animation = 'pulse 0.5s 2';
                    setTimeout(() => sizeSelector.style.animation = '', 1000);
                }
                return;
            }
        }

        const whatsappLink = generateWhatsAppLink();
        console.log('Enlace de WhatsApp generado:', whatsappLink);
        window.open(whatsappLink, '_blank');
    });
}

function updateReserveButton() {
    const reserveBtn = document.getElementById('reserveBtn');
    if (!reserveBtn) return;

    console.log('Actualizando botón de reserva - Talla seleccionada:', selectedSize);

    if (currentProduct && currentProduct.tallas && currentProduct.tallas.length > 0 && !selectedSize) {
        reserveBtn.classList.add('disabled');
        reserveBtn.disabled = true;
        reserveBtn.title = "Selecciona una talla primero";
        console.log('Botón deshabilitado - sin talla seleccionada');
    } else {
        reserveBtn.classList.remove('disabled');
        reserveBtn.disabled = false;
        reserveBtn.title = "Apartar producto por WhatsApp";
        console.log('Botón habilitado');
    }
}

// ===============================
// GENERAR ENLACE DE WHATSAPP CON IMAGEN
// ===============================
function generateWhatsAppLink() {
    if (!currentProduct) return "#";

    const sizeText = selectedSize
        ? `Talla: ${selectedSize}`
        : "Talla única";

    // Obtener la imagen actual
    const currentImage = currentProduct.imagenes[currentImageIndex] || currentProduct.imagenes[0];
    const imageUrl = correctImagePath(currentImage);
    
    // Acortar la descripción si es muy larga
    const shortDescription = currentProduct.descripcion.length > 100 
        ? currentProduct.descripcion.substring(0, 100) + '...' 
        : currentProduct.descripcion;

    const message = `¡Hola! 😊

*Me interesa apartar este producto:*

📌 *${currentProduct.nombre}*
🏷️ *Categoría:* ${currentProduct.categoria}
💰 *Precio:* ${currentProduct.precio}
📏 *${sizeText}*

📝 *Descripción:*
${shortDescription}

🔗 *Enlace del producto:*
${window.location.href}

¿Está disponible? ¡Gracias!`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ===============================
// FAVORITOS
// ===============================
function initFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    if (!favoriteBtn) return;

    let isFavorite = false;

    favoriteBtn.addEventListener('click', () => {
        const icon = favoriteBtn.querySelector('i');
        isFavorite = !isFavorite;

        icon.classList.toggle('fas', isFavorite);
        icon.classList.toggle('far', !isFavorite);
    });
}

// ===============================
// ADD TO CART
// ===============================
function initAddToCartButton() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (!addToCartBtn) return;

    addToCartBtn.addEventListener('click', () => {
        alert(`¡${currentProduct.nombre} agregado a la bolsa!`);
    });
}

// ===============================
// INICIALIZAR PÁGINA
// ===============================
function initPage() {
    const productId = getProductIdFromUrl();
    console.log('Product ID:', productId);

    if (!productId) {
        document.body.innerHTML = '<h1>Error</h1><p>No se especificó producto.</p>';
        return;
    }

    loadProductData(productId);
    initFavoriteButton();
    initAddToCartButton();
    initReserveButton();
}

// Agregar estilos adicionales para los botones de talla
const style = document.createElement('style');
style.textContent = `
    .size-buttons button {
        padding: 10px 15px;
        margin: 5px;
        border: 1px solid #ccc;
        background: white;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease;
    }
    
    .size-buttons button:hover {
        background: #f0f0f0;
    }
    
    .size-buttons button.selected {
        background: #000 !important;
        color: #fff !important;
        border-color: #000 !important;
    }
    
    .reserve-btn.disabled {
        background-color: #ccc !important;
        cursor: not-allowed !important;
        opacity: 0.7;
    }
    
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', initPage);

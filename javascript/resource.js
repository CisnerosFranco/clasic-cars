
const productos = [
    {
        img : './images/llaves-por-cinco',
        nombre : 'Juego de llaves combinadas x 5',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'l-c-5',
        precio : '250'
    },
    {
        img : './images/llave-por-diez.jpg',
        nombre : 'Juego de llaves combinadas x 10',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'l-c-10',
        precio : '400'
    },
    {
        img : './images/llaves-por-20',
        nombre : 'Juego de llaves combinadas x 20',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'l-c-20',
        precio : '600'
    },
    {
        img : './images/llaves-tubo-20.jpg',
        nombre : 'Llaves tubo x 20',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'l-t-20',
        precio : '620'
    },
    {
        img : './images/llaves-tubo-50.jpg',
        nombre : 'Llaves tubo x 50',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'l-t-50',
        precio : '1.200'
    },
    {
        img : './images/destornillador.jpg',
        nombre : 'Kit Destornilladores x 10',
        precio : '350',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'd-10',
        precio : '1.200'
    },
    {
        img : './images/destornillador_uno.jpg',
        nombre : 'Kit Destornilladores x 20',
        categoria : ['herramientas', 'todas'],
        descripcion : 'articulo de mecanica',
        ubicación : 'Carapachay',
        id : 'd-20',
        precio : '700'
    },
    {
        img : './images/paño.jpg',
        nombre : 'Paño micro fibra 40x40',
        categoria : ['limpieza', 'todas'],
        descripcion : 'articulo de limpieza, con micro fibra',
        ubicación : 'Carapachay',
        id : 'p-m-40x40',
        precio : '300'
    },
    {
        img : './images/paño-micro-fibra.jpg',
        nombre : 'Paño micro fibra 60x40',
        categoria : ['limpieza', 'todas'],
        descripcion : 'articulo de limpieza, con micro fibra',
        ubicación : 'Carapachay',
        id : 'p-m-60x40',
        precio : '450'
    },
    {
        img : './images/aire-compresor.jpg',
        nombre : 'Compresor 50 litros 2.5hp',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta que trabaja con agua, para pulir auto moviles',
        ubicación : 'Carapachay',
        id : 'c-50',
        precio : '1.200'
    },
    {
        img : './images/compresor-100.jpg',
        nombre : 'Compresor 100 litros 2.5hp',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta que trabaja con agua, para pulir auto moviles',
        ubicación : 'Carapachay',
        id : 'c-100',
        precio : '3.600'
    },
    {
        img : './images/compresor-aire-50-lts.jpg',
        nombre : 'Compresor 200 litros 3hp',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta que trabaja con agua, para pulir auto moviles',
        ubicación : 'Carapachay',
        id : 'c-200',
        precio : '5.000'
    },
    {
        img : './images/kit-stractor.jpg',
        nombre : 'Kit extractor de tapizados x 3',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta para quitar pintura de auto moviles, etc.',
        ubicación : 'Carapachay',
        id : 'e-t-3',
        precio : '3.000'
    },
    {
        img : './images/kit-stractor-tapisado.jpg',
        nombre : 'Kit extractor de tapizados x 6',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta para quitar pintura de auto moviles, etc.',
        ubicación : 'Carapachay',
        id : 'e-t-6',
        precio : '5.600'
    },
    {
        img : './images/pulidora-100.jpg',
        nombre : 'Pulidora 100w',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta para pulir la pintura de auto moviles',
        ubicación : 'Carapachay',
        id : 'p-100',
        precio : '2.000'
    },
    {
        img : './images/pulidora-200.png',
        nombre : 'Pulidora 1600w',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta para pulir la pintura de auto moviles',
        ubicación : 'Carapachay',
        id : 'p-1600',
        precio : '4.000'
    },
    {
        img : './images/amoladora-uno.png',
        nombre : 'Amoladora 600w',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta para cortar hierro y membrana entre otros, muy potente.',
        ubicación : 'Carapachay',
        id : 'a-600',
        precio : '3.200'
    },
    {
        img : './images/amoladora-2.jpg',
        nombre : 'Amoladora 820w',
        categoria : ['herramientas', 'todas'],
        descripcion : 'herramienta para cortar hierro y membrana entre otros, muy potente.',
        ubicación : 'Carapachay',
        id : 'a-820',
        precio : '6.000'
    },
    {
        img : './images/shampo-litro.jpg',
        nombre : 'Shampoo 1lt',
        categoria : ['limpieza', 'todas'],
        descripcion : 'articulo de limpieza, una unidad.',
        ubicación : 'Carapachay',
        id : 's-1',
        precio : '150'
    },
    {
        img : './images/shampo-5litro.jpg',
        nombre : 'Shampoo 5lt',
        categoria : ['limpieza', 'todas'],
        descripcion : 'articulo de limpieza, trabaja con agua, a mucha potencia',
        ubicación : 'Carapachay',
        id : 's-5',
        precio : '500'
    },
    {
        img : './images/hidro.jpeg',
        nombre : 'Hidro Lavadora Hogar',
        categoria : ['limpieza', 'todas'],
        descripcion : 'articulo de ',
        ubicación : 'Carapachay',
        id : 'h-l-h',
        precio : '3.000'
    },
    {
        img : './images/hidro-premiun.jpeg',
        nombre : 'Hidro Lavadora Premiun',
        categoria : ['limpieza', 'todas'],
        descripcion : 'articulo de limpieza, trabaja con agua, a mucha potencia',
        ubicación : 'Carapachay',
        id : 'h-l-p',
        precio : '8.000'
    }
]


const servicios = [
    {
        categoria : 'Chapa y Pintura',
        precio : '7.000',
        id : 's-c-p'
    },
    {
        categoria : 'Tapiceria',
        precio : '5.000',
        id : 's-t'
    },
    {
        categoria : 'Vidrieria',
        precio : '8.000',
        id : 's-v'
    },
    {
        categoria : 'Reparación de Plasticos',
        precio : '4.000',
        id : 's-r-p'
    },
    {
        categoria : 'Restauración de Interiores',
        precio : '12.000',
        id : 's-r-i'
    },
    {
        categoria : 'Gomeria',
        precio : '3.000',
        id : 's-g'
    },
    {
        categoria : 'Mecanica Integral',
        precio : '4.000',
        id : 's-m-i'
    },
    {
        categoria : 'Lubricentro y Detailing Completo',
        precio : '9.000',
        id : 's-l-d-c'
    }
]


const talleres = [
    {
        ubicación : 'Pacheco', 
        turnosLimite : 10,
        cantTurnos : 0,
        turnos : [],
        contacto : {
            nombre : 'Pepe',
            apellido : 'Argento',
            contacto : 01122
        }
    },
    {
        ubicación : 'Malvinas Argentinas',
        turnosLimite : 10,
        cantTurnos : 0,
        turnos : [],
        contacto : {
            nombre : 'Paola',
            apellido : 'Argento',
            contacto : 01133
        }
    },
    {
        ubicación: 'Carapachay',
        turnosLimite: 10,
        cantTurnos : 0,
        turnos : [],
        contacto : {
            nombre : 'Fatiga',
            apellido : 'Argento',
            contacto : 01144
        }
    },
    {
        ubicación: 'Tigre',
        turnosLimite: 10,
        cantTurnos : 0,
        turnos : [],
        contacto : {
            nombre : 'Dardo',
            apellido : 'Fusceneco',
            contacto : 01155
        }
    },
    {
        ubicación: 'Victoria',
        turnosLimite: 10,
        cantTurnos : 0,
        turnos : [],
        contacto : {
            nombre : 'Maria Elena',
            apellido : 'Fusceneco',
            contacto : 01166
        }
    }
]














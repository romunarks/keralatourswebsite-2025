// src/data/paquetes.ts

import type { ImageMetadata } from 'astro';
import imgColca from '../assets/destinos/colca_canyon.webp';
import imgMajes from '../assets/destinos/majes_aqp.webp';
import imgTurquia from '../assets/destinos/turquia_eu.webp';
import imgCusco from '../assets/destinos/cuzco_flyer.webp';

// 1. REGLAS ACTUALIZADAS (Interface)
export interface PaqueteTour {
  slug: string;
  title: string;
  category: 'arequipa' | 'cusco' | 'internacional';
  img: ImageMetadata;
  price: string;
  duration: string;
  desc: string;
  tag: string;
  tagColor: string;
  included: string[]; // Lista obligatoria de qué incluye
  itinerary: { day: string; title: string; desc: string }[];
}

// 2. TU BASE DE DATOS SUPERVISADA
export const paquetes: PaqueteTour[] = [
  {
    slug: "colca-majestuoso",
    title: "Colca Majestuoso",
    category: "arequipa",
    img: imgColca,
    price: "S/ 290",
    duration: "2D / 1N",
    desc: "Arequipa, Chivay, Cañón del Colca y Cruz del Cóndor.",
    tag: "Próxima Salida",
    tagColor: "bg-[#AE333C]",
    // EJEMPLO DE INCLUIDO (Sácado de flyers típicos)
    included: [
      "Transporte Turístico",
      "Guía Oficial de Turismo",
      "Alojamiento 1 Noche",
      "1 Desayuno Continental",
      "Asistencia Permanente",
    ],
    // Itinerario de ejemplo vacío (se ocultará la sección)
    itinerary: [], 
  },
  {
    slug: "cusco-imperial",
    title: "Cusco Imperial",
    category: "cusco",
    img: imgCusco,
    price: "S/ 2,100",
    duration: "4D / 3N",
    desc: "Pasajes aéreos, City Tour, Valle Sagrado y Full Day Machu Picchu.",
    tag: "Todo Incluido",
    tagColor: "bg-emerald-600",
    // EJEMPLO DE INCLUIDO
    included: [
      "Pasajes Aéreos Lima-Cusco-Lima",
      "Traslados Aeropuerto-Hotel",
      "Alojamiento 3 Noches",
      "3 Desayunos buffet",
      "Tour guiado a Machu Picchu",
      "Tren y bus para Machu Picchu",
      "Guía bilingüe certificado",
    ],
    itinerary: [
      { day: "Día 1", title: "Cusco - Aguas Calientes", desc: "Viaje en tren, check-in en hotel y tiempo libre." },
      { day: "Día 2", title: "Machu Picchu - Cusco", desc: "Visita guiada a la ciudadela y retorno." },
    ],
  },
  {
    slug: "valle-de-majes",
    title: "Valle de Majes",
    category: "arequipa",
    img: imgMajes,
    price: "S/ 350",
    duration: "2D / 1N",
    desc: "Ruta del Pisco, huellas de dinosaurios y encanto natural.",
    tag: "Escapada",
    tagColor: "bg-[#FF9A09]",
    // EJEMPLO DE INCLUIDO
    included: [
      "Transporte privado",
      "Guía de turismo",
      "1 noche de alojamiento",
      "1 desayuno",
      "Degustación de vinos y piscos",
    ],
    // Itinerario de ejemplo vacío
    itinerary: [], 
  },
  {
    slug: "turquia-islas-griegas",
    title: "Turquía & Islas Griegas",
    category: "internacional",
    img: imgTurquia,
    price: "$ 5,500",
    duration: "20 Días",
    desc: "Estambul, Capadocia y crucero por Mykonos y Santorini.",
    tag: "Internacional",
    tagColor: "bg-blue-600",
    // EJEMPLO DE INCLUIDO
    included: [
      "Pasajes aéreos internacionales",
      "Hoteles de categoría 4-5 estrellas",
      "Guía bilingüe durante todo el recorrido",
      "Crucero de 3 noches por las islas griegas",
      "Todas las excursiones mencionadas",
      "Desayunos diarios y algunas comidas",
    ],
    itinerary: [
      { day: "Día 1", title: "Cusco - Aguas Calientes", desc: "Viaje en tren, check-in en hotel y tiempo libre." },
      { day: "Día 2", title: "Machu Picchu - Cusco", desc: "Visita guiada a la ciudadela y retorno." },
    ],
  },
];
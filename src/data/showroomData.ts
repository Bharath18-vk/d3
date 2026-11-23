import type { CategoryItem, MaterialItem, GalleryItem, EditorialFeature } from '../types';
import { siteConfig } from '../config/siteConfig';

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=88';
export const INTRO_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85';
export const ART_OF_LIVING_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=88';
export const SHOWROOM_VISIT_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=88';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'living-spaces',
    number: '01',
    title: 'Living Spaces',
    subtitle: 'Sculptural seating, conversation lounges & architectural focal points',
    description: 'Bespoke sectional arrangements, sculpted lounge seating, low-profile consoles, and tailored proportions that anchor everyday gathering.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    aspect: 'wide',
    featuredTags: ['Modular Seating', 'Organic Tables', 'Lounge Chairs', 'Architectural Consoles'],
    inquiryMessage: siteConfig.whatsappMessages.livingSpaces,
  },
  {
    id: 'bedroom-comfort',
    number: '02',
    title: 'Bedroom & Comfort',
    subtitle: 'Quiet sanctuaries of tactile linen, timber & ambient composure',
    description: 'Upholstered platform beds, acoustic headboard panels, textured drapery, and integrated nightstand architecture crafted for deep rest.',
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    featuredTags: ['Platform Beds', 'Tactile Linens', 'Acoustic Panels', 'Bespoke Nightstands'],
    inquiryMessage: siteConfig.whatsappMessages.bedroomComfort,
  },
  {
    id: 'kitchens-dining',
    number: '03',
    title: 'Kitchens & Dining',
    subtitle: 'Monolithic stone islands, concealed joinery & celebration tables',
    description: 'Precision cabinetry systems, natural stone counter islands, ergonomic storage architecture, and dining tables designed for unforgettable hospitality.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    featuredTags: ['Stone Islands', 'Integrated Joinery', 'Statement Dining', 'Ergonomic Pantries'],
    inquiryMessage: siteConfig.whatsappMessages.kitchensDining,
  },
  {
    id: 'lighting-ambience',
    number: '04',
    title: 'Lighting & Ambience',
    subtitle: 'Architectural illumination that shapes mood, shadow & depth',
    description: 'Hand-blown glass pendants, indirect architectural coves, sculptural brass luminaires, and warm dimming fixtures that bring spaces to life after dusk.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall',
    featuredTags: ['Sculptural Pendants', 'Architectural Coves', 'Brass Fixtures', 'Warm Dimming'],
    inquiryMessage: siteConfig.whatsappMessages.lightingAmbience,
  },
  {
    id: 'surfaces-materials',
    number: '05',
    title: 'Surfaces & Materials',
    subtitle: 'Veined marbles, fluted timber cladding & tactile wall finishes',
    description: 'Rare bookmatched stones, micro-cement finishes, fluted acoustic oak, and tactile wall treatments curated to be touched and remembered.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    featuredTags: ['Bookmatched Stone', 'Fluted Oak', 'Micro-cement', 'Architectural Glass'],
    inquiryMessage: siteConfig.whatsappMessages.surfacesMaterials,
  },
  {
    id: 'decor-finishes',
    number: '06',
    title: 'Décor & Finishing Touches',
    subtitle: 'Artisanal ceramics, curated objects & gallery-grade styling',
    description: 'Handmade ceramic vessels, textured area rugs, museum-quality sculptural objects, and framed artworks that complete the soul of an interior.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    featuredTags: ['Sculptural Vessels', 'Hand-Knotted Rugs', 'Fine Art', 'Bronze Accessories'],
    inquiryMessage: siteConfig.whatsappMessages.decorFinishes,
  },
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'honed-travertine',
    name: 'Roman Silver Travertine',
    category: 'Natural Stone',
    description: 'Honed porous stone with linear sediment veining, providing organic grounding to fireplace surrounds and low tables.',
    finish: 'Honed Matte / Filled',
    image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1000&q=85',
    colorSwatch: '#C9BCAC',
  },
  {
    id: 'fluted-white-oak',
    name: 'Architectural Fluted Oak',
    category: 'Wood & Millwork',
    description: 'Quarter-sawn white oak with rhythmic 12mm fluting, diffusing light and softening acoustic reflections in open spaces.',
    finish: 'Natural Matte Polyurethane',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=85',
    colorSwatch: '#B89B77',
  },
  {
    id: 'natural-boucle-linen',
    name: 'Tuscan Bouclé & Raw Linen',
    category: 'Textiles & Upholstery',
    description: 'Heavyweight spun wool blend paired with Belgian unbleached linen, offering rich dimensional texture with gentle durability.',
    finish: 'Tactile Heavy Weave',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=85',
    colorSwatch: '#E7DEC9',
  },
  {
    id: 'calacatta-marble',
    name: 'Calacatta Oro Marble',
    category: 'Precious Surfaces',
    description: 'Dramatic warm gold and smoky grey breccia veining on a warm crystalline ivory background, hand-selected for statement kitchen islands.',
    finish: 'Satin Silk Honed',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85',
    colorSwatch: '#ECEAE4',
  },
  {
    id: 'brushed-muted-bronze',
    name: 'Patinated Muted Bronze',
    category: 'Metallic Accents',
    description: 'Subtly aged warm metal with directional brushing, resisting fingerprint smudges while imparting heirloom dignity to joinery and lighting.',
    finish: 'Brushed Micro-Patinating',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
    colorSwatch: '#9B8060',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Courtyard Pavilion Lounge',
    category: 'Living',
    caption: 'Low-slung monolithic seating framed against double-height limestone glazing and warm timber soffits.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    mood: 'Expansive • Grounded • Serene',
    dimensions: 'Living Room Architecture'
  },
  {
    id: 'gal-2',
    title: 'The Monolith Culinary Studio',
    category: 'Dining & Kitchen',
    caption: 'Seamless Calacatta waterfall island featuring recessed bronze reveals and concealed pocket cabinetry.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
    mood: 'Monolithic • Precise • Hospitable',
    dimensions: 'Kitchen Architecture'
  },
  {
    id: 'gal-3',
    title: 'The Twilight Master Sanctuary',
    category: 'Bedroom',
    caption: 'Acoustic linen wall cladding, integrated indirect lighting channels, and low-profile floating bed frame.',
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1600&q=85',
    mood: 'Quietude • Tactile • Restorative',
    dimensions: 'Primary Suite'
  },
  {
    id: 'gal-4',
    title: 'The Sunlit Solarium Dining Room',
    category: 'Dining & Kitchen',
    caption: 'Solid natural ash dining table with handcrafted woven leather armchairs beneath an understated pendant ring.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85',
    mood: 'Luminous • Communal • Timeless',
    dimensions: 'Dining Pavilion'
  },
  {
    id: 'gal-5',
    title: 'The Grand Atrium & Floating Stair',
    category: 'Architectural Details',
    caption: 'Sculptural stone cantilever treads with recessed floor illumination and floor-to-ceiling glass volume.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
    mood: 'Dramatic • Structural • Weightless',
    dimensions: 'Circulation & Entry'
  },
  {
    id: 'gal-6',
    title: 'The Library Nook & Reading Alcove',
    category: 'Living',
    caption: 'Floor-to-ceiling smoked walnut millwork paired with an enveloping shearling occasional chair.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    mood: 'Intimate • Reflective • Textural',
    dimensions: 'Private Study'
  },
  {
    id: 'gal-7',
    title: 'The Wellness Spa Bathroom',
    category: 'Architectural Details',
    caption: 'Freestanding cast-stone soaking tub surrounded by fluted travertine tiles and natural perimeter daylight.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85',
    mood: 'Elemental • Purifying • Mineral',
    dimensions: 'Ensuite Bath'
  },
  {
    id: 'gal-8',
    title: 'The Great Room with Golden Hour Rays',
    category: 'Living',
    caption: 'Generous volume celebrating natural sunlight, textured neutral textiles, and organic clay vessel styling.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    mood: 'Warmth • Architecture • Light',
    dimensions: 'Main Residence'
  },
  {
    id: 'gal-9',
    title: 'The Ceramic Art & Vignette Detail',
    category: 'Architectural Details',
    caption: 'Handcrafted wabi-sabi vessels arranged on an unpolished limestone plinth with directional grazing light.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=85',
    mood: 'Artisanal • Subdued • Tactile',
    dimensions: 'Gallery Vignette'
  },
];

export const WHY_EXPLORE_POINTS: EditorialFeature[] = [
  {
    number: '01',
    title: 'A world of inspiration',
    description: 'Discover ideas, styles and possibilities for your spaces.',
    highlight: 'Curated complete room concepts rather than disconnected products.'
  },
  {
    number: '02',
    title: 'Explore the details',
    description: 'Experience the textures, finishes and finer elements that make a difference.',
    highlight: 'Touch real stone, inspect timber grain finishes, and feel fabric weights.'
  },
  {
    number: '03',
    title: 'Find your style',
    description: 'Explore possibilities for different tastes, spaces and lifestyles.',
    highlight: 'From warm contemporary minimalism to timeless architectural luxury.'
  },
  {
    number: '04',
    title: 'See it. Feel it. Choose it.',
    description: 'Experience materials and interiors beyond a screen.',
    highlight: 'Nothing compares to witnessing spatial scale and lighting in person.'
  },
];

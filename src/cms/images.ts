export const SITE_IMAGES = {
  hero_rolls: {
    src: '/src/assets/images/hero_polymer_rolls_1795240155715.jpg',
    alt: 'Illustrative polyethylene jumbo film rolls staged on export pallets in an industrial distribution warehouse',
    caption: 'Illustrative visual: Precision-wound polyethylene jumbo rolls staged on export pallets.',
  },
  pe_films: {
    src: '/src/assets/images/product_pe_films_1795240156087.jpg',
    alt: 'Illustrative LDPE and LLDPE transparent polyethylene film rolls on heavy-duty cardboard cores',
    caption: 'Illustrative visual: Mono-layer and co-extruded polyethylene film rolls.',
  },
  industrial_bags: {
    src: '/src/assets/images/product_industrial_bags_1795240155201.jpg',
    alt: 'Illustrative gusseted heavy-duty polyethylene sacks, drum liners, and flat industrial PE bags',
    caption: 'Illustrative visual: Gusseted sacks, liners, and flat industrial polyethylene bags.',
  },
  insulation_pack: {
    src: '/src/assets/images/product_insulation_pack_1795240155443.jpg',
    alt: 'Illustrative compressed mineral wool insulation rolls securely wrapped in protective polyethylene packaging',
    caption: 'Illustrative visual: Compressed thermal insulation bundles encapsulated in protective PE packaging.',
  },
  insulation_batt_single: {
    src: '/src/assets/images/insulation_batt_bag_single_1795241032434.jpg',
    alt: 'Illustrative compressed thermal glass wool insulation batt pack inside a gusseted printed polyethylene compression bag',
    caption: 'Illustrative visual: Gusseted printed PE compression bag with transparent batt viewing window and technical print panel.',
  },
  insulation_batt_pallet: {
    src: '/src/assets/images/insulation_batt_bags_pallet_1795241033299.jpg',
    alt: 'Illustrative palletised compressed glass wool insulation batt bags stacked in heavy-duty printed PE compression packaging',
    caption: 'Illustrative visual: Interlocked pallet stack of compressed insulation batt bags ready for warehouse staging.',
  },
  logistics_export: {
    src: '/src/assets/images/logistics_global_export_1795240155111.jpg',
    alt: 'Illustrative palletised industrial cargo secured with polyethylene stretch hood film at a container port terminal',
    caption: 'Illustrative visual: Unitised export pallets protected for maritime container transit.',
  },
  polymer_pellets: {
    src: '/src/assets/images/technical_polymer_pellets_1795240155067.jpg',
    alt: 'Illustrative virgin LDPE and HDPE polymer resin pellets in stainless steel inspection trays',
    caption: 'Illustrative visual: Virgin polyethylene resin pellets prior to extrusion.',
  },
} as const;

export type SiteImageKey = keyof typeof SITE_IMAGES;

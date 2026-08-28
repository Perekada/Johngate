// import herculesTyre from '/Images/Herculestrye.jpg';
import herculesTyre from '../../public/Images/Herculestrye.jpg';
import johngateTyre from '../../public/Images/motortyre.jpg';
import battery from '../../public/Images/johngatebattery.jpg';
import olympicBattery from '../../public/Images/olympicbattery.jpg';
import motorTube from '../../public/Images/johngatemotortube.jpg';
import engineBlock from '../../public/Images/engineblock.jpg';
import generator from '../../public/Images/yangkegen big.jpg';
import helmet from '../../public/Images/helmet.jpg';
import cycleTyre from '../../public/Images/cycletyre.jpg';
import oilTreatment from '../../public/Images/oiltreatment.jpg';
import petrochemicals from '../../public/Images/petrochemicals.jpg';
import banner from '../../public/Images/banner.jpg';
import banner5 from '../../public/Images/banner5.jpg';
import banner6 from '../../public/Images/banner6.jpg';
import banner7 from '../../public/Images/banner7.jpg';
import banner8 from '../../public/Images/banner8.jpg';
import banner9 from '../../public/Images/banner9.jpg';
import banner10 from '../../public/Images/banner10.jpg';
import banner11 from '../../public/Images/banner11.jpg';
import banner12 from '../../public/Images/banner12.jpg';
import banner13 from '../../public/Images/banner13.jpg';
import subBanner from '../../public/Images/sub_banner.jpg';

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
};

export const productCatalog: Product[] = [
  {
    id: 1,
    name: 'Hercules Tyre',
    category: 'Tyres',
    description: 'Premium road tyre range designed for grip, comfort and durability on long journeys.',
    image: herculesTyre.src,
    specs: ['215/70R16',
			'215/60 R15',
			'195/65 R15',
			'265/65 R17',
			'225/60 R16',
			'205/60 R16',
			'205/60 R15',
			'245/65 R17',
			'235/70 R16',
			'265/70 R16',
			'215/55 R17',
			'225/65R17',
			'245/70 R16',
			],
  },
  {
    id: 2,
    name: 'Johngate Tyre',
    category: 'Tyres',
    description: 'Motorcycle tyre collection balancing performance, stability and confidence on the road.',
    image: johngateTyre.src,
    specs: ['120/90-18 56MM+S SCPRO',
			'180/55 ZR17(73)(T) DIABLO',
			'130/80-17 68V SPORTD',
			'200/50-17',
			'120/70 ZR17(58W) DIABLO',
			'180/55 ZR17(73W) DIABLO',
			'100/90 68V SPORTD',
			'190/50-17',
			'130/90-17 68V SPORTD',
			'150/70-17 69H SPORTD',
			'200/55-17 68V SPORTD',
			'190/55-17',],
  },
  {
    id: 3,
    name: 'Johngate Battery',
    category: 'Batteries',
    description: 'Reliable power solutions for vehicles and equipment with stronger starting performance.',
    image: battery.src,
    specs: ['12V 7Ah', '12V 9Ah', '12V 12Ah', '24V range'],
  },
  {
    id: 4,
    name: 'Olympic Battery',
    category: 'Batteries',
    description: 'High-output battery range built for dependable performance in everyday use.',
    image: olympicBattery.src,
    specs: ['12V 12Ah', '12V 14Ah', '12V 18Ah', '24V heavy duty'],
  },
  {
    id: 5,
    name: 'Motor Tube',
    category: 'Tubes',
    description: 'Durable tubes for smooth rides, better sealing and dependable road performance.',
    image: motorTube.src,
    specs: ['16-inch', '17-inch', '18-inch', '19-inch'],
  },
  {
    id: 6,
    name: 'Engine Block',
    category: 'Spare Parts',
    description: 'Essential engine components for reliable maintenance and long-term machine health.',
    image: engineBlock.src,
    specs: ['Cylinder block', 'Gasket set', 'Seal kits', 'Assembly parts'],
  },
  {
    id: 7,
    name: 'Yangke Generator',
    category: 'Generators',
    description: 'Power backup systems designed to keep homes, shops and projects running reliably.',
    image: generator.src,
    specs: ['2kVA', '3kVA', '5kVA', '7kVA'],
  },
  {
    id: 8,
    name: 'Safety Helmet',
    category: 'Accessories',
    description: 'Comfort-focused protective gear for riders prioritising safety on every trip.',
    image: helmet.src,
    specs: ['Full face', 'Half face', 'Modular', 'Rider series'],
  },
  {
    id: 9,
    name: 'Cycle Tyre',
    category: 'Tyres',
    description: 'Dependable tyre choices for bicycles and smaller mobility needs.',
    image: cycleTyre.src,
    specs: ['20-inch', '24-inch', '26-inch', '28-inch'],
  },
  {
    id: 10,
    name: 'Oil Treatment',
    category: 'Lubricants',
    description: 'Maintenance solutions that help keep engines smooth and protected.',
    image: oilTreatment.src,
    specs: ['Engine oil', 'Gear oil', 'Treatments', 'Flush solutions'],
  },
  {
    id: 11,
    name: 'Petrochemicals',
    category: 'Chemicals',
    description: 'High-quality industrial and automotive chemical supplies for maintenance work.',
    image: petrochemicals.src,
    specs: ['Lubricants', 'Cleaner', 'Sealants', 'Protective fluids'],
  },
];

export const galleryImages = [
  { title: 'Johngate banner', src: banner.src },
  { title: 'Workshop banner', src: banner5.src },
  { title: 'Tyre display', src: banner6.src },
  { title: 'Sales floor', src: banner7.src },
  { title: 'Machine bay', src: banner8.src },
  { title: 'Product poster', src: banner9.src },
  { title: 'Vehicle support', src: banner10.src },
  { title: 'Storefront', src: banner11.src },
  { title: 'Product showcase', src: banner12.src },
  { title: 'Tyre section', src: banner13.src },
  { title: 'Brand banner', src: subBanner.src },
  { title: 'Motor supplies', src: cycleTyre.src },
];

export const companyValues = [
  'Quality-first sourcing for dependable performance',
  'Customer-focused service built on trust and speed',
  'Driven by convenience, reliability and long-term support',
];

export const managementTeam = [
  { name: 'John O. Adeyemi', role: 'Managing Director', summary: 'Leads strategic growth, partnerships and market direction.' },
  { name: 'Sarah A. Bello', role: 'Operations Manager', summary: 'Coordinates stock planning and reliable order execution.' },
  { name: 'Musa U. Dogo', role: 'Sales & Support Lead', summary: 'Ensures clients receive responsive support and product guidance.' },
];

export const careerOpenings = [
  { title: 'Sales Executive', type: 'Full-time', summary: 'Drive customer relationships and support product sales.' },
  { title: 'Inventory Officer', type: 'Full-time', summary: 'Track stock flow, product availability and warehouse efficiency.' },
  { title: 'Customer Support Representative', type: 'Contract', summary: 'Handle enquiries and deliver a dependable service experience.' },
];

export const aboutHighlights = [
  'Trusted supplier of motor tyres, tubes, batteries and generator essentials.',
  'Focused on quality products that deliver value, reliability and performance.',
  'Supporting riders, businesses and partners across the region with consistent service.',
];

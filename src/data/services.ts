// Service data for ClearEarth Safety Consultancy LLC
// Strictly sourced from official company collateral and supplied flyers

import liftingImg from '../assets/images/services/inspection-certification/lifting-inspection.jpg';
import accessoriesImg from '../assets/images/services/inspection-certification/lifting-accessories.jpg';
import heavyEquipImg from '../assets/images/services/inspection-certification/heavy-equipment.jpg';
import pressureVesselImg from '../assets/images/services/inspection-certification/pressure-vessel.png';
import scaffoldingImg from '../assets/images/services/inspection-certification/scaffolding.png';
import ndtImg from '../assets/images/services/inspection-certification/ndt-testing.png';

import trainingGeneralImg from '../assets/images/services/assessment-training/training-general.jpg';

import pressureGaugesImg from '../assets/images/services/instrumentation/pressure-gauges.jpg';
import electricalInstrumentsImg from '../assets/images/services/instrumentation/electrical-instruments.jpg';
import flowMetersImg from '../assets/images/services/instrumentation/flow-meters.jpg';
import temperatureGaugesImg from '../assets/images/services/instrumentation/temperature-gauges.jpg';
import surveyingInstrumentsImg from '../assets/images/services/instrumentation/surveying-instruments.jpg';
import gasEquipmentImg from '../assets/images/services/instrumentation/gas-equipment.jpg';

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
}

export interface PillarService {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  overview: string;
  image: string;
  categories: ServiceCategory[];
}

// 1. Inspection and Certification of On-Shore and Off-Shore Equipment
export const inspectionCategories: ServiceCategory[] = [
  {
    id: 'lifting-equipment',
    title: 'Lifting Equipment',
    subtitle: 'On-Shore & Off-Shore Lifting Machinery',
    description: 'Comprehensive third-party inspection and certification for heavy lifting equipment, cranes, hoists, and powered access platforms.',
    image: liftingImg,
    items: [
      'Mobile Cranes & All-Terrain Cranes',
      'Tower Cranes & Gantry Cranes',
      'Overhead Travelling Cranes (EOT)',
      'Industrial Forklifts & Reach Trucks',
      'Manlifts, Scissor Lifts & Boom Lifts (MEWP)',
      'Suspended Cradles & Window Cleaning Cradles',
      'Builder Hoists & Passenger Hoists',
      'Hydraulic Jacks & Lifting Beams',
    ],
  },
  {
    id: 'lifting-accessories',
    title: 'Lifting Accessories',
    subtitle: 'Slings & Shackles: Lifting Gears',
    description: 'Detailed mechanical and physical condition inspection of all lifting gears and rigging hardware.',
    image: accessoriesImg,
    items: [
      'Webbing Slings & Round Slings',
      'Wire Rope Slings & Assemblies',
      'Alloy Chain Slings & Multi-Leg Bridles',
      'Bow Shackles & Dee Shackles',
      'Eyebolts, Swivels & Turnbuckles',
      'Lifting Clamps & Plate Clamps',
      'Spreader Beams & Lifting Beams',
      'Cargo Nets & Snatch Blocks',
    ],
  },
  {
    id: 'pressure-vessel',
    title: 'Pressure Vessel',
    subtitle: 'Pressurized Systems & Boilers',
    description: 'Thorough inspection, integrity evaluation, and safety valve verification for pressurized industrial equipment.',
    image: pressureVesselImg,
    items: [
      'Air Receivers & Air Compressor Tanks',
      'Industrial Boilers & Steam Generators',
      'Heat Exchangers & Condensers',
      'Autoclaves & Sterilizers',
      'LPG & Gas Storage Vessels',
      'Safety Relief Valve Verification',
    ],
  },
  {
    id: 'earth-moving',
    title: 'Earth Moving Machineries',
    subtitle: 'Heavy Construction & Site Machinery',
    description: 'Mechanical, hydraulic, and operational safety inspection of earthmoving and site equipment.',
    image: heavyEquipImg,
    items: [
      'Excavators & Mini Excavators',
      'Wheel Loaders & Front End Loaders',
      'Backhoe Loaders',
      'Skid Steer Loaders (Bobcat)',
      'Bulldozers & Motor Graders',
      'Dump Trucks & Articulated Haulers',
      'Compactors & Rollers',
      'Concrete Pumps & Concrete Buckets',
    ],
  },
  {
    id: 'scaffolding',
    title: 'Scaffolding',
    subtitle: 'Temporary Working Platforms & Towers',
    description: 'Structural inspection, load capacity verification, and tagging of temporary access scaffolding systems.',
    image: scaffoldingImg,
    items: [
      'Tube & Coupler Scaffolding Systems',
      'System Scaffolding (Cuplock, Ringlock)',
      'Mobile Aluminum Towers',
      'Cantilever & Suspended Scaffolds',
      'Scaffold Tie & Foundation Verification',
      'Green Tag / Red Tag Safety Audits',
    ],
  },
  {
    id: 'ndt',
    title: 'NDT (Non Destructive Test)',
    subtitle: 'Material Integrity & Weld Examination',
    description: 'Non-destructive testing methods to assess equipment integrity without causing material damage.',
    image: ndtImg,
    items: [
      'Magnetic Particle Inspection (MPI)',
      'Dye Penetrant Inspection (DPI / PT)',
      'Ultrasonic Thickness Gauging (UT)',
      'Visual Inspection (VT)',
      'Structural Weld Verification',
      'Hook & Critical Load Path Flaw Detection',
    ],
  },
];

// 2. Instrumentation
export const instrumentationCategories: ServiceCategory[] = [
  {
    id: 'pressure-gauges',
    title: 'Pressure Gauges',
    subtitle: 'Pressure Measurement & Transmitters',
    description: 'Testing, verification, and inspection of industrial pressure measuring instruments and transmitters.',
    image: pressureGaugesImg,
    items: [
      'Hydraulic & Pneumatic Pressure Gauges',
      'Differential Pressure Gauges',
      'Digital & Analog Pressure Transmitters',
      'Compound & Vacuum Gauges',
      'Test Gauges & Manometers',
    ],
  },
  {
    id: 'electrical-instruments',
    title: 'Electrical Instruments',
    subtitle: 'Diagnostic & Testing Meters',
    description: 'Inspection and verification of electrical diagnostic equipment and panel meters.',
    image: electricalInstrumentsImg,
    items: [
      'Digital Multimeters & Clamp Meters',
      'Insulation Resistance Testers (Megger)',
      'Earth Ground Resistance Testers',
      'Panel Voltmeters & Ammeters',
      'Power Quality Analyzers',
    ],
  },
  {
    id: 'flow-meters',
    title: 'Flow Meters',
    subtitle: 'Fluid & Liquid Measurement Devices',
    description: 'Operational inspection and verification of fluid flow measurement instruments.',
    image: flowMetersImg,
    items: [
      'Electromagnetic Flow Meters',
      'Ultrasonic Flow Meters',
      'Turbine & Vortex Flow Meters',
      'Variable Area Flow Meters (Rotameters)',
      'Inline Liquid & Gas Flow Sensors',
    ],
  },
  {
    id: 'temperature-gauges',
    title: 'Temperature Gauges',
    subtitle: 'Thermal Sensing & Monitoring Equipment',
    description: 'Inspection and verification of temperature measurement gauges and sensors.',
    image: temperatureGaugesImg,
    items: [
      'Bimetallic Temperature Gauges',
      'Gas-Actuated Thermometers',
      'Infrared Thermometers & Thermal Imagers',
      'RTD Sensors & Thermocouples',
      'Digital Temperature Controllers',
    ],
  },
  {
    id: 'surveying-instruments',
    title: 'Surveying Instruments',
    subtitle: 'Optical & Electronic Alignment Equipment',
    description: 'Condition and functional inspection of land and construction surveying equipment.',
    image: surveyingInstrumentsImg,
    items: [
      'Auto Levels & Dumpy Levels',
      'Theodolites & Total Stations',
      'Laser Distance Meters & Measuring Wheels',
      'Tripods, Leveling Staffs & Survey Umbrellas',
      'Optical Alignment Tools',
    ],
  },
  {
    id: 'gas-equipment',
    title: 'Gas Equipment',
    subtitle: 'Gas Detection & Cutting/Welding Regulators',
    description: 'Safety inspection of gas regulators, torches, and gas monitoring equipment.',
    image: gasEquipmentImg,
    items: [
      'Gas Pressure Regulators (Oxygen, Acetylene, Argon)',
      'Cutting Torches & Welding Nozzles',
      'Flashback Arrestors & Hose Assemblies',
      'Portable Gas Detectors & Gas Testers',
      'Gas Manifold Distribution Systems',
    ],
  },
];

// 3. Main Pillars Overview
export const servicePillars: PillarService[] = [
  {
    id: 'inspection-certification',
    title: 'Inspection & Certification',
    slug: '/services/inspection-certification',
    tagline: 'On-Shore & Off-Shore Equipment Inspection & Certification',
    overview: 'ClearEarth Safety Consultancy LLC provides specialized third-party inspection and certification for lifting equipment, accessories, pressure vessels, earthmoving machineries, scaffolding, and NDT across industrial sites in the UAE.',
    image: liftingImg,
    categories: inspectionCategories,
  },
  {
    id: 'assessment-training',
    title: 'Assessment & Training',
    slug: '/services/assessment-training',
    tagline: 'Occupational Safety, HSE & Equipment Operator Training',
    overview: 'A complete curriculum of accredited occupational health, safety, lifting, and equipment operator training programs designed to qualify personnel and ensure workplace compliance.',
    image: trainingGeneralImg,
    categories: [],
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation',
    slug: '/services/instrumentation',
    tagline: 'Gauges, Meters, Surveying & Technical Instruments',
    overview: 'Comprehensive inspection, testing, and functional verification for pressure gauges, electrical instruments, flow meters, temperature gauges, surveying tools, and gas equipment.',
    image: pressureGaugesImg,
    categories: instrumentationCategories,
  },
];

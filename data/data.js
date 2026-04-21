import { Type } from "lucide-react";

export const Items = [
  {
    id: 1, //Int
    name: "Appartement moderne",
    Type :"appartement",
    price: 450000,
    complement: "Quartier Beaugrenelle, Paris 15ème",
    City : "Paris",
    like: true, // Coup de coeur : true
    Buy: true, //location (=false) or buying (=true)
    Bedroom: 3,
    Bathroom: 2,
    Floor: 4,
    Year: 2020,
    Parking: false,
    energetic : "C", // DPE rating
    energeticValue : 115,
    GesEmission : "D", // GES rating
    GesEmissionValue : 20,
    RefLeg : "REF-2024-001",
    ChargeCopro : 170,
    Taxe : 1360,
    Dispo : "Immédiate",
    Description:
      "Découvrez ce superbe appartement moderne situé dans le quartier prisé de Beaugrenelle, Paris 15ème. Avec ses 3 chambres spacieuses et ses 2 salles de bains élégantes, cet espace de vie contemporain offre un confort optimal. Profitez d'une cuisine entièrement équipée, d'un salon lumineux et d'une vue imprenable sur la ville depuis le balcon. Idéalement situé à proximité des commerces, des transports en commun et des espaces verts, cet appartement est parfait pour une vie urbaine dynamique.",
    Surface: 85, //surface area : m²
    images: [
      {
        src: "/images/appartement-moderne/appartement-moderne.png",
        alt: "appartement moderne",
        thumb: true,
      },
      {
        src: "/images/appartement-moderne/appartement-moderne-chambre.png",
        alt: "appartement moderne chambre",
        thumb: false,
      },
      {
        src: "/images/appartement-moderne/appartement-moderne-balcon.png",
        alt: "appartement moderne balcon",
        thumb: false,
      },
      {
        src: "/images/appartement-moderne/appartement-moderne-cuisine.png",
        alt: "appartement moderne cuisine",
        thumb: false,
      },
      {
        src: "/images/appartement-moderne/appartement-moderne-sdb.png",
        alt: "appartement moderne salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Balcon",
      "Cuisine équipée",
      "Ascenseur",
      "Double vitrage",
      "Chauffage central",
    ],
  }, // Objet 1
  {
    id: 2,
    name: "Maison avec jardin",
    Type : "maison",
    price: 2200,
    complement: "Quartier Tête d'Or, Lyon 6ème",
    City : "Lyon",
    like: true, // Coup de coeur
    Buy: false, //location or buying
    Bedroom: 4,
    Bathroom: 2,
    Floor: null,
    Year: 2015,
    Parking: true,
    energetic : "B", // DPE rating
    energeticValue : 85, // DPE numeric value
    GesEmission : "C", // GES rating
    GesEmissionValue : 15, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 240,
    Taxe : 1920,
    Dispo : "17/12/2025",
    Description:
      "Cette charmante maison avec jardin est située dans le prestigieux quartier de la Tête d'Or à Lyon 6ème. Offrant 4 chambres spacieuses et 2 salles de bains modernes, cette propriété est idéale pour les familles à la recherche d'un cadre de vie paisible. Le jardin privé est parfait pour les activités en plein air et les moments de détente. La maison dispose également d'un parking privé, ajoutant à la commodité de ce lieu de vie exceptionnel.",
    Surface: 120, //surface area : m²
    images: [
      {
        src: "/images/maison-avec-jardin/maison-avec-jardin.png",
        alt: "maison avec jardin",
        thumb: true,
      },
      {
        src: "/images/maison-avec-jardin/maison-avec-jardin-chambre.png",
        alt: "maison avec jardin chambre",
        thumb: false,
      },
      {
        src: "/images/maison-avec-jardin/maison-avec-jardin-cuisine.png",
        alt: "maison avec jardin cuisine",
        thumb: false,
      },
      {
        src: "/images/maison-avec-jardin/maison-avec-jardin-ext.png",
        alt: "maison avec jardin extérieur",
        thumb: false,
      },
      {
        src: "/images/maison-avec-jardin/maison-avec-jardin-sdb.png",
        alt: "maison avec jardin salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Jardin",
      "Cuisine équipée",
      "Parking privé",
      "Chauffage au sol",
      "Alarme de sécurité",
    ],
  },
  {
    id: 3,
    name: "Penthouse avec terasse",
    Type : "penthouse",
    price: 890000,
    complement: "Promenade des Anglais, Nice",
    City : "Nice",
    like: false, // Coup de coeur
    Buy: true, //location or buying
    Bedroom: 3,
    Bathroom: 3,
    Floor: 5,
    Year: 2018,
    Parking: true,
    energetic : "A", // DPE rating
    energeticValue : 50, // DPE numeric value
    GesEmission : "B", // GES rating
    GesEmissionValue : 10, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 300,
    Taxe : 2400,
    Dispo : "immédiate",
    Description:
      "Vivez le luxe ultime dans ce penthouse avec terrasse situé sur la célèbre Promenade des Anglais à Nice. Cet appartement exclusif offre 3 chambres élégantes et 3 salles de bains haut de gamme, parfait pour ceux qui recherchent un style de vie sophistiqué. La vaste terrasse privée offre des vues panoramiques sur la mer Méditerranée, idéale pour les réceptions en plein air ou les moments de détente. Avec un parking privé inclus, ce penthouse est une opportunité rare de posséder une résidence de prestige dans l'une des destinations les plus prisées de la Côte d'Azur.",
    Surface: 150, //surface area : m²
    images: [
      {
        src: "/images/penthouse-avec-terasse/penthouse-avec-terasse.png",
        alt: "penthouse avec terasse",
        thumb: true,
      },
      {
        src: "/images/penthouse-avec-terasse/penthouse-avec-terasse-chambre.png",
        alt: "penthouse avec terasse chambre",
        thumb: false,
      },
      {
        src: "/images/penthouse-avec-terasse/penthouse-avec-terasse-cuisine.png",
        alt: "penthouse avec terasse cuisine",
        thumb: false,
      },
      {
        src: "/images/penthouse-avec-terasse/penthouse-avec-terasse-salon.png",
        alt: "penthouse avec terasse salon",
        thumb: false,
      },
      {
        src: "/images/penthouse-avec-terasse/penthouse-avec-terasse-sdb.png",
        alt: "penthouse avec terasse salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Terrasse",
      "Cuisine haut de gamme",
      "Parking privé",
      "Climatisation",
      "Domotique",
    ],
  },
  {
    id: 4,
    name: "Appartement T3",
    Type : "appartement",
    price: 385000,
    complement: "Quartier République, Lyon 3ème",
    City : "Lyon",
    like: true, // Coup de coeur
    Buy: true, //location or buying
    Bedroom: 2,
    Bathroom: 1,
    Floor: 2,
    Year: 2019,
    Parking: false,
    energetic : "D", // DPE rating
    energeticValue : 130, // DPE numeric value
    GesEmission : "E", // GES rating
    GesEmissionValue : 25, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 150,
    Taxe : 1200,
    Dispo : "01/01/2026",
    Description:
      "Situé dans le dynamique quartier de la République à Lyon 3ème, cet appartement T3 moderne offre un cadre de vie confortable et pratique. Avec ses 2 chambres bien aménagées et sa salle de bains contemporaine, cet espace est parfait pour les couples ou les petites familles. La cuisine ouverte sur le salon crée une atmosphère conviviale, idéale pour recevoir des invités. Proche des commerces, des restaurants et des transports en commun, cet appartement est une opportunité à ne pas manquer pour vivre au cœur de Lyon.",
    Surface: 75, //surface area : m²
    images: [
      {
        src: "/images/appartemment-t3/appartement-t3.png",
        alt: "appartement t3",
        thumb: true,
      },
      {
        src: "/images/appartemment-t3/appartement-t3-chambre.png",
        alt: "appartement t3 chambre",
        thumb: false,
      },
      {
        src: "/images/appartemment-t3/appartement-t3-cuisine.png",
        alt: "appartement t3 cuisine",
        thumb: false,
      },
      {
        src: "/images/appartemment-t3/appartement-t3-sdb.png",
        alt: "appartement t3 salle de bain",
        thumb: false,
      },
      {
        src: "/images/appartemment-t3/appartement-t3-terasse.png",
        alt: "appartement t3 terasse",
        thumb: false,
      },
    ],
    equipement: [
      "Cuisine équipée",
      "Balcon",
      "Ascenseur",
      "Double vitrage",
      "Chauffage central",
    ],
  },
  {
    id: 5,
    name: "Maison familliale",
    Type : "maison",
    price: 1800,
    complement: "Centre, Villeurbanne",
    City : "Villeurbanne",
    like: false, // Coup de coeur
    Buy: false, //location or buying
    Bedroom: 4,
    Bathroom: 2,
    Floor: null,
    Year: 2010,
    Parking: true,
    energetic : "E", // DPE rating
    energeticValue : 160, // DPE numeric value
    GesEmission : "F", // GES rating
    GesEmissionValue : 35, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 240,
    Taxe : 1920,
    Dispo : "Immédiate",
    Description:
      "Cette spacieuse maison familliale est idéalement située dans le centre de Villeurbanne. Avec ses 4 chambres confortables et ses 2 salles de bains modernes, cette propriété offre un espace de vie parfait pour les familles. La cuisine équipée et le salon lumineux créent une atmosphère accueillante pour les moments en famille. Profitez également d'un jardin privé, idéal pour les activités en plein air. Proche des écoles, des commerces et des transports, cette maison est une opportunité exceptionnelle pour une vie de famille épanouie.",
    Surface: 120, //surface area : m²
    images: [
      {
        src: "/images/maison-familliale/maison-familliale.png",
        alt: "maison familliale",
        thumb: true,
      },
      {
        src: "/images/maison-familliale/maison-familliale-bibliotheque.png",
        alt: "maison familliale bibliothèque",
        thumb: false,
      },
      {
        src: "/images/maison-familliale/maison-familliale-chambre.png",
        alt: "maison familliale chambre",
        thumb: false,
      },
      {
        src: "/images/maison-familliale/maison-familliale-cuisine.png",
        alt: "maison familliale cuisine",
        thumb: false,
      },
      {
        src: "/images/maison-familliale/maison-familliale-sdb.png",
        alt: "maison familliale salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Jardin",
      "Cuisine équipée",
      "Parking privé",
      "Chauffage au sol",
      "Alarme de sécurité",
    ],
  },
  {
    id: 6,
    name: "Penthouse T4",
    Type : "penthouse",
    price: 750000,
    complement: "Presqu'île, Lyon 2ème",
    City : "Lyon",
    like: true, // Coup de coeur
    Buy: true, //location or buying
    Bedroom: 3,
    Bathroom: 2,
    Floor: 6,
    Year: 2021,
    Parking: true,
    energetic : "A", // DPE rating
    energeticValue : 45, // DPE numeric value
    GesEmission : "B", // GES rating
    GesEmissionValue : 12, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 190,
    Taxe : 1520,
    Dispo : "12/02/2026",
    Description:
      "Découvrez ce somptueux penthouse T4 situé au cœur de la Presqu'île à Lyon 2ème. Offrant 3 chambres élégantes et 2 salles de bains modernes, cet appartement de luxe est parfait pour ceux qui recherchent un style de vie raffiné. La cuisine haut de gamme s'ouvre sur un salon spacieux, idéal pour recevoir des invités. Profitez également d'une terrasse privée avec une vue imprenable sur la ville. Avec un parking privé inclus, ce penthouse est une opportunité rare de posséder une résidence prestigieuse dans l'un des quartiers les plus prisés de Lyon.",
    Surface: 95, //surface area : m²
    images: [
      {
        src: "/images/penthouse-t4/penthouse-t4.png",
        alt: "penthouse t4",
        thumb: true,
      },
      {
        src: "/images/penthouse-t4/penthouse-t4-chambre.png",
        alt: "penthouse t4 chambre",
        thumb: false,
      },
      {
        src: "/images/penthouse-t4/penthouse-t4-coin-lecture.png",
        alt: "penthouse t4 coin lecture",
        thumb: false,
      },
      {
        src: "/images/penthouse-t4/penthouse-t4-cuisine.png",
        alt: "penthouse t4 cuisine",
        thumb: false,
      },
      {
        src: "/images/penthouse-t4/penthouse-t4-sdb.png",
        alt: "penthouse t4 salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Terrasse",
      "Cuisine haut de gamme",
      "Parking privé",
      "Climatisation",
      "Domotique",
    ],
  },
  {
    id: 7,
    name: "Studio moderne",
    Type :"studio",
    price: 950,
    complement: "Part-Dieu, Lyon 3ème",
    City : "Lyon",
    like: false, // Coup de coeur
    Buy: false, //location or buying
    Bedroom: 1,
    Bathroom: 1,
    Floor: 3,
    Year: 2017,
    Parking: false,
    energetic : "C", // DPE rating
    energeticValue : 110, // DPE numeric value
    GesEmission : "D", // GES rating
    GesEmissionValue : 20, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 70,
    Taxe : 1120,
    Dispo : "Immédiate",
    Description:
      "Ce studio moderne est idéalement situé dans le quartier animé de la Part-Dieu à Lyon 3ème. Parfait pour les étudiants ou les jeunes professionnels, ce studio offre un espace de vie fonctionnel avec une chambre confortable et une salle de bains contemporaine. La cuisine équipée permet de préparer facilement vos repas. Proche des transports en commun, des commerces et des restaurants, ce studio est une opportunité exceptionnelle pour vivre au cœur de Lyon à un prix abordable.",
    Surface: 35, //surface area : m²
    images: [
      {
        src: "/images/studio-moderne/studio-moderne.png",
        alt: "studio moderne",
        thumb: true,
      },
      {
        src: "/images/studio-moderne/studio-moderne-balcon.png",
        alt: "studio moderne balcon",
        thumb: false,
      },
      {
        src: "/images/studio-moderne/studio-moderne-chambre.png",
        alt: "studio moderne chambre",
        thumb: false,
      },
      {
        src: "/images/studio-moderne/studio-moderne-salon.png",
        alt: "studio moderne salon",
        thumb: false,
      },
      {
        src: "/images/studio-moderne/studio-moderne-sdb.png",
        alt: "studio moderne salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Balcon",
      "Cuisine équipée",
      "Ascenseur",
      "Double vitrage",
      "Chauffage central",
    ],
  },
  {
    id: 8,
    name: "Duplex T5",
    Type : "appartement",
    price: 520000,
    complement: "Croix-Rousse, Lyon 4ème",
    City : "Lyon",
    like: false, // Coup de coeur
    Buy: true, //location or buying
    Bedroom: 4,
    Bathroom: 2,
    Floor: 2,
    Year: 2016,
    Parking: true,
    energetic : "B", // DPE rating
    energeticValue : 90, // DPE numeric value
    GesEmission : "C", // GES rating
    GesEmissionValue : 18, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 220,
    Taxe : 1760,
    Dispo : "03/28/2026",
    Description:
      "Découvrez ce magnifique duplex T5 situé dans le quartier historique de la Croix-Rousse à Lyon 4ème. Avec ses 4 chambres spacieuses et ses 2 salles de bains modernes, cet appartement offre un espace de vie idéal pour les familles ou les amateurs d'espace. La cuisine ouverte sur le salon crée une atmosphère conviviale, parfaite pour recevoir des invités. Profitez également d'un balcon privé offrant une vue imprenable sur les toits de Lyon. Avec un parking privé inclus, ce duplex est une opportunité exceptionnelle de posséder une résidence unique dans l'un des quartiers les plus charmants de la ville.",
    Surface: 110, //surface area : m²
    images: [
      { src: "/images/duplex-t5/duplex-t5.png", alt: "duplex t5", thumb: true },
      {
        src: "/images/duplex-t5/duplex-t5-bibliotheque.png",
        alt: "duplex t5 bibliothèque",
        thumb: false,
      },
      {
        src: "/images/duplex-t5/duplex-t5-chambre.png",
        alt: "duplex t5 chambre",
        thumb: false,
      },
      {
        src: "/images/duplex-t5/duplex-t5-cuisine.png",
        alt: "duplex t5 cuisine",
        thumb: false,
      },
      {
        src: "/images/duplex-t5/duplex-t5-sdb.png",
        alt: "duplex t5 salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Balcon",
      "Cuisine équipée",
      "Parking privé",
      "Double vitrage",
      "Chauffage central",
    ],
  },
  {
    id: 9,
    name: "Maison de ville",
    Type :"maison",
    price: 2200,
    complement: "Vieux Lyon, Lyon 5ème",
    City : "Lyon",
    like: false, // Coup de coeur
    Buy: false, //location or buying
    Bedroom: 5,
    Bathroom: 4,
    Floor: null,
    Year: 2012,
    Parking: true,
    energetic : "D", // DPE rating
    energeticValue : 120, // DPE numeric value
    GesEmission : "E", // GES rating
    GesEmissionValue : 28, // GES numeric value
    RefLeg : "REF-2024-001",
    ChargeCopro : 280,
    Taxe : 2240,
    Dispo : "Immédiate",
    Description:
      "Cette élégante maison de ville est située dans le charmant quartier du Vieux Lyon, offrant un mélange parfait de caractère historique et de confort moderne. Avec ses 5 chambres spacieuses et ses 4 salles de bains, cette propriété est idéale pour les grandes familles ou ceux qui aiment recevoir. La cuisine contemporaine s'ouvre sur un salon lumineux, créant un espace convivial pour les rassemblements. Profitez également d'une cour privée, parfaite pour les repas en plein air. Proche des attractions culturelles, des restaurants et des transports, cette maison de ville est une opportunité exceptionnelle pour vivre au cœur de Lyon.",
    Surface: 140, //surface area : m²
    images: [
      {
        src: "/images/maison-de-ville/maison-de-ville.png",
        alt: "maison de ville",
        thumb: true,
      },
      {
        src: "/images/maison-de-ville/maison-de-ville-chambre.png",
        alt: "maison de ville chambre",
        thumb: false,
      },
      {
        src: "/images/maison-de-ville/maison-de-ville-cuisine.png",
        alt: "maison de ville cuisine",
        thumb: false,
      },
      {
        src: "/images/maison-de-ville/maison-de-ville-salon.png",
        alt: "maison de ville salon",
        thumb: false,
      },
      {
        src: "/images/maison-de-ville/maison-de-ville-sdb.png",
        alt: "maison de ville salle de bain",
        thumb: false,
      },
    ],
    equipement: [
      "Cour privée",
      "Cuisine équipée",
      "Parking privé",
      "Chauffage au sol",
      "Alarme de sécurité",
    ],
  },
]; //tableau

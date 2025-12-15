import blue from "~/assets/images/blue.avif";
import banner from "~/assets/images/banner.avif";
import blueHover from "~/assets/images/bluehover.avif";
import radiant from "~/assets/images/radiant.avif";
import radiantHover from "~/assets/images/radiantHoveer.avif";
import moisturizer from "~/assets/images/mosturizer.avif";
import moisturizerHover from "~/assets/images/mosturizerHover.avif";
import sanitizer from "~/assets/images/sanitizer.avif";
import sanitizerHover from "~/assets/images/sanitizerHover.avif";

import face from "~/assets/images/face.avif";
import body from "~/assets/images/body.avif";
import hair from "~/assets/images/hair.avif";
import cream from "~/assets/images/cream.avif";
import facemask from "~/assets/images/facemask.avif";

// for contact
import shade from "~/assets/slideImages/shade.jpg";
import creamer from "~/assets/slideImages/cream.jpg";
import drip from "~/assets/slideImages/drip.jpg";
import foam from "~/assets/slideImages/foam.jpg";
import hold from "~/assets/slideImages/hold.jpg";
import lotion from "~/assets/slideImages/lotion.jpg";
import man from "~/assets/slideImages/man.jpg";
import pack from "~/assets/slideImages/pack.jpg";
import woman from "~/assets/slideImages/woman.jpg";
import youth from "~/assets/slideImages/youth.jpg";

// for products
import serum from "~/assets/products/serum.jpg";
import bottle from "~/assets/products/bottle.jpg";
import brush from "~/assets/products/brush.jpg";
import container from "~/assets/products/container.jpg";
import glow from "~/assets/products/glow.jpg";
import hand from "~/assets/products/hand.jpg";
import pressed from "~/assets/products/pressed.jpg";
import tube from "~/assets/products/tube.jpg";
import wash from "~/assets/products/wash.jpg";

export const products = [
  {
    id: "vit-c-serum-001",
    name: "Vitamin C Serum",
    description:
      "A potent antioxidant serum that brightens skin, reduces fine lines, and protects against environmental damage. Contains 20% Vitamin C for maximum effectiveness.",
    price: 45.99,
    image: serum,
    category: "face",
    rating: 4.8,
    reviews: 127,
    isBestSeller: true,
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Vitamin E", "Ferulic Acid"],
    benefits: [
      "Brightens skin tone",
      "Reduces fine lines",
      "Antioxidant protection",
      "Even skin texture",
    ],
    info: {
      usage:
        "Apply 2-3 drops to clean, dry skin in the morning. Follow with sunscreen. Start with every other day if you have sensitive skin.",
      volume: "30ml",
      skinType: "All skin types",
      keyIngredients: "20% Vitamin C, Hyaluronic Acid, Ferulic Acid",
      shelfLife: "6 months after opening",
    },
  },
  {
    id: "hydrating-oil-002",
    name: "Hydrating Face Oil",
    description:
      "A lightweight, nourishing face oil that deeply hydrates and restores skin's natural moisture barrier. Perfect for all skin types including dry and sensitive skin.",
    price: 38.5,
    image: bottle,
    category: "face",
    rating: 4.7,
    reviews: 89,
    isNew: true,
    ingredients: ["Jojoba Oil", "Rosehip Seed Oil", "Argan Oil", "Vitamin E"],
    benefits: [
      "Deep hydration",
      "Restores moisture barrier",
      "Non-greasy formula",
      "Suitable for sensitive skin",
    ],
    info: {
      usage:
        "Apply 3-4 drops to damp skin after cleansing. Massage gently into face and neck. Use morning and evening.",
      volume: "30ml",
      skinType: "All skin types, especially dry",
      keyIngredients: "Jojoba Oil, Rosehip Seed Oil, Argan Oil",
      shelfLife: "12 months after opening",
    },
  },
  {
    id: "cleansing-brush-003",
    name: "Facial Cleansing Brush",
    description:
      "Advanced sonic cleansing brush that removes impurities, exfoliates gently, and improves product absorption. Features multiple speed settings and waterproof design.",
    price: 79.99,
    image: brush,
    category: "tools",
    rating: 4.9,
    reviews: 203,
    isBestSeller: true,
    ingredients: [],
    benefits: [
      "Deep cleansing",
      "Gentle exfoliation",
      "Improves product absorption",
      "Waterproof design",
    ],
    info: {
      usage:
        "Wet brush and apply cleanser. Use gentle circular motions for 1-2 minutes. Rinse thoroughly and air dry.",
      battery: "USB rechargeable, 2-hour charge lasts 30 days",
      speeds: "3 speed settings",
      waterproof: "IPX7 waterproof",
      care: "Clean brush head weekly with mild soap",
    },
  },
  {
    id: "container-set-004",
    name: "Skincare Container Set",
    description:
      "Premium glass skincare containers with bamboo lids. Perfect for storing serums, oils, and creams. Includes 3 different sizes for versatile use.",
    price: 24.99,
    image: container,
    category: "tools",
    rating: 4.6,
    reviews: 67,
    isNew: true,
    ingredients: [],
    benefits: [
      "Eco-friendly materials",
      "Multiple sizes",
      "Leak-proof design",
      "Elegant aesthetic",
    ],
    info: {
      usage:
        "Perfect for storing serums, oils, and creams. Use bamboo lids for easy access.",
      materials: "Glass jars with bamboo lids",
      sizes: "15ml, 30ml, 50ml",
      care: "Hand wash only, avoid extreme temperatures",
      ecoFriendly: "Sustainable bamboo and recyclable glass",
    },
  },
  {
    id: "glow-moisturizer-005",
    name: "Glow Boosting Moisturizer",
    description:
      "A luxurious moisturizer that provides instant hydration and long-term glow. Infused with peptides and hyaluronic acid for youthful, radiant skin.",
    price: 32.99,
    image: glow,
    category: "face",
    rating: 4.8,
    reviews: 156,
    isBestSeller: true,
    ingredients: ["Hyaluronic Acid", "Peptides", "Niacinamide", "Vitamin B5"],
    benefits: [
      "Instant hydration",
      "Youthful glow",
      "Firms skin",
      "Reduces appearance of pores",
    ],
    info: {
      usage:
        "Apply to clean, dry skin morning and evening. Massage gently until absorbed. Layer under sunscreen during the day.",
      volume: "50ml",
      skinType: "All skin types",
      keyIngredients: "Hyaluronic Acid, Peptides, Niacinamide",
      texture: "Lightweight gel-cream formula",
      shelfLife: "6 months after opening",
    },
  },
  {
    id: "hand-body-lotion-006",
    name: "Hand & Body Lotion",
    description:
      "Rich, nourishing lotion for hands and body that deeply moisturizes and softens skin. Absorbs quickly without leaving a greasy residue.",
    price: 18.99,
    image: hand,
    category: "body",
    rating: 4.7,
    reviews: 94,
    ingredients: ["Shea Butter", "Coconut Oil", "Aloe Vera", "Vitamin E"],
    benefits: [
      "Deep nourishment",
      "Quick absorption",
      "Non-greasy",
      "Long-lasting moisture",
    ],
    info: {
      usage:
        "Apply liberally to hands and body after showering or bathing. Massage until absorbed. Reapply as needed throughout the day.",
      volume: "200ml",
      skinType: "All skin types",
      keyIngredients: "Shea Butter, Coconut Oil, Aloe Vera",
      scent: "Light, natural fragrance",
      shelfLife: "12 months after opening",
    },
  },
  {
    id: "pressed-foundation-007",
    name: "Pressed Powder Foundation",
    description:
      "Buildable pressed powder foundation that provides natural coverage with a matte finish. Long-lasting formula that controls shine throughout the day.",
    price: 28.5,
    image: pressed,
    category: "face",
    rating: 4.5,
    reviews: 78,
    ingredients: ["Titanium Dioxide", "Zinc Oxide", "Silica", "Vitamin E"],
    benefits: [
      "Natural coverage",
      "Matte finish",
      "Oil control",
      "Long-lasting wear",
    ],
    info: {
      usage:
        "Apply with a brush or sponge to clean, moisturized skin. Start with a light layer and build as needed. Set with a setting spray.",
      coverage: "Buildable medium coverage",
      finish: "Matte, shine-free",
      shades: "20 shades available",
      keyIngredients: "Titanium Dioxide, Zinc Oxide, Silica",
      shelfLife: "24 months after opening",
    },
  },
  {
    id: "hair-treatment-008",
    name: "Repairing Hair Treatment",
    description:
      "Intensive hair treatment that repairs damaged hair, adds shine, and improves manageability. Perfect for color-treated or chemically processed hair.",
    price: 22.99,
    image: tube,
    category: "hair",
    rating: 4.6,
    reviews: 112,
    isNew: true,
    ingredients: ["Keratin", "Argan Oil", "Shea Butter", "Panthenol"],
    benefits: [
      "Repairs damage",
      "Adds shine",
      "Improves texture",
      "Color protection",
    ],
    info: {
      usage:
        "Apply to clean, damp hair from mid-lengths to ends. Leave on for 10-20 minutes, then rinse thoroughly. Use 1-2 times per week.",
      volume: "150ml",
      hairType: "Damaged, color-treated, or chemically processed hair",
      keyIngredients: "Keratin, Argan Oil, Shea Butter",
      scent: "Light herbal fragrance",
      shelfLife: "12 months after opening",
    },
  },
  {
    id: "face-wash-009",
    name: "Gentle Face Wash",
    description:
      "Mild, foaming cleanser that effectively removes impurities while maintaining skin's natural moisture balance. Suitable for daily use on all skin types.",
    price: 16.99,
    image: wash,
    category: "face",
    rating: 4.4,
    reviews: 145,
    ingredients: [
      "Coconut Cleansers",
      "Aloe Vera",
      "Chamomile Extract",
      "Panthenol",
    ],
    benefits: [
      "Gentle cleansing",
      "Maintains moisture",
      "Foaming formula",
      "Daily use",
    ],
    info: {
      usage:
        "Wet face with lukewarm water. Apply a small amount and massage gently in circular motions. Rinse thoroughly and pat dry.",
      volume: "150ml",
      skinType: "All skin types, especially sensitive",
      keyIngredients: "Coconut Cleansers, Aloe Vera, Chamomile Extract",
      phLevel: "Balanced pH 5.5",
      shelfLife: "12 months after opening",
    },
  },
];
export {
  blue,
  blueHover,
  radiant,
  radiantHover,
  moisturizer,
  moisturizerHover,
  sanitizer,
  sanitizerHover,
  banner,
  body,
  face,
  hair,
  cream,
  facemask,
  shade,
  creamer,
  drip,
  foam,
  hold,
  lotion,
  man,
  pack,
  woman,
  youth,
  serum,
  bottle,
  brush,
  container,
  glow,
  hand,
  pressed,
  tube,
  wash,
};

export const bestSellers = [
  {
    id: 'pressed-foundation-007',
    name: "radiant renewal serum",
    price: 49.99,
    image: blue,
    hoverImage: blueHover,
  },
  {
    id: 'hair-treatment-008',
    name: "Luminous eye cream",
    price: 25.55,
    image: radiant,
    hoverImage: sanitizerHover,
  },
  {
    id: 'glow-moisturizer-005',
    name: "Hydraglow moisturizer",
    price: 19.99,
    image: moisturizer,
    hoverImage: moisturizerHover,
  },
  {
    id: 'vit-c-serum-001',
    name: "Radiance cleanser",
    price: 19.99,
    image: sanitizer,
    hoverImage: radiantHover,
  },
];

export const category = [
  {
    id: 1,
    name: "face",
    image: face,
    style: "bg-light",
  },
  {
    id: 2,
    name: "body",
    image: body,
    style: "bg-primary",
  },
  {
    id: 3,
    name: "hair",
    image: hair,
    style: "bg-secondary",
  },
];

export const rowItems = [
  { id: 1, image: shade },
  { id: 2, image: creamer },
  { id: 3, image: drip },
  { id: 4, image: foam },
  { id: 5, image: man },
];

export const secondItems = [
  { id: 6, image: woman },
  { id: 7, image: lotion },
  { id: 8, image: pack },
  { id: 9, image: youth },
  { id: 10, image: hold },
];

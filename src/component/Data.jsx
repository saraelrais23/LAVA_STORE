const Data = [
  {
    id: 1,
    name: "Cloud Runner Z20",
    price: 125.0,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    discount: 15,
    isNew: true,
  },
  {
    id: 2,
    name: "Ring",
    price: 85.0,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1723802205505-2f88b2227718?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    rating: 4.9,
    discount: null,
    isNew: true,
  },
  {
    id: 3,
    name: "Polarized Series 5",
    price: 190.0,
    category: "Eyewear",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    discount: 10,
  },
  {
    id: 4,
    name: "Essential Cotton Tee",
    price: 35.0,
    category: "Essentials",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    discount: null,
  },
  {
    id: 5,
    name: "Nike SuperRep Go",
    price: 125.0,
    category: "Footwear",
    description:
      "Engineered for maximum comfort and speed. The Z20 features a breathable mesh upper and our signature responsive cushioning for your longest runs.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Youthful Energy",
    price: 180.0,
    category: "StreetWear",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgrc7eWzZgBcGyjCneGrvBOPNz47ZZ-oyLw&s",
    rating: 3.9,
    isNew: true,
    discount: 15,
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 70.0,
    category: "Eyewear",
    image:
      "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
    rating: 3.9,
    discount: 10,
    isNew: false,
  },
];
const collections = [
  {
    id: 1,
    tag: "Editorial",
    title: "The Concrete Jungle",
    desc: "Neutral tones meeting architectural silhouettes.",
    image:
      "https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGx1eHVyeSUyMHNob3BwaW5nfGVufDB8fDB8fHww",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    tag: "Vibe",
    title: "Solar Flare",
    desc: "Linen textures for the golden hour.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    tag: "Minimal",
    title: "Pure Form",
    desc: "Back to the basics.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },

  {
    id: 4,
    tag: "Trend",
    title: "Neo-Gothic",
    desc: "Midnight black in heavy cotton.",
    image:
      // "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1000"
      "https://media.istockphoto.com/id/2248565712/photo/couple-walking-through-shopping-mall.webp?a=1&b=1&s=612x612&w=0&k=20&c=T4p9jiX0WdDPEeO_KpB_snPnPxJWaCRj1W9xLaMGAWE=",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    tag: "Limited",
    title: "Electric Blue",
    desc: "High-voltage street style.",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    tag: "Fashionable",
    title: "High Fashion",
    desc: "Vibrant, saturated editorial coloring.",
    image:
      "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNob3BwaW5nfGVufDB8fDB8fHww",
    className: "md:col-span-1 md:row-span-1",
  },
];
const categories = [
  {
    id: "essentials",
    name: "Essentials",
    count: "86 Items",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000",
    color: "from-blue-500/20",
    size: "md:col-span-2",
  },
  {
    id: "streetwear",
    name: "Streetwear",
    count: "124 Items",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
    color: "from-orange-500/20",
    size: "md:col-span-1",
  },
  {
    id: "accessories",
    name: "Accessories",
    count: "42 Items",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    color: "from-emerald-500/20",
    size: "md:col-span-1",
  },
  {
    id: "footwear",
    name: "Footwear",
    count: "65 Items",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
    color: "from-purple-500/20",
    size: "md:col-span-2",
  },
];

const orderHistory = [
  {
    id: "VB-9921",
    date: "Oct 12, 2026",
    status: "Delivered",
    total: 1177,
    items: [
      {
        itemCount: 2,
        itemName: "Footwear",
        itemPrice: 154,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
      {
        itemCount: 1,
        itemName: "Streetwear",
        itemPrice: 1023,
        itemImage:
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    currentStep: 3, // 0, 1, 2, 3
    itemsQty: 3,
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Visa •••• 4242",
  },
  {
    id: "VB-9915",
    date: "Oct 10, 2026",
    status: "In Transit",
    total: 85.0,
    items: [
      {
        itemCount: 1,
        itemName: "Footwear",
        itemPrice: 85.0,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    itemsQty: 1,
    currentStep: 2, // 0, 1, 2, 3
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Cash",
  },
  {
    id: "VB-9882",
    date: "Oct 05, 2026",
    status: "Processing",
    total: 210.0,
    itemsQty: 4,
    items: [
      {
        itemCount: 2,
        itemName: "Footwear",
        itemPrice: 100,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
      {
        itemCount: 2,
        itemName: "Streetwear",
        itemPrice: 110,
        itemImage:
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    currentStep: 1, // 0, 1, 2, 3
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Visa •••• 4242",
  },
  {
    id: "VB-9850",
    date: "Sep 28, 2026",
    status: "Cancelled",
    items: [
      {
        itemCount: 1,
        itemName: "Footwear",
        itemPrice: 45.0,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    total: 45.99,
    itemsQty: 1,
    currentStep: -1, // 0, 1, 2, 3
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Cash",
  },
  ,
  {
    id: "VB-985110",
    date: "Sep 28, 2026",
    status: "Cancelled",
    total: 45.99,
    items: [
      {
        itemCount: 1,
        itemName: "Footwear",
        itemPrice: 45.99,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    itemsQty: 1,
    currentStep: -1, // 0, 1, 2, 3
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Visa •••• 4242",
  },
  {
    id: "VB-96352",
    status: "Confirmed", // Options: Confirmed,Processing, In Transit, Delivered
    date: "May 12, 2026",
    itemsQty: 3,
    items: [
      {
        itemCount: 2,
        itemName: "Footwear",
        itemPrice: 2000,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
      {
        itemCount: 1,
        itemName: "Streetwear",
        itemPrice: 245,
        itemImage:
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    total: 2245.0,
    currentStep: 0, // 0, 1, 2, 3
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Cash",
  },
  ,
  {
    id: "VB-96352",
    status: "Confirmed", // Options: Confirmed,Processing, In Transit, Delivered
    date: "May 12, 2026",
    itemsQty: 3,
    items: [
      {
        itemCount: 2,
        itemName: "Footwear",
        itemPrice: 1090,
        itemImage:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      },
      {
        itemCount: 1,
        itemName: "Streetwear",
        itemPrice: 250,
        itemImage:
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    total: 2340.0,
    currentStep: 0, // 0, 1, 2, 3
    address: "33 street building 1",
    fullName: "Emmy John",
    city: "London",
    ExpectedDate: "May 18 - May 20",
    payment: "Cash",
  },
];
export { Data, collections, categories, orderHistory };

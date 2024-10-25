const cars = [
  {
    make: "Rolls-Royce",
    model: "Phantom",
    year: 2023,
    purchasePrice: 450000,
    rentingPrice: 1500,
    engineType: "V12",
    transmission: "Automatic",
    driveType: "RWD",
    horsepower: 563,
    appreciationValue: 5,
    mainImage:
      "https://res.cloudinary.com/duqlw2kta/image/upload/v1729870411/download_2_fopoxf.jpg",
    additionalImages: [
      "https://res.cloudinary.com/duqlw2kta/image/upload/v1729870413/download_1_hjjxpg.jpg",
      "https://res.cloudinary.com/duqlw2kta/image/upload/v1729870411/Rolls_Royce_Phantom_zvnwld.jpg",
      "https://res.cloudinary.com/duqlw2kta/image/upload/v1729870409/2017_Rolls-Royce_Phantom_Interior_by_Levon_xhzvwm.jpg",
    ],
    description: [
      "The Rolls-Royce Phantom 2023 is the epitome of luxury and sophistication, blending unparalleled craftsmanship with cutting-edge technology. Every detail of this iconic vehicle, from its handcrafted interior to its powerful V12 engine, has been meticulously designed to offer an unmatched driving experience.",
      "Inside, the Phantom is adorned with luxurious materials, customizable options, and advanced technology that makes every journey an indulgence. This model continues to stand as a benchmark in the automotive world, a true symbol of prestige and power.",
    ],
  },
  {
    make: "Bentley",
    model: "Continental GT",
    year: 2023,
    purchasePrice: 220000,
    rentingPrice: 1000,
    engineType: "V8",
    transmission: "Automatic",
    driveType: "AWD",
    horsepower: 542,
    appreciationValue: 4,
    mainImage: "/images/bentley_continental_gt.jpg",
    additionalImages: [
      "/images/bentley_continental_gt_2.jpg",
      "/images/bentley_continental_gt_3.jpg",
      "/images/bentley_continental_gt_4.jpg",
    ],
    description: [
      "The 2023 Bentley Continental GT exemplifies refined power and elegance, seamlessly merging British craftsmanship with contemporary design. Under its hood, the potent V8 engine provides exhilarating performance, while the sophisticated all-wheel drive ensures unparalleled handling.",
      "The interior of the Continental GT is a masterpiece of opulence, featuring hand-stitched leather, polished wood veneers, and customizable options that cater to each driver’s preferences. Bentley’s engineering excellence shines through, offering a grand touring experience unlike any other.",
    ],
  },
  {
    make: "Lamborghini",
    model: "Aventador",
    year: 2023,
    purchasePrice: 500000,
    rentingPrice: 2500,
    engineType: "V12",
    transmission: "Automatic",
    driveType: "AWD",
    horsepower: 730,
    appreciationValue: 6,
    mainImage: "/images/lamborghini_aventador.jpg",
    additionalImages: [
      "/images/lamborghini_aventador_2.jpg",
      "/images/lamborghini_aventador_3.jpg",
      "/images/lamborghini_aventador_4.jpg",
    ],
    description: [
      "The Lamborghini Aventador 2023 redefines performance with its aggressive styling and roaring V12 engine, delivering a top-tier supercar experience. The Aventador is built for speed, with a finely tuned all-wheel-drive system that makes it as agile as it is powerful.",
      "Step inside, and you’re greeted by an interior that combines luxury with a race-inspired feel, featuring state-of-the-art technology and premium finishes. From its aerodynamic design to its unmatched power output, the Aventador remains a testament to Lamborghini’s legacy in the supercar world.",
    ],
  },
  {
    make: "Ferrari",
    model: "488 Pista",
    year: 2023,
    purchasePrice: 330000,
    rentingPrice: 2000,
    engineType: "V8",
    transmission: "Automatic",
    driveType: "RWD",
    horsepower: 710,
    appreciationValue: 7,
    mainImage: "/images/ferrari_488_pista.jpg",
    additionalImages: [
      "/images/ferrari_488_pista_2.jpg",
      "/images/ferrari_488_pista_3.jpg",
      "/images/ferrari_488_pista_4.jpg",
    ],
    description: [
      "The Ferrari 488 Pista 2023 is an embodiment of raw power and dynamic performance, taking the iconic Ferrari design language to new heights. Its turbocharged V8 engine offers breathtaking acceleration and responsiveness, ensuring that every drive is exhilarating.",
      "With aerodynamic enhancements and lightweight materials, the 488 Pista is engineered for speed and precision. Inside, the driver-focused cockpit features premium materials and cutting-edge technology, making it a true masterpiece for any driving enthusiast.",
    ],
  },
  {
    make: "Aston Martin",
    model: "DB11",
    year: 2023,
    purchasePrice: 220000,
    rentingPrice: 1000,
    engineType: "V8",
    transmission: "Automatic",
    driveType: "RWD",
    horsepower: 503,
    appreciationValue: 4,
    mainImage: "/images/aston_martin_db11.jpg",
    additionalImages: [
      "/images/aston_martin_db11_2.jpg",
      "/images/aston_martin_db11_3.jpg",
      "/images/aston_martin_db11_4.jpg",
    ],
    description: [
      "The Aston Martin DB11 2023 is a stunning blend of elegance and performance, showcasing the brand’s commitment to craftsmanship and innovation. Its powerful V8 engine delivers exhilarating performance while maintaining a level of sophistication that is unmistakably Aston Martin.",
      "The interior offers a luxurious sanctuary, featuring premium leather, advanced technology, and ample customization options. With its striking design and unparalleled driving experience, the DB11 continues to be a standout in the luxury sports car segment.",
    ],
  },
  {
    make: "Porsche",
    model: "911 Turbo S",
    year: 2023,
    purchasePrice: 230000,
    rentingPrice: 800,
    engineType: "Flat-6",
    transmission: "Automatic",
    driveType: "AWD",
    horsepower: 640,
    appreciationValue: 3,
    mainImage: "/images/porsche_911_turbo_s.jpg",
    additionalImages: [
      "/images/porsche_911_turbo_s_2.jpg",
      "/images/porsche_911_turbo_s_3.jpg",
      "/images/porsche_911_turbo_s_4.jpg",
    ],
    description: [
      "The 2023 Porsche 911 Turbo S epitomizes the perfect balance between performance and everyday usability. With a robust flat-6 engine that generates impressive horsepower, the Turbo S delivers blistering acceleration and exceptional handling capabilities.",
      "Its iconic design is complemented by a luxurious interior that features cutting-edge technology and high-quality materials. Whether on the track or the road, the 911 Turbo S offers an exhilarating driving experience that is both thrilling and refined.",
    ],
  },
  {
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2023,
    purchasePrice: 120000,
    rentingPrice: 500,
    engineType: "I6",
    transmission: "Automatic",
    driveType: "AWD",
    horsepower: 429,
    appreciationValue: 2,
    mainImage: "/images/mercedes_benz_s_class.jpg",
    additionalImages: [
      "/images/mercedes_benz_s_class_2.jpg",
      "/images/mercedes_benz_s_class_3.jpg",
      "/images/mercedes_benz_s_class_4.jpg",
    ],
    description: [
      "The 2023 Mercedes-Benz S-Class is the pinnacle of luxury sedans, featuring state-of-the-art technology and unparalleled comfort. With a powerful inline-six engine, the S-Class offers smooth acceleration and an incredibly refined ride.",
      "Inside, it boasts an opulent cabin equipped with the latest infotainment systems, premium materials, and advanced safety features. The S-Class sets a new standard for what a luxury sedan should be, ensuring every drive is a memorable experience.",
    ],
  },
  {
    make: "BMW",
    model: "7 Series",
    year: 2023,
    purchasePrice: 100000,
    rentingPrice: 400,
    engineType: "I6",
    transmission: "Automatic",
    driveType: "RWD",
    horsepower: 335,
    appreciationValue: 2,
    mainImage: "/images/bmw_7_series.jpg",
    additionalImages: [
      "/images/bmw_7_series_2.jpg",
      "/images/bmw_7_series_3.jpg",
      "/images/bmw_7_series_4.jpg",
    ],
    description: [
      "The 2023 BMW 7 Series redefines luxury with its cutting-edge design and innovative technology. Its inline-six engine delivers a harmonious balance of power and efficiency, making it a top choice for discerning drivers.",
      "The interior is meticulously crafted, offering a blend of comfort and advanced features. With spacious seating and a host of connectivity options, the 7 Series ensures that every journey is as enjoyable as it is luxurious.",
    ],
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2023,
    purchasePrice: 120000,
    rentingPrice: 450,
    engineType: "Electric",
    transmission: "Automatic",
    driveType: "AWD",
    horsepower: 1020,
    appreciationValue: 3,
    mainImage: "/images/tesla_model_s.jpg",
    additionalImages: [
      "/images/tesla_model_s_2.jpg",
      "/images/tesla_model_s_3.jpg",
      "/images/tesla_model_s_4.jpg",
    ],
    description: [
      "The 2023 Tesla Model S represents the forefront of electric vehicle technology, delivering impressive performance and long-range capabilities. With its dual-motor all-wheel drive system, the Model S accelerates from 0 to 60 mph in just 1.99 seconds, redefining speed in the electric vehicle market.",
      "The minimalist interior is equipped with cutting-edge technology, including a massive touchscreen display and advanced autopilot features. The Model S is not just a car; it's an experience that combines sustainability with exhilarating performance.",
    ],
  },
  {
    make: "McLaren",
    model: "720S",
    year: 2023,
    purchasePrice: 300000,
    rentingPrice: 2000,
    engineType: "V8",
    transmission: "Automatic",
    driveType: "RWD",
    horsepower: 710,
    appreciationValue: 5,
    mainImage: "/images/mclaren_720s.jpg",
    additionalImages: [
      "/images/mclaren_720s_2.jpg",
      "/images/mclaren_720s_3.jpg",
      "/images/mclaren_720s_4.jpg",
    ],
    description: [
      "The 2023 McLaren 720S is a breathtaking supercar that showcases the brand's commitment to performance and aerodynamics. With its lightweight construction and twin-turbocharged V8 engine, the 720S delivers astonishing acceleration and agility on the track.",
      "The aerodynamic design not only enhances performance but also captivates with its striking aesthetics. Inside, the 720S features a driver-focused cockpit with premium materials and advanced technology, making every drive an exhilarating experience.",
    ],
  },
  {
    make: "Bugatti",
    model: "Chiron",
    year: 2023,
    purchasePrice: 3000000,
    rentingPrice: 10000,
    engineType: "W16",
    transmission: "Automatic",
    driveType: "AWD",
    horsepower: 1500,
    appreciationValue: 10,
    mainImage: "/images/bugatti_chiron.jpg",
    additionalImages: [
      "/images/bugatti_chiron_2.jpg",
      "/images/bugatti_chiron_3.jpg",
      "/images/bugatti_chiron_4.jpg",
    ],
    description: [
      "The Bugatti Chiron 2023 is the pinnacle of automotive engineering, combining unparalleled performance with breathtaking design. Powered by a quad-turbocharged W16 engine, it produces an astounding 1500 horsepower, allowing it to reach speeds that defy belief.",
      "Every aspect of the Chiron is meticulously crafted, from its luxurious interior to its striking exterior. This hypercar is not just about speed; it represents the ultimate in exclusivity and craftsmanship, making it a true icon in the automotive world.",
    ],
  },
];

export default cars;

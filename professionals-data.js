// SS Makan Mitra Verified Professionals Database
const professionals = [
  // Plumbers
  {
    id: 1,
    name: "Sonu",
    role: "Plumber",
    city: "Mumbai",
    experience: "7 years",
    phone: "+91 7394040387",
    email: "sonu.plumber@email.com",
    specialization: "Plumbing, Boring Work, Water Connection",
    rating: 4.8,
    verified: true
  },
  {
    id: 2,
    name: "Sandeep",
    role: "Plumber",
    city: "Delhi",
    experience: "6 years",
    phone: "+91 6390257853",
    email: "sandeep.plumber@email.com",
    specialization: "Pipe Installation, Bathroom Fixtures, Leak Repair",
    rating: 4.7,
    verified: true
  },
  {
    id: 3,
    name: "Ashok",
    role: "Plumber",
    city: "Bangalore",
    experience: "8 years",
    phone: "+91 8382034636",
    email: "ashok.plumber@email.com",
    specialization: "Residential Plumbing, Commercial Plumbing, Pipe Repair",
    rating: 4.8,
    verified: true
  },
  {
    id: 4,
    name: "Tilak",
    role: "Plumber",
    city: "Chennai",
    experience: "5 years",
    phone: "+91 8188962656",
    email: "tilak.plumber@email.com",
    specialization: "Water Tank Installation, Drainage Systems, Pipe Fitting",
    rating: 4.6,
    verified: true
  },
  {
    id: 5,
    name: "Hashim",
    role: "Plumber",
    city: "Pune",
    experience: "4 years",
    phone: "+91 7607307957",
    email: "hashim.plumber@email.com",
    specialization: "Bathroom Plumbing, Kitchen Plumbing, Water Heater Installation",
    rating: 4.5,
    verified: true
  },
  {
    id: 6,
    name: "Arun",
    role: "Plumber",
    city: "Hyderabad",
    experience: "6 years",
    phone: "+91 8318576386",
    email: "arun.plumber@email.com",
    specialization: "Pipe Installation, Water Connection, Leak Detection",
    rating: 4.7,
    verified: true
  },
  {
    id: 7,
    name: "Chhotu",
    role: "Plumber",
    city: "Ahmedabad",
    experience: "5 years",
    phone: "+91 9506993241",
    email: "chhotu.plumber@email.com",
    specialization: "Residential Plumbing, Pipe Repair, Water Tank Cleaning",
    rating: 4.6,
    verified: true
  },
  
  // Painters
  {
    id: 8,
    name: "Ganesh",
    role: "Painter",
    city: "Bangalore",
    experience: "8 years",
    phone: "+91 9580297740",
    email: "ganesh.painter@email.com",
    specialization: "Pop Putty Work, Interior Painting, Wall Preparation",
    rating: 4.8,
    verified: true
  },
  {
    id: 9,
    name: "Tiwari Ji",
    role: "Painter",
    city: "Mumbai",
    experience: "10 years",
    phone: "+91 8840871371",
    email: "tiwari.painter@email.com",
    specialization: "Pop Putty Work, Exterior Painting, Texture Work",
    rating: 4.9,
    verified: true
  },
  {
    id: 10,
    name: "Naseer",
    role: "Painter",
    city: "Delhi",
    experience: "7 years",
    phone: "+91 8853509419",
    email: "naseer.painter@email.com",
    specialization: "Pop Putty Work, Wall Painting, Color Consultation",
    rating: 4.7,
    verified: true
  },
  {
    id: 11,
    name: "Pawan",
    role: "Painter",
    city: "Jaipur",
    experience: "6 years",
    phone: "+91 6307805212",
    email: "pawan.painter@email.com",
    specialization: "Pop Putty Work, Interior Design, Wall Finishing",
    rating: 4.6,
    verified: true
  },
  {
    id: 12,
    name: "Rahul",
    role: "Painter",
    city: "Kolkata",
    experience: "5 years",
    phone: "+91 7080829520",
    email: "rahul.painter@email.com",
    specialization: "Pop Putty Work, Residential Painting, Surface Preparation",
    rating: 4.5,
    verified: true
  },
  {
    id: 13,
    name: "Aravind",
    role: "Painter",
    city: "Chennai",
    experience: "9 years",
    phone: "+91 9044780008",
    email: "aravind.painter@email.com",
    specialization: "Pop Putty Work, Commercial Painting, Decorative Finishes",
    rating: 4.8,
    verified: true
  },
  
  // Electricians
  {
    id: 14,
    name: "Suresh",
    role: "Electrician",
    city: "Mumbai",
    experience: "12 years",
    phone: "+91 9506852762",
    email: "suresh.electrician@email.com",
    specialization: "Residential Wiring, Panel Installation, Electrical Repair",
    rating: 4.9,
    verified: true
  },
  {
    id: 15,
    name: "Shanu",
    role: "Electrician",
    city: "Delhi",
    experience: "7 years",
    phone: "+91 8896157006",
    email: "shanu.electrician@email.com",
    specialization: "Home Wiring, Switch Installation, Electrical Troubleshooting",
    rating: 4.7,
    verified: true
  },
  {
    id: 16,
    name: "Sandeep",
    role: "Electrician",
    city: "Pune",
    experience: "8 years",
    phone: "+91 9369083930",
    email: "sandeep.electricion@email.com",
    specialization: "Commercial Wiring, Motor Installation, Electrical Maintenance",
    rating: 4.8,
    verified: true
  },
  {
    id: 17,
    name: "Raju Jha",
    role: "Electrician",
    city: "Bangalore",
    experience: "10 years",
    phone: "+91 9889093914",
    email: "raju.electrician@email.com",
    specialization: "Industrial Wiring, Power Distribution, Electrical Systems",
    rating: 4.9,
    verified: true
  },
  {
    id: 18,
    name: "Manoj",
    role: "Electrician",
    city: "Hyderabad",
    experience: "6 years",
    phone: "+91 8931074856",
    email: "manoj.electrician@email.com",
    specialization: "Residential Electrical, Lighting Installation, Wiring Repair",
    rating: 4.6,
    verified: true
  },
  {
    id: 19,
    name: "Ram Singh",
    role: "Electrician",
    city: "Jaipur",
    experience: "9 years",
    phone: "+91 8887710988",
    email: "ram.electrician@email.com",
    specialization: "Home Electrical, Switch Board, Electrical Safety",
    rating: 4.8,
    verified: true
  },
  
  // Tile Workers
  {
    id: 20,
    name: "Rajan",
    role: "Tile Worker",
    city: "Mumbai",
    experience: "11 years",
    phone: "+91 7054259832",
    email: "rajan.tile@email.com",
    specialization: "Floor Tiling, Wall Tiling, Bathroom Tiles",
    rating: 4.9,
    verified: true
  },
  {
    id: 21,
    name: "Sagar",
    role: "Tile Worker",
    city: "Delhi",
    experience: "8 years",
    phone: "+91 6392930295",
    email: "sagar.tile@email.com",
    specialization: "Ceramic Tiles, Marble Installation, Tile Repair",
    rating: 4.7,
    verified: true
  },
  {
    id: 22,
    name: "Sunny",
    role: "Tile Worker",
    city: "Pune",
    experience: "6 years",
    phone: "+91 8318243237",
    email: "sunny.tile@email.com",
    specialization: "Kitchen Tiles, Floor Installation, Grouting Work",
    rating: 4.6,
    verified: true
  },
  {
    id: 23,
    name: "Ajay",
    role: "Tile Worker",
    city: "Bangalore",
    experience: "9 years",
    phone: "+91 8953497250",
    email: "ajay.tile@email.com",
    specialization: "Designer Tiles, Bathroom Tiling, Waterproofing",
    rating: 4.8,
    verified: true
  },
  {
    id: 24,
    name: "Shri Kishan",
    role: "Tile Worker",
    city: "Chennai",
    experience: "12 years",
    phone: "+91 8853799020",
    email: "kishan.tile@email.com",
    specialization: "Premium Tiles, Commercial Tiling, Tile Cutting",
    rating: 4.9,
    verified: true
  },
  {
    id: 25,
    name: "Pawan",
    role: "Tile Worker",
    city: "Hyderabad",
    experience: "7 years",
    phone: "+91 8853001255",
    email: "pawan.tile@email.com",
    specialization: "Residential Tiling, Floor Tiles, Wall Decoration",
    rating: 4.7,
    verified: true
  },
  
  // Masons (Rajmistri)
  {
    id: 26,
    name: "Suneel",
    role: "Mason",
    city: "Mumbai",
    experience: "15 years",
    phone: "+91 9506648463",
    email: "suneel.mason@email.com",
    specialization: "Brick Work, Plastering, Foundation Work",
    rating: 4.9,
    verified: true
  },
  {
    id: 27,
    name: "Ramkumar",
    role: "Mason",
    city: "Delhi",
    experience: "13 years",
    phone: "+91 8808586242",
    email: "ramkumar.mason@email.com",
    specialization: "Construction Work, Concrete Work, Structural Repair",
    rating: 4.8,
    verified: true
  },
  {
    id: 28,
    name: "Kailash",
    role: "Mason",
    city: "Jaipur",
    experience: "11 years",
    phone: "+91 9214238477",
    email: "kailash.mason@email.com",
    specialization: "Building Construction, Plastering, Brick Laying",
    rating: 4.7,
    verified: true
  },
  {
    id: 29,
    name: "Pappu",
    role: "Mason",
    city: "Pune",
    experience: "8 years",
    phone: "+91 6386208723",
    email: "pappu.mason@email.com",
    specialization: "Residential Construction, Wall Building, Cement Work",
    rating: 4.6,
    verified: true
  },
  {
    id: 30,
    name: "Dashrath",
    role: "Mason",
    city: "Bangalore",
    experience: "10 years",
    phone: "+91 7408662964",
    email: "dashrath.mason@email.com",
    specialization: "Commercial Construction, Foundation, Concrete Mixing",
    rating: 4.8,
    verified: true
  },
  
  // Carpenters
  {
    id: 31,
    name: "Babbu",
    role: "Carpenter",
    city: "Mumbai",
    experience: "12 years",
    phone: "+91 9889568388",
    email: "babbu.carpenter@email.com",
    specialization: "Furniture Making, Door Installation, Custom Woodwork",
    rating: 4.8,
    verified: true
  },
  {
    id: 32,
    name: "Jaydeep",
    role: "Carpenter",
    city: "Delhi",
    experience: "9 years",
    phone: "+91 6393951463",
    email: "jaydeep.carpenter@email.com",
    specialization: "Cabinet Making, Window Installation, Wood Repair",
    rating: 4.7,
    verified: true
  },
  {
    id: 33,
    name: "Ganesh",
    role: "Carpenter",
    city: "Pune",
    experience: "8 years",
    phone: "+91 7355632126",
    email: "ganesh.carpenter@email.com",
    specialization: "Interior Carpentry, Furniture Repair, Wooden Flooring",
    rating: 4.6,
    verified: true
  },
  {
    id: 34,
    name: "Deep",
    role: "Carpenter",
    city: "Bangalore",
    experience: "11 years",
    phone: "+91 9936996551",
    email: "deep.carpenter@email.com",
    specialization: "Custom Furniture, Kitchen Cabinets, Wardrobe Installation",
    rating: 4.9,
    verified: true
  },
  {
    id: 35,
    name: "Faisal",
    role: "Carpenter",
    city: "Hyderabad",
    experience: "7 years",
    phone: "+91 8303719577",
    email: "faisal.carpenter@email.com",
    specialization: "Door Frames, Window Frames, Wooden Structures",
    rating: 4.7,
    verified: true
  },
  {
    id: 36,
    name: "Sajid",
    role: "Carpenter",
    city: "Chennai",
    experience: "6 years",
    phone: "+91 9794579283",
    email: "sajid.carpenter@email.com",
    specialization: "Furniture Assembly, Wood Polishing, Repair Work",
    rating: 4.5,
    verified: true
  },
  {
    id: 37,
    name: "Manish",
    role: "Carpenter",
    city: "Jaipur",
    experience: "10 years",
    phone: "+91 8707302377",
    email: "manish.carpenter@email.com",
    specialization: "Traditional Carpentry, Wooden Doors, Furniture Design",
    rating: 4.8,
    verified: true
  },
  {
    id: 38,
    name: "Vinod",
    role: "Carpenter",
    city: "Ahmedabad",
    experience: "9 years",
    phone: "+91 8299327646",
    email: "vinod.carpenter@email.com",
    specialization: "Modern Furniture, Interior Design, Wood Crafting",
    rating: 4.7,
    verified: true
  },
  
  // Shuttering Workers
  {
    id: 39,
    name: "Sonu",
    role: "Shuttering Worker",
    city: "Mumbai",
    experience: "8 years",
    phone: "+91 9559011150",
    email: "sonu.shuttering@email.com",
    specialization: "Concrete Shuttering, Formwork, Construction Support",
    rating: 4.7,
    verified: true
  },
  {
    id: 40,
    name: "Sachin",
    role: "Shuttering Worker",
    city: "Delhi",
    experience: "6 years",
    phone: "+91 8528151082",
    email: "sachin.shuttering@email.com",
    specialization: "Building Shuttering, Concrete Forms, Structural Work",
    rating: 4.6,
    verified: true
  },
  
  // Aluminium Workers
  {
    id: 41,
    name: "Ravi",
    role: "Aluminium Worker",
    city: "Pune",
    experience: "10 years",
    phone: "+91 8543949030",
    email: "ravi.aluminium@email.com",
    specialization: "Window Frames, Door Frames, Aluminium Fabrication",
    rating: 4.8,
    verified: true
  },
  {
    id: 42,
    name: "Manjil",
    role: "Aluminium Worker",
    city: "Bangalore",
    experience: "7 years",
    phone: "+91 9120766849",
    email: "manjil.aluminium@email.com",
    specialization: "Aluminium Windows, Sliding Doors, Metal Work",
    rating: 4.7,
    verified: true
  },
  
  // False Ceiling Workers
  {
    id: 43,
    name: "Anish",
    role: "False Ceiling Worker",
    city: "Mumbai",
    experience: "9 years",
    phone: "+91 8707527427",
    email: "anish.ceiling@email.com",
    specialization: "POP Ceiling, Gypsum Board, Interior Ceiling",
    rating: 4.8,
    verified: true
  },
  {
    id: 44,
    name: "Chakku",
    role: "False Ceiling Worker",
    city: "Delhi",
    experience: "8 years",
    phone: "+91 8840835917",
    email: "chakku.ceiling@email.com",
    specialization: "Suspended Ceiling, Decorative Ceiling, Lighting Integration",
    rating: 4.7,
    verified: true
  },
  {
    id: 45,
    name: "Abhishek",
    role: "False Ceiling Worker",
    city: "Hyderabad",
    experience: "6 years",
    phone: "+91 7985230018",
    email: "abhishek.ceiling@email.com",
    specialization: "Modern Ceiling Design, False Ceiling Installation, Interior Finishing",
    rating: 4.6,
    verified: true
  }
];
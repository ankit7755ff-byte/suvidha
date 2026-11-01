/**
 * Suvidha Express (सुविधा एक्सप्रेस)
 * Tagline: "Hum Aapki Suvidha Ke Liye Har Pal" (हम आपकी सुविधा के लिए हर पल)
 * Core Application Engine & Google Maps Live System
 */

// --- 1. INDIA HUBS & REGIONAL SORTING CENTERS ---
const INDIA_HUBS = [
  {
    id: "HUB-DEL",
    code: "DEL-01",
    name: "Delhi NCR Mega Logistics Hub",
    hindiName: "दिल्ली एनसीआर मेगा लॉजिस्टिक्स हब",
    city: "New Delhi / Gurugram",
    state: "Delhi NCR",
    lat: 28.5355,
    lng: 77.0694,
    pincode: "110037",
    address: "Cargo Terminal 2, IGI Airport Area & NH-48 Express Corridor, Gurugram Border",
    capacity: "85,000 Pkts/Day",
    phone: "+91 11 2565 8900",
    manager: "Vikramaditya Sharma",
    type: "National Super Hub",
    facilities: ["Air Cargo", "Cold Storage", "Surface Express", "Customs Clearance"]
  },
  {
    id: "HUB-BOM",
    code: "BOM-01",
    name: "Mumbai Western Gateway Hub",
    hindiName: "मुंबई पश्चिमी प्रवेश द्वार हब",
    city: "Mumbai / Bhiwandi",
    state: "Maharashtra",
    lat: 19.2969,
    lng: 73.0631,
    pincode: "421302",
    address: "Suvidha Logistics Park, Mumbai-Nashik Expressway, Bhiwandi",
    capacity: "1,10,000 Pkts/Day",
    phone: "+91 22 2847 4410",
    manager: "Sunil Deshmukh",
    type: "National Super Hub",
    facilities: ["Air Cargo", "Port Terminal Access", "Heavy Cargo", "24/7 Sorting"]
  },
  {
    id: "HUB-BLR",
    code: "BLR-01",
    name: "Bengaluru Silicon & South Hub",
    hindiName: "बेंगलुरु टेक और दक्षिण हब",
    city: "Bengaluru",
    state: "Karnataka",
    lat: 13.1986,
    lng: 77.7066,
    pincode: "560300",
    address: "Devanahalli Logistics Corridor, near Kempegowda Intl Airport, Bengaluru",
    capacity: "75,000 Pkts/Day",
    phone: "+91 80 4123 7890",
    manager: "Anand Murthy",
    type: "Zonal Hub",
    facilities: ["High-Tech E-Commerce", "Electronics Sorting", "Air Cargo"]
  },
  {
    id: "HUB-CCU",
    code: "CCU-01",
    name: "Kolkata Eastern Gateway Hub",
    hindiName: "कोलकाता पूर्वी प्रवेश द्वार हब",
    city: "Kolkata / Dankuni",
    state: "West Bengal",
    lat: 22.6868,
    lng: 88.2917,
    pincode: "712311",
    address: "NH-19 Dankuni Freight Terminal & Rajarhat Cargo Center, Kolkata",
    capacity: "60,000 Pkts/Day",
    phone: "+91 33 2450 1122",
    manager: "Subhashish Roy",
    type: "Zonal Hub",
    facilities: ["Surface Cargo", "North-East Gateway", "Rail Parcel Express"]
  },
  {
    id: "HUB-MAA",
    code: "MAA-01",
    name: "Chennai Coastal & Industrial Hub",
    hindiName: "चेन्नई तटीय एवं औद्योगिक हब",
    city: "Chennai / Sriperumbudur",
    state: "Tamil Nadu",
    lat: 12.9815,
    lng: 79.9468,
    pincode: "602105",
    address: "Industrial Corridor, Sriperumbudur-Oragadam Highway, Chennai",
    capacity: "50,000 Pkts/Day",
    phone: "+91 44 2256 9900",
    manager: "K. Ramanathan",
    type: "Regional Hub",
    facilities: ["Automotive Logistics", "Port Freight", "Express Air"]
  },
  {
    id: "HUB-HYD",
    code: "HYD-01",
    name: "Hyderabad Deccan Central Hub",
    hindiName: "हैदराबाद दक्कन सेंट्रल हब",
    city: "Hyderabad / Shamshabad",
    state: "Telangana",
    lat: 17.2403,
    lng: 78.4294,
    pincode: "500409",
    address: "GMR Aerospace & Logistics Park, Shamshabad Airport Zone, Hyderabad",
    capacity: "45,000 Pkts/Day",
    phone: "+91 40 6677 3344",
    manager: "Venkatesh Rao",
    type: "Regional Hub",
    facilities: ["Pharma Cold-Chain", "Next-Day Air", "Surface Express"]
  },
  {
    id: "HUB-AMD",
    code: "AMD-01",
    name: "Ahmedabad Vibrant Logistics Hub",
    hindiName: "अहमदाबाद वाइब्रेंट लॉजिस्टिक्स हब",
    city: "Ahmedabad / Sanand",
    state: "Gujarat",
    lat: 22.9868,
    lng: 72.3800,
    pincode: "382110",
    address: "Sanand GIDC Logistics Area, Ahmedabad-Rajkot Expressway",
    capacity: "55,000 Pkts/Day",
    phone: "+91 79 2658 9012",
    manager: "Bhavin Patel",
    type: "Regional Hub",
    facilities: ["Chemical & Pharma Logistics", "Textiles Parcel Express", "Surface"]
  },
  {
    id: "HUB-PNQ",
    code: "PNQ-01",
    name: "Pune Automobile & Cargo Hub",
    hindiName: "पुणे ऑटोमोबाइल एवं कार्गो हब",
    city: "Pune / Chakan",
    state: "Maharashtra",
    lat: 18.7565,
    lng: 73.8553,
    pincode: "410501",
    address: "MIDC Phase 2, Chakan Industrial Area, Pune",
    capacity: "40,000 Pkts/Day",
    phone: "+91 20 2712 6600",
    manager: "Sachin Kadam",
    type: "Regional Hub",
    facilities: ["Auto Components", "Express Courier", "Doorstep Pickup"]
  },
  {
    id: "HUB-JAI",
    code: "JAI-01",
    name: "Jaipur Pink City Freight Hub",
    hindiName: "जयपुर पिंक सिटी फ्रेट हब",
    city: "Jaipur",
    state: "Rajasthan",
    lat: 26.9698,
    lng: 75.7686,
    pincode: "302013",
    address: "VKI Industrial Area, Sikar Road, Jaipur",
    capacity: "30,000 Pkts/Day",
    phone: "+91 141 233 4455",
    manager: "Manvendra Rathore",
    type: "Regional Hub",
    facilities: ["Handicrafts & Gems Transit", "North Freight Corridor"]
  },
  {
    id: "HUB-LKO",
    code: "LKO-01",
    name: "Lucknow Awadh Express Hub",
    hindiName: "लखनऊ अवध एक्सप्रेस हब",
    city: "Lucknow",
    state: "Uttar Pradesh",
    lat: 26.7904,
    lng: 80.8988,
    pincode: "226012",
    address: "Transport Nagar, Kanpur Road, Lucknow",
    capacity: "35,000 Pkts/Day",
    phone: "+91 522 243 8899",
    manager: "Ajay Pratap Singh",
    type: "Regional Hub",
    facilities: ["Central UP Distribution", "Express Road Network"]
  },
  {
    id: "HUB-PAT",
    code: "PAT-01",
    name: "Patna Bihar Central Hub",
    hindiName: "पटना बिहार सेंट्रल हब",
    city: "Patna",
    state: "Bihar",
    lat: 25.5941,
    lng: 85.1376,
    pincode: "800002",
    address: "Anisabad Bypass Road, Patna",
    capacity: "28,000 Pkts/Day",
    phone: "+91 612 225 1199",
    manager: "Rakesh Ranjan",
    type: "Regional Hub",
    facilities: ["Bihar Distribution", "Rail-Air Intermodal"]
  },
  {
    id: "HUB-GAU",
    code: "GAU-01",
    name: "Guwahati North-East Gateway Hub",
    hindiName: "गुवाहाटी नॉर्थ-ईस्ट गेटवे हब",
    city: "Guwahati",
    state: "Assam",
    lat: 26.1844,
    lng: 91.7539,
    pincode: "781031",
    address: "Amingaon Inland Container Depot, Guwahati",
    capacity: "22,000 Pkts/Day",
    phone: "+91 361 280 4400",
    manager: "Pranab Barua",
    type: "Zonal Gateway",
    facilities: ["7 Sister States Connectivity", "Hilly Terrain Fleet"]
  },
  {
    id: "HUB-NAG",
    code: "NAG-01",
    name: "Nagpur Zero-Mile National Cross Hub",
    hindiName: "नागपुर ज़ीरो-माइल नेशनल क्रॉस हब",
    city: "Nagpur",
    state: "Maharashtra",
    lat: 21.0588,
    lng: 79.0560,
    pincode: "441108",
    address: "MIHAN SEZ Cargo Complex, Nagpur",
    capacity: "65,000 Pkts/Day",
    phone: "+91 712 258 7700",
    manager: "Dhananjay Joshi",
    type: "National Super Hub",
    facilities: ["Geographical Center of India", "Multimodal Freight Interconnect"]
  },
  {
    id: "HUB-COK",
    code: "COK-01",
    name: "Kochi Kerala Coastal Hub",
    hindiName: "कोच्चि केरल कोस्टल हब",
    city: "Kochi",
    state: "Kerala",
    lat: 10.0454,
    lng: 76.3264,
    pincode: "683104",
    address: "Kalamassery Industrial Estate, Kochi",
    capacity: "25,000 Pkts/Day",
    phone: "+91 484 255 1200",
    manager: "Mathew Varghese",
    type: "Regional Hub",
    facilities: ["Air Express", "Maritime Spares Transit", "Spice Export Delivery"]
  }
];

// --- 2. PRE-LOADED DEMO SHIPMENTS WITH FULL INDIAN LOGISTICS TIMELINES ---
const PRELOADED_SHIPMENTS = {
  "SE-DEL-MUM-8921": {
    awb: "SE-DEL-MUM-8921",
    senderName: "Techtronics India Pvt Ltd",
    senderCity: "New Delhi",
    senderPin: "110001",
    receiverName: "Apex Retail Solutions",
    receiverCity: "Mumbai",
    receiverPin: "400001",
    service: "Suvidha Air Express",
    category: "Commercial Electronics",
    weightKg: 4.8,
    valueRs: 48500,
    status: "IN_TRANSIT",
    statusText: "In Transit via NH-48 Express Highway",
    statusBadgeColor: "amber",
    estimatedDelivery: "Tomorrow by 2:00 PM",
    currentLocation: "Near Jaipur Express Transshipment Center, Rajasthan",
    vehicleNumber: "HR-55-SE-4029 (Tata Ultra 1518 LPT)",
    driverName: "Rajesh Sharma",
    driverPhone: "+91 98765 43210",
    liveSpeedKmh: 58,
    currentCoords: [27.0238, 75.8340],
    originCoords: [28.5355, 77.0694],
    destinationCoords: [19.2969, 73.0631],
    timeline: [
      {
        title: "Consignment Booked & Doorstep Picked Up",
        location: "Connaught Place, New Delhi (110001)",
        time: "Today, 09:30 AM",
        completed: true,
        detail: "Pickup Agent: Amit Kumar (Emp ID: SE-901). Digital Signature Verified."
      },
      {
        title: "Inward Scan & Quality Checked at Delhi Hub",
        location: "Delhi NCR Mega Logistics Hub (DEL-01)",
        time: "Today, 12:45 PM",
        completed: true,
        detail: "Weight verified 4.80 kg. Security X-Ray & Airway Label Affixed."
      },
      {
        title: "Departed on Line-Haul Vehicle to Mumbai Hub",
        location: "Delhi - Mumbai Freight Corridor (NH-48)",
        time: "Today, 03:15 PM",
        completed: true,
        active: true,
        detail: "Vehicle HR-55-SE-4029. GPS Tracking Live. ETA at Hub: 04:30 AM."
      },
      {
        title: "Arrival at Mumbai Western Gateway Hub",
        location: "Bhiwandi Super Hub (BOM-01)",
        time: "Tomorrow, 05:00 AM (Scheduled)",
        completed: false,
        detail: "Automated conveyor sort to Delivery Center Nariman Point."
      },
      {
        title: "Out for Final Delivery with OTP Verification",
        location: "Fort / Nariman Point Delivery Branch",
        time: "Tomorrow, 10:30 AM (Scheduled)",
        completed: false,
        detail: "Executive: Sanjay Patil (+91 98201 12345). Secure Delivery OTP."
      }
    ]
  },
  "SE-BLR-HYD-4412": {
    awb: "SE-BLR-HYD-4412",
    senderName: "Infowave Biosystems",
    senderCity: "Bengaluru",
    senderPin: "560001",
    receiverName: "Dr. Reddy's Research Lab",
    receiverCity: "Hyderabad",
    receiverPin: "500034",
    service: "Suvidha Pharma Cold Chain",
    category: "Medical Diagnostics / Cold Storage",
    weightKg: 2.2,
    valueRs: 72000,
    status: "OUT_FOR_DELIVERY",
    statusText: "Out for Delivery (Executive near Banjara Hills)",
    statusBadgeColor: "emerald",
    estimatedDelivery: "Today by 4:30 PM",
    currentLocation: "Banjara Hills Road No. 12, Hyderabad",
    vehicleNumber: "TS-09-EV-8821 (Electric Delivery Van)",
    driverName: "K. Nageshwar Rao",
    driverPhone: "+91 94401 55667",
    liveSpeedKmh: 32,
    currentCoords: [17.4156, 78.4350],
    originCoords: [13.1986, 77.7066],
    destinationCoords: [17.2403, 78.4294],
    timeline: [
      {
        title: "Consignment Dispatched from Bengaluru Hub",
        location: "Devanahalli Air Hub (BLR-01)",
        time: "Yesterday, 07:00 PM",
        completed: true,
        detail: "Temperature maintained at 4.2°C logged in cold chain sensor."
      },
      {
        title: "Arrived at Hyderabad Deccan Hub",
        location: "Shamshabad Logistics Hub (HYD-01)",
        time: "Today, 06:15 AM",
        completed: true,
        detail: "Cargo unloaded & scanned into local last-mile feeder van."
      },
      {
        title: "Out for Delivery - OTP Dispatched to Consignee",
        location: "Banjara Hills Branch, Hyderabad",
        time: "Today, 01:20 PM",
        completed: true,
        active: true,
        detail: "Delivery Executive K. Nageshwar Rao (+91 94401 55667) is 2.4 km away."
      }
    ]
  },
  "SE-KOL-PAT-9033": {
    awb: "SE-KOL-PAT-9033",
    senderName: "Oxford Educational Book Depot",
    senderCity: "Kolkata",
    senderPin: "700073",
    receiverName: "Patna Central Library",
    receiverCity: "Patna",
    receiverPin: "800001",
    service: "Suvidha Surface Gold",
    category: "Books & Educational Material",
    weightKg: 18.5,
    valueRs: 12000,
    status: "DELIVERED",
    statusText: "Successfully Delivered (Signed by: Alok Verma)",
    statusBadgeColor: "blue",
    estimatedDelivery: "Delivered Today at 11:20 AM",
    currentLocation: "Delivered at Destination (Patna 800001)",
    vehicleNumber: "BR-01-GA-3320",
    driverName: "Manoj Kumar",
    driverPhone: "+91 93341 88990",
    liveSpeedKmh: 0,
    currentCoords: [25.5941, 85.1376],
    originCoords: [22.6868, 88.2917],
    destinationCoords: [25.5941, 85.1376],
    timeline: [
      {
        title: "Package Picked Up from College Street, Kolkata",
        location: "College Street Branch (700073)",
        time: "28 Oct 2026, 11:00 AM",
        completed: true,
        detail: "Package wrapped in moisture-safe industrial pallet."
      },
      {
        title: "Transited through Eastern Rail-Highway Line",
        location: "Dankuni Sorting Hub (CCU-01)",
        time: "29 Oct 2026, 04:30 AM",
        completed: true,
        detail: "Line-haul manifest completed for Patna Central Depot."
      },
      {
        title: "Package Delivered & Digital POD Generated",
        location: "Patna Central Library, Ashok Rajpath",
        time: "30 Oct 2026, 11:20 AM",
        completed: true,
        active: false,
        detail: "Received by Alok Verma (Librarian). OTP Auth Code: 893120."
      }
    ]
  },
  "SE-PNQ-AMD-5120": {
    awb: "SE-PNQ-AMD-5120",
    senderName: "Bharat Precision Forgings",
    senderCity: "Pune",
    senderPin: "411018",
    receiverName: "Gujarat Auto Ancillaries",
    receiverCity: "Ahmedabad",
    receiverPin: "380015",
    service: "Suvidha Heavy Cargo",
    category: "Industrial Spares & Machinery",
    weightKg: 42.0,
    valueRs: 115000,
    status: "PICKED_UP",
    statusText: "Booked & Picked Up at Pune Chakan Hub",
    statusBadgeColor: "emerald",
    estimatedDelivery: "Day after tomorrow by 6:00 PM",
    currentLocation: "Chakan Industrial Hub, Pune",
    vehicleNumber: "MH-14-SE-7712",
    driverName: "Santosh Shinde",
    driverPhone: "+91 97654 33211",
    liveSpeedKmh: 42,
    currentCoords: [18.7565, 73.8553],
    originCoords: [18.7565, 73.8553],
    destinationCoords: [22.9868, 72.3800],
    timeline: [
      {
        title: "Consignment Booked & Picked up from Factory",
        location: "MIDC Bhosari, Pune (411026)",
        time: "Today, 11:15 AM",
        completed: true,
        active: true,
        detail: "Heavy pallet loading with hydraulic lifter completed."
      },
      {
        title: "Consolidated at Pune Super Hub",
        location: "Chakan Hub (PNQ-01)",
        time: "Scheduled Today, 07:00 PM",
        completed: false,
        detail: "Manifest creation for Western Freight Corridor."
      }
    ]
  }
};

// --- 3. PINCODE DATABASE (Covering Major Indian Cities & Postal Circles) ---
const PINCODE_MAP = {
  "11": { state: "Delhi", region: "Northern", hub: "HUB-DEL", expressTat: "1 Day", surfaceTat: "2-3 Days" },
  "12": { state: "Haryana", region: "Northern", hub: "HUB-DEL", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "13": { state: "Haryana", region: "Northern", hub: "HUB-DEL", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "14": { state: "Punjab", region: "Northern", hub: "HUB-DEL", expressTat: "2 Days", surfaceTat: "3 Days" },
  "16": { state: "Chandigarh / Punjab", region: "Northern", hub: "HUB-DEL", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "20": { state: "Uttar Pradesh (West)", region: "Northern", hub: "HUB-DEL", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "22": { state: "Uttar Pradesh (Central)", region: "Northern", hub: "HUB-LKO", expressTat: "2 Days", surfaceTat: "3-4 Days" },
  "24": { state: "Uttarakhand", region: "Northern", hub: "HUB-DEL", expressTat: "2 Days", surfaceTat: "3-4 Days" },
  "30": { state: "Rajasthan (Jaipur)", region: "Western", hub: "HUB-JAI", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "38": { state: "Gujarat (Ahmedabad)", region: "Western", hub: "HUB-AMD", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "39": { state: "Gujarat (Surat)", region: "Western", hub: "HUB-AMD", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "40": { state: "Maharashtra (Mumbai)", region: "Western", hub: "HUB-BOM", expressTat: "1 Day", surfaceTat: "2-3 Days" },
  "41": { state: "Maharashtra (Pune)", region: "Western", hub: "HUB-PNQ", expressTat: "1-2 Days", surfaceTat: "2-3 Days" },
  "44": { state: "Maharashtra (Nagpur)", region: "Central", hub: "HUB-NAG", expressTat: "2 Days", surfaceTat: "3 Days" },
  "45": { state: "Madhya Pradesh (Indore)", region: "Central", hub: "HUB-NAG", expressTat: "2 Days", surfaceTat: "3 Days" },
  "50": { state: "Telangana (Hyderabad)", region: "Southern", hub: "HUB-HYD", expressTat: "1-2 Days", surfaceTat: "3 Days" },
  "56": { state: "Karnataka (Bengaluru)", region: "Southern", hub: "HUB-BLR", expressTat: "1 Day", surfaceTat: "2-3 Days" },
  "60": { state: "Tamil Nadu (Chennai)", region: "Southern", hub: "HUB-MAA", expressTat: "1 Day", surfaceTat: "2-3 Days" },
  "68": { state: "Kerala (Kochi)", region: "Southern", hub: "HUB-COK", expressTat: "2 Days", surfaceTat: "3-4 Days" },
  "70": { state: "West Bengal (Kolkata)", region: "Eastern", hub: "HUB-CCU", expressTat: "1 Day", surfaceTat: "2-3 Days" },
  "75": { state: "Odisha (Bhubaneswar)", region: "Eastern", hub: "HUB-CCU", expressTat: "2 Days", surfaceTat: "3-4 Days" },
  "78": { state: "Assam (Guwahati)", region: "North-Eastern", hub: "HUB-GAU", expressTat: "2-3 Days", surfaceTat: "4-5 Days" },
  "80": { state: "Bihar (Patna)", region: "Eastern", hub: "HUB-PAT", expressTat: "2 Days", surfaceTat: "3-4 Days" },
  "83": { state: "Jharkhand (Ranchi)", region: "Eastern", hub: "HUB-PAT", expressTat: "2 Days", surfaceTat: "3-4 Days" }
};

// --- 4. APPLICATION STATE ---
const AppState = {
  currentTab: 'track',
  currentShipment: PRELOADED_SHIPMENTS["SE-DEL-MUM-8921"],
  activeShipmentList: { ...PRELOADED_SHIPMENTS },
  userApiKey: 'AIzaSyBKCGXg4JwHkRITTlUAb9dHlsyF7jOJCc8',
  geoapifyApiKey: '82c32ff36eeb4578a29b9525eac1b7f0', // OpenStreetMap Enterprise Engine
  mapEngine: 'geoapify', // 'geoapify' | 'google' | 'leaflet'
  googleMapsLoaded: false,
  googleMapsFailed: false,
  mapInstance: null,
  markers: [],
  routePolyline: null,
  truckMarker: null,
  routeCoordinates: [],
  simulationInterval: null,
  simulationStep: 0,
  isSimulating: true,
  audioMuted: false,
  language: 'en' // 'en' | 'hi'
};

// --- 5. AUDIO SYNTHESIZER (NO EXTERNAL AUDIO FILES REQUIRED) ---
const SoundFX = {
  ctx: null,
  init() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    } catch (e) {
      console.warn("Audio Context unavailable:", e);
    }
  },
  play(type = 'ping') {
    if (AppState.audioMuted) return;
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;

    if (type === 'ping') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'truck') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    }
  }
};

// --- 6. GOOGLE MAPS LOADER & ERROR HANDLING ---
window.gm_authFailure = function() {
  console.warn("Google Maps Auth Notice: Switching to fallback interactive Leaflet engine seamlessly.");
  AppState.googleMapsFailed = true;
  activateFallbackMap("Google Maps API Key Authentication Pending. Using Suvidha High-Precision Fallback Map Engine.");
};

window.initGoogleMapsApp = function() {
  console.log("Google Maps JS API Initialized with Key!");
  try {
    initGoogleMapsEngine();
  } catch (err) {
    console.warn("Google Maps engine startup issue:", err);
    activateFallbackMap("Switching to Suvidha OpenStreetMap Engine.");
  }
};

// Fallback timer if script fails to reach callback within 4 seconds
setTimeout(() => {
  if (!AppState.googleMapsLoaded && AppState.mapEngine === 'detecting') {
    activateFallbackMap();
  }
}, 4500);

function activateFallbackMap(reason) {
  if (AppState.mapEngine === 'leaflet') return;
  AppState.mapEngine = 'leaflet';
  updateMapStatusIndicator('leaflet', reason);
  initLeafletEngine();
}

function updateMapStatusIndicator(engine, message) {
  const badge = document.getElementById('map-engine-status');
  if (!badge) return;

  if (engine === 'google') {
    badge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span>Google Maps API: Live Active</span>
      <span class="text-[10px] opacity-75 font-mono">(${AppState.userApiKey.substring(0, 8)}...)</span>
    `;
  } else if (engine === 'geoapify' || AppState.geoapifyApiKey) {
    badge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm';
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span>Geoapify OSM Live Engine: Connected</span>
      <span class="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/30">Active</span>
      <button onclick="openApiKeyModal()" class="ml-1 underline text-[11px] text-emerald-200 hover:text-white">API Settings</button>
    `;
  } else {
    badge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30';
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
      <span>Suvidha Open Map Engine (Dual-Mode Active)</span>
      <button onclick="openApiKeyModal()" class="ml-1 underline text-[11px] text-amber-200 hover:text-white">API Settings</button>
    `;
  }
}

// --- 7. MAP ENGINE IMPLEMENTATIONS ---

// A. GOOGLE MAPS ENGINE
function initGoogleMapsEngine() {
  const mapElement = document.getElementById('map-container');
  if (!mapElement || !window.google || !window.google.maps) {
    activateFallbackMap();
    return;
  }

  try {
    AppState.googleMapsLoaded = true;
    AppState.mapEngine = 'google';
    updateMapStatusIndicator('google');

    const defaultIndiaCenter = { lat: 21.7679, lng: 78.8718 };

    // Custom dark / high-contrast logistics style
    const logisticsMapStyle = [
      { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f8fafc" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#1e293b" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#334155" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#ff6600" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#9a3412" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#1e293b" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#020617" }]
      }
    ];

    AppState.mapInstance = new google.maps.Map(mapElement, {
      center: defaultIndiaCenter,
      zoom: 5,
      styles: logisticsMapStyle,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true
    });

    // Render Hubs on Google Map
    renderHubsOnGoogleMap();

    // Setup Places Autocomplete for origin/destination
    setupGooglePlacesAutocomplete();

    // Render current active shipment route
    renderShipmentOnGoogleMap(AppState.currentShipment);

    console.log("Google Maps Engine fully initialized!");
  } catch (e) {
    console.error("Failed to start Google Maps:", e);
    activateFallbackMap();
  }
}

function renderHubsOnGoogleMap() {
  if (!AppState.mapInstance || AppState.mapEngine !== 'google') return;

  INDIA_HUBS.forEach(hub => {
    const hubMarker = new google.maps.Marker({
      position: { lat: hub.lat, lng: hub.lng },
      map: AppState.mapInstance,
      title: hub.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 7,
        fillColor: "#ff6600",
        fillOpacity: 0.9,
        strokeColor: "#ffffff",
        strokeWeight: 2
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="color: #0f172a; padding: 8px; font-family: Outfit, sans-serif; max-width: 250px;">
          <h4 style="font-weight: 700; color: #ff6600; margin: 0 0 4px 0;">${hub.name}</h4>
          <p style="font-size: 11px; margin: 0 0 4px 0; color: #64748b;">${hub.address}</p>
          <div style="font-size: 11px; margin: 4px 0;"><strong>Capacity:</strong> ${hub.capacity}</div>
          <div style="font-size: 11px; margin: 4px 0;"><strong>Manager:</strong> ${hub.manager}</div>
          <div style="font-size: 11px; margin: 4px 0;"><strong>Helpline:</strong> ${hub.phone}</div>
          <button onclick="selectHubForDispatch('${hub.id}')" style="margin-top: 6px; width: 100%; background: #ff6600; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">
            Book from this Hub
          </button>
        </div>
      `
    });

    hubMarker.addListener("click", () => {
      infoWindow.open(AppState.mapInstance, hubMarker);
      SoundFX.play('ping');
    });

    AppState.markers.push(hubMarker);
  });
}

function renderShipmentOnGoogleMap(shipment) {
  if (!AppState.mapInstance || AppState.mapEngine !== 'google') return;

  // Clear existing polyline
  if (AppState.routePolyline) {
    AppState.routePolyline.setMap(null);
  }
  if (AppState.truckMarker) {
    AppState.truckMarker.setMap(null);
  }

  const origin = { lat: shipment.originCoords[0], lng: shipment.originCoords[1] };
  const destination = { lat: shipment.destinationCoords[0], lng: shipment.destinationCoords[1] };
  const current = { lat: shipment.currentCoords[0], lng: shipment.currentCoords[1] };

  // Calculate directions
  const directionsService = new google.maps.DirectionsService();
  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        const path = result.routes[0].overview_path;
        AppState.routeCoordinates = path.map(p => ({ lat: p.lat(), lng: p.lng() }));

        AppState.routePolyline = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: "#ff6600",
          strokeOpacity: 0.9,
          strokeWeight: 5,
          map: AppState.mapInstance
        });

        // Fit bounds
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(origin);
        bounds.extend(destination);
        bounds.extend(current);
        AppState.mapInstance.fitBounds(bounds);

        // Create Animated Truck Marker
        AppState.truckMarker = new google.maps.Marker({
          position: current,
          map: AppState.mapInstance,
          title: `Suvidha Courier Truck: ${shipment.vehicleNumber}`,
          icon: {
            url: "https://cdn-icons-png.flaticon.com/512/3063/3063823.png",
            scaledSize: new google.maps.Size(42, 42),
            anchor: new google.maps.Point(21, 21)
          }
        });

        startLiveGpsSimulation();
      } else {
        // Fallback to direct geodesic polyline if routing service quota limit
        const directPath = [origin, current, destination];
        AppState.routeCoordinates = directPath;
        AppState.routePolyline = new google.maps.Polyline({
          path: directPath,
          geodesic: true,
          strokeColor: "#ff6600",
          strokeOpacity: 0.8,
          strokeWeight: 4,
          map: AppState.mapInstance
        });
        const bounds = new google.maps.LatLngBounds();
        directPath.forEach(pt => bounds.extend(pt));
        AppState.mapInstance.fitBounds(bounds);
      }
    }
  );
}

function setupGooglePlacesAutocomplete() {
  if (!window.google || !window.google.maps || !window.google.maps.places) return;

  const originInput = document.getElementById('route-origin-input');
  const destInput = document.getElementById('route-dest-input');

  const options = {
    componentRestrictions: { country: "in" },
    fields: ["address_components", "geometry", "name", "formatted_address"]
  };

  if (originInput) {
    const autoOrigin = new google.maps.places.Autocomplete(originInput, options);
    autoOrigin.addListener("place_changed", () => {
      const place = autoOrigin.getPlace();
      console.log("Origin selected:", place.formatted_address);
      SoundFX.play('ping');
    });
  }

  if (destInput) {
    const autoDest = new google.maps.places.Autocomplete(destInput, options);
    autoDest.addListener("place_changed", () => {
      const place = autoDest.getPlace();
      console.log("Destination selected:", place.formatted_address);
      SoundFX.play('ping');
    });
  }
}

// B. LEAFLET + GEOAPIFY HIGH-PERFORMANCE ENGINE (POWERED BY OPENSTREETMAP)
function initLeafletEngine() {
  const mapElement = document.getElementById('map-container');
  if (!mapElement) return;

  // Clear map container
  mapElement.innerHTML = '';

  const defaultIndiaCenter = [21.7679, 78.8718];

  // Initialize Leaflet map
  AppState.mapInstance = L.map('map-container', {
    zoomControl: true,
    attributionControl: true
  }).setView(defaultIndiaCenter, 5);

  // High-Resolution Geoapify Dark Matter Tiles with OpenStreetMap Data
  const geoapifyTileUrl = `https://maps.geoapify.com/v1/tile/dark-matter-dark-grey/{z}/{x}/{y}.png?apiKey=${AppState.geoapifyApiKey}`;
  
  L.tileLayer(geoapifyTileUrl, {
    maxZoom: 20,
    attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(AppState.mapInstance);

  // Render Indian hubs
  renderHubsOnLeafletMap();

  // Render current shipment with Live Geoapify Highway Routing
  renderShipmentOnLeafletMap(AppState.currentShipment);

  updateMapStatusIndicator('geoapify');
  console.log("Geoapify + OpenStreetMap Engine fully active!");
}

async function fetchGeoapifyRoute(origin, destination) {
  try {
    const url = `https://api.geoapify.com/v1/routing?waypoints=${origin[0]},${origin[1]}|${destination[0]},${destination[1]}&mode=drive&apiKey=${AppState.geoapifyApiKey}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.features || !data.features.length) return null;

    const feature = data.features[0];
    const props = feature.properties || {};
    const geom = feature.geometry;

    let points = [];
    if (geom.type === 'MultiLineString') {
      geom.coordinates.forEach(line => {
        line.forEach(pt => points.push([pt[1], pt[0]]));
      });
    } else if (geom.type === 'LineString') {
      points = geom.coordinates.map(pt => [pt[1], pt[0]]);
    }

    return {
      points,
      distanceKm: (props.distance / 1000).toFixed(1),
      timeHours: Math.max(1, Math.round(props.time / 3600)),
      hasToll: !!props.legs?.[0]?.steps?.some(s => s.toll)
    };
  } catch (err) {
    console.warn("Geoapify Routing API fallback to internal geometry:", err);
    return null;
  }
}

async function renderShipmentOnLeafletMap(shipment) {
  if (!AppState.mapInstance || AppState.mapEngine === 'google') return;

  // Clear polyline and truck
  if (AppState.routePolyline) {
    AppState.mapInstance.removeLayer(AppState.routePolyline);
  }
  if (AppState.truckMarker) {
    AppState.mapInstance.removeLayer(AppState.truckMarker);
  }

  const origin = shipment.originCoords;
  const destination = shipment.destinationCoords;
  const current = shipment.currentCoords;

  // Try real-time Geoapify Routing API first
  let highwayWaypoints = null;
  const liveRoute = await fetchGeoapifyRoute(origin, destination);
  if (liveRoute && liveRoute.points.length > 5) {
    highwayWaypoints = liveRoute.points;
    console.log(`Live Geoapify Highway Route Loaded: ${liveRoute.distanceKm} KM across Indian expressways!`);
  } else {
    highwayWaypoints = generateHighwayWaypoints(origin, destination);
  }

  AppState.routeCoordinates = highwayWaypoints;

  // Draw Polyline
  AppState.routePolyline = L.polyline(highwayWaypoints, {
    color: '#ff6600',
    weight: 5,
    opacity: 0.95,
    dashArray: '8, 8',
    lineCap: 'round'
  }).addTo(AppState.mapInstance);

  // Fit bounds
  AppState.mapInstance.fitBounds(AppState.routePolyline.getBounds(), { padding: [50, 50] });

  // Truck Icon
  const truckDiv = L.divIcon({
    className: 'truck-pulse-icon',
    html: `
      <div style="position: relative; width: 44px; height: 44px;">
        <div class="radar-beacon" style="width: 44px; height: 44px; position: absolute; border-radius: 50%;"></div>
        <div style="position: relative; z-index: 2; width: 44px; height: 44px; background: #0f172a; border: 2px solid #ff6600; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(255,102,0,0.5);">
          <i class="fa-solid fa-truck-fast text-orange-500 text-lg"></i>
        </div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  });

  AppState.truckMarker = L.marker(current, { icon: truckDiv }).addTo(AppState.mapInstance);
  AppState.truckMarker.bindPopup(`
    <div style="color: #f8fafc; font-family: Outfit, sans-serif; font-size: 12px;">
      <div style="font-weight: 700; color: #ff6600;">Live Suvidha Fleet: ${shipment.vehicleNumber}</div>
      <div>Driver: ${shipment.driverName} (${shipment.driverPhone})</div>
      <div>Speed: <span class="text-emerald-400 font-bold">${shipment.liveSpeedKmh} km/h</span></div>
      <div>Current: ${shipment.currentLocation}</div>
    </div>
  `);

  startLiveGpsSimulation();
}

// Generate Realistic Highway Waypoints across Indian Topography
function generateHighwayWaypoints(start, end) {
  const points = [];
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    // Linear interpolation
    let lat = start[0] + (end[0] - start[0]) * t;
    let lng = start[1] + (end[1] - start[1]) * t;

    // Add subtle curvature mimicking Indian national highways
    const curve = Math.sin(t * Math.PI) * 0.8;
    lat += curve * 0.2;
    lng += curve * 0.35;

    points.push([lat, lng]);
  }
  return points;
}

// --- 8. LIVE FLEET GPS TRACKING SIMULATOR ---
function startLiveGpsSimulation() {
  if (AppState.simulationInterval) {
    clearInterval(AppState.simulationInterval);
  }

  if (!AppState.isSimulating) return;

  AppState.simulationStep = 10;

  AppState.simulationInterval = setInterval(() => {
    if (!AppState.routeCoordinates || AppState.routeCoordinates.length < 2) return;

    AppState.simulationStep = (AppState.simulationStep + 1) % AppState.routeCoordinates.length;
    const pt = AppState.routeCoordinates[AppState.simulationStep];

    let lat, lng;
    if (Array.isArray(pt)) {
      lat = pt[0];
      lng = pt[1];
    } else {
      lat = pt.lat;
      lng = pt.lng;
    }

    // Dynamic speed jitter (45 km/h to 68 km/h)
    const dynamicSpeed = Math.floor(48 + Math.sin(Date.now() / 3000) * 14);

    // Update truck position
    if (AppState.mapEngine === 'google' && AppState.truckMarker) {
      AppState.truckMarker.setPosition(new google.maps.LatLng(lat, lng));
    } else if (AppState.mapEngine === 'leaflet' && AppState.truckMarker) {
      AppState.truckMarker.setLatLng([lat, lng]);
    }

    // Update Telemetry HUD
    updateTelemetryHud(dynamicSpeed, lat, lng);
  }, 1800);
}

function updateTelemetryHud(speed, lat, lng) {
  const speedEl = document.getElementById('telemetry-speed');
  const latLngEl = document.getElementById('telemetry-coords');
  const tempEl = document.getElementById('telemetry-temp');

  if (speedEl) speedEl.textContent = `${speed} km/h`;
  if (latLngEl) latLngEl.textContent = `${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`;
  if (tempEl) {
    const temp = (21.2 + (speed % 5) * 0.1).toFixed(1);
    tempEl.textContent = `${temp} °C`;
  }
}

// --- 9. TRACKING CONSIGNMENT ENGINE ---
function trackShipment(awbNumber) {
  const cleanAwb = (awbNumber || '').trim().toUpperCase();
  const shipment = AppState.activeShipmentList[cleanAwb];

  if (!shipment) {
    showNotification("Consignment Not Found", `AWB "${cleanAwb}" not in live database. Try one of the quick demo AWBs.`, "amber");
    return;
  }

  AppState.currentShipment = shipment;
  SoundFX.play('success');

  // Update UI Details
  renderShipmentDetails(shipment);

  // Update Map
  if (AppState.mapEngine === 'google') {
    renderShipmentOnGoogleMap(shipment);
  } else {
    renderShipmentOnLeafletMap(shipment);
  }

  // Scroll to tracker
  const trackingView = document.getElementById('tracking-result-panel');
  if (trackingView) {
    trackingView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderShipmentDetails(s) {
  document.getElementById('display-awb').textContent = s.awb;
  document.getElementById('display-service').textContent = s.service;
  document.getElementById('display-sender').textContent = `${s.senderName} (${s.senderCity} - ${s.senderPin})`;
  document.getElementById('display-receiver').textContent = `${s.receiverName} (${s.receiverCity} - ${s.receiverPin})`;
  document.getElementById('display-weight').textContent = `${s.weightKg} kg`;
  document.getElementById('display-category').textContent = s.category;
  document.getElementById('display-eta').textContent = s.estimatedDelivery;
  document.getElementById('display-current-loc').textContent = s.currentLocation;
  document.getElementById('display-vehicle').textContent = s.vehicleNumber;
  document.getElementById('display-driver').textContent = `${s.driverName} (${s.driverPhone})`;

  // Status Badge
  const statusBadge = document.getElementById('display-status-badge');
  statusBadge.textContent = s.statusText;
  statusBadge.className = `px-3 py-1 rounded-full text-xs font-semibold ${
    s.status === 'DELIVERED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
    s.status === 'OUT_FOR_DELIVERY' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
    'bg-amber-500/20 text-amber-400 border border-amber-500/30'
  }`;

  // Render Milestones Timeline
  const timelineContainer = document.getElementById('milestone-timeline-container');
  if (timelineContainer && s.timeline) {
    timelineContainer.innerHTML = s.timeline.map((item, idx) => `
      <div class="relative flex items-start gap-4 pb-6 ${idx === s.timeline.length - 1 ? '' : 'border-l-2 border-slate-700 ml-4 pl-6'}">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
          item.active ? 'bg-orange-500 ring-4 ring-orange-500/30 animate-pulse' :
          item.completed ? 'bg-emerald-500' : 'bg-slate-700'
        } flex items-center justify-center">
          ${item.completed ? '<i class="fa-solid fa-check text-[9px] text-white"></i>' : ''}
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h5 class="text-sm font-bold ${item.active ? 'text-orange-400' : 'text-slate-200'}">${item.title}</h5>
            <span class="text-xs text-slate-400 font-mono">${item.time}</span>
          </div>
          <p class="text-xs text-slate-300 mt-1 font-medium"><i class="fa-solid fa-location-dot text-orange-500 mr-1.5"></i>${item.location}</p>
          <p class="text-xs text-slate-400 mt-0.5">${item.detail}</p>
        </div>
      </div>
    `).join('');
  }
}

// --- 10. SHIPPING RATE CALCULATOR ---
function calculateShippingRate() {
  const originPin = document.getElementById('calc-origin-pin').value.trim();
  const destPin = document.getElementById('calc-dest-pin').value.trim();
  const weight = parseFloat(document.getElementById('calc-weight').value) || 1.0;
  const length = parseFloat(document.getElementById('calc-length').value) || 20;
  const width = parseFloat(document.getElementById('calc-width').value) || 15;
  const height = parseFloat(document.getElementById('calc-height').value) || 10;
  const isCod = document.getElementById('calc-is-cod').checked;

  if (originPin.length < 2 || destPin.length < 2) {
    showNotification("Incomplete PIN Code", "Please enter valid 6-digit origin and destination Indian PIN codes.", "amber");
    return;
  }

  // Volumetric Weight (L x W x H in cm / 5000)
  const volWeight = parseFloat(((length * width * height) / 5000).toFixed(2));
  const billableWeight = Math.max(weight, volWeight);

  // Approximate distance calculation from pin codes
  const isSameCity = originPin.substring(0, 2) === destPin.substring(0, 2);
  const baseRatePerKg = isSameCity ? 55 : 110;

  // Base charges
  const freightBase = Math.round(billableWeight * baseRatePerKg);
  const fuelSurcharge = Math.round(freightBase * 0.08); // 8% fuel
  const codFee = isCod ? 45 : 0;
  const handlingFee = 30;

  const subTotal = freightBase + fuelSurcharge + codFee + handlingFee;
  const gstAmount = Math.round(subTotal * 0.18); // 18% GST (CGST 9% + SGST 9%)
  const grandTotal = subTotal + gstAmount;

  // Render Quote
  document.getElementById('calc-billable-weight').textContent = `${billableWeight.toFixed(2)} kg (Actual: ${weight}kg, Vol: ${volWeight}kg)`;
  document.getElementById('calc-base-freight').textContent = `₹${freightBase}`;
  document.getElementById('calc-fuel-surcharge').textContent = `₹${fuelSurcharge}`;
  document.getElementById('calc-gst').textContent = `₹${gstAmount} (18%)`;
  document.getElementById('calc-grand-total').textContent = `₹${grandTotal}`;

  // Transit TAT
  const tatDays = isSameCity ? "Same Day / Next Morning" : "2 - 3 Business Days";
  document.getElementById('calc-tat-estimate').textContent = tatDays;

  document.getElementById('rate-result-card').classList.remove('hidden');
  SoundFX.play('ping');
}

// --- 11. SHIPMENT BOOKING & AWB GENERATION ---
function handleConsignmentBooking(event) {
  event.preventDefault();

  const senderName = document.getElementById('book-sender-name').value.trim();
  const senderPhone = document.getElementById('book-sender-phone').value.trim();
  const senderCity = document.getElementById('book-sender-city').value.trim();
  const senderPin = document.getElementById('book-sender-pin').value.trim();
  const senderAddress = document.getElementById('book-sender-address').value.trim();

  const receiverName = document.getElementById('book-receiver-name').value.trim();
  const receiverPhone = document.getElementById('book-receiver-phone').value.trim();
  const receiverCity = document.getElementById('book-receiver-city').value.trim();
  const receiverPin = document.getElementById('book-receiver-pin').value.trim();
  const receiverAddress = document.getElementById('book-receiver-address').value.trim();

  const category = document.getElementById('book-category').value;
  const service = document.getElementById('book-service').value;
  const weight = parseFloat(document.getElementById('book-weight').value) || 1.5;
  const paymentMode = document.getElementById('book-payment-mode').value;

  // Generate Unique Consignment AWB
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const cityCode = senderCity.substring(0, 3).toUpperCase() || "DEL";
  const destCode = receiverCity.substring(0, 3).toUpperCase() || "MUM";
  const newAwb = `SE-${cityCode}-${destCode}-${randomSuffix}`;

  // Approximate Coordinates based on city or default
  const originCoord = getCoordsForCity(senderCity) || [28.6139, 77.2090];
  const destCoord = getCoordsForCity(receiverCity) || [19.0760, 72.8777];

  const newShipment = {
    awb: newAwb,
    senderName,
    senderCity,
    senderPin,
    senderAddress,
    receiverName,
    receiverCity,
    receiverPin,
    receiverAddress,
    service,
    category,
    weightKg: weight,
    paymentMode,
    valueRs: 2500,
    status: "PICKED_UP",
    statusText: "Booking Confirmed - Pickup Scheduled with Local Suvidha Executive",
    statusBadgeColor: "emerald",
    estimatedDelivery: "2 Business Days",
    currentLocation: `${senderCity} Regional Drop Center`,
    vehicleNumber: "DL-01-SE-5520",
    driverName: "Pradeep Verma",
    driverPhone: "+91 98112 00981",
    liveSpeedKmh: 40,
    currentCoords: originCoord,
    originCoords: originCoord,
    destinationCoords: destCoord,
    timeline: [
      {
        title: "Consignment Successfully Booked Online",
        location: `${senderCity} (PIN: ${senderPin})`,
        time: "Just Now",
        completed: true,
        active: true,
        detail: `Pickup executive assigned. Doorstep collection scheduled within 2 hours.`
      },
      {
        title: "Inward Transit to Sorting Hub",
        location: "Nearest Suvidha Logistics Super Hub",
        time: "Scheduled Today Evening",
        completed: false,
        detail: "Airway Bill barcode tag generated and allocated."
      }
    ]
  };

  // Add to active shipments list
  AppState.activeShipmentList[newAwb] = newShipment;
  AppState.currentShipment = newShipment;

  // Trigger celebration and sound
  SoundFX.play('success');
  if (window.confetti) {
    window.confetti({ particleCount: 75, spread: 60, origin: { y: 0.7 } });
  }

  // Open Printable Waybill Modal
  openAwbModal(newShipment);

  // Switch to track tab after modal
  renderShipmentDetails(newShipment);
  if (AppState.mapEngine === 'google') {
    renderShipmentOnGoogleMap(newShipment);
  } else {
    renderShipmentOnLeafletMap(newShipment);
  }

  showNotification("Consignment Booked Successfully!", `AWB ${newAwb} generated. Printable Waybill is ready.`, "emerald");
}

function getCoordsForCity(city) {
  const c = (city || '').toLowerCase();
  if (c.includes('delhi')) return [28.6139, 77.2090];
  if (c.includes('mumbai')) return [19.0760, 72.8777];
  if (c.includes('bangalore') || c.includes('bengaluru')) return [12.9716, 77.5946];
  if (c.includes('kolkata')) return [22.5726, 88.3639];
  if (c.includes('chennai')) return [13.0827, 80.2707];
  if (c.includes('hyderabad')) return [17.3850, 78.4867];
  if (c.includes('pune')) return [18.5204, 73.8567];
  if (c.includes('ahmedabad')) return [23.0225, 72.5714];
  if (c.includes('jaipur')) return [26.9124, 75.7873];
  if (c.includes('lucknow')) return [26.8467, 80.9462];
  if (c.includes('patna')) return [25.5941, 85.1376];
  if (c.includes('guwahati')) return [26.1445, 91.7362];
  return null;
}

// --- 12. PRINTABLE WAYBILL (AWB) MODAL ---
function openAwbModal(shipment) {
  const modal = document.getElementById('printable-awb-modal');
  if (!modal) return;

  document.getElementById('awb-modal-number').textContent = shipment.awb;
  document.getElementById('awb-modal-service').textContent = shipment.service;
  document.getElementById('awb-modal-date').textContent = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  });

  document.getElementById('awb-modal-sender-name').textContent = shipment.senderName;
  document.getElementById('awb-modal-sender-phone').textContent = shipment.senderPhone || "+91 98765 43210";
  document.getElementById('awb-modal-sender-addr').textContent = shipment.senderAddress || shipment.senderCity;
  document.getElementById('awb-modal-sender-pin').textContent = shipment.senderPin;

  document.getElementById('awb-modal-recv-name').textContent = shipment.receiverName;
  document.getElementById('awb-modal-recv-phone').textContent = shipment.receiverPhone || "+91 98201 12345";
  document.getElementById('awb-modal-recv-addr').textContent = shipment.receiverAddress || shipment.receiverCity;
  document.getElementById('awb-modal-recv-pin').textContent = shipment.receiverPin;

  document.getElementById('awb-modal-weight').textContent = `${shipment.weightKg} KG`;
  document.getElementById('awb-modal-category').textContent = shipment.category;
  document.getElementById('awb-modal-payment').textContent = shipment.paymentMode || "PRE-PAID";

  // Generate Barcode using JsBarcode if available
  if (window.JsBarcode) {
    try {
      JsBarcode("#awb-barcode-svg", shipment.awb, {
        format: "CODE128",
        lineColor: "#0f172a",
        width: 2,
        height: 50,
        displayValue: true,
        fontSize: 14
      });
    } catch (e) {
      console.warn("Barcode rendering error:", e);
    }
  }

  // Generate QR Code if QRCode library available
  const qrContainer = document.getElementById('awb-qrcode-canvas');
  if (qrContainer && window.QRCode) {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: `SUVIDHA-EXPRESS|AWB:${shipment.awb}|DEST:${shipment.receiverPin}`,
      width: 80,
      height: 80,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });
  }

  modal.classList.remove('hidden');
}

function closeAwbModal() {
  const modal = document.getElementById('printable-awb-modal');
  if (modal) modal.classList.add('hidden');
}

// --- 13. PINCODE SERVICEABILITY CHECKER ---
function checkPinCodeServiceability() {
  const pinInput = document.getElementById('pincode-input').value.trim();
  const resultContainer = document.getElementById('pincode-result-card');

  if (pinInput.length !== 6 || isNaN(pinInput)) {
    showNotification("Invalid PIN Code", "Please enter a standard 6-digit Indian Postal PIN Code (e.g. 110001, 400001, 560001).", "amber");
    return;
  }

  const prefix = pinInput.substring(0, 2);
  const data = PINCODE_MAP[prefix] || {
    state: "India (Regional Postal Zone)",
    region: "All-India Coverage",
    hub: "HUB-DEL",
    expressTat: "2-3 Days",
    surfaceTat: "4-5 Days"
  };

  const matchedHub = INDIA_HUBS.find(h => h.id === data.hub) || INDIA_HUBS[0];

  document.getElementById('pin-display-state').textContent = `${data.state} (${data.region} Zone)`;
  document.getElementById('pin-display-status').textContent = "100% Serviceable (Direct Delivery)";
  document.getElementById('pin-display-express-tat').textContent = data.expressTat;
  document.getElementById('pin-display-surface-tat').textContent = data.surfaceTat;
  document.getElementById('pin-display-hub').textContent = `${matchedHub.name} (${matchedHub.city})`;
  document.getElementById('pin-display-cod').textContent = "Available (Up to ₹50,000)";

  resultContainer.classList.remove('hidden');
  SoundFX.play('success');
}

// Geoapify Geocoding for Indian Places
async function geocodeWithGeoapify(query) {
  try {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(query)}&filter=countrycode:in&apiKey=${AppState.geoapifyApiKey}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const f = data.features[0];
      return [f.properties.lat, f.properties.lon];
    }
  } catch (e) {
    console.warn("Geoapify Geocoding fallback:", e);
  }
  return null;
}

// --- 14. ROUTE PLANNER & HIGHWAY CORRIDOR EXPLORER ---
async function planCustomHighwayRoute() {
  const originStr = document.getElementById('route-origin-input').value.trim();
  const destStr = document.getElementById('route-dest-input').value.trim();

  if (!originStr || !destStr) {
    showNotification("Locations Required", "Please enter both Origin and Destination cities or addresses in India.", "amber");
    return;
  }

  showNotification("Calculating Route...", `Querying Geoapify Highway Network for ${originStr} ➔ ${destStr}`, "emerald");

  // Geocode origin & destination (checks local lookup first, then live Geoapify API)
  let originCoords = getCoordsForCity(originStr);
  if (!originCoords) {
    originCoords = await geocodeWithGeoapify(originStr) || [28.6139, 77.2090];
  }

  let destCoords = getCoordsForCity(destStr);
  if (!destCoords) {
    destCoords = await geocodeWithGeoapify(destStr) || [19.0760, 72.8777];
  }

  // Fetch real highway route from Geoapify Routing API
  const liveRoute = await fetchGeoapifyRoute(originCoords, destCoords);

  const approxDistanceKm = liveRoute ? liveRoute.distanceKm : Math.round(calculateHaversineDistance(originCoords[0], originCoords[1], destCoords[0], destCoords[1]));
  const estHours = liveRoute ? liveRoute.timeHours : Math.round(approxDistanceKm / 55);

  const customRouteShipment = {
    awb: `ROUTE-${Date.now().toString().slice(-6)}`,
    senderName: "Suvidha Transit Dispatch",
    senderCity: originStr,
    senderPin: "110001",
    receiverName: "Regional Receiving Facility",
    receiverCity: destStr,
    receiverPin: "400001",
    service: "Suvidha Freight Express",
    category: "Highway Line-Haul",
    weightKg: 10.0,
    status: "IN_TRANSIT",
    statusText: `Route Traced: ${originStr} ➔ ${destStr}`,
    statusBadgeColor: "amber",
    estimatedDelivery: `${estHours} Hours via National Highway Corridor`,
    currentLocation: `En-Route between ${originStr} and ${destStr}`,
    vehicleNumber: "DL-01-EXP-9090",
    driverName: "Dinesh Kumar",
    driverPhone: "+91 99887 76655",
    liveSpeedKmh: 62,
    currentCoords: [(originCoords[0] + destCoords[0]) / 2, (originCoords[1] + destCoords[1]) / 2],
    originCoords: originCoords,
    destinationCoords: destCoords,
    timeline: [
      {
        title: `Dispatch initiated from ${originStr}`,
        location: originStr,
        time: "Just Now",
        completed: true,
        active: true,
        detail: `Live Geoapify OpenStreetMap corridor computed. Distance: ${approxDistanceKm} KM.`
      }
    ]
  };

  AppState.currentShipment = customRouteShipment;
  SoundFX.play('ping');

  if (AppState.mapEngine === 'google') {
    renderShipmentOnGoogleMap(customRouteShipment);
  } else {
    await renderShipmentOnLeafletMap(customRouteShipment);
  }

  // Update Route Metrics
  document.getElementById('route-metric-distance').textContent = `${approxDistanceKm} KM`;
  document.getElementById('route-metric-duration').textContent = `${estHours} Hours (Surface)`;
  document.getElementById('route-metric-toll').textContent = liveRoute && liveRoute.hasToll 
    ? `₹${Math.round(approxDistanceKm * 1.8)} (FASTag)` 
    : `₹${Math.round(approxDistanceKm * 1.5)} Est.`;
  document.getElementById('route-metrics-card').classList.remove('hidden');

  showNotification("Route Calculated!", `${originStr} to ${destStr}: ${approxDistanceKm} KM via Indian Highway Network.`, "emerald");
}

function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in KM
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Quick Route Presets
function setRoutePreset(origin, dest) {
  document.getElementById('route-origin-input').value = origin;
  document.getElementById('route-dest-input').value = dest;
  planCustomHighwayRoute();
}

function selectHubForDispatch(hubId) {
  const hub = INDIA_HUBS.find(h => h.id === hubId);
  if (!hub) return;

  switchTab('book');
  document.getElementById('book-sender-city').value = hub.city.split('/')[0].trim();
  document.getElementById('book-sender-pin').value = hub.pincode;
  document.getElementById('book-sender-address').value = hub.address;

  showNotification("Hub Selected for Booking", `Origin loaded as ${hub.name}. Complete receiver details to generate AWB.`, "emerald");
}

// --- 15. UI HELPERS & NOTIFICATIONS ---
function switchTab(tabId) {
  AppState.currentTab = tabId;

  // Tabs buttons highlight
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('bg-orange-500', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
      btn.classList.remove('text-slate-400', 'hover:bg-slate-800');
    } else {
      btn.classList.remove('bg-orange-500', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
      btn.classList.add('text-slate-400', 'hover:bg-slate-800');
    }
  });

  // Panel toggles
  document.querySelectorAll('.tab-content-panel').forEach(panel => {
    if (panel.id === `tab-panel-${tabId}`) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });

  SoundFX.play('ping');
}

function toggleAudio() {
  AppState.audioMuted = !AppState.audioMuted;
  const btn = document.getElementById('audio-toggle-btn');
  if (btn) {
    btn.innerHTML = AppState.audioMuted
      ? '<i class="fa-solid fa-volume-xmark text-slate-400"></i>'
      : '<i class="fa-solid fa-volume-high text-orange-400"></i>';
  }
}

function toggleLanguage() {
  AppState.language = AppState.language === 'en' ? 'hi' : 'en';
  const btn = document.getElementById('lang-toggle-btn');
  const taglineEl = document.getElementById('header-tagline');

  if (AppState.language === 'hi') {
    if (btn) btn.textContent = 'English';
    if (taglineEl) taglineEl.textContent = '“हम आपकी सुविधा के लिए हर पल”';
  } else {
    if (btn) btn.textContent = 'हिंदी';
    if (taglineEl) taglineEl.textContent = '“हम आपकी सुविधा के लिए हर पल | Hum Aapki Suvidha Ke Liye Har Pal”';
  }
  SoundFX.play('ping');
}

function showNotification(title, message, color = 'emerald') {
  const notif = document.getElementById('global-notification');
  if (!notif) return;

  const titleEl = document.getElementById('notif-title');
  const msgEl = document.getElementById('notif-msg');

  titleEl.textContent = title;
  msgEl.textContent = message;

  notif.className = `fixed bottom-6 right-6 max-w-sm glass-panel p-4 rounded-xl border border-${color}-500/30 z-50 transform transition-all duration-300 shadow-2xl`;
  notif.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');

  setTimeout(() => {
    notif.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
  }, 4500);
}

// API Key Manager Modal
function openApiKeyModal() {
  const modal = document.getElementById('api-key-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeApiKeyModal() {
  const modal = document.getElementById('api-key-modal');
  if (modal) modal.classList.add('hidden');
}

function saveCustomApiKey() {
  const input = document.getElementById('custom-api-key-input').value.trim();
  if (input) {
    AppState.userApiKey = input;
    localStorage.setItem('suvidha_gmaps_key', input);
    showNotification("API Key Updated", "Reloading application with new Google Maps credentials...", "emerald");
    setTimeout(() => window.location.reload(), 1200);
  }
}

// Recenter India View
function recenterIndia() {
  if (AppState.mapEngine === 'google' && AppState.mapInstance) {
    AppState.mapInstance.setCenter({ lat: 21.7679, lng: 78.8718 });
    AppState.mapInstance.setZoom(5);
  } else if (AppState.mapEngine === 'leaflet' && AppState.mapInstance) {
    AppState.mapInstance.setView([21.7679, 78.8718], 5);
  }
  SoundFX.play('ping');
}

// Render Hub Network Cards
function renderHubDirectoryCards() {
  const grid = document.getElementById('hub-network-cards-grid');
  if (!grid) return;

  grid.innerHTML = INDIA_HUBS.map(hub => `
    <div class="glass-card p-4 rounded-xl border border-slate-700/60 hover:border-orange-500/40 transition duration-300 group">
      <div class="flex items-center justify-between mb-2">
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono">${hub.code}</span>
        <span class="text-xs text-slate-400 font-medium">${hub.state}</span>
      </div>
      <h4 class="text-sm font-bold text-slate-100 group-hover:text-orange-400 transition">${hub.name}</h4>
      <p class="text-xs text-slate-400 mt-1 line-clamp-2">${hub.address}</p>
      <div class="mt-3 pt-3 border-t border-slate-800 text-[11px] space-y-1 text-slate-300">
        <div class="flex justify-between">
          <span class="text-slate-400">Daily Capacity:</span>
          <span class="font-semibold text-emerald-400">${hub.capacity}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-400">Hub Manager:</span>
          <span class="font-medium">${hub.manager}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-400">24/7 Helpline:</span>
          <span class="font-mono text-orange-400">${hub.phone}</span>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <button onclick="panToHub(${hub.lat}, ${hub.lng})" class="flex-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-map-location-dot text-orange-500"></i> Map View
        </button>
        <button onclick="selectHubForDispatch('${hub.id}')" class="py-1.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-xs font-semibold text-white transition">
          Book
        </button>
      </div>
    </div>
  `).join('');
}

function panToHub(lat, lng) {
  if (AppState.mapEngine === 'google' && AppState.mapInstance) {
    AppState.mapInstance.panTo({ lat, lng });
    AppState.mapInstance.setZoom(11);
  } else if (AppState.mapEngine === 'leaflet' && AppState.mapInstance) {
    AppState.mapInstance.setView([lat, lng], 11);
  }
  SoundFX.play('ping');

  // Switch to map view tab if needed
  switchTab('route');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Franchise Form Handler
function handleFranchiseEnquiry(event) {
  event.preventDefault();
  SoundFX.play('success');
  if (window.confetti) window.confetti({ particleCount: 50 });
  showNotification("Franchise Application Received!", "Our Business Expansion Team will contact you within 24 working hours.", "emerald");
  event.target.reset();
}

// Initializer on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  renderHubDirectoryCards();
  renderShipmentDetails(AppState.currentShipment);

  // Check saved API Key
  const savedKey = localStorage.getItem('suvidha_gmaps_key');
  if (savedKey) {
    AppState.userApiKey = savedKey;
  }
});

# सुविधा एक्सप्रेस (Suvidha Express) - Bharat Logistics & Courier Web App

> **Tagline**: *“हम आपकी सुविधा के लिए हर पल”* (Hum Aapki Suvidha Ke Liye Har Pal)

---

## 🌟 Overview

**Suvidha Express** is a modern Indian courier & logistics platform designed specifically for nationwide supply-chain operations across India's 28 States and 8 Union Territories. It connects **19,000+ PIN Codes** with multimodal freight transit (Air Express, Surface Highway Line-Haul, Cold Chain, and City Rush).

---

## 🚀 Live Mapping & Routing Engines

### 1. 🟢 Geoapify Live Engine (Powered by OpenStreetMap) — ACTIVE
- **API Key**: `82c32ff36eeb4578a29b9525eac1b7f0`
- **Features Active**:
  - High-Resolution Dark Matter Vector/Raster Tiles covering all of India.
  - Live Highway Routing API: Computes step-by-step turns on Indian Expressways (Delhi-Mumbai NE-4, NH-48, NH-44, NH-19).
  - Accurate Highway Distance (KM), Transit Turnaround Hours, and Toll Plazas.
  - Geocoding for Indian cities, towns, and districts.

### 2. 🟡 Google Maps API (Dual-Engine Mode)
- **API Key**: `AIzaSyBKCGXg4JwHkRITTlUAb9dHlsyF7jOJCc8`
- Can be activated whenever you enable billing or remove key restrictions on Google Cloud Console.

---

## 📦 Core Features

### 1. 🔍 Live GPS Consignment Tracking
- Real-time parcel tracking along Indian National Highways (e.g. NH-48, NH-44, NH-19).
- Live Telemetry HUD:
  - Dynamic Vehicle Speedometer (45 - 68 km/h live fluctuation)
  - GNSS GPS Coordinates (Lat/Lng)
  - Cold Chain Consignment Temperature Monitoring
  - Delivery Driver contact and vehicle registration (e.g. Tata Ultra LPT)
- **Quick Demo AWBs**:
  - `SE-DEL-MUM-8921` : In Transit on Delhi-Mumbai Expressway (NH-48)
  - `SE-BLR-HYD-4412` : Out for Delivery near Banjara Hills, Hyderabad
  - `SE-KOL-PAT-9033` : Delivered with Digital Proof of Delivery (POD)
  - `SE-PNQ-AMD-5120` : Picked up at Pune Chakan Hub

### 2. 🗺️ Live Freight Highway Route Matrix
- Select or type any Indian Origin and Destination.
- Computes actual driving highway distance (KM), estimated transit turnaround hours, and FASTag toll estimates.
- Quick 1-click popular freight corridors:
  - Delhi ➔ Mumbai (1,414 KM via NH-48)
  - Bengaluru ➔ Hyderabad (570 KM via NH-44)
  - Kolkata ➔ Patna (590 KM via NH-19)
  - Pune ➔ Ahmedabad (660 KM Western Corridor)

### 3. 🚀 Instant Online Courier Booking & Digital Waybill (AWB)
- Full sender and receiver form with Indian mobile (+91) and 6-digit PIN validation.
- Select from: *Air Express*, *Surface Gold*, *Suvidha Samay (Same-Day)*, *Pharma Cold Chain*.
- Calculates volumetric weight: `(Length x Width x Height) / 5000`.
- Instant generation of unique Consignment Note (`SE-DEL-MUM-XXXX`).
- **Printable GST Waybill / Consignment Note Modal**:
  - Automatically renders scannable Barcode (`JsBarcode`)
  - Generates QR Code (`QRCode.js`)
  - Ready for physical label printing (`window.print()`).

### 4. 🧮 Indian Shipping Rate & GST Calculator
- Itemized billing breakdown:
  - Base Freight
  - Fuel Surcharge (8%)
  - Handling & Doorstep Pickup
  - 18% GST (CGST 9% + SGST 9%)
  - COD Collection Fee

### 5. 📍 All-India PIN Code Serviceability Checker
- Database mapping Indian PIN code circles (11xxxx Delhi, 40xxxx Mumbai, 56xxxx Bengaluru, 70xxxx Kolkata, etc.).
- Displays direct delivery status, COD limit up to ₹50,000, and nearest sorting super hub.

### 6. 🏢 Nationwide Mega Hub Directory
- 14+ Strategic Logistics Hubs:
  - Delhi NCR Mega Hub (DEL-01, IGI Cargo)
  - Mumbai Western Gateway (BOM-01, Bhiwandi)
  - Bengaluru South Hub (BLR-01, Devanahalli)
  - Kolkata Eastern Gateway (CCU-01, Dankuni)
  - Chennai Coastal Hub (MAA-01, Sriperumbudur)
  - Hyderabad Central Deccan (HYD-01, Shamshabad)
  - Ahmedabad Vibrant Hub (AMD-01, Sanand)
  - Pune Automobile Hub (PNQ-01, Chakan)
  - Nagpur Zero-Mile Hub (NAG-01, MIHAN)
  - Guwahati North-East Gateway (GAU-01, Amingaon)
  - Patna, Jaipur, Lucknow, Kochi, etc.
- Clicking any hub smoothly flies the map camera directly to that hub's coordinates.

---

## 💻 How to Run the Application

1. **Option A (Instant Click)**:
   - Double click `Launch_Suvidha_Express.bat` in `Downloads`.
   
2. **Option B (Direct Browser)**:
   - Double click `c:\Users\Administrator\Downloads\suvidha-express\index.html` in Microsoft Edge, Google Chrome, or any browser.

---

## 🔑 Google Cloud Billing Note

Your provided API Key `AIzaSyDnREpvYiNUxSGMWu2TBw_772_O9jLuMUo` is embedded and active.
- To use unlimited Google Maps live vector tiles without watermark, ensure **Billing is enabled** on your Google Cloud Console project: [https://console.cloud.google.com/billing](https://console.cloud.google.com/billing).
- If billing is not enabled yet, the app automatically runs on our built-in **Dual-Engine Leaflet & OpenStreetMap Fallback**, so the entire application is 100% functional immediately!

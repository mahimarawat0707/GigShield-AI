# GigShield-AI

AI-Powered Parametric Insurance Platform for Gig Delivery Workers 

---

## Problem Statement

Gig delivery workers depend on daily deliveries for their income.  
However, external disruptions like **heavy rain, extreme heat, and air pollution** can suddenly stop deliveries.

This leads to:
- Loss of daily/weekly income  
- No financial backup  
- No insurance designed for gig workers  

---

## Our Solution

**GigShield-AI** is an AI-powered parametric insurance platform that protects gig workers from income loss.

- Workers choose a **weekly protection plan**
- System monitors **weather & pollution data**
- When disruption occurs → **automatic payout triggered**

No manual claim required

---

## Target Users

- Swiggy / Zomato delivery partners  
- Amazon / Flipkart delivery agents  
- Gig workers dependent on daily earnings  

---

## How It Works

1. Worker registers on platform  
2. Enters work details (city, platform, income)  
3. AI calculates risk and premium  
4. System monitors real-time data (weather/AQI)  
5. Disruption detected (e.g., heavy rain)  
6. Claim automatically triggered  
7. Instant payout processed  

---

## AI Features

- Risk prediction using historical data  
- Smart premium calculation  
- Disruption detection  
- Fraud detection system  

---

## Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB  

**AI/ML:**  
- Python  
- Scikit-learn  

**APIs:**  
- Weather API  
- Air Quality Index (AQI) API  

**Payments:**  
- Razorpay (Test Mode)  

---

## Application Screens

- Login / Signup  
- Worker Onboarding  
- Insurance Plan Selection  
- Dashboard  
- Disruption Alert  
- Payout Confirmation  

---

## System Architecture

User → Frontend → Backend → AI Engine → APIs → Payout System

---

## Team Members

 **Mahima** – Project Manager  
 **Daksh** – Frontend Developer  
 **Prachi** – Backend Developer  
 **Ananya** – AI/ML Developer  
 **Gautam** – Research & Data Integration  

---

##  Future Scope

- Real payment integration  
- Mobile app version  
- More accurate AI predictions  
- Expansion to other gig sectors  

---

##  Impact

GigShield-AI creates a **financial safety net** for gig workers and ensures they are protected from unexpected income loss.

---

##  Adversarial Defense & Anti-Spoofing Strategy

### 1. Differentiation

Our system does not rely only on GPS location.

We use multi-factor verification to differentiate between genuine users and fraudulent actors:

- Real-time movement tracking (delivery routes vs static location)
- App activity monitoring (order pickups, navigation usage)
- Environmental consistency (weather data vs user behavior)
- Device sensor data (motion, speed patterns)

For example:
A genuine worker will show movement patterns and delivery activity, while a spoofing user will appear static or inconsistent.

### 2. Data Points Used for Fraud Detection

To detect fraud, our system analyzes multiple data signals:

- GPS + movement trajectory
- Delivery platform activity (orders completed or not)
- Device motion sensors (accelerometer, speed)
- Network consistency (sudden location jumps)
- Historical behavior patterns
- Weather API correlation with location

This multi-layer data analysis helps detect coordinated fraud attempts.

### 3. UX Balance (Fairness for Genuine Users)

We ensure that genuine users are not unfairly penalized:

- Suspicious claims are marked as "Under Review" instead of rejected
- Users are allowed to manually verify their activity
- Grace thresholds are applied for network issues during bad weather
- Only repeated suspicious patterns lead to claim blocking

This ensures a balance between fraud prevention and user trust.

---

##  Demo

[video link](https://youtu.be/DUQ6oQWgZ7k?si=hNPdR-ljoNbJbhKP)

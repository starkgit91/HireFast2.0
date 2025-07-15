
# hirefast
=======

# 🚀 HireFast – AI-Driven Hiring Platform

HireFast is a fullstack hiring application designed to help companies **shortlist the best 5 candidates** from messy form submissions using smart scoring and diverse hiring metrics.

---

## 📁 Project Directory Structure

```
hirefast-app/
├── hirefast-client/         # 🔵 Frontend (React + Vite)
│   ├── public/
│   │   └── index.html        # Entry HTML shell
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.jsx       # Animated entry page
│   │   │   ├── HirePage.jsx          # Candidate dashboard
│   │   │   ├── SummaryPage.jsx       # Final selection summary
│   │   │   ├── CandidateCard.jsx     # UI for each candidate
│   │   │   └── ShortlistView.jsx     # Sidebar shortlist panel
│   │   ├── App.jsx                   # Routes via React Router
│   │   └── main.jsx                  # React entry point
│   ├── vite.config.js                # Vite server config
│   └── package.json
│
├── hirefast-server/         # 🔴 Backend (Node.js + Express + MongoDB)
│   ├── models/
│   │   └── Candidate.js             # Mongoose schema
│   ├── routes/
│   │   └── candidates.js            # API routes
│   ├── controllers/
│   │   └── candidateController.js   # Logic to get/post candidates
│   ├── utils/
│   │   └── score.js                 # Candidate scoring function
│   ├── seed/
│   │   └── loadCandidates.js        # Seeder script for DB
│   ├── .env                         # Mongo URI here
│   ├── server.js                    # Express entry point
│   └── package.json
```

---

## ⚙️ Technologies Used

| Layer       | Stack                                |
|-------------|---------------------------------------|
| Frontend    | React (Vite), React Router DOM, CSS   |
| Backend     | Node.js, Express, Mongoose, dotenv    |
| Database    | MongoDB (Atlas or local)              |
| Deployment  | Vercel (frontend), Render (backend)   |

---

## 💻 Local Setup Instructions

### ✅ 1. Clone and Navigate

```bash
git clone https://github.com/<your-username>/hirefast-app.git
cd hirefast-app
```

### 🔴 2. Setup Backend (Express + MongoDB)

```bash
cd hirefast-server
npm install
```

Create `.env` file:

```
MONGO_URI=mongodb+srv://<username>:<password>@clusterX.mongodb.net/hirefast
```

Seed data:

```bash
node seed/loadCandidates.js
```
```
Database seeded successfully
```
Start server:

```bash
npm start
```

Running at `http://localhost:5000`

### 🔵 3. Setup Frontend (React + Vite)

```bash
cd ../hirefast-client
npm install
npm run dev
```

Opens at `http://localhost:3000`

---

## 🌐 Frontend Routes

| Route       | Description                            |
|-------------|----------------------------------------|
| `/`         | Landing Page with CTA + Features       |
| `/app`      | Candidate dashboard, shortlist panel   |
| `/summary`  | View of top 5 selected candidates       |

---

## ✨ Features

- ✅ Upload JSON form submissions (seed script)
- ⚖️ Smart scoring based on:
  - Skills
  - Education quality
  - Salary expectation
  - Diversity factor (location, experience)
- 📃 Summary view of final 5 hires
- 🌍 Responsive animated UI
- 🧠 Everything works offline from local or hosted

---

## ☁️ Deployment

### 🟦 Frontend → Vercel

1. Go to https://vercel.com
2. Import GitHub repo
3. Set root as: `hirefast-client`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy ✅

### 🟥 Backend → Render

1. Go to https://render.com
2. New → Web Service
3. Connect GitHub
4. Root directory: `hirefast-server`
5. Build command: `npm install`
6. Start command: `node server.js`
7. Add `.env` var `MONGO_URI`
8. Deploy ✅

---

## 🧪 Example `.env`

```
MONGO_URI=mongodb+srv://<username>:<passkey>@clusterX.mongodb.net/hirefast
```

---

## 🧠 How Candidates are Scored

Found in: `hirefast-server/utils/score.js`

```js
if (skills.length > 5) score += 20;
if (from top50 school) score += 15;
if (salary < 80k) score += 20;
if (diverse country) score += 15;
```

Modify this logic to customize rankings.

---

## 🙋 FAQ

### Q: Why doesn't "Get Started" scroll work in index.html?
Because the entire app is React. Index.html is just a shell. Use React Router for routing.

### Q: Where do I customize candidates?
Edit `form-submissions.json` and rerun the seed script.

### Q: Can I export the shortlist?
Yes — just console.log or export the `shortlist` array from `/summary`.

---

## 👨‍💻 Author

**Prashant Mishra**  
NIT Andhra | Competitive Programmer | AI Engineer  
🔗 GitHub: https://github.com/starkgit91  
🔗 LinkedIn: https://www.linkedin.com/in/prashant-mishra-976708157/  
📬 Email: prashant66m@gmail.com

---

© 2025 — Built for assignment @ Mercor. Licensed for demo use.
>>>>>>> 9df7aff (hire fast application on render)

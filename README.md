Simple Chatbot (Node.js + Express + Groq)

Project ini adalah chatbot sederhana yang dibangun menggunakan Node.js, Express, dan EJS sebagai templating engine.  
Model AI yang digunakan adalah GroqCompound, karena ringan, cepat, dan tersedia gratis untuk pengembangan.

---------------------------
Cara Installasi

1. Install Dependency
  ```
  npm install
  
  ```
2. Bikin file .env di root project yang isinya:
  ```
  GROQ_API_KEY=(api key yang nanti dari console.groq.com)

  ```
3. Kunjungi https://console.groq.com
  -Buat akun baru bisa menggunakan gmail
  -Masuk ke bagian API Keys
  -Klik "Create API Key"
  -Nama bebas
  -Copy API key nya dan masukan ke file .env

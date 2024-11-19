// Toggle Navbar
let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () => {
    Navbar.classList.toggle("active")
};

// Swiper untuk home-slide
var swiper = new Swiper(".home-slid", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper untuk team-slider
var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        "0": {
            slidesPerView: 1,
            autoplay: {
                delay: 700,
                disableOnInteraction: false,
            },
        },
        "768": {
            slidesPerView: 2,
        },
        "1020": {
            slidesPerView: 3,
        },
    },
});

// Event Listener untuk Tombol "get start"
document.getElementById("startBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    //alert("Selamat datang di informasi Sejarah Pelabuhan Nizam Zachman!");

    // Jika ingin mengarahkan ke halaman lain, gunakan kode berikut:
    window.location.href = "sejarah.html";
});

// Dashboard Data (Contoh Bar Chart)

document.addEventListener('DOMContentLoaded', function () {
    // Data untuk setiap tahun
    const data2019 = {
        labels: ['Selar', 'Tenggiri', 'Bawal', 'Bilis', 'Cakalang', 'Gabus', 'Kembung', 'Kerapuh', 'Lemuru', 'Kue', 'Julung-julung', 'Kakap', 'Tongkol', 'Tuna','Cumi'],
        datasets: [{
            label: 'Volume Produksi (Ton) - 2019',
            data: [16287, 15333, 20369, 14678, 19208, 12415, 18592, 11404, 12332, 15432, 15043, 17480, 20873, 19765,19654],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx2019 = document.getElementById('fisheriesChart2019').getContext('2d');
    createChart(ctx2019, data2019, 2019);

    const data2020 = {
        labels: ['Selar', 'Tenggiri', 'Bawal', 'Bilis', 'Cakalang', 'Gabus', 'Kembung', 'Kerapuh', 'Lemuru', 'Kue', 'Julung-julung', 'Kakap', 'Tongkol', 'Tuna','Cumi'],
        datasets: [{
            label: 'Volume Produksi (Ton) - 2020',
            data: [11040, 12320, 21031, 14012, 18141, 12160, 17989, 16301, 11270, 10710, 13470, 14500, 17341, 18060, 19073,],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const ctx2020 = document.getElementById('fisheriesChart2020').getContext('2d');
    createChart(ctx2020, data2020, 2020);

    const data2021 = {
        labels: ['Selar', 'Tenggiri', 'Bawal', 'Bilis', 'Cakalang', 'Gabus', 'Kembung', 'Kerapuh', 'Lemuru', 'Kue', 'Julung-julung', 'Kakap', 'Tongkol', 'Tuna','Cumi'],
        datasets: [{
            label: 'Volume Produksi (Ton) - 2021',
            data: [16312, 12710, 12094, 14610, 18437, 12978, 17030, 13041, 12014, 15314, 15340, 14570, 17549, 19601, 16732, 17895],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const ctx2021 = document.getElementById('fisheriesChart2021').getContext('2d');
    createChart(ctx2021, data2021, 2021);

    const data2022 = {
        labels: ['Selar', 'Tenggiri', 'Bawal', 'Bilis', 'Cakalang', 'Gabus', 'Kembung', 'Kerapuh', 'Lemuru', 'Kue', 'Julung-julung', 'Kakap', 'Tongkol', 'Tuna','Cumi'],
        datasets: [{
            label: 'Volume Produksi (Ton) - 2022',
            data: [18653, 12018, 14758, 14430, 18320, 12174, 17016, 13371, 12411, 11290, 17650, 15806, 18170, 15192, 18810],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    };

    const ctx2022 = document.getElementById('fisheriesChart2022').getContext('2d');
    createChart(ctx2022, data2022, 2022);

});
const additionalInfo = {
    'Selar': {
        2019: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0100_0200' },
        2020: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0100_0200' },
        2021: { alatTangkap: 'Pancing Ulur', jenisKapal: 'KM_0100_0200' },
        2022: { alatTangkap: 'Rawai Tuna', jenisKapal: 'KM_0100_0200' }
    },
    'Tenggiri': {
        2019: { alatTangkap: 'Jaring Insang', jenisKapal: 'KM_0050_0100' },
        2020: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0050_0100' },
        2021: { alatTangkap: 'Pancing Cumi', jenisKapal: 'KM_0050_0100' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0050_0100' }
    },
    'Bawal': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    'Bilis': {
        2019: { alatTangkap: 'Bouke Amit', jenisKapal: 'KM_0100_0200' },
        2020: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0100_0200' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0100_0200' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0100_0200' }
    },
    'Cakalang': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    'Gabus': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    'Kembung': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0100_0200' },
        2020: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0100_0200' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0100_0200' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0100_0200' }
    },
    'Kerapuh': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    'Lemuru': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    'Kue': {
        2019: { alatTangkap: 'Pancing Ulur', jenisKapal: 'KM_0100_0200' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0100_0200' },
        2021: { alatTangkap: 'Pancing Ulur', jenisKapal: 'KM_0100_0200' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0100_0200' }
    },
    'Julung-julung': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    'Kakap': {
        2019: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0020_0030' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0020_0030' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0020_0030' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0020_0030' }
    },
    'Tongkol': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0020_0030' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0020_0030' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0020_0030' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0020_0030' }
    },
    'Tuna': {
        2019: { alatTangkap: 'Bouke Ami', jenisKapal: 'KM_0100_0200' },
        2020: { alatTangkap: 'Rawai Tuna', jenisKapal: 'KM_0100_0200' },
        2021: { alatTangkap: 'Rawai Tuna', jenisKapal: 'KM_0100_0200' },
        2022: { alatTangkap: 'Rawai Tuna', jenisKapal: 'KM_0100_0200' }
    },
    'Cumi': {
        2019: { alatTangkap: 'Gill Net', jenisKapal: 'KM_0030_0050' },
        2020: { alatTangkap: 'Rawai Dasar', jenisKapal: 'KM_0030_0050' },
        2021: { alatTangkap: 'Jaring Liong Bun', jenisKapal: 'KM_0030_0050' },
        2022: { alatTangkap: 'Pukat Cincin', jenisKapal: 'KM_0030_0050' }
    },
    // Tambahkan data lainnya
};
function createChart(ctx, data, year) {
    return new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.dataset.label || '';
                            const value = context.raw; // Nilai data
                            const category = context.label; // Nama kategori ikan
                            const info = additionalInfo[category] ? additionalInfo[category][year] : null;

                            if (info) {
                                return [
                                    `${label}: ${value} Ton`,
                                    `Alat Tangkap: ${info.alatTangkap}`,
                                    `Jenis Kapal: ${info.jenisKapal}`
                                ];
                            } else {
                                return `${label}: ${value} Ton`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
document.getElementById("read1").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    alert("Awal tahun ini, Pelabuhan Nizam Zachman melaporkan peningkatan volume tangkapan ikan. Peningkatan ini dikaitkan dengan musim ikan yang baik serta cuaca yang mendukung aktivitas penangkapan di perairan sekitar.")

});
document.getElementById("read2").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    alert("Pemerintah merencanakan revitalisasi infrastruktur di Pelabuhan Nizam Zachman, yang mencakup perbaikan dermaga, fasilitas docking, dan penambahan cold storage. Revitalisasi ini diharapkan dapat meningkatkan kapasitas pelabuhan dalam menampung hasil tangkapan nelayan.")

});
document.getElementById("read3").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    alert("KKP meluncurkan kampanye Gerakan Laut Bersih di Pelabuhan Nizam Zachman untuk mengurangi sampah laut. Kampanye ini melibatkan nelayan, pengelola pelabuhan, dan masyarakat sekitar dalam menjaga kebersihan lingkungan pelabuhan.")

});
document.getElementById("read4").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    alert("Pelabuhan Nizam Zachman Jakarta telah melakukan peningkatan fasilitas penyimpanan dan logistik guna mendukung ekspor hasil laut ke berbagai negara. Penambahan fasilitas cold storage bertujuan untuk menjaga kualitas produk laut yang diekspor.")

});
document.getElementById("read5").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    alert("KKP melakukan pengawasan ketat terhadap kualitas ikan yang didaratkan di Pelabuhan Nizam Zachman. Hal ini bertujuan untuk memastikan semua hasil tangkapan memenuhi standar mutu ekspor yang berlaku di pasar internasional.")

});
document.getElementById("read6").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Tampilkan pesan atau alihkan ke halaman lain
    alert("Kementerian Kelautan dan Perikanan (KKP) mengadakan pelatihan penangkapan ikan berkelanjutan di Pelabuhan Nizam Zachman. Pelatihan ini ditujukan kepada nelayan setempat untuk memperkenalkan metode penangkapan yang ramah lingkungan.")

});

// Inisialisasi peta
const map = L.map('map').setView([-2.5489, 118.0149], 5); // Pusatkan peta di Indonesia

// Tambahkan layer peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Data WPP dengan informasi awal
const wppLocations = [
    { name: "WPP 571", coords: [4.0, 98.5], info: { suhu: "29°C", gelombang: "1.2 m", klorofil: "0.5 mg/m³" } },
    { name: "WPP 572", coords: [2.0, 105.0], info: { suhu: "30°C", gelombang: "0.8 m", klorofil: "0.4 mg/m³" } },
    { name: "WPP 573", coords: [-1.5, 108.0], info: { suhu: "28°C", gelombang: "1.5 m", klorofil: "0.6 mg/m³" } },
    { name: "WPP 711", coords: [2.5, 110.0], info: { suhu: "27°C", gelombang: "1.0 m", klorofil: "0.3 mg/m³" } },
    { name: "WPP 712", coords: [-4.0, 112.0], info: { suhu: "26°C", gelombang: "1.3 m", klorofil: "0.7 mg/m³" } },
    { name: "WPP 713", coords: [-3.5, 119.5], info: { suhu: "29°C", gelombang: "0.9 m", klorofil: "0.4 mg/m³" } },
    { name: "WPP 714", coords: [-3.0, 121.5], info: { suhu: "28°C", gelombang: "1.2 m", klorofil: "0.6 mg/m³" } },
    { name: "WPP 715", coords: [0.0, 126.0], info: { suhu: "30°C", gelombang: "1.0 m", klorofil: "0.5 mg/m³" } },
    { name: "WPP 716", coords: [-2.5, 132.0], info: { suhu: "27°C", gelombang: "1.5 m", klorofil: "0.8 mg/m³" } },
    { name: "WPP 717", coords: [-1.5, 134.0], info: { suhu: "25°C", gelombang: "1.1 m", klorofil: "0.4 mg/m³" } },
    { name: "WPP 718", coords: [-5.0, 134.0], info: { suhu: "26°C", gelombang: "0.7 m", klorofil: "0.5 mg/m³" } }
];

// Tambahkan marker untuk setiap WPP
wppLocations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(
            `<b>${location.name}</b><br>
             <p><b>Suhu:</b> ${location.info.suhu}</p>
             <p><b>Gelombang:</b> ${location.info.gelombang}</p>
             <p><b>Klorofil-a:</b> ${location.info.klorofil}</p>`
        );
});


const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// API configuration
const API_KEY = "AIzaSyAebiQCFnS4uAO2YW_TgLlRE-rizVqxqyY"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
}

const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  // Define the properties and message for the API request
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      contents: [{ 
        role: "user", 
        parts: [{ text: userMessage }] 
      }] 
    }),
  }

  // Send POST request to API, get response and set the reponse as paragraph text
  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    
    // Get the API response text and update the message element
    messageElement.textContent = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
  } catch (error) {
    // Handle error
    messageElement.classList.add("error");
    messageElement.textContent = error.message;
  } finally {
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }
}

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
}

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window 
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));



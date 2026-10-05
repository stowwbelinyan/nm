// ==========================================
// BRAIN DAMAGE QUIZ - SCRIPT.JS
// ==========================================

const questions = [

    // ===== MATEMATIKA =====

    {
        category: "🧮 MATEMATIKA",
        question: "3x - 7 = 2x + 9. Berapakah nilai x?",
        answers: ["14", "16", "18", "20"],
        correct: 1
    },

    {
        category: "🧮 MATEMATIKA",
        question: "Berapakah hasil dari 2⁵ × 2³ ÷ 2⁴?",
        answers: ["8", "12", "16", "32"],
        correct: 2
    },

    {
        category: "🧮 MATEMATIKA",
        question: "Jika f(x) = x² - 3x + 2, berapakah f(5)?",
        answers: ["8", "10", "12", "15"],
        correct: 2
    },

    {
        category: "🧮 MATEMATIKA",
        question: "40% dari suatu bilangan adalah 72. Bilangan tersebut adalah...",
        answers: ["160", "180", "200", "220"],
        correct: 1
    },

    {
        category: "🧮 MATEMATIKA",
        question: "Jika x + y = 10 dan xy = 21, berapakah x² + y²?",
        answers: ["42", "58", "62", "72"],
        correct: 1
    },

    {
        category: "🧮 MATEMATIKA",
        question: "Sebuah persegi memiliki luas 196 cm². Berapakah panjang sisinya?",
        answers: ["12 cm", "13 cm", "14 cm", "16 cm"],
        correct: 2
    },


    // ===== LOGIKA =====

    {
        category: "🧠 LOGIKA",
        question: "2, 6, 12, 20, 30, ... Angka berikutnya adalah?",
        answers: ["36", "40", "42", "44"],
        correct: 2
    },

    {
        category: "🧠 LOGIKA",
        question: "Jika hari ini Rabu, 100 hari lagi adalah hari...",
        answers: ["Kamis", "Jumat", "Sabtu", "Minggu"],
        correct: 1
    },

    {
        category: "🧠 LOGIKA",
        question: "1, 4, 9, 16, 25, ... Angka berikutnya adalah?",
        answers: ["30", "32", "36", "40"],
        correct: 2
    },

    {
        category: "🧠 LOGIKA",
        question: "Semua kucing adalah mamalia. Milo adalah kucing. Kesimpulan yang benar adalah...",
        answers: [
            "Milo bukan mamalia",
            "Milo adalah mamalia",
            "Semua mamalia adalah Milo",
            "Milo adalah burung"
        ],
        correct: 1
    },

    {
        category: "🧠 LOGIKA",
        question: "Semua A adalah B. Semua B adalah C. Maka...",
        answers: [
            "Semua C adalah A",
            "Tidak ada A yang C",
            "Semua A adalah C",
            "Sebagian C bukan B"
        ],
        correct: 2
    },

    {
        category: "🧠 LOGIKA",
        question: "Ayah berusia 40 tahun dan anak 10 tahun. Berapa tahun lagi usia ayah menjadi dua kali usia anak?",
        answers: ["10 tahun", "15 tahun", "20 tahun", "25 tahun"],
        correct: 2
    },

    {
        category: "🧠 LOGIKA",
        question: "Jika kemarin adalah hari Senin, maka lusa adalah hari...",
        answers: ["Selasa", "Rabu", "Kamis", "Jumat"],
        correct: 2
    },

    {
        category: "🧠 LOGIKA",
        question: "3, 9, 27, 81, ... Angka berikutnya adalah?",
        answers: ["162", "216", "243", "324"],
        correct: 2
    },


    // ===== SEJARAH =====

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Budi Utomo didirikan pada tahun...",
        answers: ["1905", "1908", "1912", "1928"],
        correct: 1
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Salah satu tokoh penting Sarekat Islam adalah...",
        answers: [
            "H.O.S. Tjokroaminoto",
            "Ki Hajar Dewantara",
            "Douwes Dekker",
            "Cut Nyak Dien"
        ],
        correct: 0
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Sumpah Pemuda diperingati setiap tanggal...",
        answers: [
            "20 Mei 1908",
            "28 Oktober 1928",
            "17 Agustus 1945",
            "10 November 1945"
        ],
        correct: 1
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Tujuan utama peristiwa Rengasdengklok adalah...",
        answers: [
            "Menangkap tentara Jepang",
            "Mendesak Soekarno-Hatta segera memproklamasikan kemerdekaan",
            "Membentuk BPUPKI",
            "Menyusun UUD"
        ],
        correct: 1
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada...",
        answers: [
            "1 Juni 1945",
            "17 Agustus 1945",
            "18 Agustus 1945",
            "10 November 1945"
        ],
        correct: 1
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Naskah Proklamasi diketik oleh...",
        answers: [
            "Sayuti Melik",
            "Ahmad Soebardjo",
            "Sukarni",
            "Moh. Hatta"
        ],
        correct: 0
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Tiga program utama Politik Etis adalah...",
        answers: [
            "Edukasi, irigasi, transmigrasi",
            "Militer, ekonomi, politik",
            "Pendidikan, militer, perdagangan",
            "Irigasi, industri, militer"
        ],
        correct: 0
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "BPUPKI dibentuk terutama untuk...",
        answers: [
            "Mempersiapkan kemerdekaan Indonesia",
            "Melawan Sekutu",
            "Membentuk tentara Indonesia",
            "Mengatur perdagangan"
        ],
        correct: 0
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Tokoh yang mengemukakan konsep negara integralistik dalam sidang BPUPKI adalah...",
        answers: [
            "Soepomo",
            "Soekarno",
            "Moh. Hatta",
            "Moh. Yamin"
        ],
        correct: 0
    },

    {
        category: "🇮🇩 SEJARAH INDONESIA",
        question: "Peristiwa Bandung Lautan Api terjadi pada tahun...",
        answers: ["1945", "1946", "1947", "1948"],
        correct: 1
    },


    // ===== YUNANI =====

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Siapakah dewa tertinggi dalam mitologi Yunani?",
        answers: ["Apollo", "Zeus", "Ares", "Hermes"],
        correct: 1
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Poseidon dikenal sebagai dewa...",
        answers: ["Perang", "Api", "Laut", "Kematian"],
        correct: 2
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Rhea adalah ibu dari Zeus, Poseidon, dan...",
        answers: ["Apollo", "Ares", "Hades", "Hermes"],
        correct: 2
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Athena dikenal sebagai dewi...",
        answers: [
            "Cinta dan kecantikan",
            "Kebijaksanaan dan strategi",
            "Kematian",
            "Laut"
        ],
        correct: 1
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Prometheus dihukum karena...",
        answers: [
            "Mencuri emas Zeus",
            "Memberikan api kepada manusia",
            "Melawan Poseidon",
            "Membunuh Ares"
        ],
        correct: 1
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Hukuman Sisyphus adalah...",
        answers: [
            "Menjaga gerbang Olympus",
            "Mendorong batu ke atas bukit berulang kali",
            "Menjadi batu",
            "Tinggal di laut"
        ],
        correct: 1
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Siapakah dewa pandai besi dalam mitologi Yunani?",
        answers: ["Ares", "Hephaestus", "Hermes", "Apollo"],
        correct: 1
    },

    {
        category: "🏛️ YUNANI & MITOLOGI",
        question: "Persephone sering dikaitkan dengan...",
        answers: [
            "Pergantian musim",
            "Laut",
            "Perang",
            "Kebijaksanaan"
        ],
        correct: 0
    },


    // ===== BIOLOGI =====

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Organel utama tempat berlangsungnya fotosintesis adalah...",
        answers: [
            "Mitokondria",
            "Ribosom",
            "Kloroplas",
            "Nukleus"
        ],
        correct: 2
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Pigmen hijau pada tumbuhan disebut...",
        answers: [
            "Karoten",
            "Klorofil",
            "Hemoglobin",
            "Melanin"
        ],
        correct: 1
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Gas yang digunakan tumbuhan dalam fotosintesis adalah...",
        answers: [
            "Oksigen",
            "Nitrogen",
            "Karbon dioksida",
            "Hidrogen"
        ],
        correct: 2
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Jaringan yang mengangkut air dan mineral dari akar ke daun adalah...",
        answers: [
            "Floem",
            "Xilem",
            "Epidermis",
            "Kambium"
        ],
        correct: 1
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Jaringan yang mengangkut hasil fotosintesis adalah...",
        answers: [
            "Xilem",
            "Floem",
            "Epidermis",
            "Meristem"
        ],
        correct: 1
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Fungsi utama stomata adalah...",
        answers: [
            "Menyerap mineral",
            "Pertukaran gas",
            "Mengangkut air",
            "Menyimpan makanan"
        ],
        correct: 1
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Hormon tumbuhan yang berperan dalam pemanjangan sel dan fototropisme adalah...",
        answers: [
            "Auksin",
            "Insulin",
            "Adrenalin",
            "Tiroksin"
        ],
        correct: 0
    },

    {
        category: "🌿 TUMBUHAN & BIOLOGI",
        question: "Penguapan air dari permukaan daun disebut...",
        answers: [
            "Respirasi",
            "Transpirasi",
            "Fotosintesis",
            "Osmosis"
        ],
        correct: 1
    },


    // ===== PSIKOLOGI =====

    {
        category: "🧠 PSIKOLOGI",
        question: "Memori yang menyimpan informasi sensorik dalam waktu sangat singkat disebut...",
        answers: [
            "Sensory memory",
            "Long-term memory",
            "Procedural memory",
            "Episodic memory"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Kecenderungan menerima informasi yang mendukung keyakinan yang sudah dimiliki disebut...",
        answers: [
            "Confirmation bias",
            "Halo effect",
            "Bystander effect",
            "Placebo effect"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Menilai seseorang secara keseluruhan hanya berdasarkan satu sifat positif disebut...",
        answers: [
            "Recency effect",
            "Halo effect",
            "Primacy effect",
            "Conformity"
        ],
        correct: 1
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Seseorang cenderung lebih kecil kemungkinan membantu ketika banyak orang hadir. Ini disebut...",
        answers: [
            "Bystander effect",
            "Halo effect",
            "Placebo effect",
            "Primacy effect"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Kemampuan memahami dan mengelola emosi diri sendiri maupun orang lain disebut...",
        answers: [
            "IQ",
            "Emotional intelligence",
            "Selective attention",
            "Perception"
        ],
        correct: 1
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Mengingat informasi pertama lebih kuat disebut...",
        answers: [
            "Recency effect",
            "Primacy effect",
            "Placebo effect",
            "Bystander effect"
        ],
        correct: 1
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Mengingat informasi terakhir lebih kuat disebut...",
        answers: [
            "Recency effect",
            "Primacy effect",
            "Halo effect",
            "Conformity"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Placebo effect terutama berkaitan dengan...",
        answers: [
            "Ekspektasi terhadap hasil",
            "Kehilangan memori",
            "Tekanan kelompok",
            "Gangguan pendengaran"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Masa remaja ditandai oleh perubahan...",
        answers: [
            "Hanya fisik",
            "Fisik, kognitif, dan sosial",
            "Hanya sosial",
            "Hanya emosi"
        ],
        correct: 1
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Ingatan tentang pengalaman pribadi yang pernah dialami disebut...",
        answers: [
            "Episodic memory",
            "Procedural memory",
            "Sensory memory",
            "Semantic memory"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Ingatan mengenai keterampilan seperti mengendarai sepeda disebut...",
        answers: [
            "Episodic memory",
            "Procedural memory",
            "Sensory memory",
            "Semantic memory"
        ],
        correct: 1
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Dunning-Kruger effect berkaitan dengan kecenderungan seseorang untuk...",
        answers: [
            "Meremehkan semua orang",
            "Melebih-lebihkan kemampuan dirinya",
            "Tidak memiliki memori",
            "Menghindari kelompok"
        ],
        correct: 1
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Conformity adalah kecenderungan untuk...",
        answers: [
            "Menyesuaikan perilaku atau pendapat dengan kelompok",
            "Menolak semua pendapat orang lain",
            "Menghindari semua orang",
            "Mengubah ingatan"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Perception adalah proses...",
        answers: [
            "Memberi makna pada informasi sensorik",
            "Menghafalkan semua informasi",
            "Menghilangkan emosi",
            "Mengikuti kelompok"
        ],
        correct: 0
    },

    {
        category: "🧠 PSIKOLOGI",
        question: "Selective attention adalah kemampuan untuk...",
        answers: [
            "Fokus pada informasi tertentu sambil mengabaikan gangguan",
            "Mengingat semua hal sekaligus",
            "Mengubah pendapat orang lain",
            "Menghilangkan semua suara"
        ],
        correct: 0
    }

];


// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;
let score = 0;
let playerName = "";
let time = 15;
let timer;


// ==========================================
// ELEMENTS
// ==========================================

const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const nameInput = document.getElementById("name-input");
const startBtn = document.getElementById("start-btn");

const playerNameEl = document.getElementById("player-name");

const questionNumber = document.getElementById("question-number");
const totalQuestion = document.getElementById("total-question");

const progress = document.getElementById("progress");

const category = document.getElementById("category");
const questionEl = document.getElementById("question");

const answerButtons =
    document.querySelectorAll(".answer-btn");

const feedback = document.getElementById("feedback");

const nextBtn = document.getElementById("next-btn");

const timerEl = document.getElementById("timer");

const cheerText = document.getElementById("cheer-text");

const resultTitle =
    document.getElementById("result-title");

const resultPlayer =
    document.getElementById("result-player");

const scoreEl =
    document.getElementById("score");

const resultMessage =
    document.getElementById("result-message");

const restartBtn =
    document.getElementById("restart-btn");


// ==========================================
// INITIAL SETUP
// ==========================================

totalQuestion.textContent = questions.length;


// ==========================================
// PAGE SWITCH
// ==========================================

function showPage(page) {

    startPage.classList.remove("active");
    quizPage.classList.remove("active");
    resultPage.classList.remove("active");

    page.classList.add("active");
}


// ==========================================
// START QUIZ
// ==========================================

startBtn.addEventListener("click", startQuiz);


function startQuiz() {

    playerName =
        nameInput.value.trim();

    if (playerName === "") {
        playerName = "Player";
    }

    currentQuestion = 0;
    score = 0;

    playerNameEl.textContent =
        playerName;

    showPage(quizPage);

    loadQuestion();
}


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    clearInterval(timer);

    const q = questions[currentQuestion];

    questionNumber.textContent =
        currentQuestion + 1;

    totalQuestion.textContent =
        questions.length;

    category.textContent =
        q.category;

    questionEl.textContent =
        q.question;

    progress.style.width =
        ((currentQuestion + 1) /
        questions.length * 100) + "%";


    feedback.textContent = "";

    feedback.className =
        "feedback";

    nextBtn.style.display =
        "none";


    answerButtons.forEach(
        function(button, index) {

            button.disabled = false;

            button.classList.remove(
                "correct",
                "wrong",
                "show-correct"
            );

            button.querySelector(
                ".answer-text"
            ).textContent =
                q.answers[index];

        }
    );


    const cheers = [
        "You can do it! ♡",
        "Trust your brain.",
        "Think carefully...",
        "Don't panic.",
        "Your brain is cooking.",
        "Easy... probably.",
        "You got this.",
        "Use the brain cells.",
        "Hmm... suspicious."
    ];

    cheerText.textContent =
        cheers[
            Math.floor(
                Math.random() * cheers.length
            )
        ];


    startTimer();
}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    time = 15;

    timerEl.textContent = time;

    timerEl.style.color = "#f18baa";


    timer = setInterval(
        function() {

            time--;

            timerEl.textContent = time;


            if (time <= 5) {

                timerEl.style.color =
                    "#ff4f73";

            }


            if (time <= 0) {

                clearInterval(timer);

                timeOut();

            }

        },
        1000
    );
}


// ==========================================
// ANSWER
// ==========================================

answerButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const selected =
                    Number(
                        button.dataset.index
                    );

                checkAnswer(selected);

            }
        );

    }
);


// ================
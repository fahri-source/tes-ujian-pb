const data = [
    { q: "Saat meracik kopi, barista mengambil biji kopi (1), menggunakan mesin espreso (2), lalu menyajikannya panas (3). Pemetaan Input-Proses-Output yang tepat adalah", opts: { a: "Input (3), Proses (2), Output (1)", b: "Input (2), Proses (1), Output (3)", c: "Input (1), Proses (2), Output (3)", d: "Input (1), Proses (3), Output (2)" }, ans: "c", note: "Biji kopi bertindak sebagai bahan baku (Input), mesin espreso sebagai alat pengolahnya (Proses), dan kopi panas sebagai produk akhir (Output)." },
    { q: "Manakah di antara berikut ini yang merupakan manfaat utama dari dilakukannya analisis proses bisnis", opts: { a: "Meningkatkan kompleksitas birokrasi dan menambah jumlah langkah dalam prosedur.", b: "Mengidentifikasi hambatan, mengurangi waste, dan meningkatkan efisiensi operasional.", c: "Hanya berfokus pada pembelian teknologi terbaru tanpa mengubah cara kerja yang ada.", d: "Mengurangi gaji karyawan untuk meningkatkan margin keuntungan perusahaan." }, ans: "b", note: "Tujuan utama analisis proses bisnis adalah mengeliminasi pemborosan (waste), menemukan hambatan (bottleneck), dan mengoptimalkan performa efisiensi." },
    { q: "Dalam arsitektur proses sebuah perusahaan manufaktur, aktivitas 'Memproduksi Barang' dan 'Mengirim Pesanan' adalah proses inti. Aktivitas manakah yang paling tepat diklasifikasikan sebagai 'Proses Pendukung (Support Process)'", opts: { a: "Mengembangkan Strategi Penjualan (Proses Manajemen)", b: "Menganalisis Umpan Balik Pelanggan (Proses Inti)", c: "Membayar Gaji Karyawan dan Merekrut Staf (Proses HR)", d: "Menjual Produk ke Pelanggan (Proses Inti)" }, ans: "c", note: "Proses pendukung (seperti divisi HRD dan Keuangan) bertugas menyokong aktivitas internal perusahaan agar proses inti dapat berjalan optimal tanpa menghasilkan produk langsung untuk konsumen." },
    { q: "Sebuah tim call center memiliki dua metrik: (A) Rata-rata waktu per panggilan (target: < 3 menit) dan (B) Persentase masalah pelanggan yang selesai dalam satu panggilan (target: > 90%). Analisis yang paling TEPAT adalah", opts: { a: "(A) mengukur Efektivitas; (B) mengukur Efisiensi", b: "(A) mengukur Efisiensi; (B) mengukur Efektivitas", c: "(A) dan (B) keduanya adalah metrik Efisiensi", d: "(A) dan (B) keduanya adalah metrik Efektivitas" }, ans: "b", note: "Waktu penanganan (A) mengukur seberapa cepat/hemat sumber daya digunakan (Efisiensi), sedangkan penyelesaian masalah (B) mengukur ketepatan tercapainya target kepuasan pelanggan (Efektivitas)." },
    { q: "Di dalam metode Six Sigma yang sangat ketat terhadap kualitas, berapa batas rasio kecacatan maksimal (DPMO) yang dapat diterima secara statistik?", opts: { a: "3,4 cacat per 1.000 peluang", b: "3,4 cacat per 1.000.000 peluang", c: "3,4 cacat per 100.000 peluang", d: "1 cacat per 100.000 peluang" }, ans: "b", note: "Sertifikasi kualitas tingkat Six Sigma secara matematis hanya menoleransi maksimal 3,4 kegagalan/cacat per satu juta kesempatan (Defects Per Million Opportunities)." },
    { q: "Sebuah rumah sakit menghadapi masalah tingginya keluhan pasien akibat waktu tunggu pendaftaran yang terlalu lama. Tim perbaikan mutu ditugaskan untuk menganalisis dan memperbaiki proses pendaftaran yang ada saat ini. Metodologi Six Sigma apa yang paling tepat digunakan?", opts: { a: "DMADV (Define, Measure, Analyze, Design, Verify)", b: "DMAIC (Define, Measure, Analyze, Improve, Control)", c: "7 Wastes (Tujuh Pemborosan)", d: "5 Whys (Lima Mengapa)" }, ans: "b", note: "DMAIC digunakan untuk memperbaiki, memodifikasi, dan mengoptimalkan proses bisnis yang sudah berjalan di organisasi." },
    { q: "Upaya menghilangkan pemborosan gerak (motion), seperti pelayan yang harus mondar-mandir terlalu jauh di dapur, adalah esensi dari pendekatan", opts: { a: "Lean Management", b: "Simulasi Monte Carlo", c: "Pendekatan Six Sigma", d: "Business Process Reengineering" }, ans: "a", note: "Lean Management berfokus pada eliminasi segala jenis pemborosan (waste), termasuk gerakan yang tidak perlu (unnecessary motion) guna mempercepat alur kerja." },
    { q: "Manakah urutan tahapan yang benar di dalam Siklus Manajemen Proses Bisnis (BPM Cycle) yang berkesinambungan?", opts: { a: "Desain, Pantau, Analisis, Rencana, Eksekusi", b: "Perencanaan, Analisis, Desain, Eksekusi, Pemantauan", c: "Pemantauan, Eksekusi, Perencanaan, Analisis, Desain", d: "Analisis, Pantau, Rencana, Eksekusi, Penutupan" }, ans: "b", note: "Siklus BPM yang runtun berawal dari Perencanaan Strategis, Analisis Model Saat Ini, Desain Model Baru, Eksekusi/Implementasi, hingga Pemantauan berkala." },
    { q: "Sebuah tim menghadapi masalah 'Pesanan Sering Terlambat Dikirim'. Untuk menemukan akar penyebab (root cause), mereka mulai bertanya: 'Mengapa terlambat? (Karena stok tidak ada). Mengapa stok tidak ada? (Karena...)'. Teknik analisis ini disebut", opts: { a: "Diagram Pareto (Analisis 80/20)", b: "5 Whys (Lima Mengapa)", c: "Diagram Fishbone (Sebab Akibat)", d: "DMAIC" }, ans: "b", note: "Teknik 5 Whys adalah cara menggali akar masalah secara beruntun dengan mengajukan pertanyaan 'Mengapa' berkali-kali hingga inti masalah terdalam ditemukan." },
    { q: "Model proses yang menggambarkan alur kerja end-to-end secara high-level (misalnya: Pesan Diterima -- Barang Diproses -- Barang Dikirim) tanpa detail teknis, biasanya digunakan untuk presentasi ke manajemen puncak. Ini adalah level pemodelan", opts: { a: "Makro (Strategis)", b: "Deskriptif (Operasional)", c: "Mikro (Implementasi)", d: "Fungsional" }, ans: "a", note: "Model tingkat Makro menyajikan gambaran arsitektur bisnis global yang ringkas dan padat untuk kebutuhan pengambil keputusan di level eksekutif." },
    { q: "Manakah pernyataan yang paling akurat dalam membedakan antara 'Proyek' dan 'Operasional'?", opts: { a: "'Proyek' adalah aktivitas berulang, sedangkan 'Operasional' adalah upaya unik.", b: "'Proyek' berfokus pada efisiensi proses yang berkelanjutan, sedangkan 'Operasional' berfokus pada tujuan unik.", c: "'Proyek' adalah upaya unik dan sementara untuk menciptakan hasil spesifik, sedangkan 'Operasional' adalah aktivitas rutin dan berkelanjutan.", d: "'Proyek' selalu dikerjakan oleh tim internal, sedangkan 'Operasional' selalu melibatkan konsultan eksternal." }, ans: "c", note: "Proyek bersifat temporer (ada batas waktu awal dan akhir) untuk menghasilkan inovasi baru, sementara operasional bersifat kontinu guna menjaga rutinitas harian bisnis." },
    { q: "Aktivitas seperti melakukan serah terima deliverable final kepada klien, mendapatkan persetujuan formal (sign-off), dan 'Mengarsipkan lessons learned' adalah ciri khas dari fase", opts: { a: "Planning (Perencanaan)", b: "Executing (Pelaksanaan)", c: "Monitoring & Controlling (Pemantauan)", d: "Closing (Penutupan)" }, ans: "d", note: "Fase Closing mencakup seluruh aktivitas formal untuk membubarkan tim, mengarsipkan dokumentasi, melakukan audit akhir, dan menutup siklus administrasi proyek." },
    { q: "Memformulasikan target anggaran (Cost Baseline) dan menyiapkan dana cadangan adalah serangkaian aktivitas yang dikerjakan di dalam domain", opts: { a: "Manajemen Jadwal Proyek", b: "Manajemen Risiko Proyek", c: "Manajemen Cakupan Proyek", d: "Manajemen Biaya Proyek" }, ans: "d", note: "Formulasi pengeluaran, estimasi dana tak terduga, dan penentuan garis batas biaya pengerjaan merupakan bagian mutlak Project Cost Management." },
    { q: "Manajer proyek G mengadakan sesi brainstorming untuk mengidentifikasi 'apa yang mungkin salah' dalam proyek. Mereka lalu menganalisis probabilitas dan dampaknya (P&I matrix). Aktivitas ini merupakan fokus utama dari Knowledge Area", opts: { a: "Project Quality Management", b: "Project Risk Management", c: "Project Cost Management", d: "Project Procurement Management" }, ans: "b", note: "Identifikasi potensi masalah disertai pembobotan peluang dan tingkat keparahannya (P&I Matrix) dikelola di manajemen risiko." },
    { q: "Memetakan tokoh masyarakat yang terdampak dan merancang strategi agar mereka mendukung hasil akhir proyek adalah kegiatan yang dikelola oleh", opts: { a: "Manajemen Biaya Proyek", b: "Manajemen Mutu Proyek", c: "Manajemen Pemangku Kepentingan Proyek", d: "Manajemen Integrasi Proyek" }, ans: "c", note: "Project Stakeholder Management berfokus pada identifikasi, analisis pengaruh, dan manajemen relasi terhadap setiap pihak yang berdampak atau terdampak proyek." },
    { q: "Dalam proyek implementasi ERP, tim telah menyebarkan dokumen Request for Proposal (RFP). Setelah mengevaluasi tawaran, mereka memilih satu vendor perangkat lunak dan menandatangani kontrak. Ini adalah hasil keluaran (output) dari proses:", opts: { a: "Rencana Manajemen Pengadaan (Plan Procurement Management)", b: "Laporan Kinerja Vendor (Control Procurements)", c: "Pelaksanaan Pengadaan (Conduct Procurements)", d: "Pembuatan Struktur Rincian Kerja IT (Create WBS)" }, ans: "c", note: "Fase Conduct Procurements adalah eksekusi pencarian vendor, menerima proposal penawaran, melakukan seleksi penjual, hingga penandatanganan kesepakatan kerja." },
    { q: "Manajemen Sumber Daya memastikan hardware, material, dan programmer tersedia tepat waktu. Secara standar, urutan 4 proses utama Manajemen Sumber Daya ini adalah", opts: { a: "Plan, Code, Test, dan Release Server.", b: "Initiate, Measure, Analyze, dan Validate Data.", c: "Plan, Estimate Resources, Acquire Resources, dan Manage Team.", d: "Prepare Funding, Secure Vendors, Accept Risks, dan Close Work." }, ans: "c", note: "Manajemen SDM proyek dimulai dari perencanaan, estimasi kebutuhan, akuisisi/pencarian aset fisik/manusia, hingga pengelolaan dinamika tim kerja." },
    { q: "Manajer Proyek membandingkan log data coding (Data Kinerja Mentah) dengan Target Rencana. Hasil perhitungannya menghasilkan metrik berformat (Informasi Kinerja/WPI) untuk dilaporkan. Proses pengawasan ini adalah", opts: { a: "Close Project", b: "Plan Scope", c: "Develop Schedule", d: "Monitor and Control Project Work" }, ans: "d", note: "Membandingkan realisasi lapangan dengan target awal rencana kerja masuk ke dalam fungsi pemantauan (Monitor and Control)." },
    { q: "Proses memecah (decomposing) deliverables proyek (dari Project Scope Statement) menjadi komponen-komponen yang lebih kecil dan lebih mudah dikelola, yang disebut Work packages (paket pekerjaan), dikenal sebagai", opts: { a: "Create WBS (Membuat WBS)", b: "Define Activities", c: "Validate Scope", d: "Collect Requirements" }, ans: "a", note: "WBS (Work Breakdown Structure) adalah dekomposisi hierarkis ruang lingkup kerja tim untuk mempermudah alokasi penugasan." },
    { q: "Seorang Manajer Proyek menentukan bahwa aktivitas 'Testing' (Uji Coba) hanya bisa dimulai setelah aktivitas 'Coding' (Pembuatan Kode) selesai. Tipe ketergantungan (dependency) logis ini disebut", opts: { a: "Finish-to-Start (FS)", b: "Start-to-Start (SS)", c: "Finish-to-Finish (FF)", d: "Start-to-Finish (SF)" }, ans: "a", note: "Hubungan Finish-to-Start (FS) menetapkan bahwa aktivitas penerus (Testing) tidak dapat berjalan sebelum aktivitas pendahulu (Coding) rampung." },
    { q: "Dalam anggaran proyek cloud migration, manajer mengalokasikan dana khusus untuk menangani risiko server down yang sudah diprediksi sebelumnya (known-unknowns). Dana khusus ini diistilahkan sebagai", opts: { a: "Cadangan Kontingensi (Contingency Reserve)", b: "Cadangan Manajemen (Management Reserve)", c: "Biaya Peluang Insidental (Opportunity Cost)", d: "Biaya Hangus Implementasi (Sunk Cost)" }, ans: "a", note: "Contingency Reserve disiapkan secara terarah untuk memitigasi risiko-risiko teridentifikasi yang kemungkinan muncul di tengah proyek." },
    { q: "Aktivitas utama dari proses 'Manage Communications' (Mengelola Komunikasi) adalah", opts: { a: "Membuat rencana awal tentang siapa membutuhkan informasi apa.", b: "Mengumpulkan, membuat, dan mendistribusikan informasi proyek sesuai rencana.", c: "Memantau apakah dampak dari komunikasi yang dikirimkan sudah sesuai harapan.", d: "Mengidentifikasi semua orang yang mungkin terpengaruh oleh proyek." }, ans: "b", note: "Manage Communications berfokus pada implementasi operasional penyebaran berita, laporan berkala, dan dokumentasi ke semua lini ekosistem proyek." },
    { q: "Apa output (keluaran) utama yang dihasilkan dari proses 'Plan Risk Management' (Merencanakan Manajemen Risiko)", opts: { a: "Risk Register, yang berisi daftar semua risiko.", b: "Risk Management Plan", c: "Analisis probabilitas dan dampak (P&I Matrix).", d: "Project Charter (Piagam Proyek)." }, ans: "b", note: "Output utama proses perencanaan manajemen risiko adalah dokumen 'Risk Management Plan' yang mengatur pendekatan metodologi mitigasi." },
    { q: "Setelah tim memprioritaskan risiko, mereka sekarang harus menentukan strategi spesifik (misalnya 'Avoid' atau 'Mitigate') dan pemilik risiko (risk owner) untuk setiap risiko utama. Proses ini disebut", opts: { a: "Plan Risk Responses (Merencanakan Respons Risiko)", b: "Perform Qualitative Risk Analysis", c: "Implement Risk Responses", d: "Monitor Risks" }, ans: "a", note: "Merumuskan opsi penanganan (menghindari, memitigasi, mentransfer) serta menunjuk PIC penanggung jawab merupakan bagian Plan Risk Responses." },
    { q: "Manakah perbedaan utama antara mode resolusi konflik Confrontation (Konfrontasi) dan Compromise (Kompromi)", opts: { a: "Confrontation mencari solusi win-win, sedangkan Compromise mencari solusi lose-lose, kedua pihak sama-sama mengalah sedikit.", b: "Confrontation bersifat win-lose (satu pihak menang), sedangkan Compromise bersifat win-win (kedua pihak menang)", c: "Confrontation berarti menghindari masalah (lose-lose), sedangkan Compromise berarti memaksa salah satu pihak (win-lose)", d: "Confrontation berarti manajer mengambil keputusan akhir (win-lose), sedangkan Compromise berarti masalahnya didiamkan (lose-lose)." }, ans: "a", note: "Confrontation/Problem Solving menyatukan visi untuk win-win solution, sedangkan Compromise memaksa kedua pihak mengorbankan sebagian egonya (lose-lose/share-to-gain)." },
    { q: "Dalam struktur organisasi matriks, seorang Manajer Proyek IT sering kali menghadapi tantangan paling klasik dan berat berupa", opts: { a: "Jumlah programmer yang terlalu banyak untuk dipantau", b: "Tanggung jawab penuh atas target, tapi tanpa otoritas atas stafnya", c: "Kewajiban membiayai sendiri lisensi server dari kantong pribadi", d: "Ketiadaan kontak harian dengan pihak klien dan direktur" }, ans: "b", note: "Pada struktur matriks, staf tetap tunduk pada manajer fungsionalnya, sehingga manajer proyek memiliki tantangan memimpin tanpa otoritas formal penuh." },
    { q: "Manakah pernyataan yang paling akurat menjelaskan TUJUAN utama dari diterapkannya proses manajemen perubahan (change control) dalam sebuah proyek", opts: { a: "Untuk mencegah semua perubahan (change request) agar proyek selesai sesuai rencana awal.", b: "Untuk memastikan bahwa semua perubahan yang diminta langsung disetujui dan diimplementasikan.", c: "Untuk mendokumentasikan semua perubahan yang sudah terjadi secara informal.", d: "Untuk meninjau, mengevaluasi dampak, dan menyetujui/menolak perubahan sebelum diimplementasikan." }, ans: "d", note: "Change control bertujuan mengendalikan ruang lingkup agar perubahan dinilai secara komprehensif pengaruhnya terhadap biaya, mutu, dan waktu sebelum dijalankan." },
    { q: "Di departemen TI, apa yang membedakan peran Insinyur Perangkat Lunak (Knowledge Worker) dengan Staf Entri Data (Data Worker)?", opts: { a: "Data Worker fokus pada inovasi coding, Knowledge Worker pada hardware", b: "Keduanya menjalankan fungsi klerikal yang sama, hanya beda nama", c: "Knowledge Worker memecahkan masalah tak terstruktur, Data Worker memproses rutinitas administratif", d: "Data Worker bertugas mendesain algoritma komputasi awal, Knowledge Worker memeriksa kesesuaian algoritma" }, ans: "c", note: "Knowledge worker mengandalkan analisis mendalam untuk memecahkan problem non-rutin, sedangkan data worker bergerak di area administratif yang prosedural." },
    { q: "Dalam teori Manajemen Pengetahuan, pernyataan mana yang paling akurat dalam membedakan aset pengetahuan Tacit dan Explicit di perusahaan IT?", opts: { a: "Pengetahuan Explicit kuno, sedangkan Tacit berbasis teknologi modern", b: "Pengetahuan Explicit sulit didokumentasikan, Tacit berbentuk file teks", c: "Pengetahuan Tacit adalah hak paten, Explicit adalah opini vendor", d: "Pengetahuan Tacit berupa intuisi di benak programmer, Explicit berupa manual API tertulis" }, ans: "d", note: "Tacit bersemayam di kognitif manusia (pengalaman, intuisi, skill), sedangkan Explicit adalah pengetahuan yang sudah diformalkan ke media cetak/digital." },
    { q: "Seorang developer baru membaca buku panduan coding standar perusahaan dan SOP teknis (pengetahuan Explicit). Melalui praktik dan pemahaman (belajar), panduan itu kini menjadi keahlian (skill) default dalam dirinya (pengetahuan Tacit). Proses konversi Explicit-ke-Tacit ini disebut", opts: { a: "Socialization (Tacit -> Tacit)", b: "Externalization (Tacit -> Explicit)", c: "Combination (Explicit -> Explicit)", d: "Internalization (Explicit -> Tacit)" }, ans: "d", note: "Menurut model SECI Nonaka-Takeuchi, proses menyerap dokumen tertulis menjadi pemahaman internal pribadi dinamakan Internalization." },
    { q: "Manakah di antara berikut ini yang paling tepat dikategorikan sebagai teknologi yang spesifik mendukung Knowledge Management (Manajemen Pengetahuan)", opts: { a: "Sistem absensi sidik jari (fingerprint) dan aplikasi penggajian (payroll).", b: "Firewall keamanan jaringan dan perangkat lunak antivirus,", c: "Portal database lessons learned, sistem Expert Locator, dan platform Wiki internal.", d: "Aplikasi e-commerce untuk menjual produk dan gateway pembayaran." }, ans: "c", note: "Platform KM dirancang khusus untuk mempermudah penyimpanan, pencarian ahli internal, dan kolaborasi transfer informasi korporasi." },
    { q: "Saat menyusun cetak biru IT untuk Smart City, arsitek sistem harus mengacu pada 6 dimensi utama pembangunan kota cerdas, yaitu", opts: { a: "Infrastructure, Application, Hardware, Network, Database, Security", b: "Traffic, Garbage, Electricity, Water, Sensors, Digital Maps", c: "Economy, Mobility, Environment, People, Living, Governance", d: "Business, Transactions, Retails, Supply, Delivery, Finance" }, ans: "c", note: "6 pilar Smart City standar internasional meliputi Smart Economy, Smart Mobility, Smart Environment, Smart People, Smart Living, dan Smart Governance." },
    { q: "Siklus manajemen pengetahuan menurut Meyer dan Zack dimulai dari tahap...", opts: { a: "storage", b: "acquisition", c: "dissemination", d: "utilization" }, ans: "b", note: "Siklus Meyer-Zack diawali dengan akuisisi (acquisition) data/informasi mentah potensial dari berbagai sumber internal maupun eksternal." },
    { q: "Pemerintah daerah meluncurkan portal di mana publik dapat mengakses dan mengunduh data APBD dan data jadwal bus kota dalam format machine-readable (seperti CSV). Konsep transparansi ini disebut", opts: { a: "Open Data (Data Terbuka)", b: "Big Data (Data Besar)", c: "Closed Data (Data Tertutup)", d: "Data Warehouse (Gudang Data)" }, ans: "a", note: "Open Data adalah gerakan menyediakan informasi publik secara bebas, gratis, dan mudah diolah kembali oleh sistem komputer masyarakat umum." },
    { q: "Jika seorang programmer junior butuh bimbingan mengenai logika coding usang yang tidak terdokumentasi, alat KM apa yang paling tepat untuk mentransfer Tacit Knowledge tersebut?", opts: { a: "Membangun basis data SOP operasional fisik secara kaku.", b: "Mengembangkan aplikasi absensi kerja berbasis biometrik", c: "Membangun sistem Expert Locator untuk mencari ahli internal", d: "Mencetak panduan coding kuno tersebut secara massal" }, ans: "c", note: "Sistem Expert Locator membantu pegawai mencari siapa pakar yang menguasai keahlian tacit tertentu untuk diajak konsultasi langsung." },
    { q: "Sebuah perusahaan meluncurkan sistem Knowledge Management baru. Faktor sukses non-teknis (budaya) yang paling krusial untuk memastikan sistem ini digunakan oleh karyawan adalah", opts: { a: "Membeli server dengan spesifikasi tercanggih dan bandwidth internet tercepat.", b: "Memilih font dan warna interface yang paling menarik secara visual.", c: "Adanya dukungan penuh dari manajemen puncak dan pemberian insentif bagi karyawan yang aktif berbagi pengetahuan.", d: "Memastikan sistem database (arsitektur data) dirancang menggunakan model fisik." }, ans: "c", note: "Keberhasilan KM ditopang oleh budaya mau berbagi (sharing culture) yang didorong oleh teladan kepemimpinan eksekutif serta sistem reward." },
    { q: "Seorang CIO melihat indikator beban server berwarna merah di dashboard EIS-nya. Saat metrik itu diklik, layar memecahnya menjadi daftar anak server yang bermasalah. Fungsionalitas navigasi spesifik di EIS ini dinamakan", opts: { a: "Antarmuka Protokol Transaksi Relasional (Transaction Processing)", b: "Pemodelan Kanban Drag-and-Drop (Age Visualization)", c: "Fungsionalitas Penelusuran Mendalam (Drill-down Capability)", d: "Diagram Pemetaan Kelas Arsitektur (Entity Relationship Diagram)" }, ans: "c", note: "Drill-down Capability memungkinkan pengguna membedah visualisasi data ringkas tingkat eksekutif ke rincian yang paling mendalam." },
    { q: "Apa tujuan arsitektural utama di balik pengimplementasian sistem Enterprise Resource Planning (ERP) dalam skala perusahaan?", opts: { a: "Menjadi platform pengolah kata murni untuk memo internal staf.", b: "Menggunakan robot otonom untuk mengganti Manajer Proyek.", c: "Mengintegrasikan seluruh fungsi bisnis ke dalam satu database terpusat.", d: "Membuat aplikasi sosial media khusus untuk pelanggan ritel" }, ans: "c", note: "Sistem ERP dirancang untuk mendobrak ego sekat departemen dengan menyatukan aliran data finansial, logistik, dan HR ke satu penyimpanan terintegrasi." },
    { q: "Sebuah Business Process Management Suite (BPMS) mampu secara otomatis mengirimkan formulir persetujuan (approval) dari Staf ke Manajer, dan jika dalam 24 jam tidak di-approve, sistem otomatis mengirimkan reminder. Komponen BPMS yang mengelola alur kerja ini disebut", opts: { a: "Process Design Tool (Alat Desain)", b: "Execution/Workflow Engine (Mesin Eksekusi)", c: "Database ERP", d: "Process Monitoring Dashboard (Dasbor Pemantauan)" }, ans: "b", note: "Workflow Engine bertindak sebagai otak eksekutor otomatis yang menjalankan aturan logika bisnis operasional kuis sistem." },
    { q: "Dalam menganalisis prosedur Sistem Informasi, perbedaan mendasar antara memodelkannya dengan BPMN dibandingkan dengan DFD adalah", opts: { a: "BPMN berfokus pada langkah urutan tugas (control flow), sedangkan DFD berfokus pada jalur pergerakan data (data flow)", b: "DFD digunakan merancang fisik server, BPMN untuk kabel jaringan", c: "DFD memuat simbol swimlanes antar departemen, BPMN tidak bisa", d: "BPMN merancang logika query SQL, sedangkan DFD merancang UI" }, ans: "a", note: "BPMN menggambarkan kronologi tahapan aktivitas siapa melakukan apa, sedangkan DFD (Data Flow Diagram) memetakan masuk keluarnya data pada entitas." },
    { q: "Sebelum sebuah organisasi mendevelop software otomasi proses baru (TO-BE), analis mewajibkan pemetaan model proses saat ini (AS-IS). Mengapa ini penting?", opts: { a: "Karena sistem software mutlak harus menyalin manual lama 100%.", b: "Murni sebagai syarat administrasi untuk lolos audit kepatuhan ISO.", c: "Merupakan aturan baku dari lisensi kerangka kerja open-source.", d: "Agar desain software tidak mengulang kemacetan (bottleneck) sistem lama." }, ans: "d", note: "Analisis model proses AS-IS mutlak diperlukan guna mengoreksi kelemahan sistem lama agar tidak terbawa ke arsitektur digital yang baru (TO-BE)." },
    { q: "PERT (Program Evaluation and Review Technique) digunakan untuk...", opts: { a: "menggambarkan alur logika sistem perangkat lunak.", b: "menganalisis dan menjadwalkan tugas-tugas dalam suatu proyek secara terstruktur", c: "menampilkan hubungan antar entitas dalam basis data.", d: "menggambarkan aliran data dalam suatu proses bisnis" }, ans: "b", note: "PERT adalah metodologi manajemen proyek berbasis diagram jaringan untuk mengestimasi ketidakpastian durasi pengerjaan aktivitas kerja." },  
    // --- TAMBAHAN SOAL BARU (43, 44, 45) ---
    { q: "Dalam sebuah proyek TI, jalur rangkaian aktivitas yang menentukan durasi total tercepat penyelesaian proyek secara keseluruhan, di mana penundaan pada aktivitas di jalur ini akan langsung menunda proyek dinamakan...", opts: { a: "Jalur Kritis (Critical Path)", b: "Jalur Slack Terbesar", c: "Jalur Buffer Manajemen", d: "Jalur Distribusi Sekunder" }, ans: "a", note: "Critical Path Method (CPM) mengidentifikasi deretan aktivitas tanpa kelonggaran waktu (zero slack). Jika aktivitas di jalur kritis terlambat, maka target selesai proyek otomatis mundur." },
    { q: "Salah satu indikator utama dalam Earned Value Management (EVM) untuk mengukur apakah pengeluaran biaya aktual proyek lebih hemat atau lebih boros dibandingkan dengan nilai pekerjaan yang secara riil telah diselesaikan adalah...", opts: { a: "Schedule Variance (SV)", b: "Cost Variance (CV)", c: "Variance at Completion (VAC)", d: "To-Complete Performance Index (TCPI)" }, ans: "b", note: "Cost Variance (CV) dihitung dengan rumus EV - AC. Nilai positif menunjukkan proyek berjalan di bawah anggaran (under budget/lebih hemat)." },
    { q: "Di dalam pemodelan arsitektur informasi perusahaan, repositori penyimpanan data yang sangat besar, terpusat, dan terintegrasi dari berbagai database operasional yang berbeda untuk kebutuhan analisis jangka panjang disebut...", opts: { a: "Data Mart", b: "Data Warehouse", c: "OLTP Database", d: "Spreadsheet Flat File" }, ans: "b", note: "Data Warehouse mengonsolidasikan data historis dari berbagai sistem operasional (silo) untuk mendukung proses pengambilan keputusan strategis (Business Intelligence) oleh manajemen."}
];

let current = 0;
let userAnswers = [];

const qText = document.getElementById('q-text');
const optionsDiv = document.getElementById('options');
const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const quizArea = document.getElementById('quiz-area');
const scoreArea = document.getElementById('score-area');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');
const reviewList = document.getElementById('review-list');
const explanationDiv = document.getElementById('explanation');

function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function loadQuestion() {
    prevBtn.disabled = (current === 0);
    explanationDiv.classList.remove('show');
    explanationDiv.innerHTML = '';

    const q = data[current];
    qText.innerHTML = `${current + 1}. ${escapeHTML(q.q)}`;
    progress.innerText = `${current + 1}/${data.length}`;
    optionsDiv.innerHTML = '';
    
    const existingAnswer = userAnswers[current];

    for (const [key, val] of Object.entries(q.opts)) {
        const label = document.createElement('label');
        label.className = 'option';
        const isSelected = existingAnswer && existingAnswer.selected === key;
        
        label.innerHTML = `
            <input type="radio" name="ans" value="${key}" ${isSelected ? 'checked' : ''} onclick="checkAnswer(this, '${key}')"> 
            <span class="option-text">[${key.toUpperCase()}] ${escapeHTML(val)}</span>
        `;
        optionsDiv.appendChild(label);
    }

    if (existingAnswer) {
        lockOptionsAndShowFeedback(existingAnswer.selected);
        nextBtn.disabled = false;
    } else {
        const allOptions = document.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.add('selectable'));
        nextBtn.disabled = true;
    }
}

function checkAnswer(radioElement, selectedKey) {
    const q = data[current];
    const correctKey = q.ans;
    const isCorrect = (selectedKey === correctKey);

    userAnswers[current] = {
        selected: selectedKey,
        isCorrect: isCorrect
    };

    lockOptionsAndShowFeedback(selectedKey);
    nextBtn.disabled = false;
}

function lockOptionsAndShowFeedback(selectedKey) {
    const q = data[current];
    const correctKey = q.ans;

    const allRadios = document.querySelectorAll('input[name="ans"]');
    allRadios.forEach(radio => radio.disabled = true);

    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => {
        opt.classList.remove('selectable');
        opt.classList.add('disabled');
    });

    let statusHTML = '';
    if (selectedKey === correctKey) {
        allRadios.forEach(radio => {
            if(radio.value === selectedKey) radio.parentElement.classList.add('correct');
        });
        statusHTML = `<div class="status-text correct-text">✓ Jawaban Anda Benar!</div>`;
    } else {
        allRadios.forEach(radio => {
            if (radio.value === selectedKey) radio.parentElement.classList.add('wrong');
            if (radio.value === correctKey) radio.parentElement.classList.add('correct');
        });
        statusHTML = `<div class="status-text wrong-text">✗ Jawaban Anda Salah!</div>`;
    }

    statusHTML += `
        <div><strong>Kunci Jawaban:</strong> (${correctKey.toUpperCase()}) - ${escapeHTML(q.opts[correctKey])}</div>
        <div style="margin-top: 8px; color: #bdc1c6; font-size: 0.95rem;"><strong>Pembahasan:</strong> ${q.note}</div>
    `;
    explanationDiv.innerHTML = statusHTML;
    explanationDiv.classList.add('show');
}

function calculateFinalScore() {
    let totalCorrect = 0;
    for (let i = 0; i < data.length; i++) {
        if (userAnswers[i] && userAnswers[i].isCorrect) {
            totalCorrect++;
        }
    }
    return totalCorrect;
}

function showFinalReview() {
    let htmlContent = '';
    for (let i = 0; i < data.length; i++) {
        const q = data[i];
        const uAnsObj = userAnswers[i];
        const uAns = uAnsObj ? uAnsObj.selected : null;
        const cAns = q.ans;
        const isCorrect = uAnsObj ? uAnsObj.isCorrect : false;

        htmlContent += `<div class="review-item ${isCorrect ? 'correct' : 'wrong'}">`;
        htmlContent += `<div class="review-q">${i + 1}. ${escapeHTML(q.q)}</div>`;
        
        if (isCorrect) {
            htmlContent += `<div class="ans-user ans-correct">✓ Kamu menjawab: ${escapeHTML(q.opts[uAns])}</div>`;
        } else {
            htmlContent += `<div class="ans-user ans-wrong">✗ Kamu menjawab: ${uAns ? escapeHTML(q.opts[uAns]) : 'Tidak Dijawab'}</div>`;
            htmlContent += `<div class="ans-correct">Kunci Jawaban: ${escapeHTML(q.opts[cAns])}</div>`;
        }
        htmlContent += `<div style="margin-top:7px; font-size:0.9rem; color:#aaa;"><strong>Pembahasan:</strong> ${q.note}</div>`;
        htmlContent += `</div>`;
    }
    reviewList.innerHTML = htmlContent;
}

nextBtn.addEventListener('click', () => {
    current++;
    if (current < data.length) {
        loadQuestion();
    } else {
        const finalScore = calculateFinalScore();
        quizArea.style.display = 'none';
        scoreArea.style.display = 'block';
        scoreText.innerText = `${finalScore} / ${data.length}`;
        feedbackText.innerHTML = `Kamu menjawab <strong>${finalScore}</strong> soal dengan benar dan <strong>${data.length - finalScore}</strong> soal salah.`;
        showFinalReview();
    }
});

prevBtn.addEventListener('click', () => {
    if (current > 0) {
        current--;
        loadQuestion();
    }
});

loadQuestion();
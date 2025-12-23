# 💇‍♀️ Luxury Salon Appointment System

Modern bir kuaför / güzellik salonu için geliştirilmiş, canlıda çalışan randevu oluşturma sistemi.  
Gerçek kullanıcı akışlarını kapsayan, uçtan uca (frontend + otomasyon) bir projedir.

Bu proje yalnızca bir arayüz değil; frontend, otomasyon ve deployment süreçlerini birlikte ele alan gerçek bir ürün örneğidir.

---

## 🚀 Live Demo

- **Canlı Site:** [https://luxury-salon-website-7b434.web.app](https://luxury-salon-website-7b434.web.app)
- **Teknoloji:** React, Vite, Firebase Hosting
- **Otomasyon:** n8n (Gmail & Google Sheets Entegrasyonu)

---

## 🎯 Proje Amacı

Kullanıcıların bir kuaför/güzellik salonu için:
- Kolayca randevu oluşturabilmesini,
- Randevu bilgisinin otomatik olarak kaydedilmesini,
- Kullanıcıya e-posta ve SMS ile bilgilendirme yapılmasını sağlayan modern ve kullanıcı dostu bir sistem geliştirmek.

---

## ✨ Özellikler

### 🧑‍💼 Kullanıcı Tarafı
- **Takvim Entegrasyonu:** Takvim üzerinden kolay tarih seçimi.
- **Zaman Dilimleri:** 30 dakikalık optimize edilmiş slotlar (Son randevu: 19:00).
- **Kullanıcı Dostu Form:** Ad, telefon, e-posta ve hizmet türü seçimi.
- **Modern Tasarım:** Tailwind CSS ile oluşturulmuş, mobil uyumlu, lüks ve sade arayüz.

### 🤖 Otomasyon (n8n Workflow)
- **E-posta Bildirimi:** Randevu oluşturulduğunda kullanıcıya ve yöneticiye anlık bildirim iletilir.
- **Veri Kaydı:** Randevu bilgilerinin Google Sheets üzerine otomatik olarak işlenir.
- **SMS Entegrasyonu:** Randevu onayı için SMS gönderimi (Demo API).(henüz entegre edilmedi)
- **Hatırlatma Sistemi:** Randevudan 1 gün önce otomatik hatırlatma gönderimi.(geliştirme sürmektedir)

### ☁️ Deployment
- **Firebase Hosting:** Hızlı ve güvenli canlı yayın süreci içermektedir.
- **Production Ready:** CORS ayarları yapılmış, güvenli webhook iletişimi sağlanmıştır.

---

## 🧠 Kullanıcı Akışı

1. Kullanıcı randevu formunu doldurur.
2. Form verileri **n8n Webhook**'una güvenli bir şekilde gönderilir.
3. **n8n Workflow süreci:**
    - Veriyi **Google Sheets** tablosuna yeni satır olarak ekler.
    - Kullanıcıya **Gmail** üzerinden onay maili gönderir.
    - **SMS API** üzerinden bilgilendirme yapar.
4. Kullanıcı ekranında başarı mesajını görür ve randevu onaylanır 🎉.
5. Hatırlatma maili randevu gününden bir gün öncesinde mail olarak müşteriye iletilir.(henüz entegre edilmedi)

---

## 🛠️ Kullanılan Teknolojiler

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS

### Otomasyon & Backend
- **n8n:** Webhook yönetimi ve Workflow tasarımı.
- **Google Sheets API:** Veritabanı yerine kullanılan dinamik veri depolama.
- **SMTP / Gmail:** E-posta servisleri.
- **SMS API:** Kullanıcı bilgilendirme.

### Deployment
- Firebase Hosting

---

## 📂 Proje Yapısı

```text
PROJECT/
├─ src/
│  ├─ components/
│  │  ├─ AppointmentForm.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Location.tsx
│  │  └─ Reviews.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ firebase.json
├─ vite.config.ts
└─ README.md

----

## ⚙️ Kurulum (Local)

Projeyi yerel makinenizde çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

## Geliştirme sunucusunu başlatın
npm run dev

Tarayıcıdan şu adrese gidin: http://localhost:5173

## 🏗️ Production Build & Deploy

Bash

# Üretim dosyalarını oluşturun

npm run build

# Firebase'e yükleyin

firebase deploy


## 🧩 Öğrenilenler & Kazanımlar 

React + Vite projelerinde derleme (build) süreçleri ve dosya yönetimi.

Frontend verilerinin n8n gibi otomasyon araçlarıyla "Uçtan Uca" entegrasyonu.

Tarayıcı tabanlı güvenlik (CORS) sorunlarının çözümü.

Firebase Hosting ile profesyonel canlıya alma süreci.

## 🔮 Geliştirilebilir Özellikler

[ ] Dolu saatlerin otomatik olarak takvimde kapatılması.

[ ] Google Calendar takvimine etkinlik olarak ekleme.

[ ] Admin paneli (randevu yönetimi, iptal, düzenleme)

[ ] Randevu yönetim paneli (Admin Panel).

[ ] SMS entegrasyonu (Twilio/NetGSM)

[ ] Müşteri yorumları ve puanlama sistemi

[ ] WhatsApp API entegrasyonu.

👩‍💻 Geliştirici
Gizem Can Master's in Economics | Data Analyst | Aspiring AI Developer

GitHub: https://github.com/gizemcns

LinkedIn: [www.linkedin.com/in/gizemcanbayındırr]

⭐ Not

Bu proje bir demo değil, gerçek hayatta kullanılabilecek şekilde tasarlanmıştır. Gerekmesi durumunda frontend, otomasyon ve deployment süreçlerinin bir bütün olarak ele alındığı portfolyo odaklı çalışma gerçek bir uygulama olarak bir işletmeye entegre edilebilir.
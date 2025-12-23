import { useState } from "react";

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      time: (form.elements.namedItem("time") as HTMLSelectElement).value,
    };

    try {
      const response = await fetch(
        "https://gizemcanbayindir.app.n8n.cloud/webhook/randevu-formu",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Randevunuz başarıyla oluşturuldu 🎉");
        form.reset();
      } else {
        alert("Gönderim başarısız");
      }
    } catch (err) {
      alert("Bir hata oluştu");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
          Randevu Oluştur
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-900 p-8 rounded-xl"
        >
          <input
            name="name"
            placeholder="Ad Soyad"
            required
            className="px-4 py-3 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-yellow-400"
          />

          <input
            name="phone"
            placeholder="Telefon"
            required
            className="px-4 py-3 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-yellow-400"
          />

          <input
            name="email"
            type="email"
            placeholder="E-posta"
            required
            className="px-4 py-3 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-yellow-400"
          />

          <select
            name="service"
            required
            className="px-4 py-3 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-yellow-400"
          >
            <option value="">Hizmet Seçiniz</option>
            <option>Saç Kesimi</option>
            <option>Saç Boyama</option>
            <option>Makyaj</option>
            <option>Fön</option>
            <option>Manikür</option>
            <option>Cilt Bakımı</option>
            <option>Nail Art</option>
          </select>

          <input
            type="date"
            name="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className="px-4 py-3 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-yellow-400 appearance-auto"
          />

          <select
            name="time"
            required
            className="px-4 py-3 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-yellow-400"
          >
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
          </select>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded transition"
            >
              {loading ? "Gönderiliyor..." : "Randevu Oluştur"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

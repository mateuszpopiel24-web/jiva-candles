"use client";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center">
      <h1 className="text-4xl font-playfair mb-6">Skontaktuj się ze mną 💌</h1>
      <p className="text-[#3C2A1E]/80 mb-12">
        Masz pytanie o świece, rytuały lub współpracę? Napisz do mnie.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Dziękuję za wiadomość! 💛");
          setMessage("");
        }}
        className="space-y-6 max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Twoje imię"
          required
          className="w-full border border-[#EBD8C3] rounded-full px-5 py-3"
        />
        <input
          type="email"
          placeholder="Twój e-mail"
          required
          className="w-full border border-[#EBD8C3] rounded-full px-5 py-3"
        />
        <textarea
          placeholder="Twoja wiadomość..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full border border-[#EBD8C3] rounded-2xl px-5 py-3"
        />
        <button
          type="submit"
          className="bg-[#D2A85E] text-white px-8 py-3 rounded-full hover:bg-[#E7C38D] transition-all"
        >
          Wyślij wiadomość ✨
        </button>
      </form>
    </div>
  );
}

"use client";
export default function SelectOption({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string;
  options: string[];
  selected: string;
  setSelected: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-[#3C2A1E]">{label}</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border border-[#EBD8C3] rounded-full px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-[#D2A85E]/40"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

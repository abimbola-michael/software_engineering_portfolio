import { useState } from "react";

export default function AppTextInput({
  placeHolder,
  onChanged,
  isFull,
}: {
  placeHolder: string;
  onChanged: (text: string) => void;
  isFull?: boolean;
}) {
  const [value, setValue] = useState("");
  return (
    <div className={`w-full md:w-[${isFull ? "100%" : "48%"}] py-[1%]`}>
      {isFull ? (
        <textarea
          placeholder={placeHolder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChanged(e.target.value);
          }}
          className="w-full px-4 py-2 rounded-2xl outline-none focus:outline-primary border-stone-400 border-2 outline-offset-0 focus:border-primary"
        />
      ) : (
        <input
          placeholder={placeHolder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChanged(e.target.value);
          }}
          type={
            placeHolder === "Email Address"
              ? "email"
              : placeHolder === "Phone Number"
              ? "tel"
              : "text"
          }
          className="w-full px-4 py-2 rounded-2xl outline-none focus:outline-primary border-stone-400 border-2 outline-offset-0 focus:border-primary"
        />
      )}
    </div>
  );
}

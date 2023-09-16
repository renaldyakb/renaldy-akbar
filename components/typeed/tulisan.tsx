import Head from "next/head";
import TypingEffect from "@/components/typeed/typing-hero";

export default function Tulisan() {
  const textStrings = ["Renaldy Akbar."];

  return (
    <>
      <div>
        <TypingEffect Hero={textStrings} />
      </div>
    </>
  );
}

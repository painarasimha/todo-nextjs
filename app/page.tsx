import Image from "next/image";
import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SignIn />
    </div>
  );
}

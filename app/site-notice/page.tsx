import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | Persönliche Führung",
  };

export default function SiteNotice() {
    return (
        <section className="flex items-center justify-center h-screen">
            <h1 className="font-light text-4xl">Impressum</h1>
        </section>
    );
}
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | Persönliche Führung",
  };

export default function SiteNotice() {
    return (
        <section className="container min-h-dvh mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Impressum</h1>
            <p>
                Philip Jurke<br />
                ABC Str. 123<br />
                01234 Leipzig<br />
            </p>
        </section>
    );
}
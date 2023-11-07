import Image from "next/image";
import Link from "./components/Link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Home2() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center bg-[url('/assets/background.jpg')] bg-cover bg-center">
        <article className="flex flex-col items-center justify-center gap-4 backdrop-blur-lg p-6 shadow-lg rounded-2xl text-slate-100 m-2">
          <header>
            <Image
              src="/assets/logo-white.png"
              width={500}
              height={500}
              alt="RO/A Logo"
              className="px-2 aspect-auto"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="text-uppercase text-3xl">
                SITE UNDER CONSTRUCTION
              </h2>
              <p className="text-xl">
                In the meantime you can listen to my latest mix.
              </p>
            </div>
          </header>
          <div className="p-6 rounded-lg">
            <iframe
              className="rounded-lg aspect-video lg:h-96 h-3/4 w-full"
              src="https://www.youtube.com/embed/mW2l57Ih3Oc?si=RFxOzLI6v10Dvog9" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
          </div>
          <footer className="flex flex-row items-center justify-center gap-x-4">
            <Link
              content={<Facebook absoluteStrokeWidth />}
              title="facebook"
              href="https://facebook.com/roiadnb"
            />
            <Link
              content={<Instagram />}
              title="instagram"
              href="https://instagram.com/roiadnb"
            />
            <Link
              content={<Youtube />}
              title="youtube"
              href="https://youtube.com/@roiadnb"
            />
          </footer>
        </article>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "./components/Link";

export default function Home2() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center bg-[url('/assets/background.jpg')] bg-cover bg-center">
        <article className="flex flex-col items-center justify-center gap-4 backdrop-blur-lg p-6 shadow-lg rounded-2xl">
          <header>
            <Image
              src="/assets/logo-white.png"
              width={500}
              height={500}
              alt="RO/A Logo"
              className="px-2 aspect-auto"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-uppercase text-3xl">
                SITE UNDER CONSTRUCTION
              </h2>
              <p className="text-xl">
                In the meantime you can listen to my latest mix.
              </p>
            </div>
          </header>
          <div className="p-6 rounded-lg backdrop-blur-lg">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3xg5mw_z0K0?si=IGMsyHXwCVYB8w_I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <footer className="flex flex-col items-center justify-center gap-x-4">
            <Link title="facebook" href="https://facebook.com/roiadnb" />
            <Link title="instagram" href="https://instagram.com/roiadnb" />
            <Link title="youtube" href="https://youtube.com/@roiadnb" />
          </footer>
        </article>
      </div>
    </main>
  );
}

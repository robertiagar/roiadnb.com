import Image from "next/image";

export default function Home2() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center bg-[url('/assets/background.jpg')] bg-cover bg-center">
        <article className="flex flex-col gap-4 backdrop-blur-lg p-6 bg-opacity-25 shadow-sm shadow-white rounded-lg">
          <header>
            <Image
              src="/assets/logo-white.png"
              width={500}
              height={500}
              alt="RO/A Logo"
              className="px-2 aspect-auto"
            />
            <div className="flex flex-col items-center">
              <h2>SITE UNDER CONSTRUCTION</h2>
              <p>In the meantime you can listen to my latest mix.</p>
            </div>
          </header>
          <div className="p-6 rounded-lg backdrop-blur-lg">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2PUgFC9oViY?si=X3oakOOj7_04ICfc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="aspect-video rounded-lg w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <footer className="flex flex-col items-center justify-center gap-x-4">
            <a
              className="hover:text-gray-900 underline"
              href="https://facebook.com/roiadnb"
            >
              facebook
            </a>
            <a
              className="hover:text-gray-900 underline"
              href="https://instagram.com/roiadnb"
            >
              instagram
            </a>
            <a
              className="hover:text-gray-900 underline"
              href="https://youtube.com/@roiadnb"
            >
              youtube
            </a>
          </footer>
        </article>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-black">TSMA</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 border rounded-lg hover:bg-emerald-900 text-gray-950  ">
            Panier
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Inscription
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="/public/sincerely-media-9ShY-Tq70Mc-unsplash.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bienvenue sur TSMA
          </h2>
          <p className="mb-6 text-lg">
            Découvrez nos meilleurs produits avec style
          </p>
          <button className="text-lg px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200">
            Acheter maintenant
          </button>
        </div>
      </section>

      
      <section className="px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-10 text-black">Nos Produits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <div className="relative h-64 mb-4">
                <Image
                  src={`/images/public/sincerely-media-9ShY-Tq70Mc-unsplash${item}.jpg`}
                  alt="Produit"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Produit {item}</h4>
              <p className="text-gray-600 mb-4">
                Description rapide du produit.
              </p>
              <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Acheter
              </button>
            </div>
          ))}
        </div>
      </section>

      
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 TSMA - Tous droits réservés</p>
      </footer>
    </div>
  );
}

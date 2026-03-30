          "use client";
          import Image from "next/image";
          import Link from "next/link";
          import { ShoppingCartIcon } from "@heroicons/react/24/outline";

          export default function LandingPage() {
            return (
              <div>
                {/* HEADER */}
                <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white shadow-md">
                  <h1 className="text-2xl font-bold text-emerald-700">TSMA</h1>

                  <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <Link
                      href="/"
                      className="hover:text-emerald-600 transition"
                    >
                      Accueil
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-emerald-600 transition"
                    >
                      À propos
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-emerald-600 transition"
                    >
                      Contact
                    </Link>
                  </nav>

                  <div className="flex items-center gap-4">
                    <button className="relative p-2 text-gray-700 hover:text-emerald-600 transition">
                      <ShoppingCartIcon className="h-6 w-6" />
                      <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                        0
                      </span>
                    </button>

                    <button className="px-4 py-2 border border-emerald-700 text-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition">
                      Connexion
                    </button>

                    <button className="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition">
                      Inscription
                    </button>
                  </div>
                </header>

                <main className="bg-white">
                  {/* HERO */}
                  <section className="relative h-[500px] flex items-center justify-center text-center text-white">
                    <Image
                      src="/sincerely-media-9ShY-Tq70Mc-unsplash.jpg"
                      alt="Hero"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75"></div>

                    <div className="relative z-10 max-w-xl">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Bienvenue sur TSMA
                      </h2>
                      <p className="mb-6 text-lg text-gray-200">
                        Découvrez nos meilleurs produits avec style
                      </p>
                      <button className="text-lg px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                        Acheter maintenant
                      </button>
                    </div>
                  </section>

                  {/* PRODUITS */}
                  <section className="px-5 py-16">
                    <h3 className="text-3xl font-bold text-center px-56 mb-10 text-gray-800 ">
                      Nos Produits Populaires
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          id: 1,
                          name: "pantalon cargo",
                          description:
                            "Un pantalon stylé pour toutes vos aventures.",
                          image: "/cargo1.jpg",
                        },
                        {
                          id: 2,
                          name: "Chaussure Dior",
                          description:
                            "Une chaussure chicque pour compléter votre look quotidien.",
                          image: "/dior.jpg",
                        },
                        {
                          id: 3,
                          name: "Chemise Elegante",
                          description:
                            "Une chemise elegante pour vos sorties .",
                          image: "/chemise2.jpg",
                        },
                      ].map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                          <div className="relative h-64">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover hover:scale-105 transition duration-300"
                            />
                          </div>

                          <div className="p-4">
                            <h4 className="text-xl font-semibold mb-2 text-gray-800">
                              {product.name}
                            </h4>

                            <p className="text-gray-600 mb-4">
                              {product.description}
                            </p>

                            <button className="w-full py-2 bg-c text-white rounded-lg hover:bg-emerald-700 transition">
                              Acheter
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="px-5 py-10 pb-16">
                    <h3 className="text-3xl text-center font-bold text-black pb-6">
                      Nouvelles Arrivages
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          id: 1,
                          name: "Rolex",
                          description: "Une montre a votre hauteur.",
                          image: "/rolex.jpg",
                        },
                        {
                          id: 2,
                          name: "Lunette de soleil",
                          description: "Une paire de lunette stylee.",
                          image: "/lunette.jpg",
                        },
                        {
                          id: 3,
                          name: "Echarpe",
                          description:
                            "Une echarpe confortable qui vous protegera du froid.",
                          image: "/echarpe.jpg",
                        },
                      ].map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                          <div className="relative h-64">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover hover:scale-105 transition duration-300"
                            />
                          </div>

                          <div className="p-4">
                            <h4 className="text-xl font-semibold mb-2 text-gray-800">
                              {product.name}
                            </h4>
                            <p className="text-gray-600 mb-4">
                              {product.description}
                            </p>
                            <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                              Acheter
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="px-5 py-10 pb-5">
                    <h3 className="text-3xl text-center font-bold text-black pb-6">
                      En promotion
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          id: 1,
                          name: "chapeau",
                          description: "",
                          ancien: 10000,
                          nouveau: 5000,

                          image: "/chapeau.jpg",
                        },
                        {
                          id: 2,
                          name: "Saccoche",
                          description: ".",
                          image: "/sacoche.jpg",
                          ancien: "10000",
                          nouveau: "6000",
                        },
                        {
                          id: 3,
                          name: "Jaket",
                          description: "",
                          image: "/jaket.jpg",
                          ancien: "12000",
                          nouveau: "8000",
                        },
                      ].map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                          <div className="relative h-64">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover hover:scale-105 transition duration-300"
                            />
                          </div>

                          <div className="p-4">
                            <h4 className="text-xl font-semibold mb-2 text-gray-800">
                              {product.name}
                            </h4>
                            <p className="text-gray-600 mb-4">
                              {product.description}
                            </p>

                            <div className="flex items-center gap-2 mb-4">
                              <span className="line-through text-gray-400">
                                {product.ancien} FCFA
                              </span>
                              <span className="text-emerald-600 font-bold">
                                {product.nouveau} FCFA
                              </span>
                            </div>

                            <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                              Acheter
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <div className="text-center py-12 pb-20">
                    <button className="text-amber-50 bg-emerald-700 border- px-4 py-3 rounded-4xl hover:bg-emerald-600 transition duration-300">
                      Decouvrez notre catalogue
                    </button>
                  </div>
                </main>

                {/* FOOTER */}
                <footer className="bg-gray-900 text-gray-300 px-8 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        TSMA
                      </h2>
                      <p className="text-gray-400">
                        Votre boutique en ligne pour des produits tendances,
                        élégants et accessibles.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Liens utiles
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/" className="hover:text-white">
                            Accueil
                          </a>
                        </li>
                        <li>
                          <a href="/about" className="hover:text-white">
                            À propos
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className="hover:text-white">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Conditions générales
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Contact
                      </h3>
                      <div>
                        <a href="mailto:migueldjala090@gmail.com">
                          migueldjala090
                        </a>
                      </div>
                      <div>
                        <a href="tel:+237682769628">682769628</a>

                        <p className="text-gray-400 mt-2">Douala, Cameroun</p>
                      </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Newsletter
                      </h3>
                      <p className="text-gray-400 mb-3">
                        Recevez nos offres et nouveautés.
                      </p>
                      <div className="flex">
                        <input
                          type="email"
                          placeholder="Votre email"
                          className="w-full px-3 py-2 rounded-l-lg text-black"
                        />
                        <button className="bg-emerald-600 px-4 py-2 rounded-r-lg text-white hover:bg-emerald-700">
                          OK
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RÉSEAUX SOCIAUX */}
                  <div className="flex justify-center gap-6 mt-10 text-xl">
                    <a href="#" className="hover:text-white">
                      Facebook
                    </a>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/237682769628?text=Bonjour%20je%20veux%20plus%20d'informations"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* COPYRIGHT */}
                  <div className="text-center text-gray-500 mt-6 text-sm">
                    © 2026 TSMA - Tous droits réservés
                  </div>
                </footer>
              </div>
            );
          }

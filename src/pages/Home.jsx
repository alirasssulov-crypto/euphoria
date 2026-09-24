import React from "react";
import hero from "../assets/hero.png"; 
import banner from "../assets/Banner.png"; 
import product from "../assets/Product.png"; 
import breezy from "../assets/Breezy Summer Style.png"; 
import cargo from "../assets/Cargo Joggers.png"; 
import hawaiian from "../assets/Hawaiian Shirts.png"; 
import oversized from "../assets/Oversized T-Shirts.png"; 
import printed from "../assets/Printed T-Shirt.png"; 
import urban from "../assets/Urban Shirts.png"; 
import brands from "../assets/Top Brands Deal.png"; 
import photo from "../assets/photographer-white-background.png"; 
import rectangle20 from "../assets/Rectangle 20.png"; 
import rectangle21 from "../assets/Rectangle 21.png"; 
import rectangle22 from "../assets/Rectangle 22.png"; 
import rectangle25 from "../assets/Rectangle 25.png"; 
import rectangle28 from "../assets/Rectangle 28.png";

export default function Home() { 
  const products = [ 
    { 
      image: cargo, title: "Cargo Joggers", 
      price: "$49.99", 
    }, 
    { 
      image: hawaiian, title: "Hawaiian Shirts", 
      price: "$39.99", 
    }, 
    { 
      image: oversized, title: "Oversized T-Shirts", 
      price: "$29.99", 
    }, 
    { 
      image: printed, 
      title: "Printed T-Shirt", 
      price: "$24.99", 
    }, 
    { 
      image: urban, title: "Urban Shirts", 
      price: "$44.99", 
    }, 
    { 
      image: product, title: "New Collection", 
      price: "$59.99", 
    }, 
  ];
return ( 
<main className="min-h-screen bg-white text-gray-900 overflow-hidden"> 
  <style>{` 
  @keyframes fadeUp { 
  from { 
  opacity: 0; transform: translateY(35px); 
  }
   to { 
   opacity: 1; 
   transform: translateY(0); 
    } 
   }
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .fade-up {
      animation: fadeUp 0.8s ease forwards;
    }

    .floating {
      animation: float 4s ease-in-out infinite;
    }

    .brand-scroll {
      animation: scroll 18s linear infinite;
    }

    .product-card {
      transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 45px rgba(0,0,0,0.12);
    }

    .product-image {
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-image {
      transform: scale(1.08);
    }
  `}</style>

  {/* HERO */}
  <section className="relative min-h-[650px] bg-[#f5f3ef]">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:px-10">
      <div className="fade-up">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          New Collection
        </p>

        <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          WE MADE YOUR
          <br />
          <span className="text-gray-400">EVERYDAY</span>
          <br />
          FASHION BETTER
        </h1>

        <p className="mt-7 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
          Discover modern clothes designed for everyday comfort,
          confidence and style.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:scale-105 hover:bg-gray-800">
            Shop Now
          </button>

          <button className="rounded-full border border-black px-8 py-4 text-sm font-bold transition hover:bg-black hover:text-white">
            Explore
          </button>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="floating relative w-full max-w-[520px]">
          <img
            src={hero}
            alt="Fashion collection"
            className="h-[500px] w-full rounded-[35px] object-cover shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-6 py-4 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Trending
              </p>
            <p className="text-lg font-bold">Summer Collection</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* BRANDS */}
  <section className="overflow-hidden border-y border-gray-200 py-7">
    <div className="brand-scroll flex w-max gap-16">
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <span className="text-xl font-bold">URBAN STYLE</span>
          <span className="text-xl font-bold">NEW ERA</span>
          <span className="text-xl font-bold">MODERN WEAR</span>
          <span className="text-xl font-bold">EUPHORIA</span>
          <span className="text-xl font-bold">STREET MODE</span>
        </React.Fragment>
      ))}
    </div>
  </section>

  {/* CATEGORIES */}
  <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
    <div className="mb-10 flex items-end justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Discover
        </p>
        <h2 className="mt-2 text-4xl font-black md:text-5xl">
          Shop by style
        </h2>
      </div>

      <button className="hidden rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold md:block">
        View all
      </button>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <Category image={breezy} title="Summer Style" />
      <Category image={oversized} title="Oversized" />
      <Category image={urban} title="Urban Shirts" />
      <Category image={cargo} title="Cargo Joggers" />
    </div>
  </section>

  {/* BANNER */}
  <section className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="relative overflow-hidden rounded-[35px]">
      <img
        src={banner}
        alt="Fashion banner"
        className="h-[350px] w-full object-cover md:h-[430px]"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex items-center px-8 md:px-16">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
            Limited offer
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            TOP BRANDS
            <br />
            DEAL
          </h2>

          <button className="mt-7 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:scale-105">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* PRODUCTS */}
  <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Our products
      </p>

      <h2 className="mt-2 text-4xl font-black md:text-5xl">
        Popular right now
      </h2>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <div
          key={item.title}
          className="product-card overflow-hidden rounded-[28px] bg-gray-100"
        >
          <div className="h-[380px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="product-image h-full w-full object-cover"
            />
          </div>

          <div className="bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Modern collection
                </p>
              </div>

              <span className="font-black">{item.price}</span>
            </div>

            <button className="mt-5 w-full rounded-full bg-black py-3 text-sm font-bold text-white transition hover:bg-gray-800">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* IMAGE SECTION */}
  <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10"></section>
  <div className="grid gap-5 md:grid-cols-2">
      <div className="group relative overflow-hidden rounded-[30px]">
        <img
          src={photo}
          alt="Fashion model"
          className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-4">
          <p className="text-sm text-gray-500">New season</p>
          <p className="font-bold">Everyday Fashion</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <img
          src={rectangle20}
          alt=""
          className="h-[240px] w-full rounded-[25px] object-cover transition duration-500 hover:scale-[1.03]"
        />

        <img
          src={rectangle21}
          alt=""
          className="h-[240px] w-full rounded-[25px] object-cover transition duration-500 hover:scale-[1.03]"
        />

        <img
          src={rectangle22}
          alt=""
          className="h-[240px] w-full rounded-[25px] object-cover transition duration-500 hover:scale-[1.03]"
        />

        <img
          src={rectangle25}
          alt=""
          className="h-[240px] w-full rounded-[25px] object-cover transition duration-500 hover:scale-[1.03]"
        />
      </div>
    </div>

   {/* CTA */}
  <section className="mx-6 mb-10 rounded-[35px] bg-black px-6 py-20 text-center text-white lg:mx-auto lg:max-w-7xl">
    <h2 className="text-4xl font-black md:text-6xl">
      FIND YOUR STYLE
    </h2>

    <p className="mx-auto mt-5 max-w-xl text-gray-400">
      Fresh looks, modern designs and comfortable clothes for every day.
    </p>

    <button className="mt-8 rounded-full bg-white px-9 py-4 text-sm font-bold text-black transition hover:scale-105">
      Start Shopping
    </button>
  </section>
 </main> 
);
}
function Category({ image, title }) { return ( <div className="group relative overflow-hidden rounded-[28px]"> <img
src={image}
alt={title}
className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-110"
/>
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
    <h3 className="text-xl font-bold text-white">{title}</h3>

    <button className="mt-2 text-sm font-medium text-white/80 transition group-hover:text-white">
      Explore →
    </button>
  </div>
</div>
); 
}
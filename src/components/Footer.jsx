export default function Footer() { return ( <footer className="mt-20 bg-[#292929] text-white">
  <div className="mx-auto max-w-7xl px-6 py-14">

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* NEED HELP */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          Need Help
        </h3>

        <div className="grid gap-3 text-sm text-gray-300">

          <button className="text-left hover:text-white">
            Contact Us
          </button>

          <button className="text-left hover:text-white">
            Track Order
          </button>

          <button className="text-left hover:text-white">
            Returns & Refunds
          </button>

          <button className="text-left hover:text-white">
            FAQ's
          </button>

          <button className="text-left hover:text-white">
            Career
          </button>

        </div>
      </div>

      {/* COMPANY */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          Company
        </h3>

        <div className="grid gap-3 text-sm text-gray-300">

          <button className="text-left hover:text-white">
            About Us
          </button>

          <button className="text-left hover:text-white">
            Euphoria Blog
          </button>

          <button className="text-left hover:text-white">
            Euphorian
          </button>

          <button className="text-left hover:text-white">
            Collaboration
          </button>

          <button className="text-left hover:text-white">
            Media
          </button>

        </div>
      </div>

      {/* MORE INFO */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          More Info
        </h3>

        <div className="grid gap-3 text-sm text-gray-300">

          <button className="text-left hover:text-white">
            Terms and Conditions
          </button>

          <button className="text-left hover:text-white">
            Privacy Policy
          </button>

          <button className="text-left hover:text-white">
            Shipping Policy
          </button>

          <button className="text-left hover:text-white">
            Sitemap
          </button>

        </div>
      </div>

      {/* LOCATION */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          Location
        </h3>

        <p className="text-sm leading-7 text-gray-300">
          support@euphoria.in
        </p>

        <p className="text-sm leading-7 text-gray-300">
          Eklhingpura Chouraha,
          Ahmedabad Main Road
        </p>

        <p className="text-sm leading-7 text-gray-300">
          Near Mahadev Hotel,
          Udaipur, India
        </p>
      </div>

    </div>

    {/* APP */}
    <div className="mt-12 flex flex-col justify-between gap-8 border-t border-gray-600 pt-8 md:flex-row">

      <div>
        <h3 className="mb-4 font-bold">
          Follow us
        </h3>

        <div className="flex gap-3">

          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black hover:bg-violet-200">
            f
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black hover:bg-violet-200">
            ◎
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black hover:bg-violet-200">
            X
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black hover:bg-violet-200">
            in
          </button>

        </div>
      </div>

      <div>
        <h3 className="mb-4 font-bold">
          Download The App
        </h3>

        <div className="flex gap-3">

          <button className="rounded-xl border border-gray-500 px-5 py-3 text-sm hover:bg-white/10">
            ▶ Google Play
          </button>

          <button className="rounded-xl border border-gray-500 px-5 py-3 text-sm hover:bg-white/10">
             App Store
            </button>

        </div>
      </div>

    </div>

    {/* POPULAR */}
    <details className="mt-10 border-y border-gray-600 py-5">

      <summary className="cursor-pointer font-semibold">
        Popular Categories
      </summary>

      <div className="mt-5 grid gap-3 text-sm text-gray-400 sm:grid-cols-3">

        <span>Men's T-Shirts</span>
        <span>Women's Hoodies</span>
        <span>Joggers</span>
        <span>Activewear</span>
        <span>Oversized T-Shirts</span>
        <span>Summer Collection</span>

      </div>

    </details>

    <p className="pt-8 text-center text-xs text-gray-500">
      Copyright © 2026 Euphoria. All rights reserved.
    </p>

  </div>

</footer>
); 
}
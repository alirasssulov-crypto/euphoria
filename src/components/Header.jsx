import { useState } from "react"; 
import { Link } from "react-router-dom";

export default function Header() { 
    const [menuOpen, setMenuOpen] = 
    useState(false); 
    const [search, setSearch] = useState("");

const handleSearch = (e) => { 
    e.preventDefault();

if (search.trim()) {
  alert(`Search: ${search}`);
}
};
return ( <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl"> <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-5">
    {/* LOGO */}
    <Link to="/" className="shrink-0">
      <div className="font-serif text-2xl font-bold italic">
        Euphoria
      </div>

      <div className="text-[8px] tracking-[4px] text-gray-500">
        FASHION STORE
      </div>
    </Link>

    {/* NAVIGATION */}
    <nav className="hidden items-center gap-7 lg:flex">
      <Link
        to="/"
        className="text-sm font-semibold text-gray-700 transition hover:text-violet-600"
      >
        Shop
      </Link>

      <a
        href="/#men"
        className="text-sm text-gray-600 transition hover:text-violet-600"
      >
        Men
      </a>

      <a
        href="/#women"
        className="text-sm text-gray-600 transition hover:text-violet-600"
      >
        Women
      </a>

      <a
        href="/#combos"
        className="text-sm text-gray-600 transition hover:text-violet-600"
      >
        Combos
      </a>

      <a
        href="/#joggers"
        className="text-sm text-gray-600 transition hover:text-violet-600"
      >
        Joggers
      </a>
    </nav>

    {/* SEARCH */}
    <form
      onSubmit={handleSearch}
      className="ml-auto hidden w-[230px] md:block"
    >
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-200">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
    </form>

    {/* ICONS */}
    <div className="hidden items-center gap-2 sm:flex">

      {/* Wishlist */}
      <button
        onClick={() => alert("Wishlist")}
        className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-violet-50 hover:text-violet-600"
      >
        ♡
      </button>

      {/* Account */}
      <Link
        to="/account"
        className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-violet-50 hover:text-violet-600"
      >
        ♙
      </Link>

      {/* Cart */}
      <button
        onClick={() => alert("Your cart is empty")}
        className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-violet-50 hover:text-violet-600"
      >
        🛒
      </button>

    </div>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="ml-2 rounded-xl border border-gray-200 p-2 lg:hidden"
    >
      ☰
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="border-t border-gray-200 bg-white p-5 lg:hidden">

      <form onSubmit={handleSearch} className="mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full rounded-xl bg-gray-100 px-4 py-3 outline-none"
        />
      </form>

      <div className="grid gap-1">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-3 py-3 hover:bg-gray-100"
        >
          Shop
        </Link>

        <a
          href="/#men"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-3 py-3 hover:bg-gray-100"
        >
          Men
        </a>

        <a href="/#women"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-3 py-3 hover:bg-gray-100"
        >
          Women
        </a>

        <a
          href="/#combos"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-3 py-3 hover:bg-gray-100"
        >
          Combos
        </a>

        <a
          href="/#joggers"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-3 py-3 hover:bg-gray-100"
        >
          Joggers
        </a>

        <Link
          to="/account"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-3 py-3 hover:bg-gray-100"
        >
          My Account
        </Link>

      </div>
    </div>
  )}
</header>
); 
}
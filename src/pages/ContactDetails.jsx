import { useState } from "react";
export default function ContactDetails() 
{
const [profile, setProfile] = 
useState({ 
    name: "Jhanvi Shah", email: "jhanvi@gmail.com", phone: "8980252445", password: "••••••••", 
});
const [addresses, setAddresses] = useState([ { id: 1, name: "Jhanvi shah", phone: "8980252445", address: "1/4 Pragatinar Flats, opp. Jain derasar, near Jain derasar, Vijaynagar road", type: "Home", shipping: true, },
{
  id: 2,
  name: "Jhanvi shah",
  phone: "8980252445",
  address:
    "1/4 Pragatinar Flats, opp. Jain derasar, near Jain derasar, Vijaynagar road",
  type: "Home",
  billing: true,
},

{
  id: 3,
  name: "Jhanvi shah",
  phone: "8980252445",
  address:
    "1/4 Pragatinar Flats, opp. Jain derasar, near Jain derasar, Vijaynagar road",
  type: "Office",
},

{
  id: 4,
  name: "Jhanvi shah",
  phone: "8980252445",
  address:
    "1/4 Pragatinar Flats, opp. Jain derasar, near Jain derasar, Vijaynagar road",
  type: "Home 2",
},
]);
const [showAdd, setShowAdd] = useState(false);
const [newAddress, setNewAddress] = useState({ name: "", phone: "", address: "", type: "Home", });
const changeInfo = (field) => {
const value = prompt(
  `Change ${field}`,
  profile[field]
);

if (value) {
  setProfile({
    ...profile,
    [field]: value,
  });
}
};
const removeAddress = (id) => { setAddresses( addresses.filter((item) => item.id !== id) ); };
const editAddress = (item) => {
const value = prompt(
  "Edit address",
  item.address
);

if (!value) return;

setAddresses(
  addresses.map((address) =>
    address.id === item.id
      ? { ...address, address: value }
      : address
  )
);
};
const setDefaultShipping = (id) => {
setAddresses(
  addresses.map((item) => ({
    ...item,
    shipping: item.id === id,
  }))
);
};
const addAddress = (e) => {
e.preventDefault();

if (
  !newAddress.name ||
  !newAddress.phone ||
  !newAddress.address
) {
  return;
}

setAddresses([
  ...addresses,
  {
    ...newAddress,
    id: Date.now(),
  },
]);

setNewAddress({
  name: "",
  phone: "",
  address: "",
  type: "Home",
});

setShowAdd(false);
};
return ( <main className="mx-auto max-w-7xl px-5 py-8">
  {/* BREADCRUMB */}
  <div className="mb-10 text-sm text-gray-400">

    Home

    <span className="mx-2">
      ›
    </span>

    My Account

    <span className="mx-2">
      ›
    </span>

    <span className="text-gray-700">
      Personal Info
    </span>

  </div>

  <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

    {/* SIDEBAR */}
    <aside>

      <h1 className="text-xl font-black">

        <span className="mr-2 inline-block h-7 w-1 rounded-full bg-violet-600" />

        Hello Jhanvi

      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Welcome to your Account
      </p>

      <nav className="mt-8 grid gap-2">

        <button className="rounded-xl px-4 py-3 text-left text-sm text-gray-500 hover:bg-gray-100">
          My orders
        </button>

        <button className="rounded-xl px-4 py-3 text-left text-sm text-gray-500 hover:bg-gray-100">
          Wishlist
        </button>

        <button className="rounded-xl bg-gray-100 px-4 py-3 text-left text-sm font-semibold">
          My info
        </button>

        <button
          onClick={() => alert("Signed out")}
          className="rounded-xl px-4 py-3 text-left text-sm text-gray-500 hover:bg-gray-100"
        >
          Sign out
        </button>

      </nav>

    </aside>

    {/* CONTENT */}
    <section>

      <h2 className="text-2xl font-black">
        My Info
      </h2>

      <h3 className="mt-8 text-lg font-bold">
        Contact Details
      </h3>

      <div className="mt-4 divide-y border-y">

        <InfoRow
          title="Your Name"
          value={profile.name}
          onChange={() => changeInfo("name")}
        />

        <InfoRow
          title="Email Address"
          value={profile.email}
          onChange={() => changeInfo("email")}
        />

        <InfoRow
          title="Phone Number"
          value={profile.phone}
          onChange={() => changeInfo("phone")}
        />
        <InfoRow
          title="Password"
          value={profile.password}
          onChange={() => changeInfo("password")}
        />

      </div>

      {/* ADDRESS */}
      <div className="mt-10 flex items-center justify-between">

        <h3 className="text-lg font-bold">
          Address
        </h3>

        <button
          onClick={() => setShowAdd(true)}
          className="rounded-lg px-4 py-2 text-sm font-semibold transition hover:bg-gray-100"
        >
          Add New
        </button>

      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">

        {addresses.map((item) => (

          <article
            key={item.id}
            className="rounded-2xl bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex justify-between">

              <div>

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="mt-2 text-xs text-gray-500">
                  {item.phone}
                </p>

              </div>

              <span className="rounded-md bg-white px-3 py-1 text-xs">
                {item.type}
              </span>

            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              {item.address}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              {item.billing && (
                <span className="rounded-md border bg-white px-2 py-1 text-[11px]">
                  Default billing address
                </span>
              )}

              {item.shipping && (
                <span className="rounded-md border bg-white px-2 py-1 text-[11px]">
                  Default shipping address
                </span>
              )}

            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold">

              <button
                onClick={() => removeAddress(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>

              <button
                onClick={() => editAddress(item)}
                className="hover:text-violet-600 hover:underline"
              >
                Edit
              </button>

              {!item.shipping && (
                <button
                  onClick={() =>
                    setDefaultShipping(item.id)
                  }
                  className="hover:text-violet-600"
                >
                  Set as default
                </button>
              )}

            </div>

          </article>

        ))}

      </div>

    </section>

  </div>

  {/* ADD ADDRESS MODAL */}
  {showAdd && (

    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/50 p-5">

      <form
        onSubmit={addAddress}
        className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl"
      >

        <div className="flex justify-between">

          <h3 className="text-xl font-black">
            Add New Address
          </h3>

          <button
            type="button"
            onClick={() => setShowAdd(false)}
            className="rounded-full bg-gray-100 px-3 py-1"
          >
            ×
          </button>

        </div>

        <div className="mt-6 grid gap-4">

          <input
            className="rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            placeholder="Name"
            value={newAddress.name}
            onChange={(e) =>
              setNewAddress({
                ...newAddress,
                name: e.target.value,
              })
            }
          />

          <input
            className="rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            placeholder="Phone"
            value={newAddress.phone}
            onChange={(e) =>
              setNewAddress({
                ...newAddress,
                phone: e.target.value,
              })
            }
          />

          <textarea
className="min-h-28 rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            placeholder="Full address"
            value={newAddress.address}
            onChange={(e) =>
              setNewAddress({
                ...newAddress,
                address: e.target.value,
              })
            }
          />

          <select
            className="rounded-xl border px-4 py-3"
            value={newAddress.type}
            onChange={(e) =>
              setNewAddress({
                ...newAddress,
                type: e.target.value,
              })
            }
          >
            <option>Home</option>
            <option>Office</option>
            <option>Other</option>
          </select>

        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-xl bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-violet-600"
        >
          Save Address
        </button>

      </form>

    </div>

  )}

</main>
); }
function InfoRow({ title, value, onChange }) {
return ( <div className="flex items-center justify-between py-5">
  <div>

    <p className="text-xs text-gray-500">
      {title}
    </p>

    <p className="mt-1 text-sm font-medium">
      {value}
    </p>

  </div>

  <button
    onClick={onChange}
    className="text-sm font-semibold hover:text-violet-600"
  >
    Change
  </button>

</div>
); 
}
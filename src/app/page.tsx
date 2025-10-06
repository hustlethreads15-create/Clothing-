import Image from "next/image";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=8");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <div key={p.id} className="rounded-lg shadow hover:shadow-lg p-4">
            <Image
              src={p.image}
              alt={p.title}
              width={300}
              height={400}
              className="w-full h-72 object-contain"
            />
            <h2 className="mt-2 text-sm font-semibold line-clamp-2">{p.title}</h2>
            <p className="mt-1 text-gray-600">${p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

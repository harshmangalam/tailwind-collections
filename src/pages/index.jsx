import Link from "next/link";
import data from "../site-data.json";
export default function index() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-pink-500 min-h-screen px-4 md:px-0">
      <div className="container mx-auto py-4">
        <h1 className="text-5xl font-bold text-gray-100">Tailwind Collections</h1>
        <p className="text-xl text-gray-200">
          collections of wide variety of component from different web apps
        </p>
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 my-6">
          {data.collections.map((component) => (
            <Link href={component.link} passHref key={component.link}>
              <a>
                <article className="border-4 shadow-md hover:shadow-xl transition duration-300 rounded-md">
                  <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                    <img className="w-full h-72 object-cover" src={component.image} alt={component.name} />
                  </div>
                  <div className="px-2 py-4">
                    <h6 className="text-xl font-semibold">{component.name}</h6>
                    <p className="text-gray-600">{component.createdAt}</p>
                  </div>
                </article>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

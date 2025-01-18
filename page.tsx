import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Section 1: Hero Image */}
      <section className="relative w-11/12 mx-auto h-[500px] z-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Auto Service Hero"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </section>

      {/* Section 2: Quotation */}
      <section className="text-center px-4">
        <blockquote className="text-2xl font-bold italic">
          "Quality is not an act, it is a habit. We make quality auto service
          our habit."
        </blockquote>
      </section>

      {/* Section 3: Service Images */}
      <section className="flex flex-wrap justify-center gap-4">
        {["engine", "suspension", "steering", "brakes", "electrical"].map(
          (service) => (
            <Link
              href={`/services/${service}`}
              key={service}
              className="w-1/6 min-w-[150px]"
            >
              <div className="relative h-40 p-1">
                <Image
                  src={`/images/${service}-service.jpg`}
                  alt={`${service} Service`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </Link>
          )
        )}
      </section>

      {/* Section 4: About CEO */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/ceo-image.jpg"
            alt="CEO"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">About Our CEO</h2>
          <p>
            John Doe, our CEO, has over 20 years of experience in the automotive
            industry. His passion for cars and commitment to customer
            satisfaction have been the driving forces behind our company's
            success. Under his leadership, we've become one of the most trusted
            auto service providers in the region.
          </p>
        </div>
      </section>

      {/* Section 5: Subscribe Form */}
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6 text-gray-600">
            Get the latest updates and offers directly in your inbox. Sign up
            now!
          </p>
          <form>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

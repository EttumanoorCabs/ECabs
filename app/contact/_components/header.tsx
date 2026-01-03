export default function ContactHeader() {
  return (
    <section className="relative bg-white py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block w-16 h-0.5 bg-blue-600 mb-8"></div>
          <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-tight">
            <span className="text-black">Contact</span>
            <span className="text-blue-600"> Us</span>
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for bookings, inquiries, or any assistance
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  'Flex Printing',
  'Wedding Cards',
  'Business Cards',
  'Posters',
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

import { testimonials } from '../data/data';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider mb-2">
            Customer feedback highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What People Say About Me?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
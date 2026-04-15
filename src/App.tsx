import { motion } from "motion/react";
import { MapPin, Phone, Clock, Utensils, ShoppingBag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold">D</div>
          <span className="text-xl font-display font-bold tracking-tight">Dharavi Spice</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
          <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-brand-orange transition-colors">Gallery</a>
          <a href="#location" className="hover:text-brand-orange transition-colors">Location</a>
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">Order Now</Button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-brand-yellow/20 text-brand-orange border-brand-orange/20 hover:bg-brand-yellow/30 px-3 py-1">
            Authentic Dharavi Street Food
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[0.9]">
            TASTE THE <span className="text-brand-orange">SOUL</span> OF MUMBAI
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-lg">
            Experience the vibrant flavors of Dharavi. From spicy Vada Pav to aromatic Biryani, we bring the streets of Mumbai to your plate.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-8 text-lg">
              View Menu
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2">
              Our Story
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/mumbaifood/800/800" 
              alt="Delicious Mumbai Street Food" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-zinc-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Open Until</p>
                <p className="font-display font-bold text-xl">2:00 AM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const InfoSection = () => (
  <section id="about" className="py-20 bg-zinc-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl mb-2">Location</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              60 Feet Road, near Chhota Sion Hospital, Labour Camp, RP Nagar, Dharavi, Mumbai, Maharashtra 400017
            </p>
            <Button variant="link" className="p-0 h-auto mt-4 text-brand-orange">Get Directions</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl mb-2">Contact</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Call us for orders or inquiries:
            </p>
            <p className="text-lg font-bold mt-1">+91 84540 02648</p>
            <p className="text-zinc-400 text-xs mt-1">Recently updated by business</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-4">
              <ShoppingBag size={24} />
            </div>
            <h3 className="text-xl mb-2">Services</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Utensils size={16} className="text-green-500" /> Dine-in
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <ShoppingBag size={16} className="text-green-500" /> Takeaway
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Truck size={16} className="text-green-500" /> No-contact delivery
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const MenuPreview = () => (
  <section id="menu" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
      <h2 className="text-4xl md:text-5xl mb-4">POPULAR DISHES</h2>
      <p className="text-zinc-600 max-w-2xl mx-auto">
        Our most loved street food classics, prepared fresh every day with traditional spices.
      </p>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Special Vada Pav", price: "₹40", img: "vadapav" },
          { name: "Chicken Biryani", price: "₹180", img: "biryani" },
          { name: "Misal Pav", price: "₹60", img: "misalpav" },
          { name: "Masala Chai", price: "₹20", img: "chai" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
              <img 
                src={`https://picsum.photos/seed/${item.img}/400/500`} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <Button className="w-full bg-white text-black hover:bg-zinc-100">Add to Order</Button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h4 className="text-lg">{item.name}</h4>
              <span className="font-bold text-brand-orange">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 bg-brand-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl mb-2">Affordable & Delicious</h3>
            <p className="text-zinc-400">Approx. ₹200–₹400 per person</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">Find on Swiggy</Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">Zomato</Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-20 bg-zinc-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4 uppercase">OUR VIBE</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          A glimpse into the heart of Dharavi Spice. Authentic flavors, vibrant atmosphere, and the joy of street food.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
        {[
          { id: 1, span: "md:col-span-2 md:row-span-2", seed: "restaurant-interior", label: "Our Cozy Corner" },
          { id: 2, span: "col-span-1", seed: "chef-cooking", label: "Expertly Crafted" },
          { id: 3, span: "col-span-1", seed: "street-food-stall", label: "Authentic Setup" },
          { id: 4, span: "md:col-span-2", seed: "spices-market", label: "Fresh Spices" },
          { id: 5, span: "col-span-1 md:row-span-2", seed: "happy-customers", label: "Happy Faces" },
          { id: 6, span: "col-span-1", seed: "samosa-plate", label: "Golden Samosas" },
          { id: 7, span: "col-span-1", seed: "mumbai-street", label: "Dharavi Heart" },
        ].map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl overflow-hidden group ${item.span}`}
          >
            <img
              src={`https://picsum.photos/seed/${item.seed}/800/800`}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-display font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold">D</div>
            <span className="text-xl font-display font-bold tracking-tight">Dharavi Spice</span>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Bringing the authentic taste of Mumbai's street food to the world. Quality, flavor, and tradition in every bite.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase font-bold tracking-wider mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-zinc-600">
            <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a></li>
            <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
            <li><a href="#location" className="hover:text-brand-orange transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase font-bold tracking-wider mb-6">Hours</h4>
          <ul className="space-y-4 text-sm text-zinc-600">
            <li className="flex justify-between"><span>Mon - Sun</span> <span>10:00 AM - 2:00 AM</span></li>
            <li className="text-brand-orange font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
              Open Now
            </li>
          </ul>
        </div>
      </div>
      <Separator className="mb-8 bg-zinc-200" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
        <p>© 2024 Dharavi Spice. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/30">
      <Navbar />
      <main>
        <Hero />
        <InfoSection />
        <MenuPreview />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

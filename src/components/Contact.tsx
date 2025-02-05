import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Mail className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>sgservice@gmail.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>+33 (0) 749570675 </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>123 Data Street, Analytics City</p>
          </div>
        </div>
      </div>
    </div>
  );
};
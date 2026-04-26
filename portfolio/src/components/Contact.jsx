import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-foreground/70 text-lg mb-8">
            Feel free to reach out for collaborations or just to say hi.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary">
                <Mail />
              </div>
              <div>
                <div className="text-sm text-foreground/50">Email</div>
                <div className="font-medium">syedattah4455m@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary">
                <Phone />
              </div>
              <div>
                <div className="text-sm text-foreground/50">Phone</div>
                <div className="font-medium">+92 327 3757876</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary">
                <MapPin />
              </div>
              <div>
                <div className="text-sm text-foreground/50">Location</div>
                <div className="font-medium">Karachi,Pakistan</div>
              </div>
            </div>
          </div>
        </div>

        <form className="glass p-8 rounded-3xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input 
                type="text" 
                placeholder="Syed Attah"
                className="w-full bg-secondary/30 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                placeholder="abc@example.com"
                className="w-full bg-secondary/30 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-secondary/30 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
      
      <footer className="mt-20 pt-10 border-t border-white/5 text-center text-foreground/40 text-sm">
        &copy; {new Date().getFullYear()} Syed M. Attah ur Rehman. All rights reserved.
      </footer>
    </SectionWrapper>
  );
}
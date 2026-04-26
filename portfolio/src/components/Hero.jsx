import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/30 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Open to work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Syed Md <br />
          <span className="text-gradient">Attah ur Rehman</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 px-4">
          Software Engineer and Python Developer. I build clean, efficient, and user-friendly web applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            View My Work <ArrowRight className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/5 transition-all"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  FlaskConical, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Search,
  Calendar,
  GraduationCap,
  Beaker,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  links: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  tags: string[];
  link?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  status: 'Active' | 'Completed';
  tags: string[];
}

// --- Real Data ---
const TEAM: TeamMember[] = [
  {
    name: "Dr. Kerui Li",
    role: "Principal Investigator",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8K3WlZEAAAAJ", // Google Scholar profile photo
    bio: "Assistant Professor",
    links: { linkedin: "#", website: "https://sites.google.com/view/kerui" }
  },
  {
    name: "Prospective Students",
    role: "Research Opportunities",
    image: "",
    bio: "We are always looking for motivated PhD students and Postdocs to join our group at CityU HK.",
    links: { website: "mailto:kerui.li@cityu.edu.hk" }
  }
];

const PUBLICATIONS: Publication[] = [
  {
    title: "Understanding Near-Field Wireless Power Transfer Systems with Complex Mutual Inductance and Negative Mutual Resistance",
    authors: "Hui, S. Y. R., Li, K., Yu, J. & Tan, S. C.",
    venue: "IEEE Journal of Emerging and Selected Topics in Power Electronics",
    year: 2026,
    tags: ["Wireless Power", "Mutual Inductance"],
    link: "https://doi.org/10.1109/JESTPE.2026.3691097"
  },
  {
    title: "Characterization and Modeling of Dual-Single-Layer PCB Resonators for Mega-Hertz Hybrid Inductive and Capacitive Wireless Power Transfer",
    authors: "K. Li, J. Wu, S. C. Tan, K. W. E. Cheng and S. -Y. R. Hui",
    venue: "IEEE Transactions on Power Electronics",
    year: 2025,
    tags: ["Wireless Power", "PCB Resonators"],
    link: "https://doi.org/10.1109/TPEL.2025.3580073"
  },
  {
    title: "New Printed-Circuit-Board Resonators With High Quality Factor and Transmission Efficiency for Mega-Hertz Wireless Power Transfer Applications",
    authors: "Li, K., Wu, J., Yucel, A. C. & Hui, S. Y. R.",
    venue: "IEEE Transactions on Power Electronics",
    year: 2023,
    tags: ["Prize Paper", "PCB Resonators"],
    link: "https://doi.org/10.1109/TPEL.2023.3293785"
  },
  {
    title: "Overshoot Damping and Dynamics Improvement in Wireless Power Transfer Systems via Receiver-Side Controller Design",
    authors: "Li, K., Yuan, H., Tan, S. C. & Hui, S. Y. R.",
    venue: "IEEE Transactions on Power Electronics",
    year: 2022,
    tags: ["Wireless Power", "Controller Design"],
    link: "https://doi.org/10.1109/TPEL.2021.3103578"
  },
  {
    title: "Precise Luminous Flux and Color Control of Dimmable Red-Green-Blue Light-Emitting Diode Systems",
    authors: "Wong, C. P. G., Lee, A. T. L., Li, K., Tan, S. C. & Hui, S. Y. R.",
    venue: "IEEE Transactions on Power Electronics",
    year: 2022,
    tags: ["Prize Paper", "LED Systems"],
    link: "https://doi.org/10.1109/TPEL.2021.3102260"
  },
  {
    title: "Generation of the Large DC Gain Step-Up Nonisolated Converters in Conjunction With Renewable Energy Sources Starting From a Proposed Geometric Structure",
    authors: "Li, K., Hu, Y. & Ioinovici, A.",
    venue: "IEEE Transactions on Power Electronics",
    year: 2017,
    tags: ["Renewable Energy", "DC Gain"],
    link: "https://doi.org/10.1109/TPEL.2016.2609501"
  }
];

const PROJECTS: Project[] = [
  {
    title: "Wireless Power Transfer",
    description: "Developing high-frequency (MHz) wireless power transfer systems for industrial and consumer applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop",
    status: "Active",
    tags: ["Power Electronics", "WPT"]
  },
  {
    title: "Efficient Power Conversion",
    description: "Researching next-generation power electronics topologies, modulation, and control strategies.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=250&auto=format&fit=crop",
    status: "Active",
    tags: ["Circuits", "Efficiency"]
  }
];

const AWARDS = [
  "Outstanding reviewer for IEEE Transactions on Power Electronics, IEEE PELS, 2025",
  "Second Place IEEE Transactions on Power Electronics Prize Paper Award (First author), 2024",
  "First Place IEEE Transactions on Power Electronics Prize Paper Award, 2023",
  "Ph.D. Thesis Talk Award, IEEE Power Electronics Society, 2022",
  "Power Engineering Prize, The University of Hong Kong, 2020",
  "HK Electric Electrical Energy Postgraduate Scholarship, The University of Hong Kong, 2019"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header className="px-6 md:px-12 py-8 bg-solar-bg/80 backdrop-blur-md z-50 sticky top-0 border-b border-solar-base2">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 bg-solar-blue flex items-center justify-center text-white font-bold text-xl transition-all group-hover:bg-solar-orange rounded shadow-sm">L</div>
          <div>
            <h1 className="text-lg font-black tracking-tighter text-solar-ink uppercase leading-none">Li Power Electronics Lab</h1>
            <p className="text-[9px] uppercase font-black tracking-[0.2em] text-solar-blue">CityU HK • EE</p>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
          <div className="h-4 w-px bg-solar-base2" />
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-solar-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-solar-bg shadow-xl border-t border-solar-base2 py-8 px-6 md:hidden flex flex-col gap-6 z-40"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-solar-ink uppercase tracking-tight">{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-solar-bg text-solar-ink flex flex-col font-sans selection:bg-solar-blue selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-[1240px] mx-auto w-full px-6 md:px-12 py-12 md:py-24 space-y-32">
        {/* Hero Section */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 text-solar-ink">
            <div className="h-px w-12 bg-solar-base1" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Research Laboratory</span>
          </div>
          <h2 className="text-massive text-solar-ink font-bold leading-[0.95]">
            Pioneering high-frequency power conversion systems.
          </h2>
          <p className="text-xl md:text-2xl text-solar-base00 max-w-2xl leading-relaxed text-pretty font-medium">
            We design and implement next-generation wireless power transfer and MHz-frequency power electronics at the City University of Hong Kong.
          </p>
        </section>

        {/* Research Areas Section */}
        <section id="research" className="space-y-12">
          <h4 className="section-label">Research Areas</h4>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Wireless Power Transfer", 
                desc: "Developing high-frequency MHz-range hybrid inductive and capacitive power transfer systems for industrial and consumer applications.",
                icon: <Beaker className="text-solar-blue" size={24} />
              },
              { 
                title: "Power Conversion", 
                desc: "Designing next-generation power conversion topologies and high-density power converters with advanced control strategies.",
                icon: <FlaskConical className="text-solar-orange" size={24} />
              }
            ].map((focus, i) => (
              <div key={i} className="research-card group">
                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{focus.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-solar-ink">{focus.title}</h3>
                <p className="text-solar-base00 leading-relaxed font-medium">{focus.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lab Directory Section */}
        <section id="team" className="space-y-12">
          <h4 className="section-label">Lab Directory</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((person, i) => (
              <div key={i} className="research-card flex flex-col sm:flex-row items-center sm:items-start gap-8 group text-center sm:text-left">
                <div className="w-32 h-32 rounded bg-solar-base2 border border-solar-base1/20 overflow-hidden shrink-0 flex items-center justify-center p-2">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="max-w-full max-h-full object-contain transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="text-solar-base1" size={40} />
                    </div>
                  )}
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h5 className="text-xl font-bold text-solar-ink group-hover:text-solar-blue transition-colors leading-none mb-1">{person.name}</h5>
                    <p className="text-xs font-black uppercase tracking-widest text-solar-blue">{person.role}</p>
                  </div>
                  <p className="text-sm text-solar-base00 leading-snug font-medium line-clamp-3">{person.bio}</p>
                  <div className="flex gap-4 pt-2">
                    {person.links.website && <a href={person.links.website} className="text-solar-base1 hover:text-solar-blue"><ExternalLink size={16} /></a>}
                    {person.links.linkedin && <a href={person.links.linkedin} className="text-solar-base1 hover:text-solar-blue"><Linkedin size={16} /></a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-solar-base00 max-w-xl italic">
            Interested in joining? We're always looking for motivated PhD students and Postdocs. Contact Dr. Li for details.
          </p>
        </section>

        {/* Awards & Recognition Section */}
        <section id="awards" className="space-y-12">
          <h4 className="section-label">Awards & Recognition</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {AWARDS.map((award, i) => (
              <div key={i} className="flex gap-4 group">
                <Award size={20} className="text-solar-orange shrink-0 mt-1" />
                <span className="text-lg font-bold leading-tight text-solar-base00 group-hover:text-solar-ink transition-colors">
                  {award}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Publications Section */}
        <section id="publications" className="space-y-12 pb-12">
          <div className="flex items-center justify-between">
            <h4 className="section-label mb-0">Selected Publications</h4>
            <a href="https://scholar.google.com/citations?user=8K3WlZEAAAAJ&hl=en" className="text-xs font-black uppercase tracking-widest text-solar-blue hover:text-solar-orange transition-colors flex items-center gap-2">
              Google Scholar <ChevronRight size={14} />
            </a>
          </div>
          <div className="divide-y divide-solar-base2 border-t border-solar-base2">
            {PUBLICATIONS.map((pub, i) => (
              <a 
                key={i} 
                href={pub.link} 
                target="_blank" 
                rel="noreferrer"
                className="block py-10 group"
              >
                <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-solar-blue group-hover:text-solar-orange transition-colors">
                  {pub.venue} / {pub.year} {pub.tags.includes("Prize Paper") && <span className="text-solar-orange ml-2">(Prize Paper Award)</span>}
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-solar-blue transition-colors">{pub.title}</h3>
                <p className="text-base font-medium text-solar-base00 italic">{pub.authors}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-solar-base2 border-t border-solar-base1/20 py-16 px-6 md:px-12 mt-20">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-2xl font-black text-solar-ink leading-tight uppercase tracking-tighter">
              Li Power Electronics Group
            </h1>
            <p className="text-sm text-solar-base00 font-medium max-w-sm">
              
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-8">
              <a href="https://www.cityu.edu.hk/stfprofile/kerui.li.htm" className="text-xs font-black uppercase tracking-[0.2em] text-solar-blue hover:text-solar-orange transition-colors">Official Site</a>
              <a href="mailto:keruili@cityu.edu.hk" className="text-xs font-black uppercase tracking-[0.2em] text-solar-blue hover:text-solar-orange transition-colors">Contact</a>
            </div>
            <p className="text-[10px] text-solar-base1 font-black uppercase tracking-widest">
              © 2026 KERUI LI LAB
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}



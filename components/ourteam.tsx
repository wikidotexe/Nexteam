import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./animation/reveal-on-scroll";

const teamMembers = [
  {
    name: "Calvin Nicholas",
    role: "Fullstack Developer",
    image: "/team/calvin.webp",
    linkedin: "https://www.linkedin.com/in/calvin-nicholas-6929431b0/",
    instagram: "https://www.instagram.com/calvinnicholasss/",
  },
  {
    name: "Dwiki Arlian Maulana",
    role: "System Engineer",
    image: "/team/wiki.webp",
    linkedin: "https://www.linkedin.com/in/dwiki-arlian-maulana-852b14209/",
    instagram: "https://www.instagram.com/wikiarlnm/",
  },
  {
    name: "Fikri Pandu Wibawa",
    role: "UI/UX Designer",
    image: "/team/pandu.webp",
    linkedin: "https://www.linkedin.com/in/fikri-pandu-wibawa-2aaaa5270/",
    instagram: "https://www.instagram.com/fikri_pandu12/",
  },
  {
    name: "M. Rafli Octavian",
    role: "Mobile Developer",
    image: "/team/octa.webp",
    linkedin: "https://www.linkedin.com/in/muhammad-rafli-octavian-8b3055231/",
    instagram: "https://www.instagram.com/taoc.6ix/",
  },
];

const OurTeam = () => {
  return (
    <div id="team" className="max-w-(--breakpoint-xl) mx-auto py-12 xs:py-20 px-6">
      <RevealOnScroll>
        <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">Our Team</h1>
        <p className="mt-2 text-center text-muted-foreground max-w-xl mx-auto">Berkenalan dengan tim di balik micro business kami, tim kecil yang fokus, bergerak cepat, dan peduli pada setiap detail.</p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <div className="mt-8 xs:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <RevealOnScroll key={member.name} delay={0.05 * index}>
              <div className="group bg-accent/60 border rounded-xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full aspect-square">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                  {/* Social overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3 rounded-full bg-background px-4 py-2 shadow-md">
                      <Link href={member.linkedin} target="_blank" aria-label={`${member.name} on LinkedIn`}>
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </Link>
                      <Link href={member.instagram} target="_blank" aria-label={`${member.name} on Instagram`}>
                        <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Name & role */}
                <div className="px-6 py-4 text-center">
                  <h3 className="text-lg font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default OurTeam;

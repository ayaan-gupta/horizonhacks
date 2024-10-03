import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Badge from "@/components/chip";
import TrustedBy from "@/components/trusted";
import PrototypeImg from "@/components/prototype-img";
import FeaturesBento from "@/components/feature-bento";
import LightBg from "@/components/light-bg";
import Integrations from "@/components/integrations";
import { About } from "@/components/last-but-not-least";
import { Calendar, Globe, Mail } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:py-8 md:py-10 relative">
      <div className="lg:mt-16">
        <Badge />
      </div>
      <div className="flex flex-col max-w-md lg:max-w-4xl text-center items-center text-2xl">
        <div className="flex flex-col lg:flex-row">
          <h1 className={title({ size: "xl" })}>{"{HorizonHacks}"}&nbsp;</h1>
          <h1 className={title({ color: "violet", size: "xl" })}>
            2024&nbsp;
          </h1>
        </div>
        <h2 className="font-normal text-gray-500 py-2 max-w-[600px]">
          Join us for the 1st annual HorizonHacks, a hackathon for people who want to change the world. 
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Register
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="https://forms.gle/73U41PNJjZJdPgGh6"
        >
          Devpost
        </Link>
      </div>
      <div className="mb-8 lg:mb-32 flex flex-col items-center gap-3">
        <TrustedBy />
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px', gap: '22px' }} className="flex-col lg:flex-row">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Calendar size={24} />
        <span style={{ marginLeft: '8px' }}>October 25th – November 1st, 2024</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Globe size={24} />
        <span style={{ marginLeft: '8px' }}>Virtual Event</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Mail size={24} />
        <span style={{ marginLeft: '8px' }}>contact@horizonhacks.com</span>
      </div>
    </div>
      </div>
      
      <About />
      <div className="mt-20 flex-col items-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold flex justify-center items-center mx-auto text-center">
          FAQ
        </h1>
        <FeaturesBento />
      </div>

      <div className="flex justify-center items-start pt-10 top-0 lg:pt-0 lg:items-center w-[175%] h-screen absolute lg:-top-[400px] -z-10 lg:hidden">
          <Image src="/bg-pattern.svg" width={1000} height={1000} alt="" priority className="w-full lg:w-[90%] block absolute lg:block"/>
      </div>
    </section>
  );
}

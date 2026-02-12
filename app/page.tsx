import Image from "next/image";
import { LogoIcon } from "./components/logo-icon";
import { StaggeredFade } from "./components/staggered-fade";
import { WaitlistForm } from "./components/waitlist-form";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-48 pt-16">
      {/* Background texture */}
      <Image
        src="/background.png"
        alt=""
        width={512}
        height={512}
        className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-100"
        priority
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <StaggeredFade index={0} className="mb-8">
          <LogoIcon className="h-[72px] w-[72px]" />
        </StaggeredFade>

        {/* Badge */}
        <StaggeredFade index={1} className="mb-8">
          <div className="flex w-min items-center gap-2 rounded-[100px] border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping [animation-duration:2s] rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-gradient whitespace-nowrap text-sm font-medium">
              Early Access
            </span>
          </div>
        </StaggeredFade>

        {/* Heading */}
        <StaggeredFade index={2} className="mb-4">
          <h1 className="text-gradient max-w-2xl pb-2 text-center text-5xl font-semibold leading-[1.15] sm:text-6xl">
            Get In the Room
            <br />
            Where Things Get{" "}
            <span className="font-serif font-light italic tracking-[-0.02em] pr-1">Built</span>
          </h1>
        </StaggeredFade>

        {/* Subtitle */}
        <StaggeredFade index={3} className="mb-12">
          <p className="text-gradient max-w-lg text-center text-base leading-relaxed sm:text-lg">
            A community that builds together – with full access to{" "}
            <br className="hidden sm:inline" />
            every product, playbook, and process behind the scenes.
          </p>
        </StaggeredFade>

        {/* Email Waitlist Form */}
        <StaggeredFade index={4} className="w-full max-w-[400px]">
          <WaitlistForm />
        </StaggeredFade>
      </div>
    </main>
  );
}

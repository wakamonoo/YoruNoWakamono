import Image from "next/image";
import Cap from "@/assets/nexus/cap.png";
import IronMan from "@/assets/nexus/ironman.png";
import Thor from "@/assets/nexus/thor.png";
import Hulk from "@/assets/nexus/hulk.png";
import Widow from "@/assets/nexus/widow.png";
import HawkEye from "@/assets/nexus/hawkeye.png";
import Nexus from "@/assets/nexus_logo.png";
import { useRouter } from "next/navigation";

export default function Plug() {
  const router = useRouter();

  return (
    <div className="flex relative justify-center w-full">
      <div className="flex relative items-end justify-center">
        <Image
          src={Nexus}
          alt="nexus logo"
          sizes="100vw"
          width={0}
          height={0}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-90 mb-42 z-0 w-[90%]"
        />
        <Image
          src={Cap}
          alt="cap"
          sizes="100vw"
          width={0}
          height={0}
          className="w-26 sm:w-30 md:w-34 xl:w-38 lg:w-36 relative z-30 flex-shrink-0"
        />
        <Image
          src={IronMan}
          alt="ironman"
          sizes="100vw"
          width={0}
          height={0}
          className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 relative z-20 -ml-20 mb-35 flex-shrink-0"
        />
        <Image
          src={Thor}
          alt="thor"
          sizes="100vw"
          width={0}
          height={0}
          className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 relative z-10 -ml-20 flex-shrink-0"
        />
        <Image
          src={Hulk}
          alt="hulk"
          sizes="100vw"
          width={0}
          height={0}
          className="w-56 sm:w-60 md:w-64 lg:w-68 xl:w-72 relative z-5 -ml-24 flex-shrink-0"
        />
        <Image
          src={Widow}
          alt="widow"
          sizes="100vw"
          width={0}
          height={0}
          className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 relative z-40 -ml-30 mb-4 flex-shrink-0"
        />
        <Image
          src={HawkEye}
          alt="hawkeye"
          sizes="100vw"
          width={0}
          height={0}
          className="w-44 sm:w-48 md:w-52 lg:w-58 xl:w-62 relative z-50 -ml-24 flex-shrink-0"
        />
      </div>
      <div className="absolute z-60 left-1/2 -translate-x-1/2 bottom-0">
        <button
          onClick={() => router.push("https://nexus-wakamonoo.vercel.app")}
          className="font-nexus font-bold cursor-pointer bg-nexus hover:bg-[var(--color-nexus)]/80 w-full py-2 px-4 rounded-full flex justify-center items-center gap-1"
        >
          Visit Now
        </button>
      </div>
    </div>
  );
}

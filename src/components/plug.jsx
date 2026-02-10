import Image from "next/image"
import Cap from "@/assets/nexus/cap.png"
import IronMan from "@/assets/nexus/ironman.png"
import Thor from "@/assets/nexus/thor.png"
import Hulk from "@/assets/nexus/hulk.png"
import Widow from "@/assets/nexus/widow.png"
import HawkEye from "@/assets/nexus/hawkeye.png"
import Nexus from "@/assets/nexus_logo.png"

export default function Plug() {
  return (
    <div className="flex relative items-end justify-center">
      <Image src={Nexus} alt="nexus logo" sizes="100vw" width={0} height={0} className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-90 mb-42 z-0" />
      <Image src={Cap} alt="cap" sizes="100vw" width={0} height={0} className="w-24 relative z-30 flex-shrink-0" />
      <Image src={IronMan} alt="ironman" sizes="100vw" width={0} height={0} className="w-26 relative z-20 -ml-15 mb-35 flex-shrink-0" />
      <Image src={Thor} alt="thor" sizes="100vw" width={0} height={0} className="w-28 z-10 -ml-20 flex-shrink-0" />
      <Image src={Hulk} alt="hulk" sizes="100vw" width={0} height={0} className="w-50 z-5 -ml-22 flex-shrink-0" />
      <Image src={Widow} alt="widow" sizes="100vw" width={0} height={0} className="w-24 z-40 -ml-22 mb-4 flex-shrink-0" />
      <Image src={HawkEye} alt="hawkeye" sizes="100vw" width={0} height={0} className="w-38 z-50 -ml-18 flex-shrink-0" />
    </div>
  )
}
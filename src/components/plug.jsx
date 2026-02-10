import Image from "next/image"
import Cap from "@/assets/nexus/cap.png"
import IronMan from "@/assets/nexus/ironman.png"
import Thor from "@/assets/nexus/thor.png"
import Hulk from "@/assets/nexus/hulk.png"
import Widow from "@/assets/nexus/widow.png"
import HawkEye from "@/assets/nexus/hawkeye.png"

export default function Plug() {
  return (
    <div className="flex relative items-end">
      <Image src={Cap} sizes="100vw" width={0} height={0} className="w-24 relative z-30 flex-shrink-0" />
      <Image src={IronMan} sizes="100vw" width={0} height={0} className="w-26 relative z-20 -ml-15 mb-35 flex-shrink-0" />
      <Image src={Thor} sizes="100vw" width={0} height={0} className="w-28 z-10 -ml-20 flex-shrink-0" />
      <Image src={Hulk} sizes="100vw" width={0} height={0} className="w-45 -ml-22 flex-shrink-0" />
      <Image src={Widow} sizes="100vw" width={0} height={0} className="w-20 z-40 -ml-22 mb-4 flex-shrink-0" />
      <Image src={HawkEye} sizes="100vw" width={0} height={0} className="w-26 z-50 -ml-10 mb-6 flex-shrink-0" />
    </div>
  )
}
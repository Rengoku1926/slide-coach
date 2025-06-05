import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import Image from "next/image";

export const UniversitySlider = () => {
  return (
    <InfiniteSlider gap={20} reverse>
      <Image
        src="/universities/12min.png"
        alt="Apple Music logo"
        height={120}
        width={240} // width is estimated to allow proper rendering; adjust as needed
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
      <Image
        src="/universities/heidelberg.png"
        alt="Chrome logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
      <Image
        src="/universities/hnu.png"
        alt="Strava logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
      <Image
        src="/universities/iit.png"
        alt="Nintendo logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
      <Image
        src="/universities/imb.png"
        alt="Jquery logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
      <Image
        src="/universities/imperial.png"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
       <Image
        src="/universities/kiel.svg"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      /> <Image
        src="/universities/salzburg.png"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      /> <Image
        src="/universities/stuttgart.png"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      /> <Image
        src="/universities/THU.png"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      /> <Image
        src="/universities/tum.png"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      /> <Image
        src="/universities/ulm.png"
        alt="Prada logo"
        height={120}
        width={240}
        className="h-[80px] w-[160px] object-contain"
        unoptimized
      />
    </InfiniteSlider>
  );
};

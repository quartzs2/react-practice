import AirPodsBanner from './bottom-left-banner/AirPodsBanner';
import PlaystationBanner from './bottom-left-banner/PlaystationBanner';
import VisionProBanner from './bottom-left-banner/VisionProBanner';
import TopBanner from './top-banner/TopBanner';

const Banner = () => {
  return (
    <div>
      <TopBanner />
      <div>
        <div>
          {/* bottom left */}
          <AirPodsBanner />
          <VisionProBanner />
          <PlaystationBanner />
        </div>
        {/* bottom right */}
      </div>
    </div>
  );
};
export default Banner;

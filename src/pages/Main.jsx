import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL, OG_MAIN_PAGE_IMAGE_URL } from '@constants/url';
import Banner from '@components/ui/banner/Banner';

const Main = () => {
  return (
    <div>
      <Metadata
        title='cyber 메인 페이지'
        url={DEFAULT_META_DATA_URL}
        image={OG_MAIN_PAGE_IMAGE_URL}
        imageAlt='cyber 메인 페이지 이미지입니다. '
        description='cyber의 메인 페이지입니다.'
      />
      <Banner />
    </div>
  );
};
export default Main;

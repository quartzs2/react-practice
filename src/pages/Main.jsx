import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL } from '@constants/url';
import Banner from '@components/ui/banner/Banner';

const Main = () => {
  return (
    <div>
      <Metadata
        title='cyber 메인 페이지'
        url={DEFAULT_META_DATA_URL}
        image={`${DEFAULT_META_DATA_URL}/og_main_page.png`}
        imageAlt='cyber 메인 페이지 이미지입니다. '
        description='cyber의 메인 페이지입니다.'
      />
      <Banner />
    </div>
  );
};
export default Main;

import Metadata from '@/components/Metadata';
import { DEFAULT_META_DATA_URL } from '@/constants/url';
import { useParams } from 'react-router';

const Products = () => {
  const { catalog } = useParams();

  return (
    <div>
      <Metadata
        title='cyber 메인 페이지'
        url={`${DEFAULT_META_DATA_URL}/${catalog}`}
        image={`${DEFAULT_META_DATA_URL}/og_product_page.png`}
        imageAlt='cyber 상품 페이지 이미지입니다. '
        description='cyber의 상품 페이지입니다.'
      />
      <div>products</div>
    </div>
  );
};
export default Products;

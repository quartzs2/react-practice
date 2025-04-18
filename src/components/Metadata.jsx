/**
 * 메타데이터
 *
 * @param {object} props
 * @param {string} props.title - og:title 에 들어갈 값입니다.
 * @param {string} props.url - og:url 에 들어갈 값입니다.
 * @param {string} [props.type='website'] - og:type 에 들어갈 값입니다.
 * @param {string} props.image - og:image 에 들어갈 값입니다.
 * @param {string} props.imageAlt - og:image:alt 에 들어갈 값입니다.
 * @param {string} [props.imageType='image/png'] - og:image:type 에 들어갈 값입니다.
 * @param {string} [props.width='1200'] - og:image:width 에 들어갈 값입니다.
 * @param {string} [props.height='630'] - og:image:height 에 들어갈 값입니다.
 * @param {string} props.description - og:description 에 들어갈 값입니다.
 * @param {string} [props.siteName='cyber'] - og:site_name 에 들어갈 값입니다.
 * @param {string} [props.locale='ko_KR'] - og:locale 에 들어갈 값입니다.
 
 * @returns {JSX.Element}
 */
const Metadata = ({
  title,
  url,
  type = 'website',
  image,
  imageAlt,
  width = '1200',
  height = '630',
  imageType = 'image/png',
  description,
  siteName = 'cyber',
  locale = 'ko_KR',
}) => {
  return (
    <>
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content={type} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content={width} />
      <meta property='og:image:height' content={height} />
      <meta property='og:image:alt' content={imageAlt} />
      <meta property='og:image:type' content={imageType} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content={locale} />
    </>
  );
};
export default Metadata;

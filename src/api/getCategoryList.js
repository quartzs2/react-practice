const getCategoryList = async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');

  if (!response.ok) {
    throw Error('오류가 발생했습니다.');
  }

  return response;
};

export default getCategoryList;

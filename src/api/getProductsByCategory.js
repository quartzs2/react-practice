const getProductsByCategory = async ({ categoryName }) => {
  const response = await fetch(`https://dummyjson.com/products/category/${categoryName}`);

  if (!response.ok) {
    throw Error('오류가 발생했습니다.');
  }

  return response;
};

export default getProductsByCategory;

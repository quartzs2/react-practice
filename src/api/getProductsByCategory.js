const getProductsByCategory = async ({ categoryName, limit = 0, skip = 0 }) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${categoryName}?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw Error('오류가 발생했습니다.');
  }

  return response;
};

export default getProductsByCategory;

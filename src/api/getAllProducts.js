const getAllProducts = async ({ limit = 0, skip = 0 }) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

  if (!response.ok) {
    throw Error('오류가 발생했습니다.');
  }

  return response;
};

export default getAllProducts;

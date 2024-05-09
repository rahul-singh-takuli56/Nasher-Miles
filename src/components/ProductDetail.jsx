import { useParams } from "react-router-dom";
import data from "../../public/data.json";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = data.find((item) => {
    return item.id == productId;
  });

  return (
    <div>
      <p>Hey this is {productId} id:</p>
      <p>{product.title}</p>
    </div>
  );
};

export default ProductDetail;

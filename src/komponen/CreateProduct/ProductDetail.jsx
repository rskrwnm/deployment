import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const selectedProduct = location.state.selectedProduct;

  return (
    <section className="container mx-auto px-5 py-5">
      <table className="w-full border-collapse rounded border-2">
        <thead>
          <tr>
            <th className="border-2 px-2">Product Name</th>
            <th className="border-2 px-2">Category</th>
            <th className="border-2 px-2">Freshness</th>
            <th className="border-2 px-2">Product Image</th>
            <th className="border-2 px-2">Additional Description</th>
            <th className="border-2 px-2">Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border-2 px-2 py-2">
              {selectedProduct.productName}
            </td>
            <td className="border-2 px-2 py-2">
              {selectedProduct.productCategory}
            </td>
            <td className="border-2 px-2 py-2">
              {selectedProduct.productFreshness}
            </td>
            <td className="border-2 px-2 py-2">
              <img
                src={selectedProduct.img}
                alt="data"
                className="mx-auto max-w-[5px]"
              />
            </td>
            <td className="border-2 px-2 py-2">{selectedProduct.additionalDescription}</td>
            <td className="border-2 px-2 py-2">
              {selectedProduct.randomNumber}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProductDetail;

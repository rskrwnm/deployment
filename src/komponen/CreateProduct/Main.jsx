import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProducts, deleteProducts, editProducts } from "../../store/productSlice";

export default function Main({ languageProps }) {
  
  const navigate = useNavigate();
  
  //State untuk form
  const [inputData, setInputData] = useState({
    productName: "",
    productCategory: "..Select a Category..",
    productFreshness: "",
    productImage: null,
    additionalDescription: "",
    randomNumber: "",
  });

  const [editMode, setEditMode] = useState(false);

  const list = useSelector((state) => state.list.product);
  const dispatch = useDispatch();

  // State untuk form input
  const [validationErrors, setValidationErrors] = useState({
    productName: false,
    productCategory: false,
    productFreshness: false,
    productImage: false,
    additionalDescription: false,
    randomNumber: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInputData({
      ...inputData,
      productImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editMode) {
      const updatedProductData = {
        id: inputData.id,
        productName: inputData.productName,
        productCategory: inputData.productCategory,
        productFreshness: inputData.productFreshness,
        productImage: inputData.productImage,
        additionalDescription: inputData.additionalDescription,
        randomNumber: inputData.randomNumber,
        img: inputData.img,
      };

      dispatch(editProducts(updatedProductData));

      setEditMode(false);

      setInputData({
        productName: "",
        productCategory: "..Select a Category..",
        productFreshness: "",
        productImage: null,
        additionalDescription: "",
        randomNumber: 0,
      });
    } else {
      const {
        productName,
        productCategory,
        productFreshness,
        productImage,
        additionalDescription,
        randomNumber
      } = inputData;

      const nameRegex = /^[a-zA-Z0-9 ]{6,25}$/;
      const categoryRegex = /^(electronics|clothing|accessories)$/;
      const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/;
      const imageRegex = /\.(jpg|jpeg|png|gif)$/i;
      const descriptionRegex = /.+/;
      const numberRegex = /^\d+(\.\d{1,2})?$/;

      // Validate the form data
      const errors = {
        productName: !nameRegex.test(productName),
        productCategory: !categoryRegex.test(productCategory),
        productFreshness: !freshnessRegex.test(productFreshness),
        productImage: !imageRegex.test(productImage?.name),
        additionalDescription: !descriptionRegex.test(additionalDescription),
        randomNumber: !numberRegex.test(randomNumber),
      };

      setValidationErrors(errors);
      if (
        !errors.productName &&
        !errors.productCategory &&
        !errors.productFreshness &&
        !errors.productImage &&
        !errors.additionalDescription &&
        !errors.randomNumber
      ) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = event.target.result;
          const newProduct = {
            id: Date.now(),
            productName,
            productCategory,
            productFreshness,
            productImage: productImage.name,
            additionalDescription,
            randomNumber,
            img,
          };

          dispatch(addProducts([...list, newProduct]));

          setInputData({
            productName: "",
            productCategory: "..Select a Category..",
            productFreshness: "",
            productImage: null,
            additionalDescription: "",
            randomNumber: "",
          });
        };
        reader.readAsDataURL(productImage);
      }
    }
  };
  
  const generateRandomNumber = () => {
    const price = (Math.random() * (100 - 10) + 10).toFixed(2);
    setInputData({
      ...inputData,
      randomNumber: price,
    });
  };

  const inputFieldStyle = {
    base: "w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500",
    error: "border-red-500",
  };

  const editProduct = (id) => {
    const edit = list.find((item) => item.id === id);
    setInputData({ ...edit });
    setEditMode(true);
  };

  const redText = "text-red-500";

  const buttonStyle = {
    primary: "cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300",
    secondary: "cursor-pointer rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 transition duration-300",
    delete: "mx-auto my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300",
  };

  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32">
      <h2 className="mb-4 text-2xl font-semibold">
        {languageProps === "inggris" ? "Detail Product" : "Detail produk"}
      </h2>
      <section>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor="productName">
              {languageProps === "inggris" ? "Product Name" : "Nama Produk"}
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              minLength="6"
              maxLength="50"
              onChange={handleInputChange}
              value={inputData.productName}
              className={`${inputFieldStyle.base} ${
                validationErrors.productName ? inputFieldStyle.error : ""
              }`}
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: validationErrors.productName ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? "Please enter a valid product name." : "Silakan masukkan nama produk yang valid."}
          </p>

          {/* Product Category */}
          <div className="form-group">
            <label htmlFor="productCategory">
              {languageProps === "inggris" ? "Product Category" : "Kategori Produk"}
            </label>
            <select
              name="productCategory"
              id="productCategory"
              onChange={handleInputChange}
              value={inputData.productCategory}
              className={`${inputFieldStyle.base} ${
                validationErrors.productCategory ? inputFieldStyle.error : ""
              }`}
            >
              <option value="">
                {languageProps === "inggris" ? "-- Select a Category--" : "-- Pilih Kategori --"}
              </option>
              <option value="electronics">
                {languageProps === "inggris" ? "Electronics" : "Elektronik"}
              </option>
              <option value="clothing">
                {languageProps === "inggris" ? "Clothing" : "Pakaian"}
              </option>
              <option value="accessories">
                {languageProps === "inggris" ? "Accessories" : "Aksesori"}
              </option>
            </select>
          </div>
          <p
            className={`${redText}`}
            style={{
              display: validationErrors.productCategory ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? "Please select a product category." : "Silakan pilih kategori produk."}
          </p>

          {/* Product Freshness */}
          <fieldset
            className={`field-set form-group ${inputFieldStyle.base} ${
              validationErrors.productFreshness ? inputFieldStyle.error : ""
            }`}
          >
            <legend className="font-semibold">
              {languageProps === "inggris" ? "Product Freshness" : "Kebaruan Produk"}
            </legend>
            {languageProps === "inggris" ? (
              <>
                <input
                  type="radio"
                  name="productFreshness"
                  id="option1"
                  onChange={handleInputChange}
                  value="Brand New"
                  className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                />
                <label htmlFor="option1">Brand New</label>
                <br />
                <input
                  type="radio"
                  name="productFreshness"
                  id="option2"
                  onChange={handleInputChange}
                  value="Second Hand"
                  className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                />
                <label htmlFor="option2">Second Hand</label>
                <br />
                <input
                  type="radio"
                  name="productFreshness"
                  id="option3"
                  onChange={handleInputChange}
                  value="Refurbished"
                  className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                />
                <label htmlFor="option3">Refurbished</label>
              </>
            ) : (
              <>
                <input
                  type="radio"
                  name="productFreshness"
                  id="option1"
                  onChange={handleInputChange}
                  value="Baru"
                  className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                />
                <label htmlFor="option1">Baru</label>
                <br />
                <input
                  type="radio"
                  name="productFreshness"
                  id="option2"
                  onChange={handleInputChange}
                  value="Bekas"
                  className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                />
                <label htmlFor="option2">Bekas</label>
                <br />
                <input
                  type="radio"
                  name="productFreshness"
                  id="option3"
                  onChange={handleInputChange}
                  value="Renovasi"
                  className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                />
                <label htmlFor="option3">Renovasi</label>
              </>
            )}
          </fieldset>

          <p
            className={`${redText}`}
            style={{
              display: validationErrors.productFreshness ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? "Please select product freshness." : "Silakan pilih kebaruan produk."}
          </p>

          {/* Image of Product */}
          <div className="form-group">
            <label htmlFor="image">
              {languageProps === "inggris" ? "Image of Product" : "Gambar Produk"}
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className={`${inputFieldStyle.base} ${
                validationErrors.productImage ? inputFieldStyle.error:""
              }`}
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: validationErrors.productImage ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? "Please upload an image of the product." : "Silakan unggah gambar produk."}
          </p>

          {/* Additional Description */}
          <div className="form-group">
            <label htmlFor="additionalDescription">
              {languageProps === "inggris" ? "Additional Description" : "Deskripsi Tambahan"}
            </label>
            <textarea
              name="additionalDescription"
              id="additionalDescription"
              cols="50"
              rows="10"
              onChange={handleInputChange}
              value={inputData.additionalDescription}
              className={`${inputFieldStyle.base} ${
                validationErrors.additionalDescription ? inputFieldStyle.error : ""
              }`}
            ></textarea>
          </div>
          <p
            className={`${redText}`}
            style={{
              display: validationErrors.additionalDescription ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? "Please provide an additional description." : "Silakan berikan deskripsi tambahan."}
          </p>

          {/* Product Price */}
          <div className="form-group">
            <label htmlFor="price">
              {languageProps === "inggris" ? "Product Price" : "Harga Produk"}
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={inputData.randomNumber}
              onChange={handleInputChange}
              className={`${inputFieldStyle.base} ${
                validationErrors.randomNumber ? inputFieldStyle.error : ""
              }`}
              disabled
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: validationErrors.randomNumber ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? "Please generate a random number." : "Silakan hasilkan nomor acak."}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <button type="button" className={`${buttonStyle.primary}`} onClick={generateRandomNumber}>
              {languageProps === "inggris" ? "Create Random Number" : "Buat Nomor Acak"}
            </button>

            <button
              type="submit"
              id="submit"
              name="submit"
              className={`${buttonStyle.primary}`}>
              {languageProps === "inggris" ? "Submit" : "Kirim"}
            </button>

          </div>
        </form>
      </section>
      {/* Table */}
      <section className="mt-5 overflow-scroll">
        <label htmlFor="productlist" className="mb-1 block">
          {languageProps === "inggris" ? "Product List" : "Daftar Produk"}
        </label>
        <table className="w-full border-collapse rounded border-2 table-fixed">
          <thead>
            <tr>
              <th className="border-2 px-2 py-1 w-1/8">No</th>
              <th className="border-2 px-2 py-1 w-1/4">
                {languageProps === "inggris" ? "Product Name" : "Nama Produk"}
              </th>
              <th className="border-2 px-2 py-1 w-1/6">
                {languageProps === "inggris" ? "Category" : "Kategori"}
              </th>
              <th className="border-2 px-2 py-1 w-1/6">
                {languageProps === "inggris" ? "Freshness" : "Kebaruan"}
              </th>
              <th className="border-2 px-2 py-1 w-1/6">
                {languageProps === "inggris" ? "Image" : "Gambar"}
              </th>
              <th className="border-2 px-2 py-1 w-1/4">
                {languageProps === "inggris" ? "Description" : "Deskripsi"}
              </th>
              <th className="border-2 px-2 py-1 w-1/8">
                {languageProps === "inggris" ? "Price" : "Harga"}
              </th>
              <th className="border-2 px-2 py-1 w-1/8">
                {languageProps === "inggris" ? "Action" : "Aksi"}
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {list.map((data, index) => (
              <tr key={data.id}>
                <td className="border-2 px-2 py-1">{index + 1}</td>
                <td className="border-2 px-2 py-1">{data.productName}</td>
                <td className="border-2 px-2 py-1">{data.productCategory}</td>
                <td className="border-2 px-2 py-1">{data.productFreshness}</td>
                <td className="border-2 px-2 py-1">
                  {data.img && (
                    <img
                      src={data.img}
                      alt="data"
                      style={{ maxWidth: "100px", height: "auto" }}
                      className="m-auto"
                    />
                  )}
                </td>
                <td className="border-2 px-2 py-1">{data.additionalDescription}</td>
                <td className="border-2 px-2 py-1">{data.randomNumber}</td>
                <td className="border-2 px-2 py-1">
                  <button
                    className={`${buttonStyle.primary}`}onClick={() => {
                      navigate(`/ProductDetail/${data.id}`, {
                        state: { selectedProduct: data },
                      });
                    }}
                  >
                    {languageProps === "inggris" ? "Detail" : "Detail"}
                  </button>
                  <button
                    className={`${buttonStyle.secondary}`}onClick={() => editProduct(data.id)}
                  >
                    {languageProps === "inggris" ? "Ubah" : "Edit"}
                  </button>
                  <button className={`${buttonStyle.delete}`} onClick={() => dispatch(deleteProducts(data.id))}>
                    {languageProps === "inggris" ? "Delete" : "Hapus"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

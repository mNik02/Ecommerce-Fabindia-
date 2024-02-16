import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import "../../Assets/Css/ProductSearch.css";

const searchProducts = process.env.REACT_APP_API_ENDPOINT_SEARCH_PRODUCTS;
const addtoCart = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;
const wishlisturl = process.env.REACT_APP_API_ENDPOINT_USER_WISHLIST;

const UseProductList = ({ searchQuery, selectedFilters }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${searchProducts}?query=${searchQuery}`;
        const response = await axios.get(url);
        const data = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Invalid response data format. Expected an array.");
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    const fetchProductsDebounced = debounce(fetchProducts, 300);
    fetchProductsDebounced();

    return () => fetchProductsDebounced.cancel();
  }, [searchQuery, selectedFilters]);

  return { products };
};

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    gender: [],
    color: [],
    brand: [],
    price: [],
  });
  const [selectedSortOrder, setSelectedSortOrder] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const { products } = UseProductList({ searchQuery, selectedFilters });
  const [wishlist, setWishlist] = useState([]);

  const [showCheckboxes, setShowCheckboxes] = useState({
    category: false,
    gender: false,
    color: false,
    brand: false,
    price: false,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (selectedFilters.category.length === 0 ||
          selectedFilters.category.includes(product.category)) &&
        (selectedFilters.gender.length === 0 ||
          selectedFilters.gender.includes(product.gender)) &&
        (selectedFilters.color.length === 0 ||
          selectedFilters.color.includes(product.color)) &&
        (selectedFilters.brand.length === 0 ||
          selectedFilters.brand.includes(product.brand)) &&
        (selectedFilters.price.length === 0 ||
          selectedFilters.price.includes(product.price))
      );
    });
  }, [products, selectedFilters]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredProducts.slice(startIndex, endIndex);
  }, [currentPage, pageSize, filteredProducts]);

  const sortedProducts = useMemo(() => {
    if (selectedSortOrder === "lowToHigh") {
      return [...paginatedProducts].sort((a, b) => a.price - b.price);
    } else if (selectedSortOrder === "highToLow") {
      return [...paginatedProducts].sort((a, b) => b.price - a.price);
    }
    return paginatedProducts;
  }, [paginatedProducts, selectedSortOrder]);

  const handleFilterLabelClick = (filterType) => {
    setShowCheckboxes((prevState) => ({
      ...prevState,
      [filterType]: !prevState[filterType],
    }));
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSelectedFilters({
      category: [],
      gender: [],
      color: [],
      brand: [],
      price: [],
    });
    setSelectedSortOrder("");
  };

  const handleAddToCart = async (product) => {
    if (!user) {
      navigate("/login", {
        state: { message: "Login First " },
      });
    }

    const userId = localStorage.getItem("token");
    const quantity = 1;
    const productId = product.productId;

    try {
      const response = await axios.post(`${addtoCart}add`, {
        user_id: userId,
        productId: productId,
        quantity: quantity,
      });

      addToCart(product, quantity);
      toast.success("Item added to cart.");
      navigate("/search");
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };
  const handleAddToWishlist = async (product) => {
    if (!user?.token) {
      navigate("/www.fabindia.com/login");
    }

    try {
      const response = await axios.post(wishlisturl + "add", {
        user_id: user.token,
        productId: product.productId,
      });
      toast.success("Added to wishlist");
      setWishlist([response.data]);
      console.log("Wishlist State:", wishlist);
    } catch (error) {
      toast.error("Product already in wishlist");
      console.error("Error adding to wishlist", error);
    }
  };

  const fetchUserWishlist = async () => {
    try {
      if (user?.token) {
        const response = await axios.get(`${wishlisturl}${user.token}`);
        setWishlist(response.data);
      }
    } catch (error) {
      console.error("Error fetching wishlist items: ", error);
    }
  };
  useEffect(() => {
    fetchUserWishlist();
  }, [user?.token]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />

      <div className="container">
        <div className="filter-container">
          <div className="col-span-full">
            <p className="filter-label-text">Filter</p>
            <button onClick={handleReset} className="Reset-btn">
              Reset Filters
            </button>
          </div>

          <div className="filter-div">
            <div className="filter-column">
              <label
                className="filter-label"
                onClick={() => handleFilterLabelClick("category")}
              >
                Category
                <span className="dropdown-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </label>
              <hr></hr>

              {showCheckboxes.category &&
                ["CLOTHING", "FOOTWEAR", "ACCESSORIES"].map((category) => (
                  <div key={category}>
                    <input
                      type="checkbox"
                      className="filter-input"
                      id={category}
                      checked={selectedFilters.category.includes(category)}
                      onChange={(e) =>
                        handleFilterChange(
                          "category",
                          e.target.checked
                            ? [...selectedFilters.category, category]
                            : selectedFilters.category.filter(
                                (c) => c !== category
                              )
                        )
                      }
                    />
                    <label className="filter-label-field" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                ))}
            </div>

            <div className="filter-column">
              <label
                className="filter-label"
                onClick={() => handleFilterLabelClick("gender")}
              >
                Gender
                <span className="dropdown-icon-gender">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </label>
              <hr />
              {showCheckboxes.gender &&
                ["MEN", "WOMEN", "BOYS", "GIRLS"].map((gender) => (
                  <div key={gender}>
                    <input
                      type="checkbox"
                      className="filter-input"
                      id={gender}
                      checked={selectedFilters.gender.includes(gender)}
                      onChange={(e) =>
                        handleFilterChange(
                          "gender",
                          e.target.checked
                            ? [...selectedFilters.gender, gender]
                            : selectedFilters.gender.filter((g) => g !== gender)
                        )
                      }
                    />
                    <label className="filter-label-field" htmlFor={gender}>
                      {gender}
                    </label>
                  </div>
                ))}
            </div>
            <div className="filter-column">
              <label
                className="filter-label"
                onClick={() => handleFilterLabelClick("color")}
              >
                Color
                <span className="dropdown-icon-color">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </label>
              <hr />
              {showCheckboxes.color &&
                [
                  "Red",
                  "Blue",
                  "Yellow",
                  "Black",
                  "Pink",
                  "White",
                  "Grey",
                  "Orange",
                  "Green",
                  "Dark Blue",
                  "Brown",
                ].map((color) => (
                  <div key={color}>
                    <input
                      type="checkbox"
                      className="filter-input"
                      id={color}
                      checked={selectedFilters.color.includes(color)}
                      onChange={(e) =>
                        handleFilterChange(
                          "color",
                          e.target.checked
                            ? [...selectedFilters.color, color]
                            : selectedFilters.color.filter((c) => c !== color)
                        )
                      }
                    />
                    <label className="filter-label-field" htmlFor={color}>
                      {color}
                    </label>
                  </div>
                ))}
            </div>
            <div className="filter-column">
              <label
                className="filter-label"
                onClick={() => handleFilterLabelClick("brand")}
              >
                Brand
                <span className="dropdown-icon-brand">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </label>
              <hr />
              {showCheckboxes.brand &&
                [
                  "LIBAS",
                  "BIBA",
                  "SOCH",
                  "MANYAVAR",
                  "MAJESTIC",
                  "MANTHAN",
                  "SPYKAR",
                  "BATA",
                  "LEVIS",
                  "ARROW",
                  "NETPLAY",
                  "CRAZIES",
                  "KOTTY",
                  "MUFTI",
                  "ZCOLLECTIONS",
                ].map((brand) => (
                  <div key={brand}>
                    <input
                      type="checkbox"
                      className="filter-input"
                      id={brand}
                      checked={selectedFilters.brand.includes(brand)}
                      onChange={(e) =>
                        handleFilterChange(
                          "brand",
                          e.target.checked
                            ? [...selectedFilters.brand, brand]
                            : selectedFilters.brand.filter((b) => b !== brand)
                        )
                      }
                    />
                    <label className="filter-label-field" htmlFor={brand}>
                      {brand}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="products-container">
          <div className="search-input">
            <input
              className="input-field"
              type="text"
              placeholder="Search products......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sort-column">
            <label className="sort-label"></label>
            <select
              value={selectedSortOrder}
              onChange={(e) => setSelectedSortOrder(e.target.value)}
              className="sort-select"
            >
              <option value="">Sort Order</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>

          <div className="products-card">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <div key={product.productId} className="display-card">
                  <Link to={`/displayproduct/${product.productId}`}>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="card-image"
                    />
                  </Link>
                  <Link to={`/displayproduct/${product.productId}`}>
                    <p className="title">{product.title}</p>
                  </Link>
                  <p className="price-title">
                    M.R.P. <span className="price">₹{product.price}</span>
                  </p>
                  <p className="sizes">
                    Sizes: {product.sizes.map((size) => size.name).join(", ")}
                  </p>

                  <button onClick={() => handleAddToWishlist(product)}>
                    <FavoriteBorderRoundedIcon
                      className="add-to-wishlist"
                      sx={{ color: "#903233", fontSize: 25, fontWeight: 200 }}
                    />
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="addtocart-btn"
                  >
                    Add to cart
                  </button>
                </div>
              ))
            ) : (
              <p className="no-products">No product available!</p>
            )}
          </div>
          <div className="pagination">
            <button onClick={handlePrevPage}>&lt;</button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              )
            )}
            <button onClick={handleNextPage}>&gt;</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductList;

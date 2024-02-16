import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "../../Assets/Css/AddressCard.css";
import { useCart } from "../../context/CartContext";

function AddressCard() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const{setAddressId}=useCart();
  const userId = user?.token;

  const defaultAddressUrl=process.env.REACT_APP_API_ENDPOINT_DEFAULT_ADDRESS;
  const userAddressUrl=process.env.REACT_APP_API_ENDPOINT_USER_ADDRESS;

  useEffect(() => {
    if(userId!=null){
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(
          `${userAddressUrl}${userId}`
        );
        setAddresses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        setLoading(false);
      }
    };
  
    fetchAddresses();
  }
  }, [userId]);

  const handleSetDefault = async (addressId) => {
    try {
      const response = await axios.put(
        `${defaultAddressUrl}${addressId}`
      );
      setAddressId(addressId);
    } catch (error) {
      console.error("Error setting default address:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : addresses.length === 0 ? (
        
        <p>Select Delivery Address: </p>
      ) : (
        addresses.map((address) => (
          <div className="address-card" key={address.id}>
            <div className="address-info">
              <input
                type="radio"
                name="defaultAddress"
                id={`address_${address.addressId}`}
                onChange={() => handleSetDefault(address.addressId)}
              />
              <label className="addresstype" htmlFor={`address_${address.addressId}`}>{" "}{address.addressNickname}</label>
              
              <br />
              <span className="name">
                {address.firstName} {address.lastName}
              </span>
              <br />
              <span className="addressline">{address.addressLine1}</span>
              <br />
              <span className="city-pin">
                {address.city} - {address.pincode}
              </span>
              <br />
              <span className="mobile-no">Ph.No- {address.mobileNo}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AddressCard;

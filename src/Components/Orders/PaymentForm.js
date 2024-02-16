// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const PaymentForm = ({ orderDetails }) => {
// //   const [userName, setUserName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [contact, setContact] = useState('');

// //   const handlePayment = async () => {
// //     const options = {
// //       key: "rzp_test_xaTmsS42OSPrDL",
// //       amount: orderDetails.amount * 100, 
// //       currency: "INR",
// //       name: userName,
// //       description: "Test Transaction",
// //       image: "https://example.com/your_logo",
// //       order_id: orderDetails.id, 
// //       handler: function (response) {
// //         // Handle payment success
// //         alert(response.razorpay_payment_id);
// //         alert(response.razorpay_order_id);
// //         alert(response.razorpay_signature);
// //       },
// //       prefill: {
// //         name: userName,
// //         email: email,
// //         contact: contact,
// //       },
// //       notes: {
// //         address: "ABC, Delhi",
// //       },
// //       theme: {
// //         color: "#3399cc",
// //       },
// //     };

// //     const rzp1 = new window.Razorpay(options);

// //     rzp1.on("payment.failed", function (response) {
// //       // Handle payment failure
// //       alert(response.error.code);
// //       alert(response.error.description);
// //       alert(response.error.source);
// //       alert(response.error.step);
// //       alert(response.error.reason);
// //       alert(response.error.metadata.order_id);
// //       alert(response.error.metadata.payment_id);
// //     });

// //     rzp1.open();
// //   };

// //   return (
// //     <>
// //       <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name" />
// //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
// //       <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" />
// //       <button onClick={handlePayment}>Pay Now</button>  
// //     </>
// //   );
// // };

// // const CreateOrderAndPayment = () => {
// //   const [amount, setAmount] = useState(0);
// //   const [orderDetails, setOrderDetails] = useState(null);

// //   const createOrder = async () => {
// //     return await fetch('http://localhost:8080/payment/'+amount*100, {
// //     mode: 'no-cors',
// //     method: 'GET',
// // });
// // }
  
// //   const handleCreateOrderAndPayment = async () => {
// //     await createOrder();
// //     // Call handlePayment function after order creation
// //   };

// //   return (
// //     <>
// //       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
// //       <button onClick={handleCreateOrderAndPayment}>Create Order and Pay</button>
// //       {orderDetails && <PaymentForm orderDetails={orderDetails} />}
// //     </>
// //   );
// // };

// // export default CreateOrderAndPayment;

// import React from 'react'

// const PaymentForm = () => {
//   const createOrder = async () => {
//     return await fetch('http://localhost:8080/payment/10000', {
//     mode: 'no-cors',
//     method: 'GET',

// });
// }


// const handlePayment = async () => {
//   const order = await createOrder();

//   const options = {
//     key: "rzp_test_Ch7p456DBeNvBH",
//     currency: "INR",
//     name: "Nikhil",
//     description: "Test Transaction",
//     order_id: order, 
//     handler: function (response) {
//       alert(response.razorpay_payment_id);
    
//     },
//     prefill: {
//       contact: 'contact',
//     },
//     notes: {
//       address: "ABC, Delhi",
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };

//   const rzp1 = new window.Razorpay(options);

//   rzp1.on("payment.failed", function (response) {
//     alert(response.error.code);
//     alert(response.error.description);
//     alert(response.error.source);
 
//   });

//   rzp1.open();
// };
// handlePayment();
//   return (
//     <div>PaymentForm</div>
//   )
// }

// export default PaymentForm
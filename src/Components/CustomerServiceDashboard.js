import React from "react";
import "../Assets/Css/CustomerService.css";
import Header from './Header/Header';
import Footer from "./Footer/Footer";



const ServiceComponent = () => {
  const ServiceIcon = [
    {
      icon1: <i className="fa fa-envelope-o" aria-hidden="true"></i>,
      title1: "Customer Support",
      description1: "Got a question or a comment? Write to us.",
    },
    {
      icon2: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
      title2: "How To Order",
      description2: "Ordering from www.fabindia.com, a step-by-step guide",
    },
    {
      icon3: <i className="fa fa-credit-card-alt" aria-hidden="true"></i>,
      title3: "Billing And Payments",
      description3: "Got a question or a comment? Write to us.",
    },
    {
      icon4: <i className="fa fa-truck" aria-hidden="true"></i>,
      title4: "Shipping & Delivery",
      description4:
        "Domestic & International shipping. Delivery methods, times and costs.",
    },
    {
      icon5: <i className="fa fa-pencil-square-o" aria-hidden="true"></i>,
      title5: "Track Your Order",
      description5: "Your order status with us and tracking your shipment.",
    },
    {
      icon6: <i className="fa fa-retweet" aria-hidden="true"></i>,
      title6: "Return & Exchanges",
      description6: "Returning goods, exchanging them, or claiming a refund.",
    },
    {
      icon7: <i className="fa fa-question" aria-hidden="true"></i>,
      title7: "FAQ'S",
      description7: "Questions frequently asked by our customers.",
    },
    {
      icon8: <i className="fa fa-hand-peace-o" aria-hidden="true"></i>,
      title8: "Fabric Care",
      description8: "Caring for your handmade Fabindia product.",
    },
  ];

  return (
    <>
    <Header/>
      <div className="page-navigation">Home/Customer Service</div>
      <div className="page-heading">
        Customer Service <hr />
      </div>
      <div className="service-card-container">
      <div className="service-card1">
     
        <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
        <span className="title-service">Customer Support</span>
        <span className="description-service">Got a question or a comment? Write to us.</span>
      </div>
      <div className="service-card2">
        <span>{ServiceIcon.title2}</span>
        <span>{ServiceIcon.icon2}</span>
        <span>{ServiceIcon.description2}</span>
      </div>
      <div className="service-card3">
        <span>{ServiceIcon.title3}</span>
        <span>{ServiceIcon.icon3}</span>
        <span>{ServiceIcon.description3}</span>
      </div>
      <div className="service-card4">
        <span>{ServiceIcon.title4}</span>
        <span>{ServiceIcon.icon4}</span>
        <span>{ServiceIcon.description4}</span>
      </div>
      <div className="service-card5">
        <span>{ServiceIcon.title5}</span>
        <span>{ServiceIcon.icon5}</span>
        <span>{ServiceIcon.description5}</span>
      </div>
      <div className="service-card6">
        <span>{ServiceIcon.title6}</span>
        <span>{ServiceIcon.icon6}</span>
        <span>{ServiceIcon.description6}</span>
      </div>
      <div className="service-card7">
        <span>{ServiceIcon.title7}</span>
        <span>{ServiceIcon.icon7}</span>
        <span>{ServiceIcon.description7}</span>
      </div>
      <div className="service-card8">
        <span>{ServiceIcon.title8}</span>
        <span>{ServiceIcon.icon8}</span>
        <span>{ServiceIcon.description8}</span>
      </div>

        
      </div>
      <Footer/>
    </>
  );
};

export default ServiceComponent;

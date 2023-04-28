import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Cards.css";


function Cards() {
  const handleSlideClick = (url) => {
    window.location = url;
  }
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGluZGlhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Ravangla",
      description: "North Sikkim, India",
      clickEvent: () => handleSlideClick("https://www.sikkimtourism.gov.in/"),
    },
    {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "The Taj Mahal",
      description: "Agra, India",
      clickEvent: () => handleSlideClick("https://www.yatra.com/india-tour-packages/holidays-in-agra"),
    },
    {
      image: "https://images.unsplash.com/photo-1589041127168-9b1915731dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a29sa2F0YXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Tilottama Kolkata",
      description: "City Of Joy ,India",
      clickEvent: ()=> handleSlideClick("https://www.wbtourism.gov.in/")
    },
    {
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGl0YWx5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Colosseum ",
      description: "The Elliptical Amphitheatre ,Italy",
      clickEvent: ()=>handleSlideClick("https://www.yatra.com/international-tour-packages/family-holidays-in-italy")
    },
    {
      image: "https://images.unsplash.com/photo-1520967824495-b529aeba26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "London Bridge",
      description: "City Of London, United Kingdom",
      clickEvent: ()=>handleSlideClick("https://www.yatra.com/international-tour-packages/family-holidays-in-london")
    },
    {
      image: "https://images.unsplash.com/photo-1587161584760-f51779fb276a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGltZXMlMjBzcXVhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Times Square",
      description: "New york, USA",
      clickEvent: ()=>handleSlideClick("https://www.yatra.com/international-tour-packages/family-holidays-in-new-york")
    },
    {
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Delhi",
      description: "Captial Of India",
      clickEvent: ()=>handleSlideClick("https://www.yatra.com/india-tour-packages/family-holidays-in-new-delhi")
    },
    {
        image: "https://images.unsplash.com/photo-1482690205767-61deebe15ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlbmljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Venice",
        description: "The Floating City,Italy",
        clickEvent: ()=>handleSlideClick("https://www.yatra.com/international-tour-packages/family-holidays-in-italy")
      },
      {
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2VueWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Magical Masai Mara",
        description: "southwest of Kenya",
        clickEvent: ()=>handleSlideClick("https://www.yatra.com/international-tour-packages/wildlife-holidays-in-masai-mara")
      },

  
  ];
  return (
    <>
    <h3 className="secondaryText"> Explore The World </h3>
    <div className="side">
      <ReactCardSlider className="sdd" slides={slides} />
    </div>
    </>
  );
}


export default Cards;

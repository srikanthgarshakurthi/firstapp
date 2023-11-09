import React from "react";
import "./product.css";

const ProductDisplay = (props) => {
  const renderProduct = props.prodData.map((item, index) => {
    return (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Rs.{item.cost}</p>
          <p>{item.user}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      {/* <h2>product Display</h2>; */}
      <div className="main">{renderProduct}</div>
    </>
  );
};

export default ProductDisplay;

// const ProductDisplay = (props) => {
//   const renderProduct = props.prodData.map((item, index) => {
//     return (
//       <div className="card" key={item.id}>
//         <img src={item.image} alt={item.name} />
//         <div>
//           <h3>{item.name}</h3>
//           <p>{item.description}</p>
//           <p>Rs.{item.cost}</p>
//           <p>{item.uses}</p>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <>
//       <h2>Product Display</h2>
//       <div className="main">{renderProduct}</div>
//     </>
//   );
// };
// export default ProductDisplay;

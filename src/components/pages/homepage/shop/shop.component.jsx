import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CollectionsOverview from "./../../../collections-overview/collections-overview.component";

// import { selectCollections } from "./../../../../redux/shop/shop.selectors";
// import { createStructuredSelector } from "reselect";
// import { Routes, Route } from "react-router-dom";
import CollectionPage from "./../../collection/collection.component";

const ShopPage = () => {
  // const collections = useSelector((state) => state.shop.collections);
  // console.log("collections", collections);
  const params = useParams();
  // console.log("params", params);
  return (
    <div className="shop-page">
      {params.collectionId ? <CollectionPage /> : <CollectionsOverview />}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;

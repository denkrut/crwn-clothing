import React from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";
import CollectionPreview from "./../collection-preview/collection-preview.component";

const CollectionsOverview = () => {
  const collections = useSelector((state) =>
    Object.keys(state.shop.collection).map((key) => state.shop.collection[key])
  );
  console.log("COLLECTIONS", collections);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(CollectionsOverview);
export default CollectionsOverview;

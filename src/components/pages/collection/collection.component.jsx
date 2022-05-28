import React from "react";
// import collectionItemComponent from "../../collection-item/collection-item.component";
import "./collection.styles.scss";
import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { selectCollection } from "../../../redux/shop/shop.selectors";
import CollectionItemComponent from "../../collection-item/collection-item.component";
import { useSelector } from "react-redux";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(
    (state) => state.shop.collection[collectionId]
  );

  const { items, title } = collection;

  console.log("title", title);
  console.log("items", items);
  console.log("collection", collection);
  console.log("collectionId", collectionId);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

// const mapStateToProps = (state, collectionId) => ({
//   collection: state.shop.collection.find(
//     (collection) => collection.id === collectionId
//   ),
// });
// export default connect(mapStateToProps)(CollectionPage);

export default CollectionPage;

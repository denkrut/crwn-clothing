import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";

import "./directory.styles.scss";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);

// function Directory() {
//   const [section, setSection] = useState([
//     {
//       title: "hats",
//       imageUrl:
//         "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
//       id: 1,
//     },
//     {
//       title: "jackets",
//       imageUrl:
//         "https://media.istockphoto.com/photos/young-man-hiking-in-rain-with-waterproof-jacket-picture-id904659086?s=2048x2048",
//       id: 2,
//     },
//     {
//       title: "sneakers",
//       imageUrl:
//         "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//       id: 3,
//     },
//     {
//       title: "womens",
//       imageUrl:
//         "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//       size: "large",
//       id: 4,
//     },
//     {
//       title: "mens",
//       imageUrl:
//         "https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?s=612x612",
//       size: "large",
//       id: 5,
//     },
//   ]);

//   return (
//     <div className="directory-menu">
//       {section.map(({ title, imageUrl, id, size }) => (
//         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
//       ))}
//     </div>
//   );
// }

// export default Directory;

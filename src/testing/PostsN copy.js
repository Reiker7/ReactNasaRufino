import { useEffect, useState } from "react";
import PostN from "./PostN";
import { Row } from "react-bootstrap";
import NavbarNeas from "../components/NavbarNeas";
import axios from "axios";
import logo from "../assets/load.gif";
import Pagination from "../common/Pagination";
import paginate from "../common/paginate";
const apiEndpoint = "https://test-1yay.onrender.com/neas";
const apiDeleteEndpoint = "https://test-1yay.onrender.com/api/astronomy/neas/";

const PostsN = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const hadleDeletePost = async (post) => {
    const oldPosts = [...posts];

    const newPosts = posts.filter((p) => p !== post);

    setPosts(newPosts);

    try {
      await axios.delete(apiDeleteEndpoint + post._id);
      throw new Error("Error");
    } catch (err) {
      setPosts(oldPosts);
    }
  };
  useEffect(() => {
    async function getPost() {
      const { data } = await axios(apiEndpoint);
      setPosts(data);
    }
    getPost();
  }, []);
  const [filtereddatos, pagedatosCount] = paginate(
    posts,
    pageSize,
    currentPage
  );

  if (posts.length === 0) return <img src={logo} alt="loading..." />;

  return (
    <>
      <h4>Neas ({posts.length})</h4>
      <Pagination
        pageSize={pageSize}
        itemsCount={posts.length}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
      <NavbarNeas />

      <Row xs={4} md={6} className="g-1">
        {filtereddatos.map((post) => (
          <PostN
            key={post._id}
            onDelete={() => hadleDeletePost(post)}
            {...post}
          />
        ))}
      </Row>
    </>
  );
};

export default PostsN;

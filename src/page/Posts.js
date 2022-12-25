import { useEffect, useState } from "react";
import Post from "./Post";
import { Row } from "react-bootstrap";
import NavbarLanding from "../components/NavbarLanding";
import axios from "axios";
import logo from "../assets/load.gif";
import Pagination from "../common/Pagination";
import paginate from "../common/paginate";
const apiEndpoint = "https://test-1yay.onrender.com/landing/";
const apiDeleteEndpoint =
  "https://test-1yay.onrender.com/api/astronomy/landings/delete/";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);

  const hadleDeletePost = async (post) => {
    const oldPosts = [...posts];

    const newPosts = posts.filter((p) => p !== post);

    setPosts(newPosts);

    try {
      await axios.delete(apiDeleteEndpoint + post.id);
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
      <NavbarLanding />
      <h4>Landings ({posts.length})</h4>
      <Pagination
        pageSize={pageSize}
        itemsCount={posts.length}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />

      <h4>Landings ({posts.length})</h4>
      <Row sm={4} md={5} className="g-1">
        {filtereddatos.map((post) => (
          <Post
            key={post.id}
            onDelete={() => hadleDeletePost(post)}
            {...post}
          />
        ))}
      </Row>
    </>
  );
};

export default Posts;

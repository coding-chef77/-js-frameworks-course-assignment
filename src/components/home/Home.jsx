import Heading from "../layout/Heading";
import { BASE_URL } from "../../constants/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + "wp/v2/posts");
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <Heading title="Home" />
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Card.Text
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link to={`/detail/${post.id}`}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

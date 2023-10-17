import Heading from "../layout/Heading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

async function fetchProduct(id) {
  const response = await fetch(
    `https://www.hgweb.no/wp-json/wp/v2/posts/${id}`
  );
  const data = await response.json();

  return data;
}

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const post = await fetchProduct(id);
      setPost(post);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Heading title="Detail" />
      {post && (
        <div
          style={{
            margin: `20px`,
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <Card>
            <Card.Body>
              <Card.Title>{post.title.rendered}</Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Card.Text
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

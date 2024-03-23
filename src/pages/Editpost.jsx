import React, { useEffect, useState } from "react";
import { Container, Postform } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/conf";
function Editpost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <Postform post={post} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;

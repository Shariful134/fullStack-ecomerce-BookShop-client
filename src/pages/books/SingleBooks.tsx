import { Link, useParams } from "react-router";
import { useGetSingleBookQuery } from "../../redux/book/bookApi";
import { Button, Col, Flex, Image, Row } from "antd";

import { Typography } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/auth/authSlice";
import { TUser } from "../../types/type";
import { verifyToken } from "../../utils/verifyToken";

const { Title, Text } = Typography;

const SingleBooks = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }
  const admin = user?.role;
  const { bookId } = useParams();

  const { data: singleBook } = useGetSingleBookQuery(bookId);
  console.log(singleBook?.data);
  const book = singleBook?.data;

  return (
    <>
      <Row
        justify="center"
        align="middle"
        gutter={[16, 16]}
        style={{
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "3px 5px 6px #b8b9be,-3px -3px 6px #b8b9be",
        }}
      >
        <Col key={"1"}>
          <Image width={200} src={book?.imageURL} />
        </Col>
        <Col key={"2"}>
          <Title style={{ color: "#25ABE1" }} level={3}>
            {book?.title}
          </Title>
          <Title level={4}>
            {" "}
            Category :{" "}
            <Text style={{ color: "#23A9E2" }}>{book?.category} </Text>
          </Title>

          <p>
            Price : <Text style={{ color: "#23A9E2" }}>{book?.price} $</Text>
          </p>
          <p>
            Author : <Text style={{ color: "#23A9E2" }}>{book?.author}</Text>
          </p>
          <p>
            Category :{" "}
            <Text style={{ color: "#23A9E2" }}>{book?.category} </Text>
          </p>
          <p>
            Quantity :{" "}
            <Text style={{ color: "#23A9E2" }} type="success">
              {book?.quantity}
            </Text>
          </p>
          <p style={{ width: "100%", maxWidth: 700 }}>
            Descriptoin:
            <Text style={{ color: "#23A9E2" }}> {book?.description} </Text>
          </p>
        </Col>
        <Col>
          <Flex justify="space-between" style={{ marginTop: "2px" }}>
            {admin ? (
              <Button
                style={{
                  boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                  marginRight: "8px",
                }}
              >
                Update
              </Button>
            ) : (
              <>
                <Button
                  style={{
                    marginRight: "8px",
                    boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                  }}
                >
                  Add To Cart
                </Button>

                <Button
                  style={{
                    boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                    marginRight: "8px",
                  }}
                >
                  Order
                </Button>
              </>
            )}
            <Link to="/home">
              <Button
                style={{
                  boxShadow: "1px 1px 1px #b8b9be,-1px -1px 1px #fff",
                }}
              >
                All Books
              </Button>
            </Link>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default SingleBooks;

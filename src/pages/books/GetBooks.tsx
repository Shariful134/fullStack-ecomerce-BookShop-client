import { Card, Col, Flex, Row, Space } from "antd";
import { useGetAllBooksQuery } from "../../redux/book/bookApi";
import { TBook } from "../../types/type";

const { Meta } = Card;

const GetBooks = () => {
  const { data: booksData } = useGetAllBooksQuery(undefined);

  const books = booksData?.data?.map((book: TBook) => ({
    _id: book._id,
    title: book.title,
    author: book.author,
    price: book.price,
    category: book.category,
    description: book.description,
    quantity: book.quantity,
    inStock: book.inStock,
    publicationDate: book.publicationDate,
    publisher: book.publisher,
    imageURL: book.imageURL,
  }));

  return (
    <Row gutter={[8, 12]}>
      {books?.map((book) => (
        <Col sm={8} md={{ span: 4 }} lg={{ span: 3 }}>
          <Card
            hoverable
            style={{ width: "100%", maxWidth: "120px", marginRight: "5px" }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default GetBooks;

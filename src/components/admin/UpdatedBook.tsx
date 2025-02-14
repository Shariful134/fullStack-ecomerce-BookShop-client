import { Button, Col, Divider, Flex, Image, Row } from "antd";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../components/form/PHInput";
import PHDatePicker from "../../components/form/PHDatePicker";
import {
  useGetSingleBookQuery,
  useUpdatebookMutation,
} from "../../redux/book/bookApi";
import { TBook, TResponse } from "../../types/type";
import { toast } from "sonner";
import { Typography } from "antd";
const { Title, Text } = Typography;

import { Link, useParams } from "react-router";

const stockOption = [
  { value: "true", label: "true" },
  { value: "false", label: "false" },
];

const categoryOption = [
  { value: "Fiction", label: "Fiction" },
  { value: "Science", label: "Science" },
  { value: "SelfDevelopment", label: "SelfDevelopment" },
  { value: "Poetry", label: "Poetry" },
  { value: "Religious", label: "ScieReligiousnce" },
];

const defaultValues = {
  title: "The Silent Garden",
  author: "Sophia Larkin",

  category: "Fiction",
  description:
    "A captivating collection of poems that celebrate the beauty of nature and the profound connection between humans and the Earth. Larkin's words evoke powerful emotions that resonate deeply with readers.",

  publisher: "Poetry Works",
};

const UpdatedBook = () => {
  const { bookId } = useParams();
  const [updateBook] = useUpdatebookMutation();

  const { data: singleBook } = useGetSingleBookQuery(bookId);
  console.log(singleBook?.data);
  const book = singleBook?.data;

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data,
      price: Number(data?.price),
      quantity: Number(data?.quantity),
      inStock: Boolean(data?.inStock),
    };
    console.log({ bookData, bookId });
    try {
      const res = (await updateBook({
        id: bookId,
        data: bookData,
      })) as TResponse<TBook>;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success("Book Created SuccessFully");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

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
            {/* {admin ? (
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
            )} */}
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
      <Row justify="center" align="middle">
        <Divider>
          {" "}
          <Title style={{ color: "#23A8E1" }} level={4}>
            Update a Book
          </Title>
        </Divider>
        <PHForm onSubmit={onsubmit} defaultValues={defaultValues}>
          <Row justify="center" align="middle" gutter={8}>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput label="Title" type="text" name="title"></PHInput>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput label="Author" type="text" name="author"></PHInput>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput label="Price" type="number" name="price"></PHInput>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              {" "}
              <PHInput label="Quantity" type="number" name="quantity"></PHInput>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Category"
                name="category"
                options={categoryOption}
              ></PHSelect>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                label="Description"
                type="text"
                name="description"
              ></PHInput>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                label="PublicationDate"
                name="publicationDate"
              ></PHDatePicker>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="InStock"
                name="inStock"
                options={stockOption}
              ></PHSelect>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput label="Publisher" type="text" name="publisher"></PHInput>
            </Col>
            <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                label="IamgeURL Link"
                type="text"
                name="imageURL"
              ></PHInput>
            </Col>
            <Col>
              <Button htmlType="submit">Submit</Button>
            </Col>
          </Row>
        </PHForm>
      </Row>
    </>
  );
};

export default UpdatedBook;

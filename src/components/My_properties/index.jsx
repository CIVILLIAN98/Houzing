import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Button from "../generics/Button/index";
import noimg from "../../assets/img/noimg.jpeg";
import { useQuery } from "react-query";
import { message } from "antd";
// import { useEffect, useState } from "react";

export const Myproperties = () => {
  // const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => {
        return (
          <User key={data?.id}>
            <User.Img
              src={
                (data?.attachments && data?.attachments[0]?.imgPath) || noimg
              }
            />
            <User flex>
              <div className="subTitle">
                {data.country}, {data.address}
              </div>
              <div className="info">
                {data.city} {data.region}
              </div>
              <del>
                <div className="info">$ {data.salePrice}</div>
              </del>
            </User>
            <div style={{ marginLeft: "auto" }}>
              <Button>For Sale</Button>
            </div>
          </User>
        );
      },
    },
    {
      title: "Year Build",
      render: (data) => (
        <span key={data?.id}> {data.houseDetails.yearBuilt}</span>
      ),
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span key={data?.id}> {data.user.email}</span>,
      key: "email",
    },
    {
      title: "Price",
      key: "price",
      render: (data) => <span key={data?.id}> $ {data.price}</span>,

      width: 150,
    },
    {
      title: "Action",
      key: "email",
      width: 100,
      render: (data) => {
        return (
          <User key={data?.id}>
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
        );
      },
    },
  ];

  const onDelete = (id) => {
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      }
    );
  };

  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>

        <div style={{ marginLeft: "auto" }} className="title">
          <Button type="blue" onClick={() => navigate("/myprofile/newhouse")}>
            Add House
          </Button>
        </div>
      </User>

      <Container>
        <AntTable
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              }, // click row
            };
          }}
          dataSource={data?.data}
          columns={columns}
          key={data?.id}
        />
      </Container>
    </Wrapper>
  );
};

export default Myproperties;
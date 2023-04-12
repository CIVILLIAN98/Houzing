import { MenuWrapper, Section, Wrapper, SelectAnt, Delete } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Input from "../generics/input/index";

import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useFormik } from "formik";
import Button from "../generics/Button";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";

export const AddNewHouse = () => {
  // const { search } = useLocation();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const request = useRequest();
  // const query = useSearch();
  const { REACT_APP_BASE_URL: Http } = process.env;
  // const [value, setValue] = useState("Select Category");
  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");

  const [initial, setInitail] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,

    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [category, setCategory] = useState([]);
  // const { data, refetch } = useQuery([search], () => {
  //   return request({ url: `/houses/me`, token: true });
  // });
  useEffect(() => {
    fetch(`${Http}/categories/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {},

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
    },
  });
  const addImg = () => {
    setImgs([
      ...imgs,
      { imgPath: img, id: `${img.length * Math.random()}${img}$` },
    ]);
    setImg("");
  };

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section jc>
            <Input
              onChange={formik.handleChange}
              name="country"
              value={formik.values.country}
              placeholder="Country"
            />
            <Input
              onChange={formik.handleChange}
              name="region"
              value={formik.values.region}
              placeholder="Region"
            />
            <Input
              onChange={formik.handleChange}
              name="city"
              value={formik.values.city}
              placeholder="City"
            />
            <Input
              onChange={formik.handleChange}
              name="address"
              value={formik.values.address}
              placeholder="Address"
            />
          </Section>

          <h1 className="subTitle">Apartment info</h1>
          <Section jc flex>
            <Section jc>
              <Input
                name="area"
                value={formik.values.area}
                onChange={formik.handleChange}
                placeholder="area"
              />
              <Input
                name="bath"
                value={formik.values.bath}
                onChange={formik.handleChange}
                placeholder="baths"
              />
              <Input
                name="beds"
                value={formik.values.beds}
                onChange={formik.handleChange}
                placeholder="beds"
              />
              <Input
                name="garage"
                value={formik.values.garage}
                onChange={formik.handleChange}
                placeholder="garages"
              />
            </Section>
            <Section jc>
              <Input
                name="room"
                value={formik.values.room}
                onChange={formik.handleChange}
                placeholder="Rooms"
              />
              <Input
                name="yearBuilt"
                value={formik.values.yearBuilt}
                onChange={formik.handleChange}
                placeholder="yearBuilt"
              />
              <SelectAnt
                onChange={formik.handleChange}
                defaultValue={"Select Category"}
              >
                <SelectAnt.Option>Select Category</SelectAnt.Option>
                {data.map((val) => {
                  return (
                    <SelectAnt.Option key={val.id} value={val.id}>
                      {val.name}
                    </SelectAnt.Option>
                  );
                })}
              </SelectAnt>
              <Input
                name="zipCode"
                onChange={formik.handleChange}
                value={formik.values.zipCode}
                placeholder="zipCode"
              />
            </Section>
          </Section>
          <Section flex jc>
            <Section jc>
              <Input
                wr="100%"
                placeholder="Add IMG URL"
                onChange={({ target: { value } }) => setImg(value)}
              />{" "}
              <Button width="200px" type="blue" onClick={addImg}>
                Add IMG URL
              </Button>
            </Section>
            <Section c flex>
              {imgs.map((value, index) => {
                return (
                  <pre key={index}>
                    {value}{" "}
                    <Delete
                      onClick={() => {
                        let res = imgs.filter((vl) => vl.id !== value.id);
                        setImgs(res);
                      }}
                    />
                  </pre>
                );
              })}
            </Section>
            <TextArea
              rows={6}
              placeholder="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section jc>
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="name"
            />
            <Input
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
              placeholder="price"
            />
            <Input
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice}
              placeholder="Sale price"
            />
          </Section>

          <h1 className="subTitle">Additional information</h1>
          <Section c>
            <Section flex c>
              <Checkbox>busStop</Checkbox>
              <Checkbox>garden</Checkbox>
              <Checkbox>market</Checkbox>
              <Checkbox>park</Checkbox>
            </Section>
            <Section flex c>
              <Checkbox>airCondition</Checkbox>
              <Checkbox>courtyard</Checkbox>
              <Checkbox>furniture</Checkbox>
              <Checkbox>gasStove</Checkbox>
            </Section>
            <Section flex c>
              <Checkbox>parking</Checkbox>
              <Checkbox>school</Checkbox>
              <Checkbox>stadium</Checkbox>
              <Checkbox>subway</Checkbox>
            </Section>
            <Section flex c>
              <Checkbox>superMarket</Checkbox>
              <Checkbox>internet</Checkbox>
              <Checkbox>tv</Checkbox>
            </Section>
          </Section>
          <Button type="blue">Save</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;

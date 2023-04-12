import { MenuWrapper, Section, Wrapper, SelectAnt, Delete } from "./style";
import useRequest from "../../hooks/useRequest";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "../generics/Button";
import Input from "../generics/input/index";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useLocation } from "react-router-dom";

export const AddNewHouse = () => {
  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const request = useRequest();
  const { search } = useLocation();
  // const [initial, setInitail] = useState({
  //   houseDetails: {},
  //   homeAmenitiesDto: {},
  //   componentsDto: {},
  //   status: true,
  //   locations: {
  //     latitude: 0,
  //     longitude: 0,
  //   },
  // });
  const [category, setCategory] = useState([]);

  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    // eslint-disable-next-line
    fetch(`${REACT_APP_BASE_URL}/categories/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCategory(res?.data || []);
      });
    // eslint-disable-next-line
  }, [REACT_APP_BASE_URL]);

  useEffect(() => {
    request({
      url: `/houses/me`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => setData(res?.data || []));
  }, [search]);

  const formik = useFormik({
    initialValues: {
      houseDetails: {},
      homeAmenitiesDto: {},
      componentsDto: {},
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log({ ...values, attachments: img });
      request({
        url: `/houses`,
        method: "POST",
        token: true,
        body: {
          ...values,
          categoryId: 2,
          attachments: imgs,
        },
      }).then((res) => console.log(res));
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
                type="number"
                name="houseDetails.area"
                value={formik.values.area}
                onChange={formik.handleChange}
                placeholder="area"
              />
              <Input
                name="houseDetails.bath"
                value={formik.values.bath}
                onChange={formik.handleChange}
                placeholder="baths"
                type="number"
              />
              <Input
                name="houseDetails.beds"
                value={formik.values.beds}
                onChange={formik.handleChange}
                placeholder="beds"
                type="number"
              />
              <Input
                name="houseDetails.garage"
                value={formik.values.garage}
                onChange={formik.handleChange}
                placeholder="garages"
                type="number"
              />
            </Section>
            <Section jc>
              <Input
                name="houseDetails.room"
                value={formik.values.room}
                onChange={formik.handleChange}
                placeholder="Rooms"
                type="number"
              />
              <Input
                name="houseDetails.yearBuilt"
                value={formik.values.yearBuilt}
                onChange={formik.handleChange}
                placeholder="yearBuilt"
                type="number"
              />
              <SelectAnt
                onChange={formik.handleChange}
                defaultValue={"Select Category"}
                value={formik.values.categoryId}
              >
                <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
                {category?.map((val) => {
                  return (
                    <SelectAnt.Option
                      onChange={formik.handleChange}
                      key={val.id}
                    >
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
                value={img}
                wr="100%"
                placeholder="Add IMG URL"
                onChange={({ target: { value } }) => setImg(value)}
              />{" "}
              <Button width="200px" onClick={addImg}>
                Add IMG URL
              </Button>
            </Section>
            <Section c flex>
              {imgs.map((value, index) => {
                return (
                  <pre key={index}>
                    {value?.imgPath}
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
              type="number"
            />
            <Input
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice}
              placeholder="Sale price"
              type="number"
            />
          </Section>

          <h1 className="subTitle">Additional information</h1>
          <Section c>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.busStop}
                name="homeAmenitiesDto.busStop"
              >
                busStop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.garden}
                name="homeAmenitiesDto.garden"
              >
                garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.market}
                name="homeAmenitiesDto.market"
              >
                market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.park}
                name="homeAmenitiesDto.park"
              >
                park
              </Checkbox>
            </Section>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.airCondition}
                name="componentsDto.airCondition"
              >
                airCondition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.courtyard}
                name="componentsDto.courtyard"
              >
                courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.furniture}
                name="componentsDto.furniture"
              >
                furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.gasStove}
                name="componentsDto.gasStove"
              >
                gasStove
              </Checkbox>
            </Section>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.parking}
                name="homeAmenitiesDto.parking"
              >
                parking
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.school}
                name="homeAmenitiesDto.school"
              >
                school
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.stadium}
                name="homeAmenitiesDto.stadium"
              >
                stadium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.subway}
                name="homeAmenitiesDto.subway"
              >
                subway
              </Checkbox>
            </Section>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.superMarket}
                name="homeAmenitiesDto.superMarket"
              >
                superMarket
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.internet}
                name="componentsDto.internet"
              >
                internet
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                value={formik.values.tv}
                name="componentsDto.tv"
              >
                tv
              </Checkbox>
            </Section>
          </Section>
          <Button type="blue">Save</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;

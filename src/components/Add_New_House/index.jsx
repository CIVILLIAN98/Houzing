/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Wrapper, MenuWrapper, Section, SelectAnt, Delete } from "./style";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Button from "../generics/Button/index";
import Input from "../generics/input/index";
import { Checkbox, message } from "antd";

import { useFormik } from "formik";
import TextArea from "antd/lib/input/TextArea";

export const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
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
  const [img, setImg] = useState("");

  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  // single house
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitail({ ...res?.data });
      });
  }, []);

  // category
  useEffect(() => {
    request({ url: `/categories/list`, token: true }).then((res) =>
      setCategory(res?.data || [])
    );
  }, []);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          categoryId: 1,
          name: "CIVILLIAN_98",
          attachments: imgs,
        },
      }).then((res) => {
        if (res?.success) navigate("/myproperties");
        else {
          message.info(`Error enter information about new house`);
        }
      });
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
          <Section>
            <Input
              name="country"
              value={formik.values.country}
              placeholder="Country"
              onChange={formik.handleChange}
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
              value={formik.values?.city}
              placeholder="City"
            />
            <Input
              onChange={formik.handleChange}
              name="address"
              value={formik.values?.address}
              placeholder="Address"
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              type="number"
              name="houseDetails.area"
              value={formik.values.houseDetails?.area}
              onChange={formik.handleChange}
              placeholder="area"
            />
            <Input
              type="number"
              name="houseDetails.bath"
              value={formik.values.houseDetails?.bath}
              onChange={formik.handleChange}
              placeholder="bath"
            />
            <Input
              type="number"
              name="houseDetails.beds"
              value={formik.values.houseDetails?.beds}
              onChange={formik.handleChange}
              placeholder="beds"
            />
            <Input
              type="number"
              name="houseDetails.garage"
              value={formik.values.houseDetails?.garage}
              onChange={formik.handleChange}
              placeholder="garage"
            />
          </Section>
          <Section>
            <Input
              type="number"
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              placeholder="yearbuilt"
              value={formik.values.houseDetails?.yearBuilt}
            />
            <Input
              type="number"
              value={formik.values.houseDetails?.room}
              name="houseDetails.room"
              onChange={formik.handleChange}
              placeholder="room"
            />
            <SelectAnt
              defaultValue={"Select Category"}
              value={formik.values.categoryId}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {category.map((value) => {
                return (
                  <SelectAnt.Option key={value.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              placeholder="Name"
            />
            <Input
              value={formik.values.zipCode}
              name="zipCode"
              onChange={formik.handleChange}
              placeholder="Zip Code"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
              placeholder="Price"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice}
              placeholder="Sale price"
            />
          </Section>
          <Section>
            <Input
              value={img}
              wr="100%"
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />{" "}
            <Button
              type={"button"}
              css={"blue"}
              width={"200px"}
              onClick={addImg}
            >
              Add Image URL
            </Button>
          </Section>
          <Section flex>
            {imgs.map((value, index) => {
              return (
                <Section key={index}>
                  <pre>{value?.imgPath} </pre>
                  <Delete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </Section>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>

          <Section gap c jc>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
                values={formik.values.homeAmenitiesDto?.busStop}
              >
                Bus Stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
                values={formik.values.homeAmenitiesDto?.garden}
              >
                Garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
                values={formik.values.homeAmenitiesDto?.market}
              >
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
                values={formik.values.homeAmenitiesDto?.park}
              >
                Park
              </Checkbox>
            </Section>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
                values={formik.values.homeAmenitiesDto?.school}
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.statium"
                values={formik.values.homeAmenitiesDto?.statium}
              >
                Statium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
                values={formik.values.homeAmenitiesDto?.subway}
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
                values={formik.values.homeAmenitiesDto?.superMarket}
              >
                Super Market
              </Checkbox>
            </Section>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.airCondition"
                // values={formik.values.componentsDto?.airCondition}
              >
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.gasStove"
                // value={formik.values.componentsDto.gasStove}
              >
                Gas Stove
              </Checkbox>
            </Section>
            <Section flex c>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
                values={formik.values.homeAmenitiesDto?.parking}
              >
                Parking
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.tv"
                // value={formik.values.componentsDto.tv}
              >
                TV
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.internet"
                // value={formik.values.componentsDto.internet}
              >
                Internet
              </Checkbox>
            </Section>
          </Section>

          <Button type={"submit"}>{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;

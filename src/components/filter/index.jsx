import { Dropdown } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import Input from "../generics/input";
import Button from "../generics/Button";

export const Filter = (e) => {
  const { REACT_APP_BASE_URL: Http } = process.env;
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

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

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const Sizeref = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  const onSize = ({ target: { value } }) => {
    navigate(`/properties${uzeReplace("size", value)}`);
  };

  const onSelect = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };
  const onSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };

  const Menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          width={200}
          onChange={onChange}
          ref={countryRef}
          name="country"
          placeholder="Country"
        />
        <Input
          width={200}
          onChange={onChange}
          ref={regionRef}
          name="region"
          placeholder="Region"
        />
        <Input
          width={200}
          onChange={onChange}
          ref={cityRef}
          name="address"
          placeholder="City"
        />
        <Input
          width={200}
          onChange={onChange}
          name="zip_code"
          ref={zipRef}
          placeholder="Zip Code"
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          width={200}
          type="number"
          name="room"
          onChange={onChange}
          ref={roomsRef}
          placeholder="Rooms"
        />
        <Input
          width={200}
          ref={Sizeref}
          type="number"
          onChange={onSize}
          placeholder="Size"
        />
        <SelectAnt
          defaultValue={query.get("sort") || "Select Sort"}
          onChange={onSort}
        >
          <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>Ascending</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Descending</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt value={value} onChange={onSelect}>
          <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
          {data.map((val) => {
            return (
              <SelectAnt.Option key={val.id} value={val.id}>
                {val.name}
              </SelectAnt.Option>
            );
          })}
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          width={200}
          onChange={onChange}
          name="min_price"
          ref={minPriceRef}
          placeholder="Min price"
        />
        <Input
          width={200}
          onChange={onChange}
          name="max_price"
          ref={maxPriceRef}
          placeholder="Max price"
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        wr={"100%"}
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        overlay={Menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger="click"
      >
        <div>
          <Button type="light">
            <Icons>
              <Icons.Filter />
              Advanced
            </Icons>
          </Button>
        </div>
      </Dropdown>
      <Button type="blue" width={180}>
        <Icons>
          <Icons.Search />
          Search
        </Icons>
      </Button>
    </Container>
  );
};

export default Filter;

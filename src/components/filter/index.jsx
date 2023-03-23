import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
// import { useSearch } from "../../hooks/useSearch";
import Input from "../generics/input";
import Button from "../generics/Button";

export const Filter = (e) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const Sizeref = useRef();
  const Sortref = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
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
          name="room"
          onChange={onChange}
          ref={roomsRef}
          placeholder="Rooms"
        />
        <Input width={200} ref={Sizeref} placeholder="Size" />
        <Input width={200} ref={Sortref} placeholder="Sort" />
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
      <div style={{ width: "100%" }}>
        <Input
          icon={<Icons.Houses />}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
      </div>

      <Dropdown
        overlay={menu}
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

import React, { useRef } from "react";
import Button from "../generics/Button";
import Input from "../generics/input";
import { Container, Icons, AdvancedCon, Advanced, Section } from "./styled";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Grid from "@material-ui/core/Grid";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));
const Filter = (e) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const Countryref = useRef();
  const Regionref = useRef();
  const Cityref = useRef();
  const Zipref = useRef();

  const Roomref = useRef();
  const Sizeref = useRef();
  const Sortref = useRef();
  const Minref = useRef();
  const Maxref = useRef();
  const onchange = ({ target: { value, name } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
    console.log(name, value);
  };
  console.log(query.get("country"), "query");
  return (
    <Container className={classes.root}>
      <Input
        icon={<Icons.Houses />}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />

      <Popper
        className="Riot"
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {() => (
          <AdvancedCon>
            <Advanced>
              <Advanced.Header>Address</Advanced.Header>
              <Section>
                <input
                  defaultValue={"country"}
                  onChange={onchange}
                  name="country"
                  placeholder="Country"
                  ref={Countryref}
                />
                <input
                  defaultValue={"region"}
                  onChange={onchange}
                  name="region"
                  placeholder="Region"
                  ref={Regionref}
                />
                <input
                  defaultValue={"city"}
                  onChange={onchange}
                  name="city"
                  placeholder="City"
                  ref={Cityref}
                />
                <input
                  defaultValue={"zip_code"}
                  onChange={onchange}
                  name="zip_code"
                  placeholder="Zip code"
                  ref={Zipref}
                />
              </Section>
              <Advanced.Header>Apartment info</Advanced.Header>
              <Section>
                <input ref={Roomref} placeholder="Rooms" />
                <input ref={Sizeref} placeholder="Size" />
                <input ref={Sortref} placeholder="Sort" />
              </Section>
              <Advanced.Header>Price</Advanced.Header>
              <Section>
                <input ref={Minref} placeholder="Min price" />
                <input ref={Maxref} placeholder="Max price" />
              </Section>
            </Advanced>
            <Advanced.Footer>
              <Button type="light">Cancel</Button>{" "}
              <Button type="blue">Submit</Button>
            </Advanced.Footer>
          </AdvancedCon>
        )}
      </Popper>
      <Grid item>
        <Button type="light" onClick={handleClick("bottom-end")}>
          <Icons>
            <Icons.Advanced />
          </Icons>{" "}
          Advanced
        </Button>
      </Grid>
      <Button width="180" type="blue">
        <Icons>
          <Icons.Search />
        </Icons>
        Search
      </Button>
    </Container>
  );
};

export default Filter;

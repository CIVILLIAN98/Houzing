import React, { useRef } from "react";
import Button from "../generics/Button";
import Input from "../generics/input";
import { Container, Icons, AdvancedCon, Advanced, Section } from "./styled";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));
const Filter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

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
                <input placeholder="Country" ref={Countryref} />
                <input placeholder="Region" ref={Regionref} />
                <input placeholder="City" ref={Cityref} />
                <input placeholder="Zip code" ref={Zipref} />
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
            <Advanced.Footer></Advanced.Footer>
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

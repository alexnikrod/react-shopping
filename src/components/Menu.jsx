import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Remove
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

let state = {}
const { activeItem } = state;

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item
      name="browse"
      active={activeItem === 'browse'}
      onClick={() => window.location.reload(false)}
    >
      Web Development Book Store
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item
        name="signup"
        //onClick={this.handleItemClick}
      >
        Total: &nbsp; <b>{totalPrice}</b>&nbsp; USD
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item
            name="help"
            //onClick={this.handleItemClick}
          >
            Cart (<b>{count}</b>)
          </Menu.Item>
        }
        content={
          count === 0
            ? "cart is empty"
            : items.map((book, i) => <CartComponent {...book} key={i} />)
        }
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;

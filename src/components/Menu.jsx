import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import { removeFromCart } from '../actions/cart';

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item
      name='browse'
      //onClick={this.handleItemClick}
    >
      Book Store
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item
        name='signup'
        //onClick={this.handleItemClick}
      >
        Total: &nbsp; <b>{totalPrice}</b>&nbsp; rub.
      </Menu.Item>

      <Popup 
        trigger={
          <Menu.Item name="help" 
          //onClick={this.handleItemClick}
          >
            Cart (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => <CartComponent {...book} />)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;



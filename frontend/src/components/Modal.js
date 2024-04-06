import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="surplo-title">Title</Label>
              <Input
                type="text"
                id="surplo-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="surplo-description">Description</Label>
              <Input
                type="text"
                id="surplo-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="surplo-quantity">Quantity</Label>
              <Input
                type="text"
                id="surplo-quantity"
                name="quantity"
                value={this.state.activeItem.quantity}
                onChange={this.handleChange}
                placeholder="Enter quantity"
              />
            </FormGroup>
            <FormGroup>
              <Label for="surplo-price">Price</Label>
              <Input
                type="number"
                id="surplo-price"
                name="price"
                value={this.state.activeItem.price}
                onChange={this.handleChange}
                placeholder="Enter price"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="expired"
                  checked={this.state.activeItem.expired}
                  onChange={this.handleChange}
                />
                Expired
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
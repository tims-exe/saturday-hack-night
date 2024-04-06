import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

/*
const SurploItems = [
  {
    id: 1,
    title: "Bread",
    description: "Sliced bread with mold",
    quantity: "1 packet",
    price : 20.0,
    expired: true,
  },
  {
    id: 2,
    title: "Left Over Rice",
    description: "Left Over Rice - past its prime (for informational purposes only)",
    quantity: "15 plates",
    price : 15,
    expired: true,
  },
  {
    id: 3,
    title: "Banquet Cuisune",
    description: "Delicious and mouthwatering dishes for your event",
    quantity: "50 plates",
    price : 1105,
    expired: false,
  },
  {
    id: 4,
    title: "Party Buffet",
    description: "Mouthwatering and delectable options for your party",
    quantity: "85 plates",
    price : 800,
    expired: false,
  },
];
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewExpired: false,
      SurploList: [],
      modal: false,
      activeItems: {
        title: "",
        description: "",
        quantity: "",
        price: "",
        expired: false,
      }
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/surplo/")
      .then((res) => this.setState({ SurploList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/surplo/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/surplo/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/surplo/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", description: "", quantity: "", price: "", expired: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewExpired: true });
    }

    return this.setState({ viewExpired: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewExpired ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Expired
        </span>
        <span
          className={this.state.viewExpired ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Non-Expired
        </span>
        <span
          className={this.state.viewExpired ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Industrial Symbiosis
        </span>
        <span
          className={this.state.viewExpired ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Company Sevices
        </span>
        <span
          className={this.state.viewExpired ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Donation
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewExpired } = this.state;
    const newItems = this.state.SurploList.filter(
      (item) => item.expired == viewExpired
    );

    return newItems.map((item) => (
      <div
        key={item.id}
        className="list-group-item d-flex flex-column justify-content-center" 
        style={{ height: "200px" }}
      >
        <span
          className={`surplo-title mr-2 ${
            this.state.viewExpired ? "completed-todo" : ""
          }`}
          title={item.description}
          style={{fontSize: "22px", paddingBottom: "20px"}}
        >
          {item.title}
        </span>
        <span
          className={`surplo-title mr-2 ${
            this.state.viewExpired ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.description}
        </span>
        <span
          className={`surplo-title mr-2 ${
            this.state.viewExpired ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          Quantity : {item.quantity}
        </span>
        <span
          className={`surplo-title mr-2 ${
            this.state.viewExpired ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          Price : ₹{item.price}
        </span>
      </div>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-black text-center my-4">Surplo</h1>
        <div className="row">
          <div className="mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: '#9d7662', border: 'none' }}
                  onClick={this.createItem}
                >
                  Add Item
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
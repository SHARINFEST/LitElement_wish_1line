// my-wish-list.js
import { LitElement, html, css } from 'lit';

class MyWishList extends LitElement {
  static styles = css`
:host {
  display: block;
  background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 8px;
  margin: 20px auto; 
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 16px auto; 
      padding: 16px;
      
  border-radius: 8px;
  max-width: 400px;
}





    h2 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      margin-bottom: 16px;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      padding: 8px 0;
    }

    li button {
      cursor: pointer;
      border: none;
      background: transparent;
      font-size: 1rem;
      margin-left: 8px;
      color: #007bff;
    }

    li button.delete {
      color: #dc3545;
    }
  `;

  static properties = {
    wishes: { type: Array },
    newWish: { type: String },
  };

  constructor() {
    super();
    this.wishes = [];
    this.newWish = '';
  }

  render() {
    return html`
      <h2>My Wish List : Alfredo Fuentes</h2>
      <input
        type="text"
        placeholder="Add a new wish"
        .value="${this.newWish}"
        @input="${this.handleInput}"
        @keypress="${this.handleKeyPress}"
      />
      <ul>
        ${this.wishes.map(
          (wish, index) => html`
            <li>
              <span>${wish}</span>
              <button @click="${() => this.markAsDone(index)}">&#10003;</button>
              <button class="delete" @click="${() => this.deleteWish(index)}">&#10008;</button>
            </li>
          `
        )}
      </ul>
    `;
  }

  handleInput(e) {
    this.newWish = e.target.value;
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addWish();
    }
  }

  addWish() {
    if (this.newWish.trim() !== '') {
      this.wishes = [...this.wishes, this.newWish.trim()];
      this.newWish = '';
    }
  }

  markAsDone(index) {
    console.log(`Wish "${this.wishes[index]}" marked as done!`);
  }

  deleteWish(index) {
    this.wishes = this.wishes.filter((_, i) => i !== index);
  }
}

customElements.define('my-wish-list', MyWishList);

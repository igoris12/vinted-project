import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoIosInformationCircle } from 'react-icons/io';

function SelectedProductContent({ user, product, brand }) {
  console.log(user);
  return (
    <div className="product">
      <div className="product-container">
        <div className="product-gallery">Content</div>

        <aside className="product-info">
          <div className="column-1">
            <span className="product-price">
              {Math.round(product.price) + ',00 €'}
            </span>
            <div className="brand">
              <p className="title">PREKĖS ŽENKLAS</p>
              <a className="value" href="#">
                {brand.title}
              </a>
              <span className="icon">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="size">
              <p className="title">DYDIS</p>
              <p className="value">
                {product.size &&
                  product.size.map((size, index) => {
                    if (index < product.size.length - 1) {
                      return size + ' / ';
                    } else {
                      return size;
                    }
                  })}
              </p>
              <span className="icon">
                <IoIosInformationCircle />
              </span>
            </div>
            <div className="login-time">
              <p className="title">ĮKELTA</p>
              <p className="value">
                {'PRIEŠ ' + Math.round(Math.random() * 59) + ' MINUTES'}
              </p>
            </div>
          </div>

          <div className="column-2">
            <div className="product-description">
              <span className="title">{product.title}</span>
              <p>{product.desc}</p>
              <div className="but-container">
                <button type="button">Teirautis pardavėjo</button>
                <button type="button">Pažymėti</button>
              </div>
            </div>
          </div>

          <div className="column-3">
            <div className="user-info">
              <label>
                <div className="user-img">
                  <img src={user.avatar} />
                </div>
                <p className="user-name">{user.name}</p>
              </label>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SelectedProductContent;

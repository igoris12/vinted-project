import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoIosInformationCircle } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import defaultImg from '../img/noAvatar.png';

function SelectedProductContent({ user, product, brand, gallery }) {
  const rating = () => {
    let rating = Math.round(Math.random() * 5);
    if (rating < 3) {
      rating = 3;
    }
    const content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<FaStar />);
    }
    return content;
  };
  console.log(gallery);

  return (
    <div className="product">
      <div className="product-container">
        <div className={'product-gallery ' + gallery}>
          {product.img &&
            product.img.map((img, index) => {
              if (index <= 3) {
                return (
                  <img className={'img-' + (1 + index)} src={img} alt="" />
                );
              }
            })}
        </div>

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
                <button className="but but-primary" type="button">
                  Teirautis pardavėjo
                </button>
                <button className="but but-secondery" type="button">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M11.73 1C9.58 1 8 2.74 8 2.74S6.42 1 4.27 1c-.7 0-1.48.2-2.28.7-2.92 1.88-2.47 5.86.34 8.5A83.4 83.4 0 0 0 8 15s3.04-2.32 5.67-4.8c2.81-2.64 3.26-6.62.34-8.5-.8-.5-1.57-.7-2.28-.7m0 1.5c.5 0 .98.15 1.47.47.77.5 1.2 1.2 1.29 2.07.12 1.33-.59 2.88-1.85 4.07A79.25 79.25 0 0 1 8 13.1a79.1 79.1 0 0 1-4.64-3.98C2.1 7.93 1.39 6.37 1.51 5.05c.09-.89.52-1.59 1.3-2.08.48-.32.96-.47 1.46-.47 1.44 0 2.62 1.25 2.62 1.25L8 4.97l1.1-1.22c.02-.01 1.21-1.25 2.63-1.25"></path>
                  </svg>
                  Pažymėti
                </button>
              </div>
            </div>
          </div>

          <a className="column-3">
            <div className="user-info">
              <div className="user-img" id="avatar">
                <img src={user.avatar ? user.avatar : defaultImg} />
              </div>
              <lable for="avatar" className="user-name">
                {user.name}
                <ul className="rating">
                  {rating(FaStar).map((icon) => {
                    return icon;
                  })}
                  <p>{Math.round(Math.random() * 1000)}</p>
                </ul>
              </lable>
            </div>
          </a>
        </aside>
      </div>
    </div>
  );
}

export default SelectedProductContent;

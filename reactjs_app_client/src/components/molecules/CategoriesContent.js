import React, {Component} from 'react';
import './styles.css';

const data = [
  {
    id: 1,
    urlImg: 'https://vn-test-11.slatic.net/p/c2adaf1838d3c99409b225c52733935a.jpg_120x120q80.jpg_.webp',
    title: 'Hồ tiêu',
  },
  {
    id: 2,
    urlImg: 'https://vn-test-11.slatic.net/p/c2adaf1838d3c99409b225c52733935a.jpg_120x120q80.jpg_.webp',
    title: 'Hồ tiêu',
  },
  {
    id: 3,
    urlImg: 'https://vn-test-11.slatic.net/p/c2adaf1838d3c99409b225c52733935a.jpg_120x120q80.jpg_.webp',
    title: 'Hồ tiêu',
  },
];

export default class extends Component {
  render () {
    return (
      <div className="CategoriesContent">
        {data.map ((item, index) => {
          return (
            <div className="CategoriesContentItem">
              <div>
                <img
                  src={item.urlImg}
                  alt=""
                />
              </div>
              <span numberoflines="2">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

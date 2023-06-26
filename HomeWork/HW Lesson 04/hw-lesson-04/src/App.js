import './App.css';
import ProductManagement from "./components/ProductManagement/ProductManagement";

function App() {
  return (
    <div>
      <div className='header'>
        <div className='info-bar'>
          <div className='container'>
            <ul>
              <li className='nav-link'>About Us</li>
              <li className='nav-link'>Contacts</li>
              <li className='nav-link'>Store</li>
              <li className='nav-link'>Track orders</li>
            </ul>
          </div>
        </div>
        <div className='nav'>
          <div className='nav-con container'>
            <div className='shop-name'>SHOP APP</div>
            <div className='search-bar'>
              <div className='search-cate'>
                <i class="fa fa-list" aria-hidden="true"></i>
                Categories
              </div>
              <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-primary">Search</button>
              </div>
            </div>
            <div className='btn-cart nav-btn'><i className="fa fa-shopping-cart"></i></div>
            <div className='btn-user nav-btn'><i className="fa-regular fa-user"></i></div>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='categories col-3'>
              <div className='cate-title'>
                <i class="fa fa-list" aria-hidden="true"></i>
                Categories
              </div>
              <ul>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
                <li className='cate-item'>Computer
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
            <div className='ads col-9 row'>
              <div className='col-12'>
                <img src='./ads-pic.png'></img>
              </div>
              <div className='col-4'>
                <img src='./ads-pic.png'></img>
              </div>
              <div className='col-4'>
                <img src='./ads-pic.png'></img>
              </div>
              <div className='col-4'>
                <img src='./ads-pic.png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='dilivery'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <h3>Free Shopping</h3>
              <p>For orders form 50%</p>
            </div>
            <div className='col-3'>
              <h3>Free Shopping</h3>
              <p>For orders form 50%</p>
            </div>
            <div className='col-3'>
              <h3>Free Shopping</h3>
              <p>For orders form 50%</p>
            </div>
            <div className='col-3'>
              <h3>Free Shopping</h3>
              <p>For orders form 50%</p>
            </div>
          </div>
        </div>
      </div>
      <div className='products'>
        <div className='container'>
            <h3>
              Best Seller
            </h3>
            <button>Show more</button>
            <ProductManagement />
        </div>
      </div>
    </div>
  );
}

export default App;

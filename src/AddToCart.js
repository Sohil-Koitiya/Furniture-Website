import { useParams } from "react-router-dom";
import { products } from "./Product";

function AddToCart() {
  const { id } = useParams();

  // console.log(id);

  // console.log(products);

  const individualProduct = products.find((val) => {
    return val.id == id;
  });
  //  console.log(individualProduct.id);

  return (
    <div>
      
      <div className="container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-xl">
              <div className="ibox">
                <div className="ibox-title my-3">
                  <span className="pull-right">
                    (<strong>5</strong>) items
                  </span>
                  <h3>Items in your cart</h3>
                </div>
                <hr/>

                {products.map( (val) => (
                  
                

                <div className="ibox-content">
                  <div className="table-responsive">
                    <table className="table shoping-cart-table border">
                      <tbody>
                        <tr>
                          <td width="90">
                            <div className="cart-product-imitation"></div>
                          </td>
                          <td className="w-25">
                          <img src={`/Images/${val.url}`}></img>
                          </td>
                          <td className="desc w-50">
                            <h3>
                              <a href="#" className="text-navy">
                                {val.title}
                              </a>
                            </h3>
                            <p className="small">
                              {val.details}
                            </p>
                            <dl className="small m-b-none">
                              <dt>{val.title}</dt>
                              <dd>
                                {val.details}
                              </dd>
                            </dl>

                            <div className="m-t-sm">
                              <a href="#" className="text-muted">
                                <i className="fa fa-gift"></i> Add gift package
                              </a>
                              |
                              <a href="#" className="text-muted">
                                <i className="fa fa-trash"></i> Remove item
                              </a>
                            </div>
                          </td>

                          <td className="d-flex gap-5 w-25 mt-5">
                            <div>{val.discountPrice}</div>
                            <s className="small text-muted">{val.price} </s>
                          </td>
                          <td width="65">
                            <input
                              type="text"
                              className="form-control mt-5"
                              placeholder="1"
                            />
                          </td>
                          <td>
                            <h4 className="mt-5">{val.discountPrice} </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                ) )}

                
                <div className="ibox-content">
                  <button className="btn btn-primary pull-right">
                    <i className="fa fa fa-shopping-cart"></i> Checkout
                  </button>
                  <button className="btn btn-white">
                    <i className="fa fa-arrow-left"></i> Continue shopping
                  </button>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default AddToCart;

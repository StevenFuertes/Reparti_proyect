import { CardUser } from "../../components";
import index from "../../assets/index";

function Home() {

  return (
    <div className="container my-5">
      <div className="row">

        <CardUser/> 
        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
          <img
            className="img-fluid rounded mx-auto d-block"
            src={index.repartidor_dor}
            width="800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

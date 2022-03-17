import React from "react";
import Persons from "./Persons";

const Details = () => {

  
  const [prevDates, setPrevDates] = React.useState([]);
  const [nextDates, setNextDates] = React.useState([]);

  



  function formatDate(date){

    let dd = date.getDate();
    // var mm = date.getMonth()+1;
    // var yyyy = date.getFullYear();
    // if(dd<10) {dd='0'+dd}
    // if(mm<10) {mm='0'+mm}
    // date = mm+'/'+dd+'/'+yyyy;
    return dd;
 }

  const last9Days = () => {
    let  result = [];
    for (let i=0; i<10; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        result.unshift( formatDate(d) )
    }

    return result;

    
}

const next7Days = () => {
  var result = [];
  for (var i=0; i<8; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      result.push( formatDate(d) )
  }

  return result;
  
}

// eslint-disable-next-line

  React.useEffect(() => {
    // eslint-disable-next-line
    setPrevDates(last9Days());
    // eslint-disable-next-line
    setNextDates(next7Days());
    
    
  }, [])

  return (
    <div className="container details-container">
      <div className="main-menu">
        <p>
          Projects{" "}
          <span className="text-muted">
            {" "}
            <small>&gt;</small> GSE Banking App
          </span>
        </p>

        <div className="menu-icons">
          <p className="menu-icons-p">
            <span>
              <i class="bi bi-chat-left-text-fill"></i>
            </span>
            <span>
              <i class="bi bi-bell-fill"></i>
            </span>
            <span> |</span>
            <span>RonasIT</span>
            <span>
              <i class="bi bi-chevron-down"></i>
            </span>
          </p>
        </div>
      </div>

      <div className="second-row">
        <div>
          <h6>GSE Banking App</h6>

          <div className="second-row-div">
            <div className="text-muted">56%</div>
            <div class="progress" style={{ height: "5px", width: "100px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "56px" }}
                aria-valuenow="56"
              ></div>
            </div>
          </div>
        </div>

        <div className="second-row-second">
          <div>
            <a href="#">
              <i class="bi bi-plus"></i> Invite
            </a>
          </div>
          <div>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers1"></i>
            </span>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers2"></i>
            </span>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers3"></i>
            </span>
            <span className="second-row-second-p">
              <i class="bi bi-person-circle pers4"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="third-row-menu">
        <div>
          <h5>
            February 2021{" "}
            <span>
              <i class="bi bi-chevron-left"></i>
            </span>
            <span>
              <i class="bi bi-chevron-right"></i>
            </span>
          </h5>
        </div>

        <div className="second-div">
          <div>
            <i class="bi bi-search"></i>
          </div>
          <div>
            <select>
              <option value="">Month</option>
            </select>
          </div>
        </div>
      </div>

      <div className="fourth-row">
      <p>
          T<span>{prevDates[0]}</span>
        </p>
        <p>
          F<span>{prevDates[1]}</span>
        </p>
        <p>
          S<span>{prevDates[2]}</span>
        </p>
        <p>
          S<span>{prevDates[3]}</span>
        </p>
        <p>
          M<span>{prevDates[4]}</span>
        </p>
        <p>
          T<span>{prevDates[5]}</span>
        </p>
        <p>
          W<span>{prevDates[6]}</span>
        </p>
        <p>
          T<span>{prevDates[7]}</span>
        </p>
        <p>
          F<span>{prevDates[8]}</span>
        </p>
        <p className="s20">
          S<span>{nextDates[0]}</span>
          <span className="dot"></span>
          <span className="line"></span>
        </p>
        <p>
          S<span>{nextDates[1]}</span>
        </p>
        <p>
          M<span>{nextDates[2]}</span>
        </p>
        <p>
          T<span>{nextDates[3]}</span>
        </p>
        <p>
          W<span>{nextDates[4]}</span>
        </p>
        <p>
          T<span>{nextDates[5]}</span>
        </p>
        <p>
          F<span>{nextDates[6]}</span>
        </p>
        <p>
          S<span>{nextDates[7]}</span>
        </p>
      </div>

      <Persons />
    </div>
  );
};

export default Details;

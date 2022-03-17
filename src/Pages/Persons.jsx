import React from "react";

const Persons = () => {
  return (
    <div className="persons-container">
      <div className="row">
        <div className="col-md-4">
          <div className="person">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Finna A.{" "}
              <span className=" text-muted avatar-span">UX Designer</span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row1-span1">
              <i class="bi bi-record-circle"></i> Flow Swift Transfer
            </div>
            <div id="row1-span2">
              <span>68%</span>
            </div>
          </div>
        </div>
      </div>

      {/* End of row 1 */}

      <div className="row">
        <div className="col-md-4 second-name">
          <div className="person ">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Emma F.{" "}
              <span className=" text-muted avatar-span">UI Designer</span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row2-span1">
              <span>St a d nard</span>
              <span>100%</span>
            </div>
            {/* <div id="row2-span2"><span>68%</span></div> */}
          </div>
        </div>
      </div>

      {/* End of row 2 */}

      <div className="row">
        <div className="col-md-4">
          <div className="person">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Alex B.{" "}
              <span className=" text-muted avatar-span">UX Analyst</span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row3-span1">
              <i class="bi bi-record-circle"></i> User Profile
            </div>
            <div id="row3-span2">
              <span>68%</span>
            </div>
          </div>
        </div>
      </div>

      {/* End of row 3 */}

      <div className="row">
        <div className="col-md-4">
          <div className="person">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Cody D.{" "}
              <span className=" text-muted avatar-span">UX Analyst</span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row4-span1">
              <i class="bi bi-record-circle"></i> Transfers by phone
            </div>
            <div id="row4-span2">
              <span>68%</span>
            </div>
          </div>
        </div>
      </div>
      {/* End of row 4 */}

      <div className="row">
        <div className="col-md-4">
          <div className="person">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Semantha G.{" "}
              <span className=" text-muted avatar-span">
                Senior UI/UX Designer
              </span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row5-span1">
              <i class="bi bi-record-circle"></i> Chatbot
            </div>
            <div id="row5-span2">
              <span>77%</span>
            </div>
          </div>
        </div>
      </div>

      {/* End of row 5 */}
      <div className="row">
        <div className="col-md-4">
          <div className="person">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Erik F.{" "}
              <span className=" text-muted avatar-span">UX Designer</span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row6-span1">
              <i class="bi bi-record-circle"></i> Transaction Analytics
            </div>
            <div id="row6-span2">
              <span>42%</span>
            </div>
          </div>
        </div>
      </div>
      {/* End of row 6 */}
      <div className="row">
        <div className="col-md-4">
          <div className="person">
            <p>
              {" "}
              <i class="bi bi-person-circle"></i>
            </p>
            <p>
              Anna S.{" "}
              <span className=" text-muted avatar-span">UI Designer</span>
            </p>
            <p>
              <i class="bi bi-three-dots-vertical"></i>
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="main-activity">
            <div id="row7-span1">
              <i class="bi bi-record-circle"></i> Settings
            </div>
            <div id="row7-span2">
              <span>41%</span>
            </div>
          </div>
        </div>
      </div>

      {/* End of row 7 */}
    </div>
  );
};

export default Persons;

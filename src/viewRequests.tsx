import React, { Fragment, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { TiTick } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { Unlock_request, withdraw, view_Requests } from "./features";
import "./viewRequests.css";
type TReqAarrProps = {
  title: String,
  amount: Number,
  locked: Boolean,
  paid: Boolean
}

type ReqArrProps = {
  requestArray: TReqAarrProps[];
}

const ViewRequests = ({ requestArray }: ReqArrProps) => {
  useEffect(() => {
    view_Requests()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <Fragment>
      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <th>Requests</th>
              <th>Title</th>
              <th>Amount(Eth)</th>
              <th>locked</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {requestArray.map((req: TReqAarrProps, index: number) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{req.title}</td>
                  <td> {Number(req.amount)}</td>
                  <td>{req.locked ? <TiTick /> : <GrFormClose />}</td>
                  <td> {req.paid ? <TiTick /> : <GrFormClose />}</td>
                  <td>
                    <Button
                      onClick={() => {
                        Unlock_request(index);
                      }}
                      className={!req.locked ? "active" : ""}
                    >
                      Unlock
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={withdraw}
                      className={!req.locked ? "active" : ""}
                    >
                      Pay
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default ViewRequests;

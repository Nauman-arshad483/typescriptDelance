import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { TiTick } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { pay_request } from "./features";
import "./viewRequests.css";
type reqAarrProps = {
  title: String,
  amount: Number,
  locked: Boolean,
  paid: Boolean
}

type reqArrProps = {
  requestArray: reqAarrProps[]
}
const ViewRequests = (requestArray: reqArrProps) => {
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
            {requestArray.requestArray.map((req: reqAarrProps, index: number) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{req.title}</td>
                  <td> {Number(req.amount)}</td>
                  <td>{req.locked ? <TiTick /> : <GrFormClose />}</td>
                  <td> {req.paid ? <TiTick /> : <GrFormClose />}</td>
                  <td>
                    <Button
                      onClick={() => pay_request(index)}
                      className={!req.locked ? "active" : ""}
                    >
                      withdraw
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

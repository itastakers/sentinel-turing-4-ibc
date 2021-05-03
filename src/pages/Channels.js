import { Table, Alert, Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import Meta from "../components/Meta";

import channels from "../channels";

const Channel = () => {
  // page content
  const pageTitle = "IBC Channels";
  const pageDescription = "List of IBC channels to use on testnet";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "1em",
        }}
      >
        <Col lg="6">
          <Alert key="1" variant={"danger"} className="text-center">
            🚨 WARNING! This is a testnet. <b>DO NOT USE REAL TOKENS</b> 🚨
          </Alert>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Col lg="8">
          <Table>
            <thead>
              <tr>
                <th>Channel ID</th>
                <th>Chain From</th>
                <th>Chain To</th>
                <th>Operated by</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel, index) => {
                return (
                  <tr key={index}>
                    <td>{channel.channel_id}</td>
                    <td>{channel.chain_from}</td>
                    <td>{channel.chain_to}</td>
                    <td>{channel.operator ?? ""}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Channel;

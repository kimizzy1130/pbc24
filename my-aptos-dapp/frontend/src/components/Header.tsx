import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Layout, Row, Col, Image } from "antd";
import logo from "../assets/logo.jpeg";

export default function Header() {
  return (
    <Layout>
      <Row align="middle" style={{backgroundColor: "#ffffff"}}>
        <Col >
        <Image src={logo} alt="Logo" style={{maxWidth: "300px"}}/>        
        </Col>
        <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
          <WalletSelector />
        </Col>
      </Row>
    </Layout>
  );
}

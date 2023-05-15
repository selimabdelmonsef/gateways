import { useState } from "react";
import GatewaysDialog from "../../../components/core/GatewaysDialog/GatewaysDialog";
import styled from "styled-components";

const StyledGatewaysForm = styled.div({
  margin: "0 50px",
  display: "flex",
  flexWrap: "wrap",
});

const StyledGatewaysInputs = styled.div({
  margin: "10px 10px",
});
export default function AddEditGateways({
  openDialog,
  onClose,
  rowIndex,
  gatewaysData,
  addedDeviceData,
}) {
  const [deviceData, setDeviceData] = useState({
    dateCreated: "",
    status: "",
    uid: "",
    vendor: "",
    name: "",
  });

  const addNewDevice = () => {
    deviceData.dateCreated = String(Date.now());
    deviceData.uid = String(Date.now());
    gatewaysData[rowIndex].devices.push(deviceData);
    addedDeviceData(gatewaysData);
  };

  return (
    <GatewaysDialog
      children={
        <StyledGatewaysForm>
          <StyledGatewaysInputs>
            <div>UID</div>
            <input defaultValue={Date.now()} readOnly disabled={true}></input>
          </StyledGatewaysInputs>

          <StyledGatewaysInputs>
            <div>Device Name</div>
            <input
              onChange={(e) =>
                setDeviceData({ ...deviceData, name: e.target.value })
              }
              placeholder="ex: 10"
            ></input>
          </StyledGatewaysInputs>

          <StyledGatewaysInputs>
            <div>Vendor</div>
            <input
              onChange={(e) =>
                setDeviceData({ ...deviceData, vendor: e.target.value })
              }
              placeholder="ex: Vendor Z"
            ></input>
          </StyledGatewaysInputs>

          <StyledGatewaysInputs>
            <div>Status</div>
            <input
              onChange={(e) =>
                setDeviceData({ ...deviceData, statues: e.target.value })
              }
              placeholder="ex: Online"
            ></input>
          </StyledGatewaysInputs>
        </StyledGatewaysForm>
      }
      title={"Add Device"}
      openDialog={openDialog}
      onClose={() => onClose(false)}
      submit={(e) => addNewDevice()}
    />
  );
}

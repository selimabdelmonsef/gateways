import { useEffect, useState } from "react";
import GatewaysTable from "../components/core/GatewaysTable/GatewaysTable";
import { GATEWAYS } from "../constants/gateways.constants";
import styled from "styled-components";

const StyledDevices = styled.div({
  display: "flex",
  justifyContent: "center",
});
const StyledRemoveButton = styled.div({
  color: "red",
  fontSize: "10px",
  alignSelf: "center",
  marginLeft: "10px",
  cursor: "pointer",
});
const StyledAddDeviceButton = styled.button({
  border: "1px solid lightgrey",
  borderRadius: "12px",
  background: "lightgreen",
});

export default function GatewaysPage() {
  const [rows, setRows] = useState([]);
  const [getways, setGetways] = useState(GATEWAYS);

  const columns = [
    { id: "serialNumber", label: "Serial Number", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "ipAddress",
      label: "IP Address",
      minWidth: 170,
    },
    {
      id: "devices",
      label: "Devices",
      minWidth: 170,
    },
  ];

  const removeDevice = (selectedDevice) => {
    const updatedGateways = getways.map((gateway) => {
      if (gateway.devices.some((d) => d.uid === selectedDevice.uid)) {
        const updatedDevices = gateway.devices.filter(
          (d) => d.uid !== selectedDevice.uid
        );
        return {
          ...gateway,
          devices: updatedDevices,
        };
      } else {
        return gateway;
      }
    });
    setGetways(updatedGateways);
  };

  useEffect(() => {
    setRows(
      getways.map((gateway, index) => {
        return {
          serialNumber: gateway.serialNumber,
          name: String(gateway.name),
          ipAddress: gateway.ipv4Address,
          devices:
            gateway?.devices.length > 0 ? (
              gateway?.devices?.map((device, index) => {
                return (
                  <StyledDevices key={device?.uid}>
                    <div>{device?.uid}</div>
                    <StyledRemoveButton onClick={() => removeDevice(device)}>
                      &#x2715;
                    </StyledRemoveButton>
                  </StyledDevices>
                );
              })
            ) : (
              <div>No Devices</div>
            ),
        };
      })
    );
  }, [getways]);

  return (
    <div>
      <GatewaysTable
        rows={rows}
        columns={columns}
        actionButtons={[
          <StyledAddDeviceButton>Add Device</StyledAddDeviceButton>,
        ]}
      ></GatewaysTable>
    </div>
  );
}

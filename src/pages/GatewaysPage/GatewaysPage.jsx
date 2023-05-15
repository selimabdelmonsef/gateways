import { useEffect, useState } from "react";
import GatewaysTable from "../../components/core/GatewaysTable/GatewaysTable";
import { GATEWAYS } from "../../constants/gateways.constants";
import styled from "styled-components";
import AddEditGateways from "./AddEditGateways/AddEditGateways";

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
  const [gateways, setGateways] = useState(GATEWAYS);
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewDeviceIndex, setAddNewDeviceIndex] = useState();

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
    {
      id: "actionButtons",
      label: "",
    },
  ];

  const removeDevice = (selectedDevice) => {
    const updatedGateways = gateways.map((gateway) => {
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
    setGateways(updatedGateways);
  };

  const onAddNewDevice = (rowIndex) => {
    setAddNewDeviceIndex(rowIndex);
    setOpenDialog(true);
  };

  useEffect(() => {
    setRows(
      gateways.map((gateway, index) => {
        return {
          serialNumber: gateway.serialNumber,
          name: String(gateway.name),
          ipAddress: gateway.ipv4Address,

          devices:
            gateway?.devices.length > 0 ? (
              gateway?.devices?.map((device, index) => {
                return (
                  <StyledDevices key={index}>
                    <div>{device?.name}</div>
                    <StyledRemoveButton onClick={() => removeDevice(device)}>
                      &#x2715;
                    </StyledRemoveButton>
                  </StyledDevices>
                );
              })
            ) : (
              <div>No Devices</div>
            ),
          actionButtons: [
            <StyledAddDeviceButton
              key={index}
              onClick={() => onAddNewDevice(index)}
            >
              Add Device
            </StyledAddDeviceButton>,
          ],
        };
      })
    );
  }, [gateways, openDialog]);

  return (
    <div>
      <GatewaysTable rows={rows} columns={columns}></GatewaysTable>

      <AddEditGateways
        rowIndex={addNewDeviceIndex}
        gatewaysData={gateways}
        addedDeviceData={(data) => setGateways(data)}
        openDialog={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </div>
  );
}

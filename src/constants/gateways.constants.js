export const GATEWAYS = [
  {
    serialNumber: "ABC123",
    name: "Gateway 1",
    ipv4Address: "192.168.0.1",
    devices: [
      {
        uid: "1",
        vendor: "Vendor A",
        dateCreated: "2022-05-12T14:30:00.000Z",
        status: "online",
      },
      {
        uid: " 2",
        vendor: "Vendor B",
        dateCreated: "2022-05-12T15:00:00.000Z",
        status: "offline",
      },
    ],
  },
  {
    serialNumber: "DEF456",
    name: "Gateway 2",
    ipv4Address: "192.168.0.2",
    devices: [
      {
        uid: "3",
        vendor: "Vendor C",
        dateCreated: "2022-05-12T16:00:00.000Z",
        status: "online",
      },
      {
        uid: "4",
        vendor: "Vendor D",
        dateCreated: "2022-05-12T17:00:00.000Z",
        status: "offline",
      },
      {
        uid: " 5",
        vendor: "Vendor E",
        dateCreated: "1000030",
        status: "offline",
      },
    ],
  },
];

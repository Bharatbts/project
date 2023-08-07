const lawyersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    experince: "5 year",
    specialization: "Criminal Defense Lawyer",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    experince: "7 year",
    specialization: "Family Lawyer",
    image:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "Chace Mora",
    email: "chace@example.com",
    phone: "987-654-3210",
    specialization: "Family Lawyer",
    experince: "3 year",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    name: "Devan Ochoa",
    email: "devan@example.com",
    phone: "987-654-3210",
    specialization: "Family Lawyer",
    experince: "6 year",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    name: "Walker Shelton",
    email: "walker@example.com",
    phone: "987-654-3210",
    specialization: "Business Lawyer",
    experince: "5 year",
    image:
      "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 6,
    name: "Kael Ellison",
    email: "kael@example.com",
    phone: "987-654-3210",
    experince: "2 year",
    specialization: "Entertainment Lawyer",
    image:
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80",
  },
  {
    id: 7,
    name: "Julissa",
    email: "julissa@example.com",
    phone: "987-654-3210",
    experince: "6 year",
    specialization: "Intellectual Property (IP) Lawyer",
    image:
      "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 8,
    name: "Emerson Bell",
    email: "emerson@example.com",
    phone: "987-654-3210",
    experince: "6 year",
    specialization: "Estate Planning Lawyer",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80",
  },
  {
    id: 9,
    name: "Carissa",
    email: "carissa@example.com",
    phone: "987-654-3210",
    experince: "6 year",
    specialization: "Estate Planning Lawyer",
    image:
      "https://images.unsplash.com/photo-1530423470967-45b90dca3a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 10,
    name: "Arianna",
    email: "arianna@example.com",
    phone: "987-654-3210",
    experince: "6 year",
    specialization: "Tax Lawyer",
    image:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 11,
    name: "Hillary",
    email: "hillary@example.com",
    phone: "987-654-3210",
    experince: "6 year",
    specialization: "Business Lawyer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 12,
    name: "Alden Velez",
    email: "alden@example.com",
    phone: "987-654-3210",
    experince: "6 year",
    specialization: "Business Lawyer",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];

export default lawyersData;

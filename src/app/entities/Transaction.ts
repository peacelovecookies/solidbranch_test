export interface Transaction {
  _id: string;
  amount: string;
  type: string;
  name: Name;
  company: string;
  email: string;
  phone: string;
  address: string;
}

interface Name {
  first: string;
  last: string;
}

interface ICompany {
  name: string;
  debts: number;
  departments: Department;
  management: {
    owner: string
  }
}

interface Department {
  [key: string]: string;
}

type CompanyDebtsType = ICompany['debts'];
type CompanyOwnerType = ICompany['management']['owner'];
type CompanyDepartmentsType = ICompany['departments'];

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = 'name'

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
  name: 'HH',
  debts: 50000,
}

printDebts(hh, 'name','debts');

const google = {
  name: 'Google',
  open: true,

  departments:{
    sales: 'sales',
  },
  management:{
    owner: "John"
  }
}

printDebts(google, 'name','open')
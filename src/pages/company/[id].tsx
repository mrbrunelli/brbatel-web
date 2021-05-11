import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";

type Props = {
  id: string;
}

type Company = {
  name: string;
  cnpj: string;
  demand: number;
  about: string;
  created_at: string;
  annual_billing: {
    id: string;
    description: string;
  }
}

const Company = ({ id }: Props) => {
  const [company, setCompany] = useState<Company>({} as Company);

  const findById = async () => {
    try {
      const response = await api.get<Company>(`/companies/${id}`);
      setCompany(response.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    findById();
  }, [])

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.about}</p>
      <p>{company.demand}</p>
    </div>
  )
}

export default Company;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  return {
    props: { id }
  }
}

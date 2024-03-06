import Header from "@/components/shared/Header";
import TransformatonForm from "@/components/shared/TransformatonForm";
import { transformationTypes } from "@/constants";
import React from "react";
const AddTransformationPage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformatonForm />
    </>
  );
};

export default AddTransformationPage;

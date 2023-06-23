/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import useFetch from "./custom-hooks/useFetch";
import CommissionForm from "./forms/CommissionForm";
import { useNavigate, useOutletContext } from 'react-router-dom';

interface Artist {
  _id: string;
}

interface CommissionData {
  name: string;
  artist: string;
  title: string;
  description: string;
  price: number;
  due_date: string;
}

export default function NewCommission() {
  const { post } = useFetch();
  const navigate = useNavigate();
  const outletContext = useOutletContext()
  const artist = (outletContext as { artist: any }).artist

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const { value: name } = (e.currentTarget.elements.namedItem('name') as HTMLInputElement);
      const { value: title } = (e.currentTarget.elements.namedItem('title') as HTMLInputElement);
      const { value: description } = (e.currentTarget.elements.namedItem('description') as HTMLInputElement);
      const { value: price } = (e.currentTarget.elements.namedItem('price') as HTMLInputElement);
      const { value: due_date } = (e.currentTarget.elements.namedItem('due_date') as HTMLInputElement);
  
    await post('/commissions',{
      name,
      artist: artist._id,
      title,
      description,
      price,
      due_date
    });

    navigate(0);
  };

  return <CommissionForm legend='Request A Commission' onSubmit={handleSubmit} />;
}}
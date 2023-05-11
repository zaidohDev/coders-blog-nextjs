import { GetServerSideProps } from "next";
import { fetchCategories } from "@/http";
import { AxiosResponse } from 'axios';
import { ICategory, ICollectionResponse } from "@/types";


export default function Fetch() {

  const getServerSideProps: GetServerSideProps = async () => {
    const { data: categories }
      : AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();

    console.log('categories', categories);
    return {
      props: {
        categories: {
          items: categories.data,
        }
      }
    }
  }
  return (
    <h1>Category</h1>
  )
}


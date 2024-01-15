import { StyleSheet } from "react-native";
import React from "react";
import Container from "@containers/Container";
import Header from "@components/custom/Header";
import { useQuery } from "react-query";
import useFetchData from "@hooks/useFetchData";
import { endpoint } from "@utils/config/endpoint";
import ContentSkeleton from "@components/skeleton/ContentSkeleton";
import Content from "@components/custom/Content";
import Footer from "@components/custom/Footer";
import FooterSkeleton from "@components/skeleton/FooterSkeleton";

const Home = () => {
  const { fetchFunction } = useFetchData();

  const { data, isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: () => fetchFunction(endpoint),
  });

  return (
    <Container>
      <Header />
      {isLoading ? (
        <ContentSkeleton />
      ) : (
        <Content
          city={data.name}
          weather={data.weather[0]}
          temp={data.main.temp}
        />
      )}
      {isLoading ? <FooterSkeleton /> : <Footer data={data} />}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});

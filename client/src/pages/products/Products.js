import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

export default function Products() {
  const state = useSelector(state => state.products);
  console.log(state);
  return (
    <>
      <PageTitle title="Product List" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

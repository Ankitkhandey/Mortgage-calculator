import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";
import { useState } from "react";


function App() {

  const [data,setData]= useState(  {
    homeValue : 3000,
    downPayment  : 1500 ,
    loanAmount : 500,
    loanTerm : 5
  });

  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="lg" sx={{margin:5}}>
        <Grid container spacing={6}>

          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect/>
          </Grid>

          <Grid item md={6}>
            <Result/>
          </Grid>


        </Grid>
      </Container>
    </div>
  );
}

export default App;

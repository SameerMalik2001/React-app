import React from "react";
import { Route, Routes} from 'react-router-dom';
import Series from "../../container/Series";
import SingleSeries from "../../container/SingleSeries";


const Main = (props) => (
    <Routes>
        <Route exact path="/" element={<Series/>} />
        <Route path="series/:id" element={<SingleSeries/>} />
    </Routes>
);

export default Main;
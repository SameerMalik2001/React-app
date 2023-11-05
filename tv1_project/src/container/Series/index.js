import React, { Component } from "react";
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/loader';
import Intro from '../../components/Intro';
import './index.css'

class Series extends Component {
    state = {
        series: [],
        seriesName : '',
        isFetching:false
      };

      onSeriesInputChange  = e => {
        this.setState({seriesName:e.target.value, isFetching:true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json()).then(json => this.setState({series : json, isFetching:false}))
      }


    render() {
        const {series, seriesName, isFetching} = this.state
        return (
            <div>
                <Intro message='Here you will found most loved web series'/>
                <div><p>The size of array is - {this.state.series.length}</p></div>
                <div>
                    <input maxLength={40} value={seriesName} type="text" onChange={this.onSeriesInputChange} placeholder="Write TV series name..."/>
                </div>
                {
                    series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the designated box</p>
                }
                {
                    series.length === 0 && seriesName.trim() !== ''
                    && isFetching === false &&
                    <p>No Tv Series has been found with this Search '{seriesName}'</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    isFetching ===  false && <SeriesList list={this.state.series}/>
                }

            </div>
        )
    }
};

export default Series;
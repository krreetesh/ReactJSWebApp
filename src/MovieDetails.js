import React from 'react';
import { AddNewMovie } from './AddNewMovie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class MovieDetails extends React.Component {

    headerStyle = {
        backgroundColor: 'red'
    }

    objMovieDetails = [
        { MovieID: 'MO-01', MovieName: 'Iron Man 2', LeadActor: 'Robert Downey', LeadActress: 'Gwnyeth Paltrow', YearOfRelease: '2010', Language: 'English' },
        { MovieID: 'MO-02', MovieName: 'MI 2', LeadActor: 'Tom Cruise', LeadActress: 'Thandie Newton', YearOfRelease: '2000', Language: 'English' },
        { MovieID: 'MO-03', MovieName: 'Star Wars', LeadActor: 'Harrison Ford', LeadActress: 'Carrie Fisher', YearOfRelease: '2015', Language: 'English' },
        { MovieID: 'MO-04', MovieName: 'Captain Marvel', LeadActor: 'Samuel Jackson', LeadActress: 'Brie Larson', YearOfRelease: '2019', Language: 'English' },
    ];

    state = {
        objMovieDetails: this.objMovieDetails
    }

    handleSearch(text) {
        console.log("search=", text)
        const newData = this.objMovieDetails.filter(function (item) {
            const itemData = item.MovieID
            const textData = text
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            objMovieDetails: newData
        })
    }

    updateMovieList = (movieItem) => {
        var temp = this.state.objMovieDetails
        temp.push(movieItem)
        this.setState({ objMovieDetails: temp })
    }

    handleDelete = (idx) => {
        console.log(idx);
        var temp = this.state.objMovieDetails
        temp.splice(idx, 1)
        this.setState({ objMovieDetails: temp })
    }

    render() {

        return (
            <form>
                <div>
                    <h1>Movie Details Management</h1>
                    <hr />

                    <input
                        placeholder="Search by Movie ID"
                        onChange={event => this.handleSearch(event.target.value)}
                    />
                    <span> </span>
                    <Router>
                        <Link to="/addMovie"><button type="button">Add New Movie</button></Link>
                        <Route path="/addMovie" render={() => <AddNewMovie updateMovieList={this.updateMovieList} />} />
                    </Router>

                    <br />
                    <br />


                    <table border="2">
                        <tbody>
                            <tr>
                                <th style={this.headerStyle}>Movie ID</th>
                                <th style={this.headerStyle}>Movie Name</th>
                                <th style={this.headerStyle}>Lead Actor</th>
                                <th style={this.headerStyle}>Lead Actress</th>
                                <th style={this.headerStyle}>Year Of Release</th>
                                <th style={this.headerStyle}>Language</th>
                            </tr>
                            {this.state.objMovieDetails.map(
                                (movieDetail, iIndex) =>
                                    <tr key={iIndex}>
                                        <td>{movieDetail.MovieID}</td>
                                        <td>{movieDetail.MovieName}</td>
                                        <td>{movieDetail.LeadActor}</td>
                                        <td>{movieDetail.LeadActress}</td>
                                        <td>{movieDetail.YearOfRelease}</td>
                                        <td>{movieDetail.Language}</td>
                                        <td><input type="button" value="Delete"
                                            onClick={() => this.handleDelete(iIndex)} />
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </form>
        );
    }
}

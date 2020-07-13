import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Row,
  Col
} from 'antd';
import Header from '../components/Header/Header';
import AddNewVote from '../components/AddNewVote/AddNewVote';
import VoteList from "../components/VoteList/VoteList";

export default function VoteRouters() {
  return ( 
    <Router>
      <Switch>
      <Route exact path = "/" >
        <Row justify="center">
          <Col xl={18}>
            <Header />
          </Col>
          <Col xl={8}>
            <VoteList />
          </Col>
        </Row>
      </Route>
      <Route path="/AddNewVote">
        <Row justify = "center">
          <Col xl={18}>
            <Header />
          </Col>
          <Col xl={12}>
            <AddNewVote />
          </Col>
        </Row>
      </Route>
      </Switch>
    </Router>
  );
}